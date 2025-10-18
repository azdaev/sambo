import React, { useState } from 'react';
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
} from './Payment.styles';

const Payment: React.FC = () => {
  const [isContractAccepted, setIsContractAccepted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    paymentPeriod: 'month',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isContractAccepted) {
      alert('Пожалуйста, примите условия договора оферты');
      return;
    }
    
    // Здесь будет интеграция с платежной системой
    alert('Функция оплаты будет подключена позже. Пожалуйста, свяжитесь с нами по телефону 8 920 164 61 58');
  };

  const isFormValid = () => {
    return isContractAccepted && 
           formData.name && 
           formData.phone && 
           formData.childName && 
           formData.childAge;
  };

  return (
    <PaymentContainer>
      <PaymentContent>
        <PageTitle>Оплата занятий</PageTitle>
        
        <PaymentGrid>
          <ContractSection>
            <ContractTitle>Договор оферты</ContractTitle>
            
            <ContractText>
              <h3>1. Общие положения</h3>
              <p>
                Настоящий договор является публичной офертой в соответствии со статьей 437 
                Гражданского кодекса Российской Федерации и определяет условия предоставления 
                услуг по обучению самбо в спортивной секции <span className="highlight">BORZ TEAM</span>.
              </p>

              <h3>2. Предмет договора</h3>
              <p>
                Исполнитель обязуется предоставить Заказчику услуги по обучению самбо, 
                включающие в себя:
              </p>
              <ul>
                <li>Групповые тренировки по самбо</li>
                <li>Индивидуальные консультации тренера</li>
                <li>Участие в соревнованиях (по желанию)</li>
                <li>Использование спортивного инвентаря зала</li>
              </ul>

              <h3>3. Стоимость услуг</h3>
              <p>
                Стоимость услуг составляет:
              </p>
              <ul>
                <li><span className="highlight">Абонемент на месяц:</span> 3000 рублей</li>
                <li><span className="highlight">Разовое занятие:</span> 500 рублей</li>
                <li><span className="highlight">Первое занятие:</span> БЕСПЛАТНО</li>
              </ul>

              <h3>4. Порядок оплаты</h3>
              <p>
                Оплата производится до начала занятий. Возможны следующие способы оплаты:
              </p>
              <ul>
                <li>Наличными в спортивном зале</li>
                <li>Банковской картой через онлайн-форму</li>
                <li>Банковским переводом</li>
              </ul>

              <h3>5. Права и обязанности сторон</h3>
              <p><strong>Исполнитель обязуется:</strong></p>
              <ul>
                <li>Предоставлять качественные услуги по обучению самбо</li>
                <li>Обеспечивать безопасность занятий</li>
                <li>Соблюдать расписание тренировок</li>
                <li>Предоставлять необходимый спортивный инвентарь</li>
              </ul>

              <p><strong>Заказчик обязуется:</strong></p>
              <ul>
                <li>Своевременно оплачивать услуги</li>
                <li>Соблюдать правила поведения в спортивном зале</li>
                <li>Предоставлять достоверную информацию о состоянии здоровья</li>
                <li>Иметь справку от врача о допуске к занятиям спортом</li>
              </ul>

              <h3>6. Ответственность сторон</h3>
              <p>
                Исполнитель не несет ответственности за травмы, полученные в результате 
                несоблюдения техники безопасности или указаний тренера.
              </p>

              <h3>7. Возврат денежных средств</h3>
              <p>
                Возврат денежных средств за неиспользованные занятия производится 
                при предоставлении справки о болезни или других уважительных причинах.
              </p>

              <h3>8. Контактная информация</h3>
              <p>
                <span className="highlight">Тренер:</span> Ахтаханов Анзор Алиевич<br />
                <span className="highlight">Телефон:</span> 8 920 164 61 58<br />
                <span className="highlight">Адрес:</span> ул. Икшинская д. 3А
              </p>
            </ContractText>

            <AcceptanceSection>
              <CheckboxContainer>
                <input
                  type="checkbox"
                  checked={isContractAccepted}
                  onChange={(e) => setIsContractAccepted(e.target.checked)}
                />
                <span>
                  Я ознакомился(ась) с условиями договора оферты и принимаю их. 
                  Даю согласие на обработку персональных данных в соответствии с 
                  Федеральным законом №152-ФЗ "О персональных данных".
                </span>
              </CheckboxContainer>
            </AcceptanceSection>
          </ContractSection>

          <PaymentSection>
            <PaymentTitle>Оплата</PaymentTitle>
            
            <PriceCard>
              <div className="price">3 000 ₽</div>
              <div className="period">за месяц</div>
              <div className="description">
                8 занятий в месяц<br />
                Все необходимое оборудование<br />
                Консультации тренера
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

              <PaymentButton
                onClick={handleSubmit}
                disabled={!isFormValid()}
              >
                Оплатить 3 000 ₽
              </PaymentButton>
            </PaymentForm>

            <PaymentNote>
              <p>
                <span className="highlight">Внимание:</span> Онлайн-касса будет подключена позже. 
                Пока что для записи и оплаты свяжитесь с нами по телефону 
                <span className="highlight"> 8 920 164 61 58</span>.
              </p>
            </PaymentNote>
          </PaymentSection>
        </PaymentGrid>
      </PaymentContent>
    </PaymentContainer>
  );
};

export default Payment;
