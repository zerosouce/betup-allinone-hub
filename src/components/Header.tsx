import logo from "@/assets/logo.png";
import { Home, Gift, LogIn, UserPlus, Gamepad2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black">
      {/* Mobile Only: LINE@ Bar */}
      <div className="w-full bg-[#06C755] py-3 md:hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-xl font-bold tracking-wider">LINE@</h2>
        </div>
      </div>

      {/* Mobile Only: Telegram Bar */}
      <div className="w-full bg-[#D3E9F5] py-3 md:hidden">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[#0088cc] flex items-center justify-center">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.359 4.997-.168.521-.5.695-.826.713-.701.031-1.232-.461-1.912-.902-.942-.611-1.477-.991-2.391-1.588-.992-.651-.349-1.008.217-1.591.148-.153 2.721-2.498 2.771-2.709.006-.027.012-.124-.046-.176-.058-.052-.144-.034-.206-.02-.087.02-1.474.937-4.164 2.751-.394.27-.751.402-1.07.394-.352-.008-1.03-.199-1.534-.363-.619-.201-1.11-.307-1.068-.648.022-.177.267-.359.735-.544 2.876-1.255 4.794-2.083 5.753-2.483 2.741-1.14 3.311-1.338 3.685-1.344.082-.001.265.019.384.117.1.082.128.193.141.27.013.078.03.254.017.392z"/>
            </svg>
          </div>
          <span className="text-[#0088cc] text-lg font-bold">@BETUP168</span>
        </div>
      </div>

      {/* Mobile Only: Logo & Menu Grid */}
      <div className="w-full bg-gradient-to-b from-gray to-black py-6 md:hidden">
        <div className="container mx-auto px-4">
          {/* Logo & LINE ID */}
          <div className="flex items-center justify-between mb-6 bg-[#1a3d3d] rounded-lg p-4">
            <img src={logo} alt="BETUP168" className="h-16 w-auto" />
            <div className="text-right">
              <span className="text-primary text-sm">LINE ID : </span>
              <span className="text-primary text-lg font-bold">@betup168</span>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-3 gap-2">
            <Link to="/" className="flex flex-col items-center justify-center gap-2 bg-[#1a3d3d] hover:bg-[#2a4d4d] transition-colors rounded-lg py-4 border border-[#2a4d4d]">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-foreground text-sm font-medium">หน้าหลัก</span>
            </Link>

            <Link to="/promotions" className="flex flex-col items-center justify-center gap-2 bg-[#1a3d3d] hover:bg-[#2a4d4d] transition-colors rounded-lg py-4 border border-[#2a4d4d]">
              <Gift className="h-6 w-6 text-primary" />
              <span className="text-foreground text-sm font-medium">โปรโมชั่น</span>
            </Link>

            <Link to="/login" className="flex flex-col items-center justify-center gap-2 bg-[#1a3d3d] hover:bg-[#2a4d4d] transition-colors rounded-lg py-4 border border-[#2a4d4d]">
              <LogIn className="h-6 w-6 text-primary" />
              <span className="text-foreground text-sm font-medium">เข้าสู่ระบบ</span>
            </Link>

            <Link to="/register" className="flex flex-col items-center justify-center gap-2 bg-gradient-red hover:opacity-90 transition-opacity rounded-lg py-4">
              <UserPlus className="h-6 w-6 text-white" />
              <span className="text-white text-sm font-bold">สมัครสมาชิก</span>
            </Link>

            <Link to="/demo" className="flex flex-col items-center justify-center gap-2 bg-[#1a3d3d] hover:bg-[#2a4d4d] transition-colors rounded-lg py-4 border border-[#2a4d4d]">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="text-foreground text-sm font-medium">ทดลองเล่น</span>
            </Link>

            <Link to="/contact" className="flex flex-col items-center justify-center gap-2 bg-[#1a3d3d] hover:bg-[#2a4d4d] transition-colors rounded-lg py-4 border border-[#2a4d4d]">
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-foreground text-sm font-medium">ติดต่อเรา</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: Standard Header */}
      <div className="hidden md:block border-b border-border bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Link to="/">
                <img src={logo} alt="BETUP168" className="h-12 w-auto" />
              </Link>
              
              <nav className="flex items-center gap-6">
                <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  หน้าหลัก
                </Link>
                <Link to="/promotions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  โปรโมชั่น
                </Link>
                <Link to="/demo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  ทดลองเล่น
                </Link>
                <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  ติดต่อเรา
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  เข้าสู่ระบบ
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-gradient-red text-white hover:opacity-90 shadow-red">
                  สมัครสมาชิก
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-border py-2 flex items-center justify-center gap-4 text-sm">
            <span className="text-muted-foreground">ติดต่อเรา:</span>
            <span className="text-[#06C755]">LINE: @betup168</span>
            <span className="text-[#0088cc]">Telegram: @betup168</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
