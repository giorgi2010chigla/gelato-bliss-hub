import { motion } from "framer-motion";
import { Bike, MapPinned, Utensils } from "lucide-react";
import foodImg from "@/assets/pasanauri-food.jpg";
import type { Language } from "@/pages/Index";

const content = {
  en: {
    eyebrow: "Central Tbilisi Georgian food",
    title: "A busy, reliable table near Liberty Square.",
    text: "Pasanauri on Giorgi Leonidze Street is a popular Georgian restaurant with indoor and outdoor seating, quick service, and a menu built for groups, travelers, and classic comfort food cravings.",
    alt: "Table spread with khinkali, khachapuri, shkmeruli, mushrooms, and Georgian starters",
    highlights: [
      { icon: MapPinned, title: "Central location", text: "7/2 Giorgi Leonidze Street, close to the Liberty Square area." },
      { icon: Utensils, title: "Vast menu", text: "Khinkali, khachapuri, soups, kebabs, shkmeruli, pkhali, and more." },
      { icon: Bike, title: "Order options", text: "Dine-in, takeaway, and no-contact delivery are available." },
    ],
  },
  ka: {
    eyebrow: "ქართული სამზარეულო თბილისის ცენტრში",
    title: "ცოცხალი და სანდო ადგილი თავისუფლების მოედანთან ახლოს.",
    text: "ფასანაური გიორგი ლეონიძის ქუჩაზე პოპულარული ქართული რესტორანია შიდა და გარე სივრცით, სწრაფი მომსახურებით და მენიუთი, რომელიც იდეალურია ჯგუფებისთვის, სტუმრებისთვის და ქართული გემოების მოყვარულებისთვის.",
    alt: "მაგიდა ხინკლით, ხაჭაპურით, შქმერულით, სოკოთი და ქართული წასახემსებლებით",
    highlights: [
      { icon: MapPinned, title: "ცენტრალური მდებარეობა", text: "გიორგი ლეონიძის 7/2, თავისუფლების მოედანთან ახლოს." },
      { icon: Utensils, title: "მრავალფეროვანი მენიუ", text: "ხინკალი, ხაჭაპური, სუპები, ქაბაბი, შქმერული, ფხალი და სხვა." },
      { icon: Bike, title: "შეკვეთის არჩევანი", text: "ადგილზე მირთმევა, წაღება და უკონტაქტო მიტანა." },
    ],
  },
};

type AboutProps = { language: Language };

const About = ({ language }: AboutProps) => {
  const t = content[language];

  return (
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
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg mb-7">
              {t.text}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.highlights.map(({ icon: Icon, title, text }) => (
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
              alt={t.alt}
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
};

export default About;
