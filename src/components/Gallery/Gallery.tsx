import React, { useState } from "react";
import ImageSkeleton from "../ImageSkeleton";
import {
  GalleryContainer,
  GalleryContent,
  SectionTitle,
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./Gallery.styles";

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "/images/photo-1.jpg",
      title: "Тренировка в зале",
    },
    {
      src: "/images/photo-2.jpg",
      title: "Соревнования",
    },
    {
      src: "/images/photo-3.jpg",
      title: "Техническая подготовка",
    },
    {
      src: "/images/photo-4.jpg",
      title: "Детская группа",
    },
    {
      src: "/images/photo-5.jpg",
      title: "Командный дух",
    },
    {
      src: "/images/team-photo.jpg",
      title: "Команда",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryContainer id="gallery">
      <GalleryContent>
        <SectionTitle>Галерея</SectionTitle>

        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {galleryImages.map((image, index) => (
              <CarouselSlide key={index}>
                <ImageSkeleton src={image.src} alt={image.title} borderRadius="10px" />
              </CarouselSlide>
            ))}
          </CarouselTrack>

          <CarouselButton direction="prev" onClick={prevSlide} disabled={galleryImages.length <= 1}>
            ‹
          </CarouselButton>

          <CarouselButton direction="next" onClick={nextSlide} disabled={galleryImages.length <= 1}>
            ›
          </CarouselButton>
        </CarouselContainer>

        <CarouselDots>
          {galleryImages.map((_, index) => (
            <CarouselDot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
          ))}
        </CarouselDots>
      </GalleryContent>
    </GalleryContainer>
  );
};

export default Gallery;
