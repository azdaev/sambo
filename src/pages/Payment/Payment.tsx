import React, { useState } from "react";
import {
  PaymentContainer,
  PaymentContent,
  PageTitle,
  PaymentGrid,
  ContractSection,
  ContractTitle,
  ContractText,
  AcceptanceSection,
  CheckboxContainer,
  PaymentSection,
  PaymentTitle,
  PriceCard,
  PaymentForm,
  PaymentButton,
  PaymentNote,
} from "./Payment.styles";

const Payment: React.FC = () => {
  const [isContractAccepted, setIsContractAccepted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    paymentPeriod: "8",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isContractAccepted) {
      alert("Пожалуйста, примите условия договора оферты");
      return;
    }

    // Здесь будет интеграция с платежной системой
    alert(
      "Функция оплаты будет подключена позже. Пожалуйста, свяжитесь с нами по телефону +7 (920) 164-61-58 или email: a.akhtakhanov@mail.ru"
    );
  };

  const isFormValid = () => {
    return (
      isContractAccepted &&
      formData.name &&
      formData.phone &&
      formData.childName &&
      formData.childAge
    );
  };

  return (
    <PaymentContainer>
      <PaymentContent>
        <PageTitle>Оплата занятий</PageTitle>

        <PaymentGrid>
          <ContractSection>
            <ContractTitle>Договор оферты</ContractTitle>

            <div
              style={{
                marginBottom: "30px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                border: "1px solid #e9ecef",
              }}
            >
              <h4
                style={{
                  marginTop: "0",
                  marginBottom: "15px",
                  color: "#D32F2F",
                }}
              >
                Реквизиты организации
              </h4>
              <p style={{ margin: "5px 0" }}>
                <strong>Название:</strong> Индивидуальный предприниматель
                Ахтаханов Анзор Алиевич
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>ОГРНИП:</strong> 325690000048715
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>ИНН:</strong> 694100588980
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:a.akhtakhanov@mail.ru"
                  style={{ color: "#D32F2F" }}
                >
                  a.akhtakhanov@mail.ru
                </a>
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Телефон:</strong>{" "}
                <a href="tel:+79201646158" style={{ color: "#D32F2F" }}>
                  +7 (920) 164-61-58
                </a>
              </p>
            </div>

            <div style={{ marginBottom: "30px", textAlign: "center" }}>
              <a
                href="https://sambo-borz.ru/offer-agreement-borz-team.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "15px 30px",
                  backgroundColor: "#D32F2F",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  transition: "background-color 0.3s ease",
                }}
              >
                📄 Скачать полный договор оферты (PDF)
              </a>
              <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
                Пожалуйста, ознакомьтесь с полным текстом договора перед оплатой
              </p>
            </div>

            <ContractText>
              <h2
                style={{
                  textAlign: "center",
                  color: "#D32F2F",
                  marginBottom: "20px",
                }}
              >
                Публичный договор оферты
                <br />
                <small style={{ fontSize: "0.8em", fontWeight: "normal" }}>
                  об оказании физкультурно-оздоровительных и спортивных услуг
                </small>
              </h2>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  fontStyle: "italic",
                }}
              >
                Индивидуальный предприниматель Ахтаханов Анзор Алиевич,
                <br />
                ИНН 694100588980, ОГРНИП 325690000048715,
                <br />
                предлагает договор публичной оферты для физических и юридических
                лиц.
              </p>

              <h3>1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
              <p>
                1.1. Настоящий Договор регулирует отношения между ИП Ахтаханов
                А.А. (далее - «Исполнитель») и Законным Представителем
                Воспитанника (далее - «Заказчик»).
              </p>
              <p>
                1.2. Договор заключается на условиях публичной оферты и вступает
                в силу с момента его акцепта Заказчиком сроком на один учебный
                год с 1 сентября по 31 августа.
              </p>
              <p>
                1.3. Акцепт Оферты осуществляется путем внесения оплаты в
                размере и на условиях настоящего договора. Договор считается
                заключенным в момент оплаты услуг.
              </p>

              <h3>2. ПРЕДМЕТ ДОГОВОРА</h3>
              <p>
                2.1. Исполнитель обязуется оказать Воспитаннику
                физкультурно-оздоровительные услуги в виде групповых занятий с
                подвижными играми с элементами борьбы для детей дошкольного,
                младшего, среднего и старшего школьного возраста.
              </p>
              <p>
                2.2. Длительность одного занятия составляет не менее 28 минут и
                не более 90 минут в зависимости от возрастной категории. Занятия
                проводятся в группах до 30 человек.
              </p>

              <h3>3. СТОИМОСТЬ УСЛУГ И ПОРЯДОК ОПЛАТЫ</h3>
              <p>
                3.1. Место и график проведения занятий, а также актуальная
                стоимость указаны на официальном сайте:{" "}
                <a
                  href="https://sambo-borz.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#D32F2F" }}
                >
                  https://sambo-borz.ru
                </a>
              </p>
              <p>
                3.2. <span className="highlight">Текущие цены:</span>
              </p>
              <ul>
                <li>
                  <strong>Абонемент на 12 занятий:</strong> 7000 рублей
                </li>
                <li>
                  <strong>Абонемент на 8 занятий:</strong> 6000 рублей
                </li>
                <li>
                  <strong>Разовое занятие:</strong> 500 рублей
                </li>
                <li>
                  <strong>Первое занятие:</strong> БЕСПЛАТНО
                </li>
              </ul>

              <h3>4. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h3>

              <h4>4.1. Исполнитель обязан:</h4>
              <ul>
                <li>Организовать и обеспечить надлежащее исполнение услуг</li>
                <li>Создать необходимые условия для освоения программы</li>
                <li>Обеспечить безопасность занятий</li>
                <li>Предоставить помещение и материально-техническую базу</li>
                <li>Проявлять уважение к личности Воспитанника</li>
              </ul>

              <h4>4.2. Заказчик обязан:</h4>
              <ul>
                <li>Своевременно и в полном объеме вносить плату за услуги</li>
                <li>Обеспечить посещение занятий согласно расписанию</li>
                <li>Предоставить медицинскую справку о допуске к занятиям</li>
                <li>Соблюдать правила техники безопасности</li>
                <li>Обеспечить наличие спортивной одежды и обуви</li>
                <li>Бережно относиться к имуществу Исполнителя</li>
              </ul>

              <h3>5. ОТВЕТСТВЕННОСТЬ СТОРОН</h3>
              <p>
                5.1. Заказчик подтверждает, что Воспитанник не имеет медицинских
                противопоказаний для занятий спортом и принимает на себя
                ответственность за состояние здоровья.
              </p>
              <p>
                5.2. Исполнитель не несет ответственности за травмы, полученные
                в результате несоблюдения техники безопасности или указаний
                тренера.
              </p>

              <h3>6. ОСОБЫЕ УСЛОВИЯ</h3>
              <p>
                6.1. Принимая условия Договора, Заказчик дает согласие на
                размещение фото и видеоматериалов с участием Воспитанника в
                интернете и рекламных материалах.
              </p>
              <p>
                6.2. Исполнитель вправе изменять расписание, предупредив об этом
                Заказчика.
              </p>

              <h3>7. КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "15px",
                  borderRadius: "8px",
                  marginTop: "20px",
                }}
              >
                <p style={{ margin: "5px 0" }}>
                  <strong>Исполнитель:</strong> ИП Ахтаханов Анзор Алиевич
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>ОГРНИП:</strong> 325690000048715
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>ИНН:</strong> 694100588980
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Телефон:</strong> +7 (920) 164-61-58
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>E-mail:</strong> a.akhtakhanov@mail.ru
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Адрес зала:</strong> г. Москва, ул. Икшинская д. 3А
                </p>
              </div>
            </ContractText>

            <AcceptanceSection>
              <CheckboxContainer>
                <input
                  type="checkbox"
                  checked={isContractAccepted}
                  onChange={(e) => setIsContractAccepted(e.target.checked)}
                />
                <span>
                  Я ознакомился(ась) с{" "}
                  <a
                    href="https://sambo-borz.ru/offer-agreement-borz-team.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#D32F2F", textDecoration: "underline" }}
                  >
                    полным текстом договора оферты
                  </a>{" "}
                  и принимаю его условия. Даю согласие на обработку персональных
                  данных в соответствии с Федеральным законом №152-ФЗ "О
                  персональных данных".
                </span>
              </CheckboxContainer>
            </AcceptanceSection>
          </ContractSection>

          <PaymentSection>
            <PaymentTitle>Оплата</PaymentTitle>

            <PriceCard>
              <div className="price">6 000 ₽</div>
              <div className="period">абонемент на 8 занятий</div>
            </PriceCard>

            <PriceCard>
              <div className="price">7 000 ₽</div>
              <div className="period">абонемент на 12 занятий</div>
              <div className="description">
                <span style={{ color: "#D32F2F", fontWeight: "bold" }}>
                  {" "}
                  Выгоднее!
                </span>
              </div>
            </PriceCard>

            <PaymentForm>
              <div className="form-group">
                <label>ФИО родителя/законного представителя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше ФИО"
                  required
                />
              </div>

              <div className="form-group">
                <label>Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>ФИО ребенка *</label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Введите ФИО ребенка"
                  required
                />
              </div>

              <div className="form-group">
                <label>Возраст ребенка *</label>
                <select
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Выберите возраст</option>
                  <option value="4">4 года</option>
                  <option value="5">5 лет</option>
                  <option value="6">6 лет</option>
                  <option value="7">7 лет</option>
                  <option value="8">8 лет</option>
                  <option value="9">9 лет</option>
                  <option value="10+">10+ лет</option>
                </select>
              </div>

              <div className="form-group">
                <label>Тип абонемента *</label>
                <select
                  name="paymentPeriod"
                  value={formData.paymentPeriod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="8">8 занятий - 6 000 ₽</option>
                  <option value="12">12 занятий - 7 000 ₽ (выгоднее!)</option>
                </select>
              </div>

              <PaymentButton onClick={handleSubmit} disabled={!isFormValid()}>
                Оплатить {formData.paymentPeriod === "12" ? "7 000" : "6 000"} ₽
              </PaymentButton>
            </PaymentForm>

            <PaymentNote>
              <p>
                <span className="highlight">Внимание:</span> Онлайн-касса будет
                подключена позже. Пока что для записи и оплаты свяжитесь с нами:
              </p>
              <p>
                📞 <span className="highlight">+7 (920) 164-61-58</span>
                <br />
                ✉️{" "}
                <a
                  href="mailto:a.akhtakhanov@mail.ru"
                  style={{ color: "#D32F2F" }}
                >
                  a.akhtakhanov@mail.ru
                </a>
                <br />
                💬{" "}
                <a
                  href="https://taplink.cc/anzor_coach"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#D32F2F" }}
                >
                  Записаться через Taplink
                </a>
              </p>
            </PaymentNote>
          </PaymentSection>
        </PaymentGrid>
      </PaymentContent>
    </PaymentContainer>
  );
};

export default Payment;
