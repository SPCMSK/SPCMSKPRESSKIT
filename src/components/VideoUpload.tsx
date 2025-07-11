import { Upload } from "lucide-react";

const VideoUpload = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Videos de <span className="text-brand-teal">Presentaciones</span>
          </h2>
          <div className="w-20 h-1 bg-brand-teal rounded-full mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sube videos de tus presentaciones en vivo para compartir con medios y organizadores de eventos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-brand-teal transition-colors">
            <div className="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">
              Subir Videos de Presentaciones
            </h3>
            <p className="text-text-secondary mb-6">
              Arrastra y suelta tus videos aquí o haz clic para seleccionar archivos
            </p>
            <div className="space-y-2 text-text-muted text-sm">
              <p>Formatos soportados: MP4, MOV, AVI (máx. 500MB)</p>
              <p>Recomendado: 1080p, formato horizontal</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-card rounded-xl border border-border">
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">
              Requisitos para Videos de Presentaciones
            </h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Calidad mínima: 720p HD</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Audio claro y sin distorsión</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Duración recomendada: 30 segundos - 5 minutos</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                <span>Incluir información de fecha y venue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoUpload;