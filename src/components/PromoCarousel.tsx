import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const PromoCarousel = () => {
  const promos = [
    {
      title: "โปรโมชั่นพิเศษ",
      description: "รับโบนัสสูงสุด 100%",
      bgColor: "from-red/80 to-red-dark/80",
    },
    {
      title: "สมัครสมาชิกใหม่",
      description: "รับเครดิตฟรีทันที",
      bgColor: "from-primary/80 to-gold-dark/80",
    },
    {
      title: "ฝากถอนออโต้",
      description: "รวดเร็วภายใน 30 วินาที",
      bgColor: "from-accent/80 to-destructive/80",
    },
  ];

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
            {promos.map((promo, index) => (
              <CarouselItem key={index}>
                <div className={`relative h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-r ${promo.bgColor}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90">
                      {promo.description}
                    </p>
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
