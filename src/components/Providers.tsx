import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import bannerMain from "@/assets/providers/banner-main.webp";
import bannerPP from "@/assets/providers/banner-pp.webp";
import bannerMG from "@/assets/providers/banner-mg.webp";
import bannerJoker from "@/assets/providers/banner-joker.webp";
import bannerJili from "@/assets/providers/banner-jili.webp";
import bannerDGS from "@/assets/providers/banner-dgs.webp";
import bannerDRG from "@/assets/providers/banner-drg.webp";
import bannerAMB from "@/assets/providers/banner-amb.webp";
import bannerPG from "@/assets/providers/banner-pg.webp";
import bannerSexy from "@/assets/providers/banner-sexy.webp";
import jili from "@/assets/providers/jili.png";
import pgSoft from "@/assets/providers/pg-soft.png";
import yggdrasil from "@/assets/providers/yggdrasil.png";
import jokerGaming from "@/assets/providers/joker-gaming.png";
import pragmaticPlay from "@/assets/providers/pragmatic-play.png";
import cq9 from "@/assets/providers/cq9.png";
import kingmaker from "@/assets/providers/kingmaker.png";
import wmCasino from "@/assets/providers/wm-casino.png";
import microgaming from "@/assets/providers/microgaming.png";
import dreamgaming from "@/assets/providers/dreamgaming.png";
import sexyGaming from "@/assets/providers/sexy-gaming.png";
import saGaming from "@/assets/providers/sa-gaming.png";

const providers = [
  { name: "Jili", image: jili },
  { name: "PG Soft", image: pgSoft },
  { name: "Yggdrasil", image: yggdrasil },
  { name: "Joker Gaming", image: jokerGaming },
  { name: "Pragmatic Play", image: pragmaticPlay },
  { name: "CQ9", image: cq9 },
  { name: "Kingmaker", image: kingmaker },
  { name: "WM Casino", image: wmCasino },
  { name: "Microgaming", image: microgaming },
  { name: "Sexy Gaming", image: sexyGaming },
  { name: "SA Gaming", image: saGaming },
];

const providerBanners = [
  { name: "Pragmatic Play", image: bannerPP },
  { name: "Microgaming", image: bannerMG },
  { name: "Joker Gaming", image: bannerJoker },
  { name: "Jili", image: bannerJili },
  { name: "Dragon Soft", image: bannerDGS },
  { name: "Dragon Gaming", image: bannerDRG },
  { name: "AMB Poker", image: bannerAMB },
  { name: "PG Soft", image: bannerPG },
  { name: "Sexy Gaming", image: bannerSexy },
];

const Providers = () => {
  return (
    <section className="py-20 bg-background" id="home">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            ค่ายเกมชั้นนำระดับโลก
          </h2>
          <p className="text-lg text-muted-foreground">
            รวมค่ายเกมดังทุกค่าย ให้คุณเลือกเล่นได้ตามใจ
          </p>
        </div>

        {/* Main Banner */}
        <div className="mb-8 relative rounded-xl overflow-hidden group cursor-pointer">
          <img 
            src={bannerMain} 
            alt="ค่ายเกมชั้นนำ - LalikaBET"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Carousel Banners */}
        <div className="mb-8">
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
            <CarouselContent className="-ml-4">
              {providerBanners.map((banner, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                    <img 
                      src={banner.image} 
                      alt={`${banner.name} - ผู้ให้บริการเกมคาสิโนชั้นนำ`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* View All Button */}
        <div className="text-center mb-12">
          <Button 
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8"
          >
            ดูทั้งหมด
          </Button>
        </div>

        {/* Provider Grid */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            ผู้ให้บริการชั้นนำ
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {providers.map((provider, index) => (
            <Card 
              key={index} 
              className="group relative hover:shadow-gold transition-all duration-500 hover:scale-110 cursor-pointer bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-20 relative">
                  <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
                  <img 
                    src={provider.image} 
                    alt={`${provider.name} - ผู้ให้บริการเกมคาสิโนชั้นนำ`}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-125 relative z-10"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
