import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

const Location = () => (
  <section id="visit" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-pistachio font-semibold mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Come Say<br />
            <span className="text-strawberry italic">Hello</span>
          </h2>
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-pistachio mt-1 shrink-0" size={20} />
            <div>
              <p className="font-body font-semibold text-foreground">19 Ilia Chavchavadze Avenue</p>
              <p className="font-body text-muted-foreground">Tbilisi, Georgia</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < 4 ? "fill-pistachio text-pistachio" : "fill-pistachio/50 text-pistachio/50"} />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">4.5 on Google Maps</span>
          </div>
          <a
            href="https://maps.app.goo.gl/LtzPHZTkq5o8pejf8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pistachio text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:brightness-110 transition-all"
          >
            Get Directions
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-[450px]"
        >
          <iframe
            title="Gelato location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1!2d44.7487!3d41.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzMyLjAiTiA0NMKwNDQnNTUuMyJF!5e0!3m2!1sen!2sge!4v1"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Location;
