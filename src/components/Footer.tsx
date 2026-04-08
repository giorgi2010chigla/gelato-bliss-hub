const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl font-bold text-cream mb-2">Gelato</p>
      <p className="font-body text-sm text-cream/60">
        19 Ilia Chavchavadze Avenue · Tbilisi, Georgia
      </p>
      <p className="font-body text-xs text-cream/40 mt-6">
        © {new Date().getFullYear()} Gelato. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
