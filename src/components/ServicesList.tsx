import { Card, CardContent } from "@/components/ui/card";
import { Battery, Car, Settings, Shield, Smartphone, Map, Download, Wrench, Zap, Phone } from "lucide-react";

export const ServicesList = () => {
  const services = [
    { icon: Shield, name: "EV Warranty Packages" },
    { icon: Phone, name: "EV Roadside Assistance" },
    { icon: Settings, name: "EV Vehicle Health Check" },
    { icon: Wrench, name: "EV Repair" },
    { icon: Battery, name: "High Voltage Battery Repair" },
    { icon: Zap, name: "EV Drive Unit Repair" },
    { icon: Smartphone, name: "EV Sim Card Installation" },
    { icon: Map, name: "Navigation System and Mapping" },
    { icon: Download, name: "EV Software Updates" },
    { icon: Car, name: "EV Body Repair" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">EV Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electric vehicle services designed for modern EVs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.name}
                className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};