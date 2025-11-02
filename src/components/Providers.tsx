import { Card, CardContent } from "@/components/ui/card";
import saGaming from "@/assets/providers/sa-gaming.png";
import sexyBaccarat from "@/assets/providers/sexy-baccarat.png";
import wmCasino from "@/assets/providers/wm-casino.png";
import prettyGaming from "@/assets/providers/pretty-gaming.png";
import pgSoft from "@/assets/providers/pg-soft.png";
import jokerGaming from "@/assets/providers/joker-gaming.png";
import pragmaticPlay from "@/assets/providers/pragmatic-play.png";
import spadegaming from "@/assets/providers/spadegaming.png";
import jili from "@/assets/providers/jili.png";
import cq9 from "@/assets/providers/cq9.png";
import habanero from "@/assets/providers/habanero.png";
import redTiger from "@/assets/providers/red-tiger.png";

const providers = [
  { name: "SA Gaming", image: saGaming },
  { name: "Sexy Baccarat", image: sexyBaccarat },
  { name: "WM Casino", image: wmCasino },
  { name: "Pretty Gaming", image: prettyGaming },
  { name: "PG Soft", image: pgSoft },
  { name: "Joker Gaming", image: jokerGaming },
  { name: "Pragmatic Play", image: pragmaticPlay },
  { name: "Spadegaming", image: spadegaming },
  { name: "Jili", image: jili },
  { name: "CQ9", image: cq9 },
  { name: "Habanero", image: habanero },
  { name: "Red Tiger", image: redTiger },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {providers.map((provider, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-gold transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border hover:border-primary overflow-hidden"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-center h-24">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
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
