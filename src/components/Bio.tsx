const Bio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
                About <span className="text-brand-teal">SPC MSK</span>
              </h2>
              <div className="w-20 h-1 bg-brand-teal rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                <strong className="text-brand-teal">SPC MSK</strong> es un DJ y productor chileno de 24 años, oriundo de Viña del Mar, cuya identidad sonora se mueve con maestría entre la energía y la hipnosis.
              </p>
              
              <p>
                Su propuesta musical es versátil y potente, fusionando <strong className="text-brand-teal">hardgroove percusivo</strong> con <strong className="text-brand-teal">techno rápido y groovero</strong>. Su pasión nació a los 13 años, influenciado por gigantes del EDM como Skrillex, Kill The Noise, Flosstradamus y Zomboy.
              </p>
              
              <p>
                A los 16, se sumergió de lleno en el techno, el género que definiría su carrera. Esta trayectoria se complementa con una sólida base musical adquirida en su etapa escolar, donde aprendió a tocar guitarra, bajo y batería, elementos que enriquecen su visión como productor.
              </p>
              
              <p>
                Su carrera ha tenido un <strong className="text-brand-teal">ascenso notable</strong>, marcando presencia en los line-ups de destacados clubes y escenarios como <strong>Radikals, Mimas Club, Woo Club, The House, Club La Sala, Espacio 93 Valpo</strong> y el <strong>Festival Feztival</strong>.
              </p>
            </div>
          </div>
          
          {/* Bio Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src="/lovable-uploads/58e2466a-b5aa-48ba-a0f9-6c3b1ba2fab2.png"
                alt="SPC MSK Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="space-y-8">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Colaboraciones & Reconocimientos
            </h3>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                En estas instancias, ha compartido cabina con una impresionante lista de artistas de renombre como <strong className="text-brand-teal">Alarico, Grace Dahl, Zisko, Sunnyk, Jxxxo, Nplnsss y Andrea Riffo</strong>, además de colaborar activamente con colectivos como <strong className="text-brand-teal">La Oficina, Grooverom y Blackroom</strong>.
              </p>
              
              <p>
                Su faceta como productor se refleja en lanzamientos a través de sellos como <strong className="text-brand-teal">Inherente Project, DKN Selections, DZB Records, Marlow Records, Logia Sound Collective, Space Records e Impcore Records</strong>.
              </p>
              
              <p>
                Su música ha recibido el soporte de artistas como <strong className="text-brand-teal">Perrokilltro, Katalina Schawrz y Pejora</strong>, validando su impacto en la escena. Comprometido con el crecimiento de su comunidad, SPC MSK es también el fundador de su propio sello y productora de eventos, <strong className="text-brand-teal">IMP Core</strong>, una plataforma para su música y para el impulso de nuevos talentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;