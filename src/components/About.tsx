import { motion } from "framer-motion";
import { GlassWater, Home, Utensils } from "lucide-react";
import foodImg from "@/assets/sakhli-1904-food.jpg";

const highlights = [
  { icon: Home, title: "Historic home", text: "A family apartment transformed into a cozy, eclectic Georgian dining room." },
  { icon: Utensils, title: "Traditional dishes", text: "Khinkali, khachapuri, shkmeruli, dolma, kharcho, salads, and walnut starters." },
  { icon: GlassWater, title: "Homemade wine", text: "A warm table built around Georgian flavors, wine, music, and hospitality." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm font-bold text-secondary uppercase tracking-wider mb-3">
            Old Tbilisi hospitality
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A restaurant that feels like stepping into a Georgian family home.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-lg mb-7">
            Sakhli 1904 is known for its antique-filled rooms, heartfelt service, and authentic Georgian cooking. Guests describe the space as museum-like, romantic, and deeply cozy — the kind of place where you sit, observe, and enjoy every minute.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-border bg-card p-5 rounded-md">
                <Icon className="text-primary mb-3" size={24} />
                <h3 className="font-display text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <img
            src={foodImg}
            alt="Traditional Georgian dishes with khinkali, khachapuri, wine, and pear dessert"
            className="rounded-md shadow-xl w-full"
            loading="lazy"
            width={1400}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
