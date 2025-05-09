
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  const [api, setApi] = useState<ReturnType<typeof useEmblaCarousel>[1]>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Carousel images
  const carouselImages = [
    "https://cdn.virginbet.com/headlines/images/vb-3kroulette-1105.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-newweeklyaccaoffer.jpg",
    "https://cdn.virginbet.com/headlines/images/vb-2up.png",
  ];

  // Setup auto-rotation for carousel every 10 seconds
  useEffect(() => {
    if (!api) return;

    // Set initial count
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Update current slide when it changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

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
      <CarouselContent>
        {carouselImages.map((image, index) => (
          <CarouselItem key={index}>
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
      <div className="flex items-center justify-center gap-2 mt-2">
        <CarouselPrevious className="static relative transform-none h-8 w-8" />
        <span className="text-xs text-muted-foreground">
          {current} / {count}
        </span>
        <CarouselNext className="static relative transform-none h-8 w-8" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
