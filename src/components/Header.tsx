import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-8">
            <img src={logo} alt="BETUP168" className="h-12 w-auto" />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                หน้าหลัก
              </a>
              <a href="#promotions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                โปรโมชั่น
              </a>
              <a href="#demo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ทดลองเล่น
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                ติดต่อเรา
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              เข้าสู่ระบบ
            </Button>
            <Button size="sm" className="hidden sm:flex bg-gradient-red text-white hover:opacity-90 shadow-red">
              สมัครสมาชิก
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-border py-2 flex items-center justify-center gap-4 text-sm">
          <span className="text-muted-foreground">ติดต่อเรา:</span>
          <Button variant="ghost" size="sm" className="text-[#06C755] hover:text-[#06C755] hover:bg-[#06C755]/10">
            LINE: @betup168
          </Button>
          <Button variant="ghost" size="sm" className="text-[#0088cc] hover:text-[#0088cc] hover:bg-[#0088cc]/10">
            Telegram: @betup168
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            <a href="#home" className="block py-2 text-sm font-medium text-foreground hover:text-primary">
              หน้าหลัก
            </a>
            <a href="#promotions" className="block py-2 text-sm font-medium text-foreground hover:text-primary">
              โปรโมชั่น
            </a>
            <a href="#demo" className="block py-2 text-sm font-medium text-foreground hover:text-primary">
              ทดลองเล่น
            </a>
            <a href="#contact" className="block py-2 text-sm font-medium text-foreground hover:text-primary">
              ติดต่อเรา
            </a>
            <div className="pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full border-primary text-primary">
                เข้าสู่ระบบ
              </Button>
              <Button size="sm" className="w-full bg-gradient-red text-white">
                สมัครสมาชิก
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
