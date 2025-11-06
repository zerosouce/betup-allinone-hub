import { Card, CardContent } from "@/components/ui/card";
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
  { name: "Dream Gaming", image: dreamgaming },
];

const Providers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            ค่ายเกมชั้นนำระดับโลก
          </h2>
          <p className="text-lg text-muted-foreground">
            รวมค่ายเกมดังทุกค่าย ให้คุณเลือกเล่นได้ตามใจ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
