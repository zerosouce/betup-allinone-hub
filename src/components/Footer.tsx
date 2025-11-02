import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="BETUP168" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground">
              เว็บคาสิโนออนไลน์อันดับ 1 ของไทย ให้บริการตลอด 24 ชั่วโมง
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">เมนูหลัก</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">หน้าหลัก</a></li>
              <li><a href="#promotions" className="hover:text-primary transition-colors">โปรโมชั่น</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">ทดลองเล่น</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">เกมยอดนิยม</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">บาคาร่าออนไลน์</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">สล็อตออนไลน์</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">แทงบอลออนไลน์</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">หวยออนไลน์</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>LINE: <span className="text-[#06C755]">@betup168</span></li>
              <li>Telegram: <span className="text-[#0088cc]">@betup168</span></li>
              <li>Email: support@betup168.com</li>
              <li>บริการตลอด 24 ชั่วโมง</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2024 BETUP168.COM - All Rights Reserved
          </p>
          <p className="text-xs text-muted-foreground">
            เว็บพนันออนไลน์ที่ดีที่สุด ฝาก-ถอนออโต้ รวดเร็วทันใจ ปลอดภัย 100%
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">เงื่อนไขการใช้งาน</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">เกี่ยวกับเรา</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
