const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Sakhli 1904</p>
      <p className="font-body text-sm text-primary-foreground/60 mb-1">
        Georgian restaurant · Dine-in · Kerbside pickup
      </p>
      <p className="font-body text-sm text-primary-foreground/45">
        1/3 Akhospireli St · Tbilisi 0108 · 551 19 19 04
      </p>
      <p className="font-body text-xs text-primary-foreground/30 mt-7">
        © {new Date().getFullYear()} Sakhli 1904. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
