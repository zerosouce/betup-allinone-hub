import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CAROUSEL_SLIDES } from "@/config/content";
import presenter1 from "@/assets/presenter-1.jpg";
import presenter2 from "@/assets/presenter-2.jpg";
import presenter3 from "@/assets/presenter-3.jpg";

const PromoCarousel = () => {
  const presenterImages = {
    presenter1,
    presenter2,
    presenter3
  };

  return (
    <div className="w-full bg-black py-6">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {CAROUSEL_SLIDES.map((slide, index) => (
              <CarouselItem key={index}>
                <div className={`relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-r ${slide.bgColor}`}>
                  <div className="absolute inset-0 grid md:grid-cols-2 gap-4">
                    {/* Content Side */}
                    <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left p-6 md:p-12">
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                        {slide.title}
                      </h3>
                      <p className="text-xl md:text-3xl text-white/95 font-semibold mb-1 drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>
                    
                    {/* Presenter Image Side */}
                    <div className="hidden md:flex items-end justify-center">
                      <img 
                        src={presenterImages[slide.imageKey as keyof typeof presenterImages]} 
                        alt={slide.title}
                        className="h-full w-auto object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default PromoCarousel;
