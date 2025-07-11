import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import PhotoGallery from "../components/PhotoGallery";
import TechnicalRider from "../components/TechnicalRider";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="bio">
          <Bio />
        </section>
        
        <section id="photos">
          <PhotoGallery />
        </section>
        
        <section id="contact">
          <TechnicalRider />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
