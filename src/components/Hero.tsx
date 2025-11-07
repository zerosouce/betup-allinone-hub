import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray to-black py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIxMiwgMTc1LCA1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-black text-sm font-bold animate-shimmer bg-[length:200%_100%]">
            <Sparkles className="h-4 w-4" />
            เว็บคาสิโนออนไลน์อันดับ 1 ของไทย
          </div>

          {/* Main Heading */}

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent leading-tight">
            BETUP168
          </h1>

          <p className="text-2xl md:text-3xl text-foreground font-medium">คาสิโนออนไลน์ครบวงจร ทุกค่ายเกมดัง</p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            บาคาร่า สล็อต รูเล็ต แทงบอล หวย | ฝาก-ถอน AUTO ไม่มีขั้นต่ำ | บริการตลอด 24 ชั่วโมง
          </p>
          <Link to="/register">
            
          </Link>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-red text-white hover:opacity-90 shadow-red text-lg px-8 py-6 font-bold">
                สมัครสมาชิก ฟรี
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-bold">
                ทดลองเล่นฟรี
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {/* Feature 1 - ฝาก-ถอน AUTO */}
            <div className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-gold hover:scale-105 animate-fade-in overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
              
              {/* Icon with animation */}
              <div className="relative h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-gold animate-ping opacity-20"></div>
                <Zap className="h-8 w-8 text-black relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              
              <div className="text-center space-y-2 relative z-10">
                <h3 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  ฝาก-ถอน AUTO
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-foreground font-medium">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                    0 บาท
                  </span>
                  ขั้นต่ำ
                </div>
                <p className="text-sm text-muted-foreground">รวดเร็วใน 30 วินาที ⚡</p>
              </div>
            </div>

            {/* Feature 2 - ปลอดภัย 100% */}
            <div className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-secondary transition-all duration-500 hover:shadow-red hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: "150ms" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-red opacity-10 rounded-bl-full"></div>
              
              {/* Icon with animation */}
              <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-red group-hover:animate-float">
                <div className="absolute inset-0 rounded-full bg-secondary animate-pulse opacity-20"></div>
                <Shield className="h-8 w-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="text-center space-y-2 relative z-10">
                <h3 className="text-xl font-bold bg-gradient-red bg-clip-text text-transparent">
                  ปลอดภัย 100%
                </h3>
                <div className="flex items-center justify-center gap-1 text-sm">
                  <span className="text-secondary">★★★★★</span>
                </div>
                <p className="text-sm text-muted-foreground">ระบบมาตรฐานสากล 🛡️</p>
              </div>
            </div>

            {/* Feature 3 - โบนัสเพียบ */}
            <div className="group relative flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-card via-card to-muted border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-gold hover:scale-105 animate-fade-in overflow-hidden" style={{ animationDelay: "300ms" }}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-ping opacity-50"></div>
              <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-50" style={{ animationDelay: "500ms" }}></div>
              
              {/* Icon with animation */}
              <div className="relative h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-gold animate-shimmer opacity-30 bg-[length:200%_100%]"></div>
                <Sparkles className="h-8 w-8 text-black relative z-10 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              
              <div className="text-center space-y-2 relative z-10">
                <h3 className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  โบนัสเพียบ
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary text-black text-xs font-bold animate-pulse">
                    NEW
                  </span>
                  <span className="text-sm text-foreground font-medium">ทุกวัน</span>
                </div>
                <p className="text-sm text-muted-foreground">โปรโมชั่นสุดคุ้ม 🎁</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;