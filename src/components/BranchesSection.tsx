import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram } from "lucide-react";

export const BranchesSection = () => {
  const branches = [
    {
      id: "01",
      city: "Abu Dhabi",
      location: "Musaffah",
      address: "6th Street - Musaffah - M14 - Abu Dhabi",
      phone: "+971 54 713 3313"
    },
    {
      id: "02", 
      city: "Dubai",
      location: "International City",
      address: "International City 1 - Emirati Cluster, Warehouse #39",
      phone: "+971 54 713 3313"
    },
    {
      id: "03",
      city: "Ajman", 
      location: "Al Jerf 2",
      address: "Al Jerf Industrial Area 2 - Ajman",
      phone: "+971 54 713 3313"
    },
    {
      id: "04",
      city: "Al Ain",
      location: "Industrial Area", 
      address: "Industrial Area - Al Ain",
      phone: "+971 54 713 3313"
    },
    {
      id: "05",
      city: "Riyadh",
      location: "Al Qirawan",
      address: "Al Qirawan District - Riyadh",
      phone: "+971 54 713 3313"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Branches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your nearest EVS service center across UAE and Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card 
              key={branch.id}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {branch.id}
                  </span>
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  EVS {branch.city}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {branch.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-card-foreground">
                  {branch.address}
                </p>
                
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="justify-start border-border hover:border-primary hover:text-primary"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="justify-start border-border hover:border-primary hover:text-primary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="justify-start border-border hover:border-primary hover:text-primary"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Follow Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};