import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "ambre", quote: "So unique and gorgeous inside. Some of the best eggplant and walnuts I’ve had in Tbilisi." },
  { name: "Dima Geyets", quote: "One of the most authentic Georgian places we have ever been. It felt like visiting a grandmother’s house." },
  { name: "Den Isaak", quote: "A wonderful, beautiful place. The interior is like a museum, with delicious food and pleasant waiters." },
  { name: "Albina Gobozova", quote: "Amazing Georgian restaurant with authentic flavors, a cozy atmosphere, great service, and welcoming staff." },
];

const Reviews = () => (
  <section id="reviews" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-sm font-bold text-secondary uppercase tracking-wider mb-3">
            Guest reviews
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            4.8 stars from 569 guests.
          </h2>
          <div className="flex items-center gap-2" aria-label="4.9 star rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-accent text-accent" />
            ))}
            <span className="font-body font-bold text-foreground ml-2">4.8 · 569 reviews</span>
          </div>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-card border border-border rounded-md p-6 shadow-sm"
            >
              <p className="font-body text-muted-foreground leading-relaxed mb-5">“{review.quote}”</p>
              <footer className="font-body font-bold text-foreground">{review.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;
