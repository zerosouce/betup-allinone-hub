import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Trophy } from "lucide-react";
import jackpot1 from "@/assets/jackpots/jackpot-1.jpg";
import jackpot2 from "@/assets/jackpots/jackpot-2.jpg";
import jackpot3 from "@/assets/jackpots/jackpot-3.jpg";
import jackpot4 from "@/assets/jackpots/jackpot-4.jpg";
import jackpot5 from "@/assets/jackpots/jackpot-5.jpg";
import jackpot6 from "@/assets/jackpots/jackpot-6.jpg";
import jackpot7 from "@/assets/jackpots/jackpot-7.jpg";
import jackpot8 from "@/assets/jackpots/jackpot-8.jpg";
import jackpot9 from "@/assets/jackpots/jackpot-9.jpg";

const jackpots = [
  { id: 1, image: jackpot1, alt: "แจ็คพอตแตก 1,035,790 บาท" },
  { id: 2, image: jackpot2, alt: "แจ็คพอตแตก 60,000 บาท" },
  { id: 3, image: jackpot3, alt: "แจ็คพอตแตก 111,900 บาท" },
  { id: 4, image: jackpot4, alt: "แจ็คพอตแตก 105,174 บาท" },
  { id: 5, image: jackpot5, alt: "แจ็คพอตแตก 53,000 บาท" },
  { id: 6, image: jackpot6, alt: "แจ็คพอตแตก 41,000 บาท" },
  { id: 7, image: jackpot7, alt: "แจ็คพอตแตก 300,000 บาท" },
  { id: 8, image: jackpot8, alt: "แจ็คพอตแตก 1,000,500 บาท" },
  { id: 9, image: jackpot9, alt: "แจ็คพอตแตก 500,432 บาท" },
];

const Features = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-gold flex items-center justify-center animate-float">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-black" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-3 md:mb-4 animate-fade-in">
            แจ็คพอตแตกจริง
          </h2>
          <p className="text-base md:text-lg text-muted-foreground animate-fade-in">
            ลูกค้าของเราถอนเงินรางวัลได้จริง จ่ายเต็ม ไม่มีโกง
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {jackpots.map((jackpot) => (
                <CarouselItem key={jackpot.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group bg-card">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                      
                      {/* Image */}
                      <img
                        src={jackpot.image}
                        alt={jackpot.alt}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Verified badge */}
                      <div className="absolute top-3 right-3 bg-gradient-gold px-3 py-1.5 rounded-full text-black font-bold text-xs md:text-sm shadow-gold z-20 animate-shimmer">
                        ✓ ถอนจริง
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 bg-card border-primary hover:bg-primary hover:text-black" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16 bg-card border-primary hover:bg-primary hover:text-black" />
          </Carousel>

          {/* Mobile hint */}
          <div className="text-center mt-6 md:hidden">
            <p className="text-xs text-muted-foreground">← เลื่อนดูเพิ่มเติม →</p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: "1,000+", label: "แจ็คพอตแตกต่อวัน" },
            { number: "100%", label: "จ่ายจริง จ่ายเต็ม" },
            { number: "24/7", label: "ถอนได้ทุกเวลา" },
            { number: "10 วิ", label: "รับเงินไว" },
          ].map((item, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-1">
                {item.number}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
