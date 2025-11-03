import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import promoWelcome from "@/assets/promotions/promo-welcome.png";
import promoCashback from "@/assets/promotions/promo-cashback.png";
import promoVip from "@/assets/promotions/promo-vip.png";
import promoDaily from "@/assets/promotions/promo-daily.png";

const promotions = [
  {
    image: promoWelcome,
    title: "สมาชิกใหม่รับโบนัส 100%",
    description: "รับโบนัสสูงสุด 100 บาท",
    amount: "เทิร์น 20 เท่า",
  },
  {
    image: promoDaily,
    title: "ฝากครั้งแรกของวันรับโบนัส 20%",
    description: "รับโบนัสสูงสุด 1,000 บาท",
    amount: "เทิร์น 20 เท่า",
  },
  {
    image: promoCashback,
    title: "คืนยอดเสีย 3% ทุกวัน",
    description: "สูงสุด 1,000 บาท",
    amount: "เทิร์น 1 เท่า",
  },
  {
    image: promoVip,
    title: "แนะนำเพื่อนรับคอมมิชชั่น 0.8%",
    description: "รับค่าคอมมิชชั่นจากยอดเล่นของเพื่อน",
    amount: "เทิร์น 1 เท่า",
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
          <p className="text-lg text-muted-foreground">รับโบนัสและสิทธิพิเศษมากมาย สำหรับสมาชิกทุกท่าน</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="group hover:shadow-gold transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border hover:border-primary overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{promo.description}</p>
                  <p className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">{promo.amount}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/promotions">
            <Button
              size="lg"
              className="bg-gradient-red text-white hover:opacity-90 shadow-red text-lg px-12 py-6 font-bold"
            >
              ดูโปรโมชั่นทั้งหมด
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
