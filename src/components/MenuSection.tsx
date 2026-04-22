import { motion } from "framer-motion";

const menuItems = [
  { name: "Khinkali", description: "Juicy Georgian dumplings praised by guests for perfect dough and rich filling." },
  { name: "Khachapuri", description: "Classic cheese bread served warm and comforting for sharing." },
  { name: "Shkmeruli", description: "Tender chicken in a creamy garlic sauce, a beloved Georgian specialty." },
  { name: "Eggplant with Walnuts", description: "A signature Georgian starter guests return for again and again." },
  { name: "Salad 1904", description: "A house highlight alongside village-style Georgian salad." },
  { name: "Pear with Ice Cream & Red Wine", description: "A memorable dessert pairing sweet pear, wine, and ice cream." },
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
          Georgian classics with soul.
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          From khinkali and khachapuri to homemade wine and desserts, the menu celebrates traditional flavors in a cozy old Tbilisi home.
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
