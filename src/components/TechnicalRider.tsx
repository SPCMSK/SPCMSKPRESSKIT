import { useContent } from "@/contexts/ContentContext";
import { Instagram, Music, Youtube, Disc } from "lucide-react";

const TechnicalRider = () => {
  const { content } = useContent();
  const equipment = [
    {
      category: "CDJ Units",
      items: [
        "2/3 Pioneer CDJ 3000",
        "2000 NX2/XDJ 1000MK2"
      ]
    },
    {
      category: "Mixer",
      items: [
        "Pioneer DJM 450/750MK2/900NX2/V9/V10",
        "Mixer Xone 96/92"
      ]
    },
    {
      category: "Monitoring",
      items: [
        "Sistema de Monitoreo"
      ]
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      icon: "Instagram",
      color: "bg-pink-500 hover:bg-pink-600",
      url: "https://www.instagram.com/spc.musik/"
    },
    {
      platform: "Spotify", 
      icon: "Spotify",
      color: "bg-green-500 hover:bg-green-600",
      url: "https://open.spotify.com/intl-es/artist/1N2pttRVzPS9LAxHwzVfTP?si=clREonUvTqOz00ippw6ANg"
    },
    {
      platform: "SoundCloud",
      icon: "SoundCloud",
      color: "bg-orange-500 hover:bg-orange-600",
      url: "https://soundcloud.com/020301"
    },
    {
      platform: "YouTube",
      icon: "Youtube",
      color: "bg-red-500 hover:bg-red-600",
      url: "https://www.youtube.com/@SPCMSK2"
    },
    {
      platform: "Disc",
      icon: "Disc",
      color: "bg-blue-500 hover:bg-blue-600",
      url: "https://spcmsk2.bandcamp.com"
    },
    {
      platform: "Beatport",
      icon: "Music",
      color: "bg-purple-500 hover:bg-purple-600",
      url: "https://www.beatport.com/es/artist/spcmsk/1247790"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Rider */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Technical <span className="text-brand-teal">Rider</span>
              </h2>
              <div className="w-20 h-1 bg-brand-teal rounded-full"></div>
            </div>

            <div className="space-y-8">
              {equipment.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-display font-semibold text-xl text-brand-teal uppercase tracking-wide">
                    {section.category}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                        <span className="text-text-secondary font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                Requerimientos Adicionales
              </h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span>Sistema de sonido profesional con potencia adecuada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span>Cabina de DJ dedicada con iluminación adecuada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span>Área segura para instalación de equipos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                Ponte en <span className="text-brand-teal">Contacto</span>
              </h2>
              <div className="w-20 h-1 bg-brand-teal rounded-full"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-display font-semibold text-xl text-brand-teal mb-4">
                Reservas y Management
              </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-teal/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-teal">📧</span>
                    </div>
                    <a 
                      href="mailto:spcmsk.booking@gmail.com"
                      className="text-foreground hover:text-brand-teal transition-colors font-medium"
                    >
                      spcmsk.booking@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-display font-semibold text-xl text-brand-teal mb-4">
                Sígueme en Redes
              </h3>
                <div className="flex flex-wrap gap-3">
                  {content.socialLinks.map((link, index) => {
                    const getIcon = (platform: string) => {
                      switch (platform) {
                        case "Instagram": return Instagram;
                        case "YouTube": return Youtube;
                        case "Bandcamp": 
                        case "Beatport": return Disc;
                        default: return Music;
                      }
                    };
                    
                    const IconComponent = getIcon(link.platform);
                    
                    const colorMap: { [key: string]: string } = {
                      "Instagram": "bg-pink-500 hover:bg-pink-600",
                      "Spotify": "bg-green-500 hover:bg-green-600", 
                      "SoundCloud": "bg-orange-500 hover:bg-orange-600",
                      "YouTube": "bg-red-500 hover:bg-red-600",
                      "Bandcamp": "bg-blue-500 hover:bg-blue-600",
                      "Beatport": "bg-purple-500 hover:bg-purple-600"
                    };
                    const colorClass = colorMap[link.platform] || "bg-gray-500 hover:bg-gray-600";
                    
                    return (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 ${colorClass} rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200`}
                        title={link.platform}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <div className="text-2xl font-display font-bold text-brand-teal">24</div>
                  <div className="text-text-muted text-sm">Años</div>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border text-center">
                  <div className="text-2xl font-display font-bold text-brand-teal">3</div>
                  <div className="text-text-muted text-sm">Años de exp</div>
                </div>
              </div>
            </div>

            {/* Performance Image */}
            <div className="relative rounded-xl overflow-hidden shadow-card">
              <img 
                src="/lovable-uploads/f5438ed9-1e42-4fd5-97f4-e358d04980c0.png"
                alt="SPC MSK Performance"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-brand-teal text-brand-darker px-3 py-1 rounded-full text-sm font-medium">
                  Presentación en Vivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRider;