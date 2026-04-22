import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Food", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold text-primary">
          Sakhli 1904
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+995551191904"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-md hover:brightness-110 transition-all"
          >
            <Phone size={16} /> Call
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+995551191904"
                className="bg-primary text-primary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-md text-center hover:brightness-110 transition-all"
              >
                Call 551 19 19 04
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
