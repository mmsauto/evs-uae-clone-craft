import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Warranty = () => {
  const warrantyPlans = [
    {
      name: "Essential Care",
      price: "AED 999",
      period: "1 Year",
      features: [
        "Basic diagnostics and maintenance",
        "Battery health monitoring",
        "Software updates",
        "24/7 phone support",
        "Roadside assistance"
      ]
    },
    {
      name: "Premium Care",
      price: "AED 1,899",
      period: "2 Years", 
      features: [
        "Comprehensive diagnostics",
        "Battery replacement coverage",
        "Advanced software updates",
        "Priority support",
        "Extended roadside assistance",
        "Charging system coverage"
      ],
      popular: true
    },
    {
      name: "Ultimate Care",
      price: "AED 2,999",
      period: "3 Years",
      features: [
        "Full system coverage",
        "Battery and motor coverage",
        "Premium software updates",
        "Dedicated support line",
        "Premium roadside assistance",
        "Complete charging infrastructure",
        "Annual health check"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EV Warranty Plans - Drive with Confidence"
        description="Comprehensive warranty plans for your electric vehicle. From basic care to ultimate protection, we've got you covered."
        keywords="EV warranty, electric vehicle warranty, car warranty UAE, EV protection"
      />
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary">Warranty Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Drive confidently with our comprehensive warranty coverage. Choose the plan that fits your needs.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warrantyPlans.map((plan, index) => (
                <Card 
                  key={plan.name} 
                  className={`relative ${
                    plan.popular 
                      ? 'border-primary ring-2 ring-primary/20 scale-105' 
                      : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription className="text-lg">/{plan.period}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full mt-6 ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90' 
                          : 'bg-secondary hover:bg-secondary/90'
                      }`}
                      size="lg"
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Warranty;