import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeroContainer = styled.section`
  min-height: 100vh;
  background: ${colors.redGradient};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(211, 47, 47, 0.9) 0%, rgba(25, 118, 210, 0.8) 100%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
    min-height: 100vh;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
    min-height: 100vh;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    gap: 30px;
  }
`;

export const HeroText = styled.div`
  color: ${colors.white};

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${colors.white};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1.1;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 30px;
    color: ${colors.white};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  background: ${colors.white};
  color: ${colors.primary};
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: ${colors.lightGray};
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 15px 25px;
    font-size: 1rem;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${colors.white};
  padding: 15px 30px;
  border: 2px solid ${colors.white};
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.white};
    color: ${colors.primary};
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 15px 25px;
    font-size: 1rem;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 968px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
`;

export const FloatingBadge = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  background: ${colors.white};
  color: ${colors.primary};
  padding: 15px 20px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 768px) {
    top: -10px;
    right: -10px;
    padding: 10px 15px;
    font-size: 0.8rem;
  }
`;
