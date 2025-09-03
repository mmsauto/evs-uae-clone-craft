import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface DynamicHeroSectionProps {
  content: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export const DynamicHeroSection = ({ content }: DynamicHeroSectionProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-primary">{content.title.split(' ')[0]}</span>{' '}
          <span className="text-white">{content.title.split(' ').slice(1).join(' ')}</span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 opacity-90 animate-fade-in animation-delay-300">
          {content.subtitle}
        </p>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow animate-fade-in animation-delay-600"
        >
          {content.buttonText}
        </Button>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <p className="text-sm opacity-70 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};