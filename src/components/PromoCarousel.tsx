import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import { promoCarouselConfig } from "@/config/content";

const PromoCarousel = () => {
  const promos = [
    { image: promo1, alt: "โปรโมชั่นโบนัส 100%" },
    { image: promo2, alt: "สมัครสมาชิกใหม่รับเครดิตฟรี" },
    { image: promo3, alt: "ฝากถอนออโต้ 30 วินาที" },
  ];

  const { height, autoplay } = promoCarouselConfig;

  return (
    <div className="w-full bg-background py-4 md:py-6">
      <div className="w-full px-2 md:px-4 max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={
            autoplay.enabled
              ? [
                  Autoplay({
                    delay: autoplay.delay,
                  }),
                ]
              : []
          }
          className="w-full"
        >
          <CarouselContent>
            {promos.map((promo, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative w-full rounded-lg md:rounded-xl overflow-hidden"
                  style={{
                    height: `${height.mobile}px`,
                  }}
                >
                  <style>
                    {`
                      @media (min-width: 640px) {
                        .carousel-height-${index} {
                          height: ${height.tablet}px !important;
                        }
                      }
                      @media (min-width: 1024px) {
                        .carousel-height-${index} {
                          height: ${height.desktop}px !important;
                        }
                      }
                    `}
                  </style>
                  <div className={`carousel-height-${index} w-full h-full`}>
                    <img 
                      src={promo.image} 
                      alt={promo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:left-2" />
          <CarouselNext className="right-1 md:right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default PromoCarousel;
