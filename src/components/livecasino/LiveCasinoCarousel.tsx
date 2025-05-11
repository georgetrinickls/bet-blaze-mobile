
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LiveCasinoCarousel = () => {
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();

  // Live casino carousel images
  const carouselImages = [
    "https://www.virginbet.com/about-us/vbcrazytimeGENERIC-71907.jpg",
    "https://www.virginbet.com/about-us/VBUK-Generic-Virgin-Bet-Pro-Blackjack-63521.jpg",
    "https://www.virginbet.com/about-us/Generic-Crazy-Balls-91363.jpg",
    "https://www.virginbet.com/about-us/Generic-Game-Shows-84548.jpg",
    "https://www.virginbet.com/about-us/vblightningrouletteGENERIC-57511.jpg",
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
                alt={`Live Casino Promotion ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LiveCasinoCarousel;
