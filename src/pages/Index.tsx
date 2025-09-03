import { Navigation } from "@/components/Navigation";
import { DynamicHeroSection } from "@/components/DynamicHeroSection";
import { DynamicServicesGrid } from "@/components/DynamicServicesGrid";
import { ServicesList } from "@/components/ServicesList";
import { BranchesSection } from "@/components/BranchesSection";
import { SEOHead } from "@/components/SEOHead";
import { usePageContent } from "@/hooks/usePageContent";

const Index = () => {
  const { data: pageContent, isLoading } = usePageContent("home");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xl text-foreground">Loading...</div>
      </div>
    );
  }

  if (!pageContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xl text-foreground">Page not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageContent.title}
        description={pageContent.meta_description}
        keywords={pageContent.meta_keywords}
        canonicalUrl={window.location.origin}
      />
      <Navigation />
      <main>
        <DynamicHeroSection content={pageContent.content.hero} />
        <DynamicServicesGrid services={pageContent.content.services} />
        <ServicesList />
        <BranchesSection />
      </main>
    </div>
  );
};

export default Index;