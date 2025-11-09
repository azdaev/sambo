const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface CreatePaymentRequest {
  amount: number;
  email: string;
  childName: string;
  paymentPeriod: string;
  returnUrl: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  paymentId: string;
  confirmationUrl: string;
}

export interface PaymentStatus {
  id: string;
  status: string;
  paid: boolean;
  amount: {
    value: string;
    currency: string;
  };
}

export const createPayment = async (
  data: CreatePaymentRequest
): Promise<CreatePaymentResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/payments/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка при создании платежа');
  }

  return response.json();
};

export const getPaymentStatus = async (
  paymentId: string
): Promise<PaymentStatus> => {
  const response = await fetch(`${API_BASE_URL}/api/payments/${paymentId}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Ошибка при получении статуса платежа');
  }

  return response.json();
};

