import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.header`
  background: ${colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 70px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  
  img {
    height: 50px;
    width: auto;
    
    @media (max-width: 768px) {
      height: 40px;
    }
  }
`;

export const LogoText = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.primary};
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  span {
    font-size: 0.8rem;
    color: ${colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${colors.textPrimary};
  font-weight: 500;
  text-decoration: none;
  padding: 10px 0;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ContactButton = styled.button`
  background: ${colors.redGradient};
  color: ${colors.white};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.textPrimary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavLink = styled.a`
  display: block;
  padding: 15px 20px;
  color: ${colors.textPrimary};
  text-decoration: none;
  border-bottom: 1px solid ${colors.lightGray};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightGray};
    color: ${colors.primary};
  }

  &:last-child {
    border-bottom: none;
  }
`;
