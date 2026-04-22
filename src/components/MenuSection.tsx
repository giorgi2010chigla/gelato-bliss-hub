import { motion } from "framer-motion";

const menuItems = [
  { name: "Country Breakfast Plates", description: "Biscuits, bacon, eggs with cheese, grits, and cooked-to-order morning favorites." },
  { name: "Ready-to-Go Breakfast", description: "Quick breakfast sandwiches for travelers, workers, and early starts." },
  { name: "Club Sandwich", description: "A guest favorite mentioned again and again for lunch." },
  { name: "Smash Burger & Fried Pickles", description: "A hearty lunch combo called out by happy reviewers." },
  { name: "Hunt Brothers Pizza", description: "Pizza available alongside home-cooked country food." },
  { name: "Snacks, Candy & Peppers", description: "Country-store staples and local finds for the road." },
];

const MenuSection = () => (
  <section id="menu" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <p className="font-body text-sm font-bold text-secondary uppercase tracking-wider mb-3">
          Menu highlights
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Clean, simple, country cooking.
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          A practical stop for dine-in or drive-through, with comforting food, fair prices, and fast service.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {menuItems.map((item, i) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-card border border-border rounded-md p-6 shadow-sm"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.name}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
