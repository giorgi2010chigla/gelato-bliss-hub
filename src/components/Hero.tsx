import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spaguletti.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Colorful ice cream and waffles spread with sprinkles and fresh berries"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    </div>
    <div className="relative z-10 container mx-auto px-6">
      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-4"
        >
          🍨🧇
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4"
        >
          Spaguletti
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-2xl md:text-3xl font-medium text-waffle mb-2"
        >
          Ice Cream & Waffles
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-lg text-primary-foreground/80 mb-8 max-w-md"
        >
          The sweetest spot in Tbilisi — spaghetti ice cream, golden waffles, and smiles since day one.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#menu"
            className="bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:brightness-110 transition-all"
          >
            See the Menu
          </a>
          <a
            href="#visit"
            className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary-foreground/30 transition-all"
          >
            Visit Us
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
