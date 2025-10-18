import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ScheduleContainer = styled.section`
  padding: 100px 0;
  background: ${colors.white};
`;

export const ScheduleContent = styled.div`
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
    background: ${colors.blueGradient};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const AgeGroupCard = styled.div`
  background: ${colors.white};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 4px solid ${colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(even) {
    border-top-color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const AgeGroupTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.primary};
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;

  &.secondary {
    color: ${colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ScheduleList = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid ${colors.lightGray};
    font-size: 1rem;
    color: ${colors.textSecondary};

    &:last-child {
      border-bottom: none;
    }

    .day {
      font-weight: 600;
      color: ${colors.textPrimary};
    }

    .time {
      background: ${colors.lightGray};
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      color: ${colors.textPrimary};
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;

      .time {
        align-self: flex-end;
      }
    }
  }
`;

export const ImportantNote = styled.div`
  background: ${colors.primary};
  color: ${colors.white};
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 40px;
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
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: ${colors.white};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 25px;
  background: ${colors.white};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 1.3rem;
    color: ${colors.textPrimary};
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: ${colors.textSecondary};
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .phone {
    color: ${colors.primary};
    font-weight: 600;
    font-size: 1.1rem;
  }

  .address {
    font-weight: 500;
  }
`;
