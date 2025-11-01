import { Home, LogIn, UserPlus, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a3d3d] border-t border-[#2a4d4d] md:hidden">
      <div className="grid grid-cols-4">
        <Link 
          to="/" 
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#2a4d4d] transition-colors"
        >
          <Home className="h-6 w-6 text-foreground" />
          <span className="text-foreground text-xs font-medium">หน้าหลัก</span>
        </Link>

        <Link 
          to="/login" 
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#2a4d4d] transition-colors"
        >
          <LogIn className="h-6 w-6 text-foreground" />
          <span className="text-foreground text-xs font-medium">เข้าสู่ระบบ</span>
        </Link>

        <Link 
          to="/register" 
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#2a4d4d] transition-colors"
        >
          <UserPlus className="h-6 w-6 text-foreground" />
          <span className="text-foreground text-xs font-medium">สมัครสมาชิก</span>
        </Link>

        <Link 
          to="/promotions" 
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-[#2a4d4d] transition-colors"
        >
          <Gift className="h-6 w-6 text-foreground" />
          <span className="text-foreground text-xs font-medium">โปรโมชั่น</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
