import React from "react";
import {
  ContactsContainer,
  ContactsContent,
  SectionTitle,
  ContactsGrid,
  ContactInfo,
  ContactItem,
  MapContainer,
  CallToAction,
  CTAButtons,
  CTAButton,
  SecondaryButton,
} from "./Contacts.styles";

const Contacts: React.FC = () => {
  return (
    <ContactsContainer id="contacts">
      <ContactsContent>
        <SectionTitle>Контакты</SectionTitle>

        <ContactsGrid>
          <ContactInfo>
            <h3>Свяжитесь с нами</h3>

            <ContactItem>
              <div className="icon">📞</div>
              <div className="content">
                <h4>Телефон</h4>
                <p>
                  <a href="tel:+79201646158">8 920 164 61 58</a>
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "8px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>
                    Мессенджеры:
                  </span>
                  <a
                    href="tg://resolve?domain=Anzor_Akhtakhanov"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      textDecoration: "none",
                      transition: "transform 0.2s ease",
                      overflow: "hidden",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    title="Написать в Telegram"
                  >
                    <img
                      src="/images/telegram.svg"
                      alt="Telegram"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                  <a
                    href="whatsapp://send?phone=79201646158&text="
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      textDecoration: "none",
                      transition: "transform 0.2s ease",
                      overflow: "hidden",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    title="Написать в WhatsApp"
                  >
                    <img
                      src="/images/whatsapp.svg"
                      alt="WhatsApp"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                </div>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">📍</div>
              <div className="content">
                <h4>Адрес</h4>
                <p>г. Москва, ул. Икшинская д. 3А</p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    marginTop: "5px",
                  }}
                >
                  🚇 Ближайшее метро: Яхромская
                </p>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">🏟️</div>
              <div className="content">
                <h4>Спортивный зал</h4>
                <p>
                  Современный зал с профессиональным оборудованием для занятий
                  самбо "Икшинский Мксшор Север Москомспорта"
                </p>
              </div>
            </ContactItem>

            <ContactItem>
              <div className="icon">👨‍🏫</div>
              <div className="content">
                <h4>Тренер</h4>
                <p>
                  Ахтаханов Анзор Алиевич
                  <br />
                  Мастер спорта по самбо и джиу-джитсу
                </p>
              </div>
            </ContactItem>
          </ContactInfo>

          <MapContainer>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <a
                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Москва
              </a>
              <a
                href="https://yandex.ru/maps/213/moscow/house/ikshinskaya_ulitsa_3a/Z04YcwNgTEcDQFtvfXR5dH5lYw==/?ll=37.540693%2C55.885358&utm_medium=mapframe&utm_source=maps&z=18.34"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Икшинская улица, 3А — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.540693%2C55.885358&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc5ODM4OBI-0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCY0LrRiNC40L3RgdC60LDRjyDRg9C70LjRhtCwLCAz0JAiCg1_KRZCFYOKX0I%2C&z=18.34"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: "relative", borderRadius: "10px" }}
                title="Карта местоположения секции самбо BORZ TEAM"
              />
            </div>
          </MapContainer>
        </ContactsGrid>

        <CallToAction>
          <h3>Готовы начать тренировки?</h3>
          <p>
            Не упустите возможность стать частью команды чемпионов! Первая
            тренировка абсолютно бесплатна.
          </p>
          <CTAButtons>
            <CTAButton
              href="https://taplink.cc/anzor_coach"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">📞</span>
              Записаться на тренировку
            </CTAButton>
            <SecondaryButton href="#schedule">
              <span className="icon">📅</span>
              Посмотреть расписание
            </SecondaryButton>
          </CTAButtons>
        </CallToAction>
      </ContactsContent>
    </ContactsContainer>
  );
};

export default Contacts;
