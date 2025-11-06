import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
          {categories.map((category, index) => {
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden hover:shadow-gold transition-all duration-500 hover:scale-105 cursor-pointer border-2 border-border hover:border-primary h-[280px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <CardContent className="relative h-full p-6 flex flex-col justify-end">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {category.description}
                    </p>
                  </div>
                  <Button 
                    className="bg-gold hover:bg-gold-dark text-black font-semibold w-32 transition-all duration-300 group-hover:w-36"
                  >
                    เข้าเล่น
                  </Button>
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
