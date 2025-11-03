import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import promoWelcome from "@/assets/promotions/promo-welcome.png";
import promoCashback from "@/assets/promotions/promo-cashback.png";
import promoVip from "@/assets/promotions/promo-vip.png";
import promoDaily from "@/assets/promotions/promo-daily.png";
import promoReferral from "@/assets/promotions/promo-referral.png";
import promoTurnover from "@/assets/promotions/promo-turnover.png";

const promotions = [
  {
    image: promoDaily,
    title: "ฝากเงินครั้งแรกของวันรับโบนัส 20%",
    description: "รับโบนัสสูงสุด 1000 บาท ทำยอดเทิร์นโอเวอร์ 20 เท่า",
    amount: "สูงสุด 1,000 บาท",
    details: "*หากพบว่ามีการสร้างหลาย user เพื่อแทงสวนหรือเก็บฟรีสปินเพื่อทำ bug ของเกมที่มีโบนัสฟรีเกมส์ ทางทีมงานจะระงับการจ่ายเงินทุกกรณี !! หากทางทีมงานตรวจสอบว่าการเล่นของลูกค้ามีลักษณะผิดปกติหรือไม่โปร่งใสทางเราจะขอสงวนสิทธ์ในการให้โปรโมชั่นนี้ทันที",
  },
  {
    image: promoWelcome,
    title: "สมาชิกใหม่รับโบนัส 100%",
    description: "รับโบนัสสูงสุด 100 บาท ทำยอดเทิร์นโอเวอร์ 20 เท่า",
    amount: "สูงสุด 100 บาท",
    details: "*หากพบว่ามีการสร้างหลาย user เพื่อแทงสวนหรือเก็บฟรีสปินเพื่อทำ bug ของเกมที่มีโบนัสฟรีเกมส์ ทางทีมงานจะระงับการจ่ายเงินทุกกรณี !! หากทางทีมงานตรวจสอบว่าการเล่นของลูกค้ามีลักษณะผิดปกติหรือไม่โปร่งใสทางเราจะขอสงวนสิทธ์ในการให้โปรโมชั่นนี้ทันที",
  },
  {
    image: promoWelcome,
    title: "สมาชิกใหม่รับโบนัส 60%",
    description: "รับโบนัสสูงสุด 1000 บาท ทำยอดเทิร์นโอเวอร์ 20 เท่า",
    amount: "สูงสุด 1,000 บาท",
    details: "*หากพบว่ามีการสร้างหลาย user เพื่อแทงสวนหรือเก็บฟรีสปินเพื่อทำ bug ของเกมที่มีโบนัสฟรีเกมส์ ทางทีมงานจะระงับการจ่ายเงินทุกกรณี !! หากทางทีมงานตรวจสอบว่าการเล่นของลูกค้ามีลักษณะผิดปกติหรือไม่โปร่งใสทางเราจะขอสงวนสิทธ์ในการให้โปรโมชั่นนี้ทันที",
  },
  {
    image: promoWelcome,
    title: "ต้อนรับสมาชิกใหม่ แจกเครดิตฟรี 50 บาท",
    description: "แจกเครดิตฟรี 50 บาท สำหรับลูกค้าใหม่วันละ 50 user แจกทุกวัน",
    amount: "เครดิตฟรี 50 บาท",
    details: "ทำยอดถึง 1000 เครดิต ถอนเงินได้ 100 บาท ทันที *หากพบว่ามีการสร้างหลาย user เพื่อแทงสวนหรือเก็บฟรีสปินเพื่อทำ bug ของเกมที่มีโบนัสฟรีเกมส์ ทางทีมงานจะระงับการจ่ายเงินทุกกรณี !! หากทางทีมงานตรวจสอบว่าการเล่นของลูกค้ามีลักษณะผิดปกติหรือไม่โปร่งใสทางเราจะขอสงวนสิทธ์ในการให้โปรโมชั่นนี้ทันที",
  },
  {
    image: promoVip,
    title: "โปรวันเกิด! เกิดปุ๊บ..รับปั๊บ 500 บาททันที",
    description: "เมื่อถึงวันเกิดของท่าน เพียงแค่ท่านโชว์บัตรประชาชนให้ทีมงานรับทันทีเครดิต 500 บาท",
    amount: "500 บาท",
    details: "ทำยอดเทิร์นโอเวอร์ 2 เท่า *ท่านต้องมียอดฝากเงินและยอดได้เสีย รวมเกิน 1000 บาท ถึงจะรับโปรนี้ได้ - ทางเว็บขอสงวนสิทธิ์ให้กับผู้ที่เป็นสมาชิกเกิน 15 วันขึ้นไป - ต้องมียอดเทิร์นโอเวอร์รวมเกิน 1000 บาทขึ้นไป ** ทางเว็บมีสิทธิ์ในการตรวจสอบกับค่ายเกมส์ และหากพบเจอผู้เล่นที่มีเจตนาปั้มยอดเทิร์นด้วยวิธีการใดก็ตามทางเว็บไซต์ขอสงวนสิทธิ์ในการให้โบนัสทุกกรณี",
  },
  {
    image: promoDaily,
    title: "เปิดไพ่เสี่ยงโชค...ลุ้นเงินล้านทุกวัน",
    description: "เปิดไพ่เสี่ยงโชควันละครั้งแจกเงินทุกวันสูงสุดวันละ 5,000,000 บาท",
    amount: "สูงสุด 5 ล้านบาท",
    details: "ทำยอดเทิร์นโอเวอร์ 2 เท่า *กดรับได้วันละครั้งเท่านั้น!",
  },
  {
    image: promoDaily,
    title: "ปั่นกงล้อเสี่ยงโชค...ลุ้นเงินทองทุกวัน",
    description: "เพียงแค่คุณมียอดเสียต่อวัน 1000 บาท ขึ้นไปสามารถหมุนกงล้อได้ในวันถัดไป",
    amount: "ยิ่งเสียเยอะรางวัลยิ่งเยอะ",
    details: "ทำยอดเทิร์นโอเวอร์ 2 เท่า *กดรับได้วันละครั้งเท่านั้น!",
  },
  {
    image: promoReferral,
    title: "แนะนำเพื่อนรับค่าคอมมิชชั่น 0.8% ทันที",
    description: "เพียงแค่ท่านชวนเพื่อนครั้งเดียว รับค่าคอมมิชชั่นจากยอดเล่นของเพื่อน",
    amount: "เดือนละ 100,000 บาท",
    details: "ทำยอดเทิร์นโอเวอร์ 1 เท่า *คำนวณทุกวันหลังเที่ยงคืน *ห้ามซื้อฟรีสปิน *นับเฉพาะยอดฝากที่ไม่รับโบนัส*",
  },
  {
    image: promoCashback,
    title: "คืนยอดเสีย 3% ทุกวัน",
    description: "เครมยอดเสียคืนทุกวัน 3% สูงสุด 1000 บาท",
    amount: "สูงสุด 1,000 บาท",
    details: "ทำยอดเทิร์นโอเวอร์ 1 เท่า *คำนวณทุกวันหลังเที่ยงคืน *ค่าคอมมิชชั่นและยอดเสียสามารถเลือกรับได้อย่างเดียวเท่านั้น *ห้ามซื้อฟรีสปิน *นับเฉพาะยอดฝากที่ไม่รับโบนัส*",
  },
  {
    image: promoTurnover,
    title: "รับคอมมิชชั่น 0.3% ทุกวัน",
    description: "รับคอมมิชชั่น 0.3% ทุกวัน ระบบนับจากยอดเล่น",
    amount: "เทิร์น 1 เท่า",
    details: "ทำยอดเทิร์นโอเวอร์ 1 เท่า *คำนวณทุกวันหลังเที่ยงคืน *ค่าคอมมิชชั่นและยอดเสียสามารถเลือกรับได้อย่างเดียวเท่านั้น *ห้ามซื้อฟรีสปิน *นับเฉพาะยอดฝากที่ไม่รับโบนัส*",
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
            {promotions.map((promo, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary overflow-hidden"
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
                   <div className="p-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {promo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {promo.description}
                    </p>
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                      {promo.amount}
                    </p>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {promo.details}
                      </p>
                    </div>
                    <Button className="w-full bg-gradient-red text-white hover:opacity-90 font-bold">
                      รับโปรโมชั่น
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Terms Section */}
          <div className="mt-12 p-6 md:p-8 bg-card border border-border rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">เงื่อนไขและข้อกำหนดทั่วไป</h3>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <li>• โปรโมชั่นทั้งหมดสำหรับสมาชิกที่มีการใช้งานจริง</li>
              <li>• ต้องทำยอดเทิร์นโอเวอร์ตามที่กำหนดในแต่ละโปรโมชั่นก่อนถอนเงิน</li>
              <li>• ไม่สามารถใช้โปรโมชั่นร่วมกับโปรโมชั่นอื่นได้ ยกเว้นที่ระบุไว้</li>
              <li>• หากพบว่ามีการสร้างหลาย user เพื่อแทงสวนหรือเก็บฟรีสปินเพื่อทำ bug ของเกมที่มีโบนัสฟรีเกมส์ ทางทีมงานจะระงับการจ่ายเงินทุกกรณี</li>
              <li>• หากทางทีมงานตรวจสอบว่าการเล่นของลูกค้ามีลักษณะผิดปกติหรือไม่โปร่งใส ทางเราจะขอสงวนสิทธ์ในการให้โปรโมชั่นนี้ทันที</li>
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
