const PhotoGallery = () => {
  const photos = [
    {
      src: "/lovable-uploads/c00f4485-16d9-4e30-8b0d-860d61b21251.png",
      alt: "SPC MSK Portrait 1",
      featured: true
    },
    {
      src: "/lovable-uploads/c717c04b-9de9-4c8f-974f-ba00a4d56d52.png",
      alt: "SPC MSK Portrait 2",
      featured: false
    },
    {
      src: "/lovable-uploads/c09e4e77-c640-4983-9eb7-f3325b42c1e0.png",
      alt: "SPC MSK Portrait 3",
      featured: false
    },
    {
      src: "/lovable-uploads/902318a4-6539-47db-8038-8cd1d4329fcc.png",
      alt: "SPC MSK Portrait 4",
      featured: false
    },
    {
      src: "/lovable-uploads/5b6ee93e-1ce7-4c83-98ef-8a7a21f5935f.png",
      alt: "SPC MSK Portrait 5",
      featured: false
    },
    {
      src: "/lovable-uploads/3d9b2b10-f6ae-4042-9481-72736477a753.png",
      alt: "SPC MSK Portrait 6",
      featured: false
    },
    {
      src: "/lovable-uploads/d8ef8f2f-1a76-4183-a980-cdd21ce3e45e.png",
      alt: "SPC MSK Portrait 7",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Press <span className="text-brand-teal">Photos</span>
          </h2>
          <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            High-resolution press photos available for download. All images are cleared for editorial use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-glow ${
                photo.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Download overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-brand-teal/90 backdrop-blur-sm rounded-full p-4 text-brand-darker">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {photo.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-teal text-brand-darker px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">
            Click on any image to download high-resolution version • All photos by SPC MSK Press Team
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;