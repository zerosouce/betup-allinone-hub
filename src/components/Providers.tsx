import { Card, CardContent } from "@/components/ui/card";

const providers = [
  { name: "SA Gaming" },
  { name: "Sexy Baccarat" },
  { name: "WM Casino" },
  { name: "Pretty Gaming" },
  { name: "PG Soft" },
  { name: "Joker Gaming" },
  { name: "Pragmatic Play" },
  { name: "Spadegaming" },
  { name: "Jili" },
  { name: "CQ9" },
  { name: "Habanero" },
  { name: "Red Tiger" },
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {providers.map((provider, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-gold transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-border hover:border-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-16">
                  <h3 className="text-center font-bold text-foreground group-hover:text-primary transition-colors">
                    {provider.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Providers;
