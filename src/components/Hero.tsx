import { motion } from "framer-motion";
import heroImage from "@/assets/hero-gelato.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Artisan gelato display with pistachio, strawberry, chocolate and vanilla flavors"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-body text-sm uppercase tracking-[0.3em] text-cream/80 mb-4"
      >
        Tbilisi · Chavchavadze Avenue
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6"
      >
        Gelato
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display text-xl md:text-2xl italic text-cream/90 mb-10"
      >
        Crafted with love, served with joy
      </motion.p>
      <motion.a
        href="#flavors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="inline-block bg-pistachio text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:brightness-110 transition-all"
      >
        Explore Our Flavors
      </motion.a>
    </div>
  </section>
);

export default Hero;
