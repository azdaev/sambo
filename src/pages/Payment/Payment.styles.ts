import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const PaymentContainer = styled.div`
  min-height: 100vh;
  padding: 120px 0 60px;
  background: ${colors.background};
`;

export const PaymentContent = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const PageTitle = styled.h1`
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

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ContractSection = styled.div`
  background: ${colors.white};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const ContractTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.primary};
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ContractText = styled.div`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${colors.textSecondary};
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 30px;

  h3 {
    font-size: 1.1rem;
    color: ${colors.textPrimary};
    margin: 20px 0 10px;
    font-weight: 600;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    margin: 10px 0;
    padding-left: 20px;

    li {
      margin-bottom: 5px;
    }
  }

  .highlight {
    color: ${colors.primary};
    font-weight: 600;
  }

  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.lightGray};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.gray};
    border-radius: 3px;

    &:hover {
      background: ${colors.primary};
    }
  }
`;

export const AcceptanceSection = styled.div`
  border-top: 1px solid ${colors.lightGray};
  padding-top: 20px;
  margin-top: 20px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  margin-bottom: 20px;

  input[type="checkbox"] {
    margin-top: 3px;
    transform: scale(1.2);
    accent-color: ${colors.primary};
  }

  span {
    font-size: 0.95rem;
    color: ${colors.textSecondary};
    line-height: 1.5;
  }
`;

export const PaymentSection = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const PaymentTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.textPrimary};
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const PriceCard = styled.div`
  background: ${colors.lightGray};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  text-align: center;

  .price {
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.primary};
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 1.7rem;
    }
  }

  .period {
    font-size: 1rem;
    color: ${colors.textSecondary};
  }

  .description {
    font-size: 0.9rem;
    color: ${colors.textSecondary};
    margin-top: 10px;
    line-height: 1.4;
  }
`;

export const PaymentForm = styled.div`
  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      font-size: 0.9rem;
      font-weight: 500;
      color: ${colors.textPrimary};
      margin-bottom: 8px;
    }

    input, select {
      width: 100%;
      padding: 12px;
      border: 2px solid ${colors.lightGray};
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: ${colors.primary};
      }

      &::placeholder {
        color: ${colors.gray};
      }
    }
  }
`;

export const PaymentButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background: ${props => props.disabled ? colors.gray : colors.redGradient};
  color: ${colors.white};
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 6px 20px rgba(211, 47, 47, 0.4)'};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }
`;

export const PaymentNote = styled.div`
  background: rgba(25, 118, 210, 0.1);
  border-left: 4px solid ${colors.secondary};
  padding: 15px;
  margin-top: 20px;
  border-radius: 0 8px 8px 0;

  p {
    font-size: 0.9rem;
    color: ${colors.textSecondary};
    margin: 0;
    line-height: 1.5;
  }

  .highlight {
    color: ${colors.secondary};
    font-weight: 600;
  }
`;
