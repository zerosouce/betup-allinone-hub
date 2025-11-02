import { Home, LogIn, UserPlus, Gift } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray border-t border-border md:hidden">
      <div className="grid grid-cols-4">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
            isActive('/') ? 'bg-primary' : 'hover:bg-muted'
          }`}
        >
          <Home className={`h-6 w-6 ${isActive('/') ? 'text-black' : 'text-foreground'}`} />
          <span className={`text-xs font-medium ${isActive('/') ? 'text-black' : 'text-foreground'}`}>หน้าหลัก</span>
        </Link>

        <Link 
          to="/login" 
          className={`flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
            isActive('/login') ? 'bg-primary' : 'hover:bg-muted'
          }`}
        >
          <LogIn className={`h-6 w-6 ${isActive('/login') ? 'text-black' : 'text-foreground'}`} />
          <span className={`text-xs font-medium ${isActive('/login') ? 'text-black' : 'text-foreground'}`}>เข้าสู่ระบบ</span>
        </Link>

        <Link 
          to="/register" 
          className={`flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
            isActive('/register') ? 'bg-primary' : 'hover:bg-muted'
          }`}
        >
          <UserPlus className={`h-6 w-6 ${isActive('/register') ? 'text-black' : 'text-foreground'}`} />
          <span className={`text-xs font-medium ${isActive('/register') ? 'text-black' : 'text-foreground'}`}>สมัครสมาชิก</span>
        </Link>

        <Link 
          to="/promotions" 
          className={`flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
            isActive('/promotions') ? 'bg-primary' : 'hover:bg-muted'
          }`}
        >
          <Gift className={`h-6 w-6 ${isActive('/promotions') ? 'text-black' : 'text-foreground'}`} />
          <span className={`text-xs font-medium ${isActive('/promotions') ? 'text-black' : 'text-foreground'}`}>โปรโมชั่น</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
