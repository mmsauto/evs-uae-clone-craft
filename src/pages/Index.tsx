import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServicesList } from "@/components/ServicesList";
import { BranchesSection } from "@/components/BranchesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <ServicesList />
      <BranchesSection />
    </div>
  );
};

export default Index;