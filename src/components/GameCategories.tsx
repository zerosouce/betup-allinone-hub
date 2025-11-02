import { Card, CardContent } from "@/components/ui/card";
import baccaratImg from "@/assets/categories/baccarat.png";
import slotImg from "@/assets/categories/slot.png";
import footballImg from "@/assets/categories/football.png";
import rouletteImg from "@/assets/categories/roulette.png";
import lotteryImg from "@/assets/categories/lottery.png";
import fishingImg from "@/assets/categories/fishing.png";

const categories = [
  {
    image: baccaratImg,
    title: "บาคาร่าออนไลน์",
    description: "SA Gaming, Sexy Baccarat, WM Casino",
    color: "from-red to-red-dark",
  },
  {
    image: slotImg,
    title: "สล็อตออนไลน์",
    description: "PG Soft, Joker Gaming, Pragmatic Play",
    color: "from-gold to-gold-dark",
  },
  {
    image: footballImg,
    title: "แทงบอลออนไลน์",
    description: "พรีเมียร์ลีก, ลาลีกา, ไทยลีก",
    color: "from-red to-red-dark",
  },
  {
    image: rouletteImg,
    title: "รูเล็ต & ไหโล",
    description: "Live Casino แบบเรียลไทม์",
    color: "from-gold to-gold-dark",
  },
  {
    image: lotteryImg,
    title: "หวยออนไลน์",
    description: "หวยไทย, หวยลาว, หวยหุ้น",
    color: "from-red to-red-dark",
  },
  {
    image: fishingImg,
    title: "ยิงปลา",
    description: "เกมส์ยิงปลา 3D กราฟิกสวย",
    color: "from-gold to-gold-dark",
  },
];

const GameCategories = () => {
  return (
    <section className="py-20 bg-background" id="home">
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
          {categories.map((category, index) => {
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 group-hover:animate-float">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
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
