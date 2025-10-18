import React from "react";
import ImageSkeleton from "../ImageSkeleton";
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImage,
  FloatingBadge,
} from "./Hero.styles";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.open("https://taplink.cc/anzor_coach", "_blank");
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>BORZ TEAM</h1>
          <div className="subtitle">ГОТОВИМ ЧЕМПИОНОВ ПО САМБО!</div>
          <p>
            Приводите ребенка в секцию, где воспитывают силу, дух и дисциплину!
            Наш тренер - Ахтаханов Анзор Алиевич, мастер спорта по самбо и
            джиу-джитсу, трехкратный чемпион России и призер чемпионата мира!
          </p>
          <HeroButtons>
            <PrimaryButton onClick={handleContactClick}>
              Записаться на тренировку
            </PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection("about")}>
              Узнать больше
            </SecondaryButton>
          </HeroButtons>
        </HeroText>

        <HeroImage>
          <ImageSkeleton 
            src="/images/team-photo.JPG" 
            alt="Тренировка по самбо"
            height="400px"
            borderRadius="20px"
          />
          <FloatingBadge>
            ПЕРВАЯ
            <br />
            ТРЕНИРОВКА
            <br />
            БЕСПЛАТНО!
          </FloatingBadge>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
