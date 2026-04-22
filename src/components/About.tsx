import { motion } from "framer-motion";
import { BadgeDollarSign, Coffee, Store } from "lucide-react";
import foodImg from "@/assets/forest-country-food.jpg";

const highlights = [
  { icon: Coffee, title: "Breakfast & lunch", text: "Biscuits, bacon, eggs with cheese, grits, sandwiches, burgers, and fries." },
  { icon: Store, title: "Country-store feel", text: "A hidden gem with friendly folks, local goods, and unique knick-knacks." },
  { icon: BadgeDollarSign, title: "Good prices", text: "Comforting meals in the reported $10–20 range." },
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
            Hometown hospitality
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The kind of place that feels familiar the moment you walk in.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-lg mb-7">
            Guests call Forest Country Place a delightful little spot with terrific food, excellent service, and a warm atmosphere. Stop in for a quick breakfast sandwich, a cooked-to-order plate, Hunt Brothers Pizza, or a generous lunch on the road.
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
            alt="Southern breakfast and lunch plate with eggs, biscuits, bacon, sandwiches, and fries"
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
