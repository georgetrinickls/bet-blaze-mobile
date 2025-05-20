
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const CasinoFeaturedCarousel: React.FC = () => {
  const images = [
    "https://www.virginbet.com/about-us/VBUK-Gates-Of-Hades-Non-Promo-Banner-55685.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Banner-Triple-Phoenix-Power-Combo-67516.jpg",
    "https://www.virginbet.com/about-us/VB-4132-Network-Promotion-Games-Global-Race-2-Riches-21APR-29JUN-60027.jpg",
    "https://www.virginbet.com/about-us/dfg-55573.jpg",
    "https://www.virginbet.com/about-us/VBUK-4172-Drop-and-Wins-Slots-2025-Stage-3-30Apr-04June-45899.jpg",
    "https://www.virginbet.com/about-us/vbcrazytimeGENERIC-71907.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Virgin-Bet-Pro-Blackjack-63521.jpg"
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-[180px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative cursor-pointer">
              <img
                src={image}
                alt={`Featured Casino Game ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CasinoFeaturedCarousel;
