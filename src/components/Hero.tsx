import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Shield, Gift, Headset } from "lucide-react";
import { HERO_CONTENT } from "@/config/content";

const Hero = () => {
  const iconMap = { Zap, Shield, Gift, Headset };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-gold rounded-full shadow-gold">
            <span className="text-black text-sm md:text-base font-bold">{HERO_CONTENT.badge}</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent animate-shimmer">
              {HERO_CONTENT.title}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">{HERO_CONTENT.subtitle}</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{HERO_CONTENT.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-red text-white hover:opacity-90 shadow-red text-lg px-8 py-6">
                {HERO_CONTENT.buttons.register}
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                {HERO_CONTENT.buttons.demo}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {HERO_CONTENT.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                  <span className="text-sm md:text-base text-center text-foreground">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
