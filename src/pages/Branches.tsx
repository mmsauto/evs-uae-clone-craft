import { Navigation } from "@/components/Navigation";
import { BranchesSection } from "@/components/BranchesSection";
import { SEOHead } from "@/components/SEOHead";

const Branches = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EVS UAE Locations - Find Your Nearest Service Center"
        description="Find EVS UAE service centers across the Emirates. Professional EV service locations in Dubai, Abu Dhabi, Sharjah, and more."
        keywords="EVS locations, EV service centers UAE, electric vehicle service Dubai, EV maintenance Abu Dhabi"
      />
      
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Service Centers</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find EVS service centers across the UAE. Professional EV care at convenient locations.
            </p>
          </div>
        </section>

        <BranchesSection />
      </main>
    </div>
  );
};

export default Branches;