
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const CasinoFeaturedCarousel: React.FC = () => {
  // Using only images that were in the provided JSON
  const images = [
    "https://www.virginbet.com/casino-images/play-evo-roulette-333.jpg",
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
