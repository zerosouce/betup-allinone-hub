import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, Shield, Headset, Percent, Trophy } from "lucide-react";
import { FEATURES } from "@/config/content";

const Features = () => {
  const iconMap = { Smartphone, Zap, Shield, Headset, Percent, Trophy };

  return (
    <section className="py-20 bg-gradient-to-b from-gray to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            ทำไมต้อง BETUP168
          </h2>
          <p className="text-lg text-muted-foreground">
            เว็บคาสิโนออนไลน์ที่ตอบโจทย์ทุกความต้องการของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-card border-border hover:border-primary">
                <CardContent className="p-6">
                  <div className="h-14 w-14 mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-gold-dark/20 flex items-center justify-center group-hover:shadow-gold transition-shadow">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
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

export default Features;
