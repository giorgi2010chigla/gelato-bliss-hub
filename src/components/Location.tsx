import { motion } from "framer-motion";
import { Car, Clock, MapPin, Phone } from "lucide-react";

const Location = () => (
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
            Visit Forest Country Place
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Stop by on LA-17 in Forest, Louisiana.
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <p className="font-body font-bold">8206 LA-17</p>
                <p className="font-body text-primary-foreground/75">Forest, LA 71242, United States</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <p className="font-body font-bold">Open today · closes 6 PM</p>
                <p className="font-body text-primary-foreground/75">Check Google Maps for current daily hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <p className="font-body font-bold">+1 318-490-9001</p>
                <p className="font-body text-primary-foreground/75">Call ahead for questions or pickup.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Car className="text-accent shrink-0 mt-1" size={22} />
              <div>
                <p className="font-body font-bold">Dine-in and drive-through</p>
                <p className="font-body text-primary-foreground/75">Delivery not listed.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+13184909001"
              className="bg-accent text-accent-foreground font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:brightness-105 transition-all"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=8206%20LA-17%2C%20Forest%2C%20LA%2071242"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/35 text-primary-foreground font-body font-bold text-sm uppercase tracking-wide px-7 py-4 rounded-md hover:bg-primary-foreground/10 transition-all"
            >
              Get Directions
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
            title="Forest Country Place location on Google Maps"
            src="https://www.google.com/maps?q=8206%20LA-17%2C%20Forest%2C%20LA%2071242&output=embed"
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
