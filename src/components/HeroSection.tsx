import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 text-left max-w-4xl">
        <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-2 mb-6 inline-block animate-fade-in">
          <span className="text-primary text-sm font-medium">ELECTRIC VEHICLE (EV) SERVICE CENTER IN UAE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          EV SERVICE <br />
          <span className="text-primary">REDEFINED.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-slide-in">
          Performance, trust, and total care.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl animate-glow transform hover:scale-105 transition-all duration-300"
        >
          BOOK YOUR EV CHECK
        </Button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};