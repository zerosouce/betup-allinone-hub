import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Percent, Crown, Sparkles, Star, Zap } from "lucide-react";

const promotions = [
  {
    icon: Gift,
    title: "โบนัสสมาชิกใหม่ 100%",
    description: "รับโบนัสทันทีเมื่อสมัครสมาชิกใหม่",
    amount: "สูงสุด 10,000 บาท",
    details: "ฝากขั้นต่ำ 100 บาท รับโบนัสทันที 100%",
    color: "from-red to-red-dark",
  },
  {
    icon: Percent,
    title: "คืนยอดเสียทุกสัปดาห์",
    description: "คืนยอดเสียทุกวันจันทร์",
    amount: "สูงสุด 10%",
    details: "คืนยอดเสียสูงสุด 10% ไม่จำกัดจำนวน",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Crown,
    title: "โปรสมาชิก VIP",
    description: "สิทธิพิเศษสำหรับสมาชิก VIP เท่านั้น",
    amount: "โบนัสถึง 50,000",
    details: "โบนัสพิเศษ เครดิตฟรี และของรางวัลมากมาย",
    color: "from-red to-red-dark",
  },
  {
    icon: Sparkles,
    title: "โบนัสฝากทุกวัน",
    description: "รับโบนัสทุกครั้งที่ฝาก",
    amount: "สูงสุด 5%",
    details: "ฝากได้ตลอดวัน รับโบนัสทุกครั้ง",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Star,
    title: "โบนัสแนะนำเพื่อน",
    description: "รับโบนัสเมื่อแนะนำเพื่อนมาสมัคร",
    amount: "300 บาท/คน",
    details: "แนะนำเพื่อน 1 คน รับ 300 บาท ไม่จำกัดจำนวน",
    color: "from-red to-red-dark",
  },
  {
    icon: Zap,
    title: "โบนัสเทิร์นต่ำ",
    description: "เทิร์นโอเวอร์ต่ำที่สุด",
    amount: "เพียง 3 เท่า",
    details: "ถอนได้ง่าย เทิร์นต่ำกว่าที่อื่น",
    color: "from-gold to-gold-dark",
  },
];

const Promotions = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              โปรโมชั่นสุดคุ้ม
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              รับโบนัสและสิทธิพิเศษมากมาย สำหรับสมาชิกทุกท่าน
            </p>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-gold transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-40 bg-gradient-to-br ${promo.color} flex items-center justify-center relative overflow-hidden`}>
                      <Icon className="h-20 w-20 text-white/90 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {promo.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {promo.description}
                      </p>
                      <p className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                        {promo.amount}
                      </p>
                      <p className="text-sm text-muted-foreground border-t border-border pt-3">
                        {promo.details}
                      </p>
                      <Button className="w-full bg-gradient-red text-white hover:opacity-90">
                        รับโปรโมชั่น
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Terms Section */}
          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">เงื่อนไขและข้อกำหนด</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• โปรโมชั่นนี้สำหรับสมาชิกทุกท่าน</li>
              <li>• ต้องทำเทิร์นโอเวอร์ตามที่กำหนดก่อนถอนเงิน</li>
              <li>• ไม่สามารถใช้โปรโมชั่นร่วมกับโปรโมชั่นอื่นได้</li>
              <li>• บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรโมชั่นโดยไม่ต้องแจ้งให้ทราบล่วงหน้า</li>
              <li>• หากพบการทุจริตหรือผิดเงื่อนไข บริษัทขอสงวนสิทธิ์ยึดเงินและยกเลิกสมาชิก</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Promotions;
