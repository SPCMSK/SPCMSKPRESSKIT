const Footer = () => {
  return (
    <footer className="bg-brand-darker py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl">
              <span className="text-brand-teal">SPC</span>
              <span className="text-foreground">MSK</span>
            </div>
            <p className="text-text-muted">
              Chilean DJ & Producer
              <br />
              Electronic Music Artist
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-text-secondary">
              <p>Booking & Management</p>
              <a 
                href="mailto:spcmsk.booking@gmail.com"
                className="text-brand-teal hover:text-brand-teal-dark transition-colors"
              >
                spcmsk.booking@gmail.com
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Press Kit</h3>
            <div className="space-y-2 text-text-secondary text-sm">
              <p>All press materials available for editorial use</p>
              <p>© 2024 SPC MSK. All rights reserved.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm">
            Electronic Press Kit • Designed for Media & Industry Professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;