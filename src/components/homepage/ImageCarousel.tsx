
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();

  // Carousel images
  const carouselImages = [
    "https://cdn.virginbet.com/headlines/images/vb-3kroulette-1105.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-newweeklyaccaoffer.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-2up.png",
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
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
