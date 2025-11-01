import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray to-black pb-20 md:pb-0">
      <Header />
      
      <main className="py-12 flex items-center justify-center min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center">
                <LogIn className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                เข้าสู่ระบบ
              </CardTitle>
              <p className="text-muted-foreground">
                เข้าสู่ระบบเพื่อเริ่มเล่นและรับโบนัส
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-foreground">ชื่อผู้ใช้</Label>
                  <Input 
                    id="username" 
                    placeholder="กรอกชื่อผู้ใช้" 
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">รหัสผ่าน</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="กรอกรหัสผ่าน"
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    จดจำฉันไว้
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    ลืมรหัสผ่าน?
                  </a>
                </div>
              </div>

              <Button className="w-full bg-gradient-red text-white hover:opacity-90 shadow-red text-lg py-6">
                เข้าสู่ระบบ
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                ยังไม่มีบัญชี?{" "}
                <Link to="/register" className="text-primary hover:underline font-bold">
                  สมัครสมาชิก
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">หรือติดต่อเรา</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-[#06C755] text-[#06C755] hover:bg-[#06C755] hover:text-white">
                  LINE
                </Button>
                <Button variant="outline" className="border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white">
                  Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Login;
