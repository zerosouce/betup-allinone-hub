import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray to-black py-20">
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
            <img src="https://sagame66q.com/wp-content/uploads/2025/06/sagame66.jpg"></img>
          </Link>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-red text-white hover:opacity-90 shadow-red text-lg px-8 py-6 font-bold"
              >
                สมัครสมาชิก ฟรี
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-bold"
              >
                ทดลองเล่นฟรี
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-foreground">ฝาก-ถอน AUTO</h3>
              <p className="text-sm text-muted-foreground">ไม่มีขั้นต่ำ รวดเร็วใน 30 วินาที</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-foreground">ปลอดภัย 100%</h3>
              <p className="text-sm text-muted-foreground">ระบบรักษาความปลอดภัยระดับสากล</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
              <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-bold text-foreground">โบนัสเพียบ</h3>
              <p className="text-sm text-muted-foreground">โปรโมชั่นสุดคุ้มทุกวัน</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
