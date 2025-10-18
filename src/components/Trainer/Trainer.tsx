import React from "react";
import ImageSkeleton from "../ImageSkeleton";
import {
  TrainerContainer,
  TrainerContent,
  SectionTitle,
  TrainerGrid,
  TrainerImageContainer,
  TrainerImage,
  TrainerInfo,
  AchievementsList,
  ContactTrainer,
} from "./Trainer.styles";

const Trainer: React.FC = () => {
  return (
    <TrainerContainer id="trainer">
      <TrainerContent>
        <SectionTitle>Наш тренер</SectionTitle>

        <TrainerGrid>
          <TrainerImageContainer>
            <TrainerImage>
              <ImageSkeleton 
                src="/images/coach.jpg" 
                alt="Ахтаханов Анзор Алиевич"
                borderRadius="20px"
              />
            </TrainerImage>
          </TrainerImageContainer>

          <TrainerInfo>
            <h3>Ахтаханов Анзор Алиевич</h3>
            <div className="title">Мастер спорта по самбо и джиу-джитсу</div>

            <p>
              Опытный тренер с многолетним стажем в подготовке спортсменов
              высокого уровня.
              <span className="highlight">
                {" "}
                Трехкратный чемпион России и призер чемпионата мира
              </span>
              , который передает свои знания и опыт новому поколению борцов.
            </p>

            <p>
              Анзор Алиевич использует современные методики тренировок, сочетая
              классические техники самбо с инновационными подходами к физической
              и психологической подготовке спортсменов.
            </p>

            <AchievementsList>
              <h4>Достижения:</h4>
              <ul>
                <li>Мастер спорта по самбо и джиу-джитсу</li>
                <li>Трехкратный чемпион России и призер чемпионата мира</li>
                <li>
                  Многократный победитель всероссийских и международных
                  соревнований
                </li>
                <li>Более 5 лет тренерского стажа</li>
                <li>Воспитал более 50 учеников</li>
              </ul>
            </AchievementsList>
          </TrainerInfo>
        </TrainerGrid>

        <ContactTrainer>
          <p>Запишитесь на персональную консультацию или пробную тренировку</p>
          <a
            href="https://taplink.cc/anzor_coach"
            target="_blank"
            rel="noopener noreferrer"
            className="phone"
          >
            📞 Записаться на тренировку
          </a>
        </ContactTrainer>
      </TrainerContent>
    </TrainerContainer>
  );
};

export default Trainer;
