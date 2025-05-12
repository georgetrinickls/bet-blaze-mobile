
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const ImageCarousel: React.FC = () => {
  const images = [
    "https://cdn.virginbet.com/headlines/images/vb-newweeklyaccaoffer.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-2up.png",
    "https://www.virginbet.com/about-us/VBUK-Gates-Of-Hades-Non-Promo-Banner-55685.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Banner-Triple-Phoenix-Power-Combo-67516.jpg",
    "https://www.virginbet.com/about-us/VB-4132-Network-Promotion-Games-Global-Race-2-Riches-21APR-29JUN-60027.jpg",
    "https://www.virginbet.com/about-us/dfg-55573.jpg",
    "https://www.virginbet.com/about-us/VBUK-4172-Drop-and-Wins-Slots-2025-Stage-3-30Apr-04June-45899.jpg",
    "https://www.virginbet.com/about-us/vbcrazytimeGENERIC-71907.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Virgin-Bet-Pro-Blackjack-63521.jpg",
    "https://www.virginbet.com/about-us/Generic-Crazy-Balls-91363.jpg",
    "https://www.virginbet.com/about-us/Generic-Game-Shows-84548.jpg",
    "https://www.virginbet.com/about-us/vblightningrouletteGENERIC-57511.jpg"
  ];

  return (
    <div className="w-full flex justify-center pt-3">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="overflow-visible"
        style={{ width: '384px', height: '133px' }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{ width: '384px', height: '133px' }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
