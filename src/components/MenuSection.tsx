import { motion } from "framer-motion";
import type { Language } from "@/pages/Index";

const content = {
  en: {
    eyebrow: "Menu highlights",
    title: "Georgian staples served fast and full-flavored.",
    text: "Pasanauri is known for a broad traditional menu with khinkali, khachapuri, grilled dishes, soups, walnut starters, and local drinks.",
    items: [
      { name: "Khinkali Mokhevuri", description: "Popular hand-pleated mountain-style dumplings with juicy filling." },
      { name: "Khachapuri", description: "Classic Georgian cheese bread, including Adjarian-style favorites." },
      { name: "Shkmeruli", description: "Roasted chicken in a rich garlic sauce, one of the most mentioned dishes." },
      { name: "Ojakhuri with Mushrooms", description: "A hearty skillet-style Georgian dish with potatoes, mushrooms, and herbs." },
      { name: "Kebab with Smoked Sulguni", description: "Savory grilled kebab paired with smoky Georgian cheese." },
      { name: "Eggplant Rolls with Walnut Paste", description: "A traditional cold starter with herbs, spices, and walnut filling." },
    ],
  },
  ka: {
    eyebrow: "მენიუს რჩეულები",
    title: "ქართული კლასიკა სწრაფად და გემრიელად.",
    text: "ფასანაური ცნობილია მრავალფეროვანი ტრადიციული მენიუთი: ხინკალი, ხაჭაპური, მწვადი, სუპები, ნიგვზიანი წასახემსებლები და ადგილობრივი სასმელები.",
    items: [
      { name: "ხინკალი მოხევური", description: "პოპულარული მთიულური სტილის ხინკალი წვნიანი შიგთავსით." },
      { name: "ხაჭაპური", description: "კლასიკური ქართული ყველიანი პური, მათ შორის აჭარული ხაჭაპური." },
      { name: "შქმერული", description: "შემწვარი ქათამი არომატულ ნიორიან სოუსში." },
      { name: "სოკოს ოჯახური", description: "ნოყიერი ქართული კერძი კარტოფილით, სოკოთი და მწვანილით." },
      { name: "ქაბაბი შებოლილი სულგუნით", description: "გრილზე მომზადებული ქაბაბი შებოლილი ქართული ყველით." },
      { name: "ბადრიჯანი ნიგვზით", description: "ტრადიციული ცივი წასახემსებელი სანელებლებით და ნიგვზის შიგთავსით." },
    ],
  },
};

type MenuSectionProps = { language: Language };

const MenuSection = ({ language }: MenuSectionProps) => {
  const t = content[language];

  return (
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
            {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {t.text}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => (
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
};

export default MenuSection;
