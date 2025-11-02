import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { FOOTER_CONTENT, SITE_CONFIG } from "@/config/content";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray to-black border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt={SITE_CONFIG.siteName} className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-4">
              {FOOTER_CONTENT.about.description}
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-[#06C755] rounded-lg">
                <span className="text-white text-sm font-bold">LINE: {SITE_CONFIG.contact.line}</span>
              </div>
              <div className="px-4 py-2 bg-[#0088cc] rounded-lg">
                <span className="text-white text-sm font-bold">Telegram: {SITE_CONFIG.contact.telegram}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold mb-4">เกมส์</h3>
            <ul className="space-y-2">
              {FOOTER_CONTENT.gameLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            {FOOTER_CONTENT.copyright}
          </p>
          <p className="text-muted-foreground text-xs">
            {FOOTER_CONTENT.legal}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
