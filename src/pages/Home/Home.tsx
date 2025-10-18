import React, { useEffect } from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Schedule from '../../components/Schedule';
import Trainer from '../../components/Trainer';
import Gallery from '../../components/Gallery';
import Contacts from '../../components/Contacts';

const Home: React.FC = () => {
  useEffect(() => {
    // Обработка якорных ссылок при загрузке страницы
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Небольшая задержка для загрузки компонентов
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Trainer />
      <Schedule />
      <Gallery />
      <Contacts />
    </>
  );
};

export default Home;
