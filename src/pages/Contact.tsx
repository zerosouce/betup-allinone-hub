import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray to-black pb-20 md:pb-0">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              ติดต่อเรา
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card border-border hover:border-[#06C755] hover:shadow-gold transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#06C755] flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">LINE</h3>
                <p className="text-2xl font-bold text-[#06C755]">@betup168</p>
                <Button className="w-full bg-[#06C755] text-white hover:bg-[#05b04b]">
                  เพิ่มเพื่อน LINE
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-[#0088cc] hover:shadow-gold transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#0088cc] flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.359 4.997-.168.521-.5.695-.826.713-.701.031-1.232-.461-1.912-.902-.942-.611-1.477-.991-2.391-1.588-.992-.651-.349-1.008.217-1.591.148-.153 2.721-2.498 2.771-2.709.006-.027.012-.124-.046-.176-.058-.052-.144-.034-.206-.02-.087.02-1.474.937-4.164 2.751-.394.27-.751.402-1.07.394-.352-.008-1.03-.199-1.534-.363-.619-.201-1.11-.307-1.068-.648.022-.177.267-.359.735-.544 2.876-1.255 4.794-2.083 5.753-2.483 2.741-1.14 3.311-1.338 3.685-1.344.082-.001.265.019.384.117.1.082.128.193.141.27.013.078.03.254.017.392z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Telegram</h3>
                <p className="text-2xl font-bold text-[#0088cc]">@betup168</p>
                <Button className="w-full bg-[#0088cc] text-white hover:bg-[#0077b3]">
                  ติดต่อ Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary hover:shadow-gold transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto">
                  <Phone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-foreground">โทรศัพท์</h3>
                <p className="text-lg font-bold text-primary">02-XXX-XXXX</p>
                <Button className="w-full bg-gradient-gold text-black hover:opacity-90">
                  โทรติดต่อ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary hover:shadow-gold transition-all">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">อีเมล</h3>
                <p className="text-lg font-bold text-primary break-all">support@betup168.com</p>
                <Button className="w-full bg-gradient-red text-white hover:opacity-90">
                  ส่งอีเมล
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Service Hours */}
          <Card className="bg-card border-border mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">เวลาทำการ</h3>
                  <p className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                    24 ชั่วโมง ทุกวัน
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                ทีมงานพร้อมให้บริการและดูแลคุณตลอด 24 ชั่วโมง ไม่มีวันหยุด
              </p>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center bg-gradient-gold bg-clip-text text-transparent mb-8">
              คำถามที่พบบ่อย
            </h2>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">ฝากเงินขั้นต่ำเท่าไหร่?</h3>
                <p className="text-muted-foreground">ฝากขั้นต่ำ 100 บาท ระบบออโต้รวดเร็วภายใน 30 วินาที</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">ถอนเงินใช้เวลานานไหม?</h3>
                <p className="text-muted-foreground">ถอนเงินออโต้ รวดเร็วภายใน 1-3 นาที ไม่มีขั้นต่ำในการถอน</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">เล่นผ่านมือถือได้ไหม?</h3>
                <p className="text-muted-foreground">เล่นได้ทั้ง iOS และ Android ไม่ต้องดาวน์โหลดแอพ เล่นผ่านเว็บเบราว์เซอร์ได้เลย</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">มีโบนัสอะไรบ้าง?</h3>
                <p className="text-muted-foreground">โบนัสสมาชิกใหม่ 100% คืนยอดเสีย 10% และโปรโมชั่นอื่นๆ อีกมากมาย</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Contact;
