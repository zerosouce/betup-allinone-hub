import { Card, CardContent } from "@/components/ui/card";
import { Spade, Cherry, Trophy, Ticket, Fish, Dices } from "lucide-react";
import { GAME_CATEGORIES } from "@/config/content";

const GameCategories = () => {
  const iconMap = { Spade, Cherry, Trophy, Ticket, Fish, Dices };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            เกมคาสิโนครบวงจร
          </h2>
          <p className="text-lg text-muted-foreground">
            รวมเกมคาสิโนทุกประเภทจากทุกค่ายดัง เล่นง่าย จ่ายจริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Card key={category.id} className="group hover:scale-105 transition-transform duration-300 bg-card border-border hover:border-primary cursor-pointer">
                <CardContent className="p-6">
                  <div className={`h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:shadow-gold transition-shadow`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-center text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-center text-muted-foreground">
                    {category.description}
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

export default GameCategories;
