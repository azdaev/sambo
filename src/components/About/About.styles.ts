import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AboutContainer = styled.section`
  padding: 100px 0;
  background: ${colors.white};
`;

export const AboutContent = styled.div`
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
    background: ${colors.redGradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    color: ${colors.primary};
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: ${colors.textSecondary};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .highlight {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  margin: 30px 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: ${colors.textSecondary};

    &::before {
      content: "✓";
      background: ${colors.redGradient};
      color: ${colors.white};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-weight: bold;
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const AboutImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    object-position: center;
    border-radius: 15px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    max-height: 300px;

    img {
      height: 300px;
    }
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 60px;
    gap: 20px;
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: ${colors.lightGray};
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .number {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${colors.primary};
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .label {
    font-size: 1rem;
    color: ${colors.textSecondary};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
