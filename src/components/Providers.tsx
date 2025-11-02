import { PROVIDERS } from "@/config/content";

const Providers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
            ค่ายเกมชั้นนำระดับโลก
          </h2>
          <p className="text-lg text-muted-foreground">
            รวมค่ายเกมดังทุกค่าย ให้คุณเลือกเล่นได้ตามใจ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {PROVIDERS.map((provider, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-gold transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                  {provider.logo}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  {provider.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
