import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star } from "lucide-react";

const Location = () => (
  <section id="visit" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Come Visit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Find Us in <br />
            <span className="text-berry">Tbilisi</span>
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-body font-bold text-foreground">19 Kostava · 1 Vashlovani St</p>
                <p className="font-body text-muted-foreground">Tbilisi 0108, Georgia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-body font-bold text-foreground">Open Daily</p>
                <p className="font-body text-muted-foreground">Until 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-body font-bold text-foreground">+995 598 13 81 34</p>
                <p className="font-body text-muted-foreground">Call or WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-waffle text-waffle" />
              ))}
            </div>
            <span className="font-body text-sm font-bold text-foreground">5.0</span>
            <span className="font-body text-sm text-muted-foreground">on Google Maps</span>
          </div>

          <a
            href="https://maps.app.goo.gl/VYxTn6cDxvv1AxV39"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:brightness-110 transition-all"
          >
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-xl h-80 md:h-[450px]"
        >
          <iframe
            title="Spaguletti location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.5!2d44.7884!3d41.7060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzIxLjYiTiA0NMKwNDcnMTguMiJF!5e0!3m2!1sen!2sge!4v1"
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
