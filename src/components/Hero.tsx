import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/lovable-uploads/932b3b5e-41ab-4e3c-90fe-29421471b824.png')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-display font-black text-8xl md:text-9xl lg:text-[12rem] leading-none">
              <span className="text-brand-teal">SPC</span>
              <br />
              <span className="text-foreground">MSK</span>
            </h1>
            <div className="text-brand-teal font-display font-medium text-xl md:text-2xl tracking-widest uppercase">
              Electronic Press Kit
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-text-secondary font-medium text-lg md:text-xl">
              DJ y Productor Chileno
            </p>
            <p className="text-text-muted text-base md:text-lg">
              Viña del Mar, Chile
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              variant="presskit"
              size="lg" 
              className="px-8 py-4 text-lg rounded-xl"
            >
              Descargar Press Kit
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-brand-teal animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-teal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-teal rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;