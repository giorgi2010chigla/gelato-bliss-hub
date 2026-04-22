import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import heroImage from "@/assets/pasanauri-interior.jpg";
import type { Language } from "@/pages/Index";

const copy = {
  en: {
    badge: "4.6 rated · 6,885 reviews",
    title: "Pasanauri",
    text: "Traditional Georgian food in central Tbilisi, known for khinkali, khachapuri, shkmeruli, fast service, and a lively local dining room.",
    menu: "View Menu",
    directions: "Directions",
    alt: "Warm Georgian restaurant interior with wooden tables and traditional décor",
  },
  ka: {
    badge: "4.6 შეფასება · 6,885 მიმოხილვა",
    title: "ფასანაური",
    text: "ტრადიციული ქართული სამზარეულო თბილისის ცენტრში — ხინკალი, ხაჭაპური, შქმერული, სწრაფი მომსახურება და ცოცხალი გარემო.",
    menu: "მენიუს ნახვა",
    directions: "მიმართულება",
    alt: "თბილი ქართული რესტორნის ინტერიერი ხის მაგიდებით და ტრადიციული დეკორით",
  },
};

type HeroProps = { language: Language };

const Hero = ({ language }: HeroProps) => {
  const t = copy[language];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={t.alt}
          className="w-full h-full object-cover"
          width={1600}
          height={960}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/88 via-foreground/55 to-foreground/10" />
      </div>
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-md bg-card/90 px-4 py-2 font-body text-sm font-bold text-primary shadow-sm"
          >
            <Star size={16} className="fill-accent text-accent" /> {t.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mt-6 mb-5"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl"
          >
            {t.text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="bg-accent text-accent-foreground font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:brightness-105 transition-all"
            >
              {t.menu}
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pasanauri%207%2F2%20Giorgi%20Leonidze%20St%20Tbilisi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/35 font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:bg-card/25 transition-all"
            >
              <MapPin size={17} /> {t.directions}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
