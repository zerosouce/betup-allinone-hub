import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import PromoCarousel from "@/components/PromoCarousel";
import Hero from "@/components/Hero";
import GameCategories from "@/components/GameCategories";
import Promotions from "@/components/Promotions";
import Providers from "@/components/Providers";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <PromoCarousel />
      <main>
        <Hero />
        <Providers />
        <Promotions />
        <GameCategories />
        <Features />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
