import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin, Zap, Wrench, Shield } from "lucide-react";

const RoadsideAssistance = () => {
  const services = [
    {
      icon: Zap,
      title: "Emergency Charging",
      description: "Mobile charging units deployed to your location within 30 minutes."
    },
    {
      icon: Wrench,
      title: "On-Site Repairs",
      description: "Basic mechanical repairs and diagnostics at your location."
    },
    {
      icon: MapPin,
      title: "Towing Service",
      description: "Safe transport to the nearest EVS service center or charging station."
    },
    {
      icon: Shield,
      title: "Lockout Assistance",
      description: "Professional lockout service for your electric vehicle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="24/7 Roadside Assistance for Electric Vehicles"
        description="Emergency roadside assistance for EVs. Mobile charging, repairs, and towing services available 24/7 across UAE."
        keywords="EV roadside assistance, emergency charging, electric vehicle towing, mobile EV service"
      />
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary">24/7</span> Roadside Assistance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Never worry about being stranded. Our emergency assistance team is always ready to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency: 800-EVS
              </Button>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Average response: 25 minutes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Emergency Services Available
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive roadside support designed specifically for electric vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="text-center hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call for Help</h3>
                  <p className="text-muted-foreground">
                    Contact our emergency line or use our mobile app to request assistance.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
                  <p className="text-muted-foreground">
                    Our team locates you via GPS and dispatches the nearest service unit.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get Moving</h3>
                  <p className="text-muted-foreground">
                    Our technicians resolve the issue or safely transport your vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RoadsideAssistance;