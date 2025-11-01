import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GameCategories from "@/components/GameCategories";
import Promotions from "@/components/Promotions";
import Providers from "@/components/Providers";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <GameCategories />
        <Promotions />
        <Providers />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
