import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import type { Language } from "@/pages/Index";

const content = {
  en: {
    eyebrow: "Visit Pasanauri",
    title: "Find us on Giorgi Leonidze Street in Tbilisi.",
    addressTitle: "7/2 Giorgi Leonidze Street",
    addressText: "Tbilisi, Georgia",
    hoursTitle: "Open today · closes 12 AM",
    hoursText: "Check Google Maps for current daily hours.",
    phoneText: "Call for reservations, takeaway, or order questions.",
    serviceTitle: "Dine-in, takeaway, and no-contact delivery",
    serviceText: "Order online or visit the central Tbilisi dining room.",
    call: "Call Now",
    directions: "Get Directions",
    mapTitle: "Pasanauri location on Google Maps",
  },
  ka: {
    eyebrow: "ეწვიეთ ფასანაურს",
    title: "გვიპოვეთ გიორგი ლეონიძის ქუჩაზე, თბილისში.",
    addressTitle: "გიორგი ლეონიძის 7/2",
    addressText: "თბილისი, საქართველო",
    hoursTitle: "ღიაა დღეს · იკეტება 12 AM",
    hoursText: "ზუსტი სამუშაო საათები გადაამოწმეთ Google Maps-ზე.",
    phoneText: "დარეკეთ დაჯავშნისთვის, წაღებისთვის ან შეკვეთის კითხვებისთვის.",
    serviceTitle: "ადგილზე, წაღება და უკონტაქტო მიტანა",
    serviceText: "შეუკვეთეთ ონლაინ ან ეწვიეთ რესტორანს თბილისის ცენტრში.",
    call: "დარეკვა",
    directions: "მიმართულება",
    mapTitle: "ფასანაურის მდებარეობა Google Maps-ზე",
  },
};

type LocationProps = { language: Language };

const Location = ({ language }: LocationProps) => {
  const t = content[language];

  return (
    <section id="visit" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm font-bold text-accent uppercase tracking-wider mb-3">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {t.title}
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-body font-bold">{t.addressTitle}</p>
                  <p className="font-body text-primary-foreground/75">{t.addressText}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-body font-bold">{t.hoursTitle}</p>
                  <p className="font-body text-primary-foreground/75">{t.hoursText}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-body font-bold">595 63 00 03</p>
                  <p className="font-body text-primary-foreground/75">{t.phoneText}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingBag className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <p className="font-body font-bold">{t.serviceTitle}</p>
                  <p className="font-body text-primary-foreground/75">{t.serviceText}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+995595630003"
                className="bg-accent text-accent-foreground font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:brightness-105 transition-all"
              >
                {t.call}
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pasanauri%207%2F2%20Giorgi%20Leonidze%20St%20Tbilisi"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/35 text-primary-foreground font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:bg-primary-foreground/10 transition-all"
              >
                {t.directions}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-md overflow-hidden shadow-xl h-80 md:h-[440px] border border-primary-foreground/20"
          >
            <iframe
              title={t.mapTitle}
              src="https://www.google.com/maps?q=Pasanauri%207%2F2%20Giorgi%20Leonidze%20St%20Tbilisi&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
