import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, CreditCard, Clock, Lock, Headphones, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "เล่นผ่านมือถือ",
    description: "รองรับทุกระบบปฏิบัติการ iOS และ Android ไม่ต้องดาวน์โหลด",
  },
  {
    icon: CreditCard,
    title: "ฝาก-ถอน AUTO",
    description: "ระบบออโต้รวดเร็ว ไม่มีขั้นต่ำ ใช้เวลาไม่เกิน 30 วินาที",
  },
  {
    icon: Clock,
    title: "บริการ 24 ชั่วโมง",
    description: "มีทีมงานคอยดูแลและให้บริการตลอด 24 ชั่วโมง",
  },
  {
    icon: Lock,
    title: "ปลอดภัย 100%",
    description: "ระบบรักษาความปลอดภัยระดับธนาคาร มั่นคง น่าเชื่อถือ",
  },
  {
    icon: Headphones,
    title: "ซัพพอร์ตมืออาชีพ",
    description: "ทีมงานมืออาชีพพร้อมให้คำปรึกษาและช่วยเหลือทุกปัญหา",
  },
  {
    icon: TrendingUp,
    title: "อัตราจ่ายสูง",
    description: "อัตราการจ่ายเงินรางวัลสูงที่สุด จ่ายจริง จ่ายเต็ม",
  },
];

const Features = () => {
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-float">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
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

export default Features;
