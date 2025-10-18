import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ContactsContainer = styled.section`
  padding: 100px 0;
  background: ${colors.white};
`;

export const ContactsContent = styled.div`
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

export const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    color: ${colors.primary};
    margin-bottom: 30px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 20px;
  background: ${colors.lightGray};
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 20px;
    color: ${colors.primary};
    flex-shrink: 0;
    margin-top: 5px;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      margin-right: 15px;
    }
  }

  .content {
    flex: 1;

    h4 {
      font-size: 1.1rem;
      color: ${colors.textPrimary};
      margin-bottom: 5px;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: ${colors.textSecondary};
      margin: 0;
      line-height: 1.5;

      a {
        color: ${colors.primary};
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const MapContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const CallToAction = styled.div`
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: ${colors.redGradient};
  border-radius: 20px;
  color: ${colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shine 4s infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: ${colors.white};
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 25px;
    }
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: ${colors.white};
  color: ${colors.primary};
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: ${colors.lightGray};
  }

  .icon {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
`;

export const SecondaryButton = styled(CTAButton)`
  background: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};

  &:hover {
    background: ${colors.white};
    color: ${colors.primary};
  }
`;

export const WorkingHours = styled.div`
  margin-top: 40px;
  padding: 25px;
  background: ${colors.lightGray};
  border-radius: 15px;
  border-left: 4px solid ${colors.secondary};

  h4 {
    font-size: 1.2rem;
    color: ${colors.secondary};
    margin-bottom: 15px;
    font-weight: bold;
  }

  .hours-list {
    list-style: none;
    margin: 0;

    li {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 1rem;

      &:last-child {
        border-bottom: none;
      }

      .day {
        font-weight: 500;
        color: ${colors.textPrimary};
      }

      .time {
        color: ${colors.textSecondary};
      }

      @media (max-width: 480px) {
        flex-direction: column;
        gap: 2px;
      }
    }
  }
`;
