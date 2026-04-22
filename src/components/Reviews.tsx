import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Language } from "@/pages/Index";

const content = {
  en: {
    eyebrow: "Guest reviews",
    title: "4.6 stars from 6,885 guests.",
    rating: "4.6 · 6,885 reviews",
    aria: "4.6 star rating",
    reviews: [
      { name: "Pietro Furfaro", quote: "Very central position, fast service, easy communication, nice khinkali, and amazing soup." },
      { name: "Bahattin Duran", quote: "Great spot for local Georgian cuisine. The khachapuri and meat-filled dumplings were excellent." },
      { name: "Eldar", quote: "I tried khachapuri and soup and was impressed by the taste. I do not regret stopping here at all." },
      { name: "Maralee C", quote: "The food was amazing — possibly the best meal of my life. Outdoor heaters made it comfortable." },
    ],
  },
  ka: {
    eyebrow: "სტუმრების შეფასებები",
    title: "4.6 ვარსკვლავი 6,885 სტუმრისგან.",
    rating: "4.6 · 6,885 მიმოხილვა",
    aria: "4.6 ვარსკვლავიანი შეფასება",
    reviews: [
      { name: "Pietro Furfaro", quote: "ძალიან ცენტრალური მდებარეობა, სწრაფი მომსახურება, მარტივი კომუნიკაცია, კარგი ხინკალი და შესანიშნავი სუპი." },
      { name: "Bahattin Duran", quote: "კარგი ადგილი ადგილობრივი ქართული სამზარეულოსთვის. ხაჭაპური და ხორციანი ხინკალი ძალიან მოგვეწონა." },
      { name: "Eldar", quote: "ხაჭაპური და სუპი გავსინჯე და გემომ შთაბეჭდილება მოახდინა. ნამდვილად არ ვინანე გაჩერება." },
      { name: "Maralee C", quote: "საჭმელი საოცარი იყო — შესაძლოა ჩემი ცხოვრების საუკეთესო სადილი. გარე გამათბობლები კომფორტს ქმნიდა." },
    ],
  },
};

type ReviewsProps = { language: Language };

const Reviews = ({ language }: ReviewsProps) => {
  const t = content[language];

  return (
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
              {t.eyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
              {t.title}
            </h2>
            <div className="flex items-center gap-2" aria-label={t.aria}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="fill-accent text-accent" />
              ))}
              <span className="font-body font-bold text-foreground ml-2">{t.rating}</span>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.reviews.map((review, i) => (
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
};

export default Reviews;
