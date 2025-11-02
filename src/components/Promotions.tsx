import { Card, CardContent } from "@/components/ui/card";
import { Gift, Percent, Star, Coins } from "lucide-react";
import { PROMOTIONS } from "@/config/content";

const Promotions = () => {
  const iconMap = { Gift, Percent, Star, Coins };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            โปรโมชั่นสุดคุ้ม
          </h2>
          <p className="text-lg text-muted-foreground">
            รับโบนัสและสิทธิพิเศษมากมาย สำหรับสมาชิกทุกท่าน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMOTIONS.map((promo, index) => {
            const Icon = iconMap[promo.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-border hover:border-red hover:shadow-red cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-red flex items-center justify-center group-hover:shadow-red transition-shadow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {promo.amount}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {promo.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
