import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray to-black pb-20 md:pb-0">
      <Header />
      
      <main className="py-12 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-card border-border">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-red flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                สมัครสมาชิก
              </CardTitle>
              <p className="text-muted-foreground">
                สมัครฟรี รับโบนัสทันที 100%
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reg-username" className="text-foreground">ชื่อผู้ใช้ *</Label>
                  <Input 
                    id="reg-username" 
                    placeholder="ตัวอักษรภาษาอังกฤษและตัวเลข 6-12 ตัว" 
                    className="bg-muted border-border text-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="reg-password" className="text-foreground">รหัสผ่าน *</Label>
                  <Input 
                    id="reg-password" 
                    type="password" 
                    placeholder="รหัสผ่าน 6-12 ตัว"
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-confirm-password" className="text-foreground">ยืนยันรหัสผ่าน *</Label>
                  <Input 
                    id="reg-confirm-password" 
                    type="password" 
                    placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-phone" className="text-foreground">เบอร์โทรศัพท์ *</Label>
                  <Input 
                    id="reg-phone" 
                    type="tel" 
                    placeholder="0812345678"
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-bank" className="text-foreground">ธนาคาร *</Label>
                  <select 
                    id="reg-bank"
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground"
                  >
                    <option value="">เลือกธนาคาร</option>
                    <option value="kbank">ธนาคารกสิกรไทย</option>
                    <option value="scb">ธนาคารไทยพาณิชย์</option>
                    <option value="bbl">ธนาคารกรุงเทพ</option>
                    <option value="ktb">ธนาคารกรุงไทย</option>
                    <option value="bay">ธนาคารกรุงศรีอยุธยา</option>
                    <option value="tmb">ธนาคารทหารไทยธนชาต</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-account" className="text-foreground">เลขที่บัญชี *</Label>
                  <Input 
                    id="reg-account" 
                    placeholder="เลขที่บัญชีธนาคาร"
                    className="bg-muted border-border text-foreground"
                  />
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="mt-1 rounded" required />
                  <label className="text-muted-foreground">
                    ฉันยอมรับ <a href="#" className="text-primary hover:underline">ข้อกำหนดและเงื่อนไข</a> และ{" "}
                    <a href="#" className="text-primary hover:underline">นโยบายความเป็นส่วนตัว</a>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-gradient-red text-white hover:opacity-90 shadow-red text-lg py-6">
                สมัครสมาชิก
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                มีบัญชีอยู่แล้ว?{" "}
                <Link to="/login" className="text-primary hover:underline font-bold">
                  เข้าสู่ระบบ
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

export default Register;
