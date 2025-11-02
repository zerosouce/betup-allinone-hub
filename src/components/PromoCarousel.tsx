import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";

const PromoCarousel = () => {
  const promos = [
    { image: promo1, alt: "โปรโมชั่นโบนัส 100%" },
    { image: promo2, alt: "สมัครสมาชิกใหม่รับเครดิตฟรี" },
    { image: promo3, alt: "ฝากถอนออโต้ 30 วินาที" },
  ];

  return (
    <div className="w-full bg-background py-4 md:py-6">
      <div className="w-full px-2 md:px-4 max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "center",
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
            {promos.map((promo, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-32 sm:h-40 md:h-56 lg:h-64 rounded-lg md:rounded-xl overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.alt}
                    className="w-full h-full object-cover"
                  />
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
