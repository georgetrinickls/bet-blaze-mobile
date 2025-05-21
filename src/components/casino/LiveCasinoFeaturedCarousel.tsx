
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const LiveCasinoFeaturedCarousel: React.FC = () => {
  // Using images from the Live Casino category
  const images = [
    "https://www.virginbet.com/casino-images/2HandCasinoHoldem333-63471.png",
    "https://www.virginbet.com/casino-images/ls-baccarat-control-squeeze-333.jpg",
    "https://www.virginbet.com/casino-images/play-cash-or-crash-333.jpg",
    "https://www.virginbet.com/casino-images/Crazy-Coin-Flip-333-33214.jpg"
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
                alt={`Featured Live Casino Game ${index + 1}`}
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

export default LiveCasinoFeaturedCarousel;
