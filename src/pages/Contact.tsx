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
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-black text-sm font-bold mb-6 animate-shimmer bg-[length:200%_100%]">
              <MessageCircle className="h-4 w-4" />
              ติดต่อเราได้ทุกช่องทาง
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4 animate-fade-in">
              ติดต่อเรา
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "150ms" }}>
              ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-[#06C755] hover:shadow-gold transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#06C755] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#06C755] opacity-10 rounded-bl-full"></div>
              
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="relative h-16 w-16 rounded-full bg-[#06C755] flex items-center justify-center mx-auto shadow-lg group-hover:animate-float">
                  <div className="absolute inset-0 rounded-full bg-[#06C755] animate-ping opacity-20"></div>
                  <MessageCircle className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">LINE</h3>
                <p className="text-2xl font-bold text-[#06C755]">@betup168</p>
                <Button className="w-full bg-[#06C755] text-white hover:bg-[#05b04b] shadow-lg hover:shadow-xl transition-all duration-300">
                  เพิ่มเพื่อน LINE
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-[#0088cc] hover:shadow-gold transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: "150ms" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#0088cc] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#0088cc] opacity-10 rounded-bl-full"></div>
              
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="relative h-16 w-16 rounded-full bg-[#0088cc] flex items-center justify-center mx-auto shadow-lg group-hover:animate-float">
                  <div className="absolute inset-0 rounded-full bg-[#0088cc] animate-pulse opacity-20"></div>
                  <svg className="h-8 w-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.359 4.997-.168.521-.5.695-.826.713-.701.031-1.232-.461-1.912-.902-.942-.611-1.477-.991-2.391-1.588-.992-.651-.349-1.008.217-1.591.148-.153 2.721-2.498 2.771-2.709.006-.027.012-.124-.046-.176-.058-.052-.144-.034-.206-.02-.087.02-1.474.937-4.164 2.751-.394.27-.751.402-1.07.394-.352-.008-1.03-.199-1.534-.363-.619-.201-1.11-.307-1.068-.648.022-.177.267-.359.735-.544 2.876-1.255 4.794-2.083 5.753-2.483 2.741-1.14 3.311-1.338 3.685-1.344.082-.001.265.019.384.117.1.082.128.193.141.27.013.078.03.254.017.392z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Telegram</h3>
                <p className="text-2xl font-bold text-[#0088cc]">@betup168</p>
                <Button className="w-full bg-[#0088cc] text-white hover:bg-[#0077b3] shadow-lg hover:shadow-xl transition-all duration-300">
                  ติดต่อ Telegram
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-primary hover:shadow-gold transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: "300ms" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-ping opacity-50"></div>
              
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="relative h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto shadow-gold group-hover:animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold animate-shimmer opacity-30 bg-[length:200%_100%]"></div>
                  <Phone className="h-8 w-8 text-black relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">โทรศัพท์</h3>
                <p className="text-lg font-bold text-primary">02-XXX-XXXX</p>
                <Button className="w-full bg-gradient-gold text-black hover:opacity-90 shadow-gold hover:shadow-xl transition-all duration-300">
                  โทรติดต่อ
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-secondary hover:shadow-red transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: "450ms" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-red opacity-10 rounded-bl-full"></div>
              
              {/* Floating particles */}
              <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-secondary rounded-full animate-ping opacity-50" style={{ animationDelay: "500ms" }}></div>
              
              <CardContent className="p-6 text-center space-y-4 relative z-10">
                <div className="relative h-16 w-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto shadow-red group-hover:animate-float">
                  <div className="absolute inset-0 rounded-full bg-secondary animate-pulse opacity-20"></div>
                  <Mail className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">อีเมล</h3>
                <p className="text-lg font-bold text-primary break-all">support@betup168.com</p>
                <Button className="w-full bg-gradient-red text-white hover:opacity-90 shadow-red hover:shadow-xl transition-all duration-300">
                  ส่งอีเมล
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Service Hours */}
          <Card className="group relative bg-gradient-to-br from-card via-muted to-card border-2 border-border hover:border-primary mb-12 overflow-hidden animate-fade-in" style={{ animationDelay: "600ms" }}>
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-gold opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                <div className="relative h-20 w-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold animate-ping opacity-20"></div>
                  <Clock className="h-10 w-10 text-black relative z-10 animate-pulse" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">เวลาทำการ</h3>
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    24 ชั่วโมง ทุกวัน
                  </p>
                </div>
              </div>
              <p className="text-center text-lg text-muted-foreground">
                ทีมงานพร้อมให้บริการและดูแลคุณตลอด 24 ชั่วโมง ไม่มีวันหยุด
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold">
                  ✓ ตอบเร็ว
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-bold">
                  ✓ บริการดี
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold">
                  ✓ แก้ปัญหาได้
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "750ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-gold bg-clip-text text-transparent mb-8">
              คำถามที่พบบ่อย
            </h2>
            
            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-primary hover:shadow-gold transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold group-hover:w-2 transition-all duration-300"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">💰</span>
                  ฝากเงินขั้นต่ำเท่าไหร่?
                </h3>
                <p className="text-muted-foreground">ฝากขั้นต่ำ <span className="text-primary font-bold">100 บาท</span> ระบบออโต้รวดเร็วภายใน 30 วินาที</p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-secondary hover:shadow-red transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-red group-hover:w-2 transition-all duration-300"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-secondary">⚡</span>
                  ถอนเงินใช้เวลานานไหม?
                </h3>
                <p className="text-muted-foreground">ถอนเงินออโต้ รวดเร็วภายใน <span className="text-primary font-bold">1-3 นาที</span> ไม่มีขั้นต่ำในการถอน</p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-primary hover:shadow-gold transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold group-hover:w-2 transition-all duration-300"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-primary">📱</span>
                  เล่นผ่านมือถือได้ไหม?
                </h3>
                <p className="text-muted-foreground">เล่นได้ทั้ง <span className="text-primary font-bold">iOS และ Android</span> ไม่ต้องดาวน์โหลดแอพ เล่นผ่านเว็บเบราว์เซอร์ได้เลย</p>
              </CardContent>
            </Card>

            <Card className="group relative bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-secondary hover:shadow-red transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-red group-hover:w-2 transition-all duration-300"></div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-secondary">🎁</span>
                  มีโบนัสอะไรบ้าง?
                </h3>
                <p className="text-muted-foreground">โบนัสสมาชิกใหม่ <span className="text-primary font-bold">100%</span> คืนยอดเสีย <span className="text-secondary font-bold">10%</span> และโปรโมชั่นอื่นๆ อีกมากมาย</p>
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
