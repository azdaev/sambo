import React from "react";
import ImageSkeleton from "../ImageSkeleton";
import {
  AboutContainer,
  AboutContent,
  SectionTitle,
  AboutGrid,
  AboutText,
  FeaturesList,
  AboutImage,
  StatsContainer,
  StatCard,
} from "./About.styles";

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionTitle>О нашей секции</SectionTitle>

        <AboutGrid>
          <AboutText>
            <h3>BORZ TEAM - Путь к чемпионству</h3>
            <p>
              Наша секция самбо специализируется на подготовке спортсменов
              высокого уровня. Мы воспитываем не только технически
              подготовленных борцов, но и формируем
              <span className="highlight">
                {" "}
                сильный характер, дисциплину и волю к победе
              </span>
              .
            </p>
            <p>
              Под руководством{" "}
              <span className="highlight">
                мастера спорта Ахтаханова Анзора Алиевича
              </span>
              , наши воспитанники достигают выдающихся результатов на
              соревнованиях различного уровня.
            </p>

            <FeaturesList>
              <li>Профессиональная подготовка с мастером спорта</li>
              <li>Индивидуальный подход к каждому спортсмену</li>
              <li>Современные методики тренировок</li>
              <li>Участие в соревнованиях разного уровня</li>
              <li>Развитие физических и моральных качеств</li>
              <li>Дружная команда единомышленников</li>
            </FeaturesList>
          </AboutText>

          <AboutImage>
            <ImageSkeleton
              src="/images/about-team-photo.jpg"
              alt="Тренировка в зале"
              borderRadius="15px"
            />
          </AboutImage>
        </AboutGrid>

        <StatsContainer>
          <StatCard>
            <div className="number">5+</div>
            <div className="label">Лет опыта</div>
          </StatCard>
          <StatCard>
            <div className="number">50+</div>
            <div className="label">Учеников</div>
          </StatCard>
          <StatCard>
            <div className="number">100%</div>
            <div className="label">Результат</div>
          </StatCard>
        </StatsContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
