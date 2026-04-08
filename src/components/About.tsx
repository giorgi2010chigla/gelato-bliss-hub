import { motion } from "framer-motion";
import spaghettiImg from "@/assets/spaghetti-icecream.jpg";

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Where Every Scoop <br />
            <span className="text-berry">Tells a Story</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-5 text-lg">
            At Spaguletti, we turn ice cream into art. Our signature spaghetti ice cream — 
            vanilla gelato pressed through a special mold, topped with strawberry sauce and 
            white chocolate shavings — has been making people smile across Tbilisi.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-lg">
            Paired with our fresh, golden Belgian waffles and a rainbow of handcrafted flavors, 
            every visit to our cozy shop on Kostava Street is a little celebration. 
            With a perfect 5.0 ⭐ rating, our customers agree!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3" />
            <img
              src={spaghettiImg}
              alt="Spaghetti ice cream dessert with strawberry sauce"
              className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
