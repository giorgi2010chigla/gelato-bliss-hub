import { motion } from "framer-motion";

const flavors = [
  { name: "Pistachio", description: "Sicilian pistachios, roasted to perfection", color: "bg-pistachio/20 border-pistachio/30", emoji: "🌿" },
  { name: "Strawberry", description: "Sweet summer berries, naturally vibrant", color: "bg-strawberry/15 border-strawberry/25", emoji: "🍓" },
  { name: "Dark Chocolate", description: "Rich Belgian cocoa, deeply satisfying", color: "bg-chocolate/15 border-chocolate/25", emoji: "🍫" },
  { name: "Vanilla Bean", description: "Madagascar vanilla, silky and timeless", color: "bg-vanilla border-vanilla", emoji: "🌼" },
  { name: "Mango Sorbet", description: "Tropical mango, refreshingly dairy-free", color: "bg-accent border-accent", emoji: "🥭" },
  { name: "Hazelnut", description: "Piedmont hazelnuts, toasted and creamy", color: "bg-cream border-border", emoji: "🌰" },
];

const Flavors = () => (
  <section id="flavors" className="py-24 md:py-32 bg-cream">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-pistachio font-semibold mb-4">
          Our Selection
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Today's Flavors
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {flavors.map((flavor, i) => (
          <motion.div
            key={flavor.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${flavor.color} border rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform cursor-default`}
          >
            <span className="text-4xl mb-4 block">{flavor.emoji}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {flavor.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              {flavor.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Flavors;
