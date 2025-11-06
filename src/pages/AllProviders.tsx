import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import saGaming from "@/assets/providers/sa-gaming.png";
import sexyGaming from "@/assets/providers/sexy-gaming.png";
import dreamgaming from "@/assets/providers/dreamgaming.png";
import wmCasino from "@/assets/providers/wm-casino.png";
import microgaming from "@/assets/providers/microgaming.png";
import prettyGaming from "@/assets/providers/pretty-gaming.png";
import jili from "@/assets/providers/jili.png";
import pgSoft from "@/assets/providers/pg-soft.png";
import yggdrasil from "@/assets/providers/yggdrasil.png";
import jokerGaming from "@/assets/providers/joker-gaming.png";
import pragmaticPlay from "@/assets/providers/pragmatic-play.png";
import cq9 from "@/assets/providers/cq9.png";
import kingmaker from "@/assets/providers/kingmaker.png";
import spadegaming from "@/assets/providers/spadegaming.png";
import habanero from "@/assets/providers/habanero.png";
import redTiger from "@/assets/providers/red-tiger.png";

// แบ่งค่ายเกมส์ตามประเภท
const casinoProviders = [
  { name: "SA Gaming", image: saGaming },
  { name: "Sexy Gaming", image: sexyGaming },
  { name: "Dream Gaming", image: dreamgaming },
  { name: "WM Casino", image: wmCasino },
  { name: "Pretty Gaming", image: prettyGaming },
];

const slotProviders = [
  { name: "PG Soft", image: pgSoft },
  { name: "Pragmatic Play", image: pragmaticPlay },
  { name: "Jili", image: jili },
  { name: "Joker Gaming", image: jokerGaming },
  { name: "Microgaming", image: microgaming },
  { name: "CQ9", image: cq9 },
  { name: "Yggdrasil", image: yggdrasil },
  { name: "Kingmaker", image: kingmaker },
  { name: "Spadegaming", image: spadegaming },
  { name: "Habanero", image: habanero },
  { name: "Red Tiger", image: redTiger },
];

const fishingProviders = [
  { name: "Jili", image: jili },
  { name: "Joker Gaming", image: jokerGaming },
  { name: "PG Soft", image: pgSoft },
  { name: "CQ9", image: cq9 },
];

const AllProviders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allProviders = [
    ...casinoProviders,
    ...slotProviders.filter(p => !casinoProviders.find(c => c.name === p.name)),
  ];

  const renderProviderGrid = (providers: typeof allProviders) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
      {providers.map((provider, index) => (
        <Card
          key={index}
          className="group relative hover:shadow-gold transition-all duration-500 hover:scale-110 cursor-pointer bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary overflow-hidden"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-20 relative">
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg" />
              <img
                src={provider.image}
                alt={`${provider.name} - ผู้ให้บริการเกมคาสิโนชั้นนำ`}
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-125 relative z-10"
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20 mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            ค่ายเกมทั้งหมด
          </h1>
          <p className="text-lg text-muted-foreground">เลือกค่ายเกมที่คุณชื่นชอบ</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
            <TabsTrigger value="casino">คาสิโน</TabsTrigger>
            <TabsTrigger value="slot">สล็อต</TabsTrigger>
            <TabsTrigger value="fishing">ยิงปลา</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {renderProviderGrid(allProviders)}
          </TabsContent>

          <TabsContent value="casino" className="mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">ค่ายคาสิโน</h2>
              <p className="text-muted-foreground">บาคาร่า รูเล็ต และเกมคาสิโนสด</p>
            </div>
            {renderProviderGrid(casinoProviders)}
          </TabsContent>

          <TabsContent value="slot" className="mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">ค่ายสล็อต</h2>
              <p className="text-muted-foreground">เกมสล็อตออนไลน์หลากหลายธีม</p>
            </div>
            {renderProviderGrid(slotProviders)}
          </TabsContent>

          <TabsContent value="fishing" className="mt-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">ค่ายยิงปลา</h2>
              <p className="text-muted-foreground">เกมยิงปลาออนไลน์สุดมันส์</p>
            </div>
            {renderProviderGrid(fishingProviders)}
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
};

export default AllProviders;
