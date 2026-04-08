const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-3xl font-bold text-primary-foreground mb-1">🍦 Spaguletti</p>
      <p className="font-body text-sm text-primary-foreground/50 mb-1">
        Ice Cream & Waffles
      </p>
      <p className="font-body text-sm text-primary-foreground/40">
        19 Kostava · 1 Vashlovani St · Tbilisi, Georgia
      </p>
      <p className="font-body text-xs text-primary-foreground/30 mt-8">
        © {new Date().getFullYear()} Spaguletti Ice Cream & Waffles. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
