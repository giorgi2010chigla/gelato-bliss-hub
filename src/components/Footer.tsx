import type { Language } from "@/pages/Index";

type FooterProps = { language: Language };

const copy = {
  en: {
    name: "Pasanauri",
    description: "Georgian restaurant · Dine-in · Takeaway · No-contact delivery",
    address: "7/2 Giorgi Leonidze St · Tbilisi · 595 63 00 03",
    rights: "All rights reserved.",
  },
  ka: {
    name: "ფასანაური",
    description: "ქართული რესტორანი · ადგილზე · წაღება · უკონტაქტო მიტანა",
    address: "გიორგი ლეონიძის 7/2 · თბილისი · 595 63 00 03",
    rights: "ყველა უფლება დაცულია.",
  },
};

const Footer = ({ language }: FooterProps) => {
  const t = copy[language];

  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{t.name}</p>
        <p className="font-body text-sm text-primary-foreground/60 mb-1">
          {t.description}
        </p>
        <p className="font-body text-sm text-primary-foreground/45">
          {t.address}
        </p>
        <p className="font-body text-xs text-primary-foreground/30 mt-7">
          © {new Date().getFullYear()} {t.name}. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
