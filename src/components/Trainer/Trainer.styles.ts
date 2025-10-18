import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TrainerContainer = styled.section`
  padding: 100px 0;
  background: ${colors.lightGray};
`;

export const TrainerContent = styled.div`
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
    content: '';
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

export const TrainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

export const TrainerImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const TrainerImage = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 320px;
  }
`;

export const TrainerBadge = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  background: ${colors.redGradient};
  color: ${colors.white};
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 5px 15px rgba(211, 47, 47, 0.4);
  transform: rotate(15deg);

  @media (max-width: 768px) {
    top: -10px;
    right: -10px;
    padding: 8px 12px;
    font-size: 0.7rem;
  }
`;

export const TrainerInfo = styled.div`
  h3 {
    font-size: 2rem;
    color: ${colors.primary};
    margin-bottom: 15px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }

  .title {
    font-size: 1.2rem;
    color: ${colors.secondary};
    font-weight: 600;
    margin-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 25px;
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

export const AchievementsList = styled.div`
  margin: 30px 0;

  h4 {
    font-size: 1.3rem;
    color: ${colors.textPrimary};
    margin-bottom: 20px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      font-size: 1rem;
      color: ${colors.textSecondary};

      &::before {
        content: '🏆';
        margin-right: 15px;
        font-size: 1.2rem;
        flex-shrink: 0;
      }

      @media (max-width: 768px) {
        font-size: 0.95rem;
      }
    }
  }
`;

export const ExperienceCard = styled.div`
  background: ${colors.lightGray};
  padding: 25px;
  border-radius: 15px;
  margin-top: 30px;
  border-left: 4px solid ${colors.secondary};

  h4 {
    font-size: 1.2rem;
    color: ${colors.secondary};
    margin-bottom: 15px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: ${colors.textSecondary};
    margin-bottom: 0;
    line-height: 1.6;
  }
`;

export const ContactTrainer = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 30px;
  background: ${colors.primary};
  border-radius: 15px;
  color: ${colors.white};

  h4 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${colors.white};
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.9);
  }

  .phone {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colors.white};
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  }
`;
