import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoText,
  Navigation,
  NavLink,
  ContactButton,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
} from './Header.styles';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    // Если мы не на главной странице, переходим на главную с якорем
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // Если на главной странице, просто скроллим к секции
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    window.open('https://taplink.cc/anzor_coach', '_blank');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo as={Link} to="/">
          <img src="/images/logo.svg" alt="BORZ TEAM" />
          <LogoText>
            <h1>BORZ TEAM</h1>
            <span>Самбо</span>
          </LogoText>
        </Logo>

        <Navigation>
          <NavLink onClick={() => handleSectionClick('about')}>О секции</NavLink>
          <NavLink onClick={() => handleSectionClick('schedule')}>Расписание</NavLink>
          <NavLink onClick={() => handleSectionClick('trainer')}>Тренер</NavLink>
          <NavLink onClick={() => handleSectionClick('gallery')}>Галерея</NavLink>
          <NavLink onClick={() => handleSectionClick('contacts')}>Контакты</NavLink>
          <NavLink as={Link} to="/payment">Оплата</NavLink>
          <ContactButton onClick={handleContactClick}>
            Записаться
          </ContactButton>
        </Navigation>

        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>

        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileNavLink onClick={() => handleSectionClick('about')}>
            О секции
          </MobileNavLink>
          <MobileNavLink onClick={() => handleSectionClick('schedule')}>
            Расписание
          </MobileNavLink>
          <MobileNavLink onClick={() => handleSectionClick('trainer')}>
            Тренер
          </MobileNavLink>
          <MobileNavLink onClick={() => handleSectionClick('gallery')}>
            Галерея
          </MobileNavLink>
          <MobileNavLink onClick={() => handleSectionClick('contacts')}>
            Контакты
          </MobileNavLink>
          <MobileNavLink as={Link} to="/payment" onClick={() => setIsMobileMenuOpen(false)}>
            Оплата
          </MobileNavLink>
          <MobileNavLink onClick={handleContactClick}>
            Записаться
          </MobileNavLink>
        </MobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
