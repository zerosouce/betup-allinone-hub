import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Percent, Crown, Sparkles } from "lucide-react";

const promotions = [
  {
    icon: Gift,
    title: "โบนัสสมาชิกใหม่",
    description: "รับโบนัสทันที 100%",
    amount: "สูงสุด 10,000 บาท",
    color: "from-red to-red-dark",
  },
  {
    icon: Percent,
    title: "คืนยอดเสีย",
    description: "คืนยอดเสียทุกสัปดาห์",
    amount: "สูงสุด 10%",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Crown,
    title: "โปรสมาชิก VIP",
    description: "สิทธิพิเศษสำหรับ VIP",
    amount: "โบนัสถึง 50,000",
    color: "from-red to-red-dark",
  },
  {
    icon: Sparkles,
    title: "ฝากทุกวัน",
    description: "รับโบนัสฝากทุกครั้ง",
    amount: "สูงสุด 5%",
    color: "from-gold to-gold-dark",
  },
];

const Promotions = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray to-black" id="promotions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            โปรโมชั่นสุดคุ้ม
          </h2>
          <p className="text-lg text-muted-foreground">
            รับโบนัสและสิทธิพิเศษมากมาย สำหรับสมาชิกทุกท่าน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border hover:border-primary overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${promo.color} flex items-center justify-center relative overflow-hidden`}>
                    <Icon className="h-16 w-16 text-white/90 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {promo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {promo.description}
                    </p>
                    <p className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      {promo.amount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-red text-white hover:opacity-90 shadow-red text-lg px-12 py-6 font-bold">
            ดูโปรโมชั่นทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
