import { motion } from "framer-motion";
import coneImage from "@/assets/gelato-cone.jpg";

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={coneImage}
            alt="Gelato cone with vanilla and strawberry scoops topped with a fresh strawberry"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            loading="lazy"
            width={800}
            height={1000}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-pistachio font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Taste of<br />
            <span className="text-strawberry italic">Pure Happiness</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Nestled on the vibrant Chavchavadze Avenue in Tbilisi, our gelato shop
            brings authentic Italian craftsmanship to the heart of Georgia. Every scoop
            is made fresh daily using the finest natural ingredients — real pistachios
            from Sicily, hand-picked berries, and rich Belgian chocolate.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            We believe gelato isn't just a dessert — it's a moment of comfort, a small
            joy that makes any day brighter. Come share that moment with us.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
