import logo from "@/assets/logo.png";
import { Home, Gift, LogIn, UserPlus, Gamepad2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-black">
      {/* Mobile Only: LINE@ Bar */}
      <div className="w-full bg-[#06C755] py-2 md:hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-lg font-bold tracking-wider">LINE@</h2>
        </div>
      </div>

      {/* Mobile Only: Telegram Bar */}
      <div className="w-full bg-[#D3E9F5] py-2 md:hidden">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <div className="h-10 w-10 rounded-full bg-[#0088cc] flex items-center justify-center">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.359 4.997-.168.521-.5.695-.826.713-.701.031-1.232-.461-1.912-.902-.942-.611-1.477-.991-2.391-1.588-.992-.651-.349-1.008.217-1.591.148-.153 2.721-2.498 2.771-2.709.006-.027.012-.124-.046-.176-.058-.052-.144-.034-.206-.02-.087.02-1.474.937-4.164 2.751-.394.27-.751.402-1.07.394-.352-.008-1.03-.199-1.534-.363-.619-.201-1.11-.307-1.068-.648.022-.177.267-.359.735-.544 2.876-1.255 4.794-2.083 5.753-2.483 2.741-1.14 3.311-1.338 3.685-1.344.082-.001.265.019.384.117.1.082.128.193.141.27.013.078.03.254.017.392z" />
            </svg>
          </div>
          <span className="text-[#0088cc] text-base font-bold">@BETUP168</span>
        </div>
      </div>

      {/* Mobile Only: Logo & Menu Grid */}
      <div className="w-full bg-gradient-to-b from-gray to-black py-4 md:hidden">
        <div className="container mx-auto px-4">
          {/* Logo & LINE ID */}
          <div className="flex items-center justify-between mb-4 bg-gray rounded-lg p-3">
            <img src={logo} alt="BETUP168" className="h-16 w-auto" />
            <div className="text-right">
              <span className="text-primary text-xs">LINE ID : </span>
              <span className="text-primary text-base font-bold">@betup168</span>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-1.5 bg-gray hover:bg-muted transition-colors rounded-lg py-3 border border-border"
            >
              <Home className="h-5 w-5 text-primary" />
              <span className="text-foreground text-xs font-medium">หน้าหลัก</span>
            </Link>

            <Link
              to="/promotions"
              className="flex flex-col items-center justify-center gap-1.5 bg-gray hover:bg-muted transition-colors rounded-lg py-3 border border-border"
            >
              <Gift className="h-5 w-5 text-primary" />
              <span className="text-foreground text-xs font-medium">โปรโมชั่น</span>
            </Link>

            <Link
              to="/login"
              className="flex flex-col items-center justify-center gap-1.5 bg-gray hover:bg-muted transition-colors rounded-lg py-3 border border-border"
            >
              <LogIn className="h-5 w-5 text-primary" />
              <span className="text-foreground text-xs font-medium">เข้าสู่ระบบ</span>
            </Link>

            <Link
              to="/register"
              className="flex flex-col items-center justify-center gap-1.5 bg-gradient-red hover:opacity-90 transition-opacity rounded-lg py-3"
            >
              <UserPlus className="h-5 w-5 text-white" />
              <span className="text-white text-xs font-bold">สมัครสมาชิก</span>
            </Link>

            <Link
              to="/demo"
              className="flex flex-col items-center justify-center gap-1.5 bg-gray hover:bg-muted transition-colors rounded-lg py-3 border border-border"
            >
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span className="text-foreground text-xs font-medium">ทดลองเล่น</span>
            </Link>

            <Link
              to="/contact"
              className="flex flex-col items-center justify-center gap-1.5 bg-gray hover:bg-muted transition-colors rounded-lg py-3 border border-border"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground text-xs font-medium">ติดต่อเรา</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: Standard Header */}
      <div className="hidden md:block bg-gradient-to-b from-gray to-black sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          {/* Top Section: Promo Box + Logo */}
          <div className="flex items-center justify-between mb-6">
            {/* Left: Auto Deposit/Withdraw Box */}
            <div className="border-4 border-primary bg-black px-6 py-4 rounded-md">
              <div className="text-primary text-lg font-bold leading-tight">ระบบฝาก-ถอน ออโต้</div>
              <div className="text-primary text-base font-medium">30 วินาทีเท่านั้น</div>
            </div>

            {/* Center: Large Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="BETUP168" className="h-32 w-auto" />
            </Link>

            {/* Right: Contact Info */}
            <div className="text-right space-y-1">
              <div className="text-[#06C755] text-sm font-medium">LINE: @betup168</div>
              <div className="text-[#0088cc] text-sm font-medium">Telegram: @betup168</div>
            </div>
          </div>

          {/* Bottom Section: Navigation Menu */}
          <div className="flex items-center justify-center gap-3">
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray border-primary text-foreground hover:bg-primary hover:text-black min-w-[120px]"
              >
                <Home className="h-4 w-4 mr-1" />
                หน้าหลัก
              </Button>
            </Link>
            <Link to="/promotions">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray border-primary text-foreground hover:bg-primary hover:text-black min-w-[120px]"
              >
                <Gift className="h-4 w-4 mr-1" />
                โปรโมชั่น
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray border-primary text-foreground hover:bg-primary hover:text-black min-w-[120px]"
              >
                <LogIn className="h-4 w-4 mr-1" />
                เข้าสู่ระบบ
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-red text-white hover:opacity-90 shadow-red min-w-[120px]">
                <UserPlus className="h-4 w-4 mr-1" />
                สมัครสมาชิก
              </Button>
            </Link>
            <Link to="/demo">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray border-primary text-foreground hover:bg-primary hover:text-black min-w-[120px]"
              >
                <Gamepad2 className="h-4 w-4 mr-1" />
                ทดลองเล่น
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className="bg-gray border-primary text-foreground hover:bg-primary hover:text-black min-w-[120px]"
              >
                <Phone className="h-4 w-4 mr-1" />
                ติดต่อเรา
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
