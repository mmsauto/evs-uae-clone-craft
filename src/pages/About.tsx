import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Zap, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Zap, number: "100%", label: "EV Focused" },
    { icon: Globe, number: "7", label: "Emirates Covered" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology to provide the most advanced EV services in the region."
    },
    {
      title: "Customer Centric",
      description: "Every decision we make is centered around delivering exceptional value to our customers."
    },
    {
      title: "Sustainability",
      description: "We're committed to supporting the transition to sustainable transportation solutions."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About EVS UAE - Leading Electric Vehicle Service Provider"
        description="Learn about EVS UAE, the leading electric vehicle service provider in the Emirates. Our mission, values, and commitment to EV excellence."
        keywords="about EVS UAE, electric vehicle service company, EV maintenance UAE, sustainable transportation"
      />
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-primary">EVS UAE</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Leading the future of electric vehicle service and maintenance across the United Arab Emirates.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Founded in 2008, EVS UAE began with a simple vision: to create the most comprehensive 
                    and reliable electric vehicle service network in the Middle East. As pioneers in the 
                    EV service industry, we've grown from a single location to a network spanning all seven emirates.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our journey has been marked by continuous innovation, from being the first to offer 
                    mobile EV diagnostics to developing proprietary charging solutions. Today, we're proud 
                    to serve over 50,000 EV owners across the UAE.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    At EVS UAE, we don't just service electric vehicles – we're building the infrastructure 
                    for a sustainable automotive future.
                  </p>
                </div>
                <div className="bg-gradient-primary rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
                  <p className="text-lg text-primary-foreground/90">
                    "To accelerate the adoption of electric vehicles by providing exceptional service, 
                    innovative solutions, and unwavering support to every EV owner in the UAE."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="text-center">
                    <CardHeader className="pb-4">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <Card key={value.title}>
                      <CardHeader>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;