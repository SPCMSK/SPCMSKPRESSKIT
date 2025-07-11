import { useContent } from "@/contexts/ContentContext";

const VideoSets = () => {
  const { content } = useContent();

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Sets en <span className="text-brand-teal">Vivo</span>
          </h2>
          <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Disfruta de mis sets en vivo y conoce mi estilo musical único en diferentes venues y eventos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.videos.map((video, index) => (
            <div key={video.id} className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-glow">
                <iframe 
                  width="100%" 
                  height="315" 
                  src={video.embedUrl}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </div>
              <div className="text-center">
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {video.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {video.description || "Presentación en vivo • YouTube"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">
            Más videos disponibles en mi canal de YouTube • Todos los derechos reservados
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSets;