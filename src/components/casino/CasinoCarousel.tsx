
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CasinoCarousel = () => {
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();

  // Casino carousel images
  const carouselImages = [
    "https://www.virginbet.com/about-us/VBUK-Gates-Of-Hades-Non-Promo-Banner-55685.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Banner-Triple-Phoenix-Power-Combo-67516.jpg",
    "https://www.virginbet.com/about-us/VB-4132-Network-Promotion-Games-Global-Race-2-Riches-21APR-29JUN-60027.jpg",
    "https://www.virginbet.com/about-us/dfg-55573.jpg",
    "https://www.virginbet.com/about-us/VBUK-4172-Drop-and-Wins-Slots-2025-Stage-3-30Apr-04June-45899.jpg",
  ];

  // Setup auto-rotation for carousel every 10 seconds
  useEffect(() => {
    if (!api) return;

    // Auto-rotate every 10 seconds
    const autoRotateInterval = setInterval(() => {
      api.scrollNext();
    }, 10000);

    // Clean up interval on unmount
    return () => clearInterval(autoRotateInterval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2">
        {carouselImages.map((image, index) => (
          <CarouselItem key={index} className="pl-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Casino Promotion ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CasinoCarousel;
