import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContentData {
  heroData: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    backgroundImage: string;
  };
  bioData: {
    title: string;
    image: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };
  galleryPhotos: Array<{
    src: string;
    alt: string;
    featured: boolean;
  }>;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  videos: Array<{
    id: string;
    title: string;
    embedUrl: string;
    description?: string;
  }>;
}

interface ContentContextType {
  content: ContentData;
  updateContent: (newContent: Partial<ContentData>) => void;
}

const defaultContent: ContentData = {
  heroData: {
    title: "SPC MSK",
    subtitle: "Electronic Press Kit",
    description1: "DJ y Productor Chileno",
    description2: "Viña del Mar, Chile",
    backgroundImage: "/lovable-uploads/932b3b5e-41ab-4e3c-90fe-29421471b824.png"
  },
  bioData: {
    title: "Acerca de SPC MSK",
    image: "/lovable-uploads/58e2466a-b5aa-48ba-a0f9-6c3b1ba2fab2.png",
    paragraph1: "SPC MSK es un DJ y productor chileno de 24 años, oriundo de Viña del Mar, cuya identidad sonora se mueve con maestría entre la energía y la hipnosis.",
    paragraph2: "Su propuesta musical es versátil y potente, fusionando hardgroove percusivo con techno rápido y groovero. Su pasión nació a los 13 años, influenciado por gigantes del EDM como Skrillex, Kill The Noise, Flosstradamus y Zomboy.",
    paragraph3: "A los 16, se sumergió de lleno en el techno, el género que definiría su carrera. Esta trayectoria se complementa con una sólida base musical adquirida en su etapa escolar, donde aprendió a tocar guitarra, bajo y batería, elementos que enriquecen su visión como productor.",
    paragraph4: "Su carrera ha tenido un ascenso notable, marcando presencia en los line-ups de destacados clubes y escenarios como Radikals, Mimas Club, Woo Club, The House, Club La Sala, Espacio 93 Valpo y el Festival Feztival."
  },
  galleryPhotos: [
    { src: "/lovable-uploads/c00f4485-16d9-4e30-8b0d-860d61b21251.png", alt: "SPC MSK Portrait 1", featured: true },
    { src: "/lovable-uploads/c09e4e77-c640-4983-9eb7-f3325b42c1e0.png", alt: "SPC MSK Portrait 2", featured: false },
    { src: "/lovable-uploads/902318a4-6539-47db-8038-8cd1d4329fcc.png", alt: "SPC MSK Portrait 3", featured: false },
    { src: "/lovable-uploads/932b3b5e-41ab-4e3c-90fe-29421471b824.png", alt: "SPC MSK Portrait 4", featured: false },
    { src: "/lovable-uploads/58e2466a-b5aa-48ba-a0f9-6c3b1ba2fab2.png", alt: "SPC MSK Portrait 5", featured: true }
  ],
  socialLinks: [
    { platform: "Instagram", url: "https://www.instagram.com/spc.musik/" },
    { platform: "Spotify", url: "https://open.spotify.com/intl-es/artist/1N2pttRVzPS9LAxHwzVfTP?si=clREonUvTqOz00ippw6ANg" },
    { platform: "SoundCloud", url: "https://soundcloud.com/020301" },
    { platform: "YouTube", url: "https://www.youtube.com/@SPCMSK2" },
    { platform: "Bandcamp", url: "https://spcmsk2.bandcamp.com" },
    { platform: "Beatport", url: "https://www.beatport.com/es/artist/spcmsk/1247790" }
  ],
  videos: [
    {
      id: "rQebU3T_oqU",
      title: "SPC MSK - Live Set 1",
      embedUrl: "https://www.youtube.com/embed/rQebU3T_oqU?si=86h3eswFHqhLiDDF",
      description: "Presentación en vivo • YouTube"
    },
    {
      id: "ugXKAKb_LmY", 
      title: "SPC MSK - Live Set 2",
      embedUrl: "https://www.youtube.com/embed/ugXKAKb_LmY?si=Ur_bz0eKRFnEqfD0",
      description: "Presentación en vivo • YouTube"
    }
  ]
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ContentData>(defaultContent);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('adminData');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  const updateContent = (newContent: Partial<ContentData>) => {
    setContent(prev => {
      const updated = { ...prev, ...newContent };
      // Save to localStorage whenever content is updated
      localStorage.setItem('adminData', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};