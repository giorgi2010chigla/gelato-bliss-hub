const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Forest Country Place</p>
      <p className="font-body text-sm text-primary-foreground/60 mb-1">
        Restaurant · Dine-in · Drive-through
      </p>
      <p className="font-body text-sm text-primary-foreground/45">
        8206 LA-17 · Forest, LA 71242 · +1 318-490-9001
      </p>
      <p className="font-body text-xs text-primary-foreground/30 mt-7">
        © {new Date().getFullYear()} Forest Country Place. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
