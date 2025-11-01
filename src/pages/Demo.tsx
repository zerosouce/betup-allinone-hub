import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Play } from "lucide-react";

const games = [
  {
    title: "บาคาร่า SA Gaming",
    description: "เกมบาคาร่ายอดนิยม กราฟิกสวย เดิมพันเริ่มต้น 10 บาท",
    category: "บาคาร่า",
  },
  {
    title: "สล็อต Sweet Bonanza",
    description: "สล็อตแตกง่าย แจ็คพอตแตกบ่อย",
    category: "สล็อต",
  },
  {
    title: "บาคาร่า Sexy Gaming",
    description: "ดีลเลอร์สาวสวย บรรยากาศคาสิโนแท้",
    category: "บาคาร่า",
  },
  {
    title: "สล็อต Gates of Olympus",
    description: "สล็อต PG Soft โบนัสแตกหนัก",
    category: "สล็อต",
  },
  {
    title: "รูเล็ต Live Casino",
    description: "รูเล็ตสดแบบเรียลไทม์",
    category: "รูเล็ต",
  },
  {
    title: "สล็อต Fortune Tiger",
    description: "เกมยิงปลายอดนิยม แตกง่าย จ่ายจริง",
    category: "สล็อต",
  },
];

const Demo = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-black text-sm font-bold mb-6">
              <Gamepad2 className="h-4 w-4" />
              ทดลองเล่นฟรี ไม่ต้องสมัคร
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              ทดลองเล่นเกม
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              เล่นฟรีทุกเกม ไม่ต้องฝากเงิน ไม่ต้องสมัครสมาชิก
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-gray to-black flex items-center justify-center relative overflow-hidden">
                    <Gamepad2 className="h-20 w-20 text-primary/50 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-gradient-gold text-black text-xs font-bold">
                        {game.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {game.description}
                    </p>
                    <Button className="w-full bg-gradient-red text-white hover:opacity-90">
                      <Play className="h-4 w-4 mr-2" />
                      ทดลองเล่นฟรี
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">ข้อมูลการทดลองเล่น</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ไม่ต้องสมัครสมาชิก ไม่ต้องฝากเงิน สามารถทดลองเล่นได้ทันที</li>
              <li>• เครดิตทดลองเล่น 10,000 บาท (ไม่สามารถถอนได้)</li>
              <li>• เกมทดลองเล่นมีการทำงานและอัตราจ่ายเหมือนเกมจริง 100%</li>
              <li>• เมื่อต้องการเล่นจริง กรุณาสมัครสมาชิกและฝากเงินเข้าระบบ</li>
              <li>• หากมีข้อสงสัยติดต่อได้ที่ LINE: @betup168</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Demo;
