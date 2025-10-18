import styled from "styled-components";
import { colors } from "../../styles/colors";

export const GalleryContainer = styled.section`
  padding: 100px 0;
  background: ${colors.lightGray};
`;

export const GalleryContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${colors.textPrimary};
  margin-bottom: 60px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${colors.blueGradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 95%;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: 10px;
    margin: 0 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CarouselTrack = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(props) => props.currentIndex * 100}%);
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: ${colors.white};
  padding: 30px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${colors.white};

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CarouselButton = styled.button<{ direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "prev" ? "left: 20px;" : "right: 20px;")}
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: ${colors.white};
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: translateY(-50%) scale(1);
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    ${(props) => (props.direction === "prev" ? "left: 10px;" : "right: 10px;")}
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

export const CarouselDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? colors.primary : colors.gray)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    transform: scale(1.2);
  }
`;
