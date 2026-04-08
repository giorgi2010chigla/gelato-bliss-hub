import { motion } from "framer-motion";
import waffleImg from "@/assets/waffle.jpg";

const iceCreamFlavors = [
  { name: "Spaghetti Ice Cream", description: "Our legendary signature — vanilla pressed into spaghetti shapes with strawberry sauce", emoji: "🍝", featured: true },
  { name: "Pistachio", description: "Rich and nutty, made with real Sicilian pistachios", emoji: "🌿" },
  { name: "Strawberry", description: "Fresh summer berries, naturally sweet and vibrant", emoji: "🍓" },
  { name: "Chocolate Fudge", description: "Deep, dark, and deliciously indulgent", emoji: "🍫" },
  { name: "Mango Sorbet", description: "Tropical and refreshing, completely dairy-free", emoji: "🥭" },
  { name: "Cookie Dough", description: "Loaded with chunks of real cookie dough", emoji: "🍪" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 md:py-32 bg-mint/50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Our Menu
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
          Ice Cream & Waffles
        </h2>
      </motion.div>

      {/* Ice Cream Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
        {iceCreamFlavors.map((flavor, i) => (
          <motion.div
            key={flavor.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`bg-card rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default ${
              flavor.featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-primary/30" : ""
            }`}
          >
            <span className="text-3xl mb-3 block">{flavor.emoji}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              {flavor.name}
            </h3>
            {flavor.featured && (
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold font-body px-2.5 py-0.5 rounded-full mb-2">
                ⭐ Signature
              </span>
            )}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {flavor.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Waffles Feature */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-card rounded-3xl shadow-sm overflow-hidden max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <span className="text-4xl mb-4 block">🧇</span>
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Belgian Waffles
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-4">
              Golden, crispy on the outside, fluffy on the inside. Top them with 
              ice cream, chocolate drizzle, fresh berries, whipped cream — or all of the above!
            </p>
            <p className="font-body text-sm text-primary font-semibold">
              Made fresh to order, every single time.
            </p>
          </div>
          <div className="h-64 md:h-auto">
            <img
              src={waffleImg}
              alt="Golden Belgian waffle topped with ice cream, chocolate and raspberries"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MenuSection;
