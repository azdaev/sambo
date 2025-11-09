import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split(".")[0]);
if (majorVersion < 18) {
  console.error("ОШИБКА: Требуется Node.js версии 18 или выше");
  console.error(`Текущая версия: ${nodeVersion}`);
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serverEnvPath = join(__dirname, ".env");
const rootEnvPath = join(__dirname, "..", ".env");

dotenv.config({ path: serverEnvPath });
dotenv.config({ path: rootEnvPath });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const shopId = process.env.YOOKASSA_SHOP_ID || process.env.VITE_YOOKASSA_SHOP_ID;
const secretKey = process.env.YOOKASSA_SECRET_KEY;

if (!shopId || !secretKey) {
  console.error("ОШИБКА: Не указаны YOOKASSA_SHOP_ID или YOOKASSA_SECRET_KEY в server/.env");
  console.error("Создайте файл server/.env на основе server/.env.example");
  process.exit(1);
}

const YOOKASSA_API_URL = "https://api.yookassa.ru/v3";

const getAuthHeader = () => {
  const credentials = Buffer.from(`${shopId}:${secretKey}`).toString("base64");
  return `Basic ${credentials}`;
};

const createYooKassaPayment = async (paymentData, idempotenceKey) => {
  const response = await fetch(`${YOOKASSA_API_URL}/payments`, {
    method: "POST",
    headers: {
      Authorization: getAuthHeader(),
      "Idempotence-Key": idempotenceKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch (e) {
      error = { description: await response.text() };
    }
    throw new Error(error.description || `HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
};

const getYooKassaPayment = async (paymentId) => {
  const response = await fetch(`${YOOKASSA_API_URL}/payments/${paymentId}`, {
    method: "GET",
    headers: {
      Authorization: getAuthHeader(),
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.description || `HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
};

app.post("/api/payments/create", async (req, res) => {
  try {
    const { amount, email, childName, paymentPeriod, returnUrl } = req.body;

    if (!amount || !email || !childName || !returnUrl) {
      return res.status(400).json({
        error: "Необходимы параметры: amount, email, childName, returnUrl",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Некорректный формат email",
      });
    }

    let description;
    if (paymentPeriod === "12") {
      description = `Абонемент на 12 занятий для ${childName}`;
    } else if (paymentPeriod === "8") {
      description = `Абонемент на 8 занятий для ${childName}`;
    } else if (paymentPeriod === "custom") {
      description = `Оплата занятий для ${childName} (${amount.toFixed(2)} ₽)`;
    } else {
      description = `Оплата занятий для ${childName}`;
    }

    const paymentData = {
      amount: {
        value: amount.toFixed(2),
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: returnUrl,
      },
      capture: true,
      description: description,
      receipt: {
        customer: {
          email: email,
        },
        items: [
          {
            description: description,
            quantity: "1.00",
            amount: {
              value: amount.toFixed(2),
              currency: "RUB",
            },
            vat_code: 1,
            payment_subject: "service",
            payment_method: "full_prepayment",
            payment_mode: "full_payment",
          },
        ],
      },
    };

    paymentData.metadata = {
      paymentPeriod: paymentPeriod,
      childName: childName,
    };

    const idempotenceKey = `${Date.now()}-${Math.random()}`;
    const payment = await createYooKassaPayment(paymentData, idempotenceKey);

    res.json({
      success: true,
      paymentId: payment.id,
      confirmationUrl: payment.confirmation.confirmation_url,
    });
  } catch (error) {
    res.status(500).json({
      error: "Ошибка при создании платежа",
      message: error.message,
    });
  }
});

app.post("/api/payments/webhook", async (req, res) => {
  try {
    const event = req.body;

    if (event.type === "payment.succeeded") {
    } else if (event.type === "payment.canceled") {
    } else if (event.type === "receipt.succeeded") {
    } else if (event.type === "receipt.failed") {
    }

    res.status(200).send("OK");
  } catch (error) {
    res.status(500).send("Error");
  }
});

app.get("/api/payments/:paymentId", async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await getYooKassaPayment(paymentId);

    const response = {
      ...payment,
      receiptInfo: {
        email: payment.receipt?.customer?.email,
        receiptRegistration: payment.receipt_registration,
        hasReceipt: !!payment.receipt,
        receiptStatus: payment.receipt_registration === "succeeded" ? "отправлен" : "в обработке",
      },
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: "Ошибка при получении платежа",
      message: error.message,
    });
  }
});

app.listen(PORT);
