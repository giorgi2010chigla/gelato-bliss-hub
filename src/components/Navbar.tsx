import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "@/pages/Index";

const labels = {
  en: {
    brand: "Pasanauri",
    links: [
      { label: "Home", href: "#home" },
      { label: "Food", href: "#menu" },
      { label: "Reviews", href: "#reviews" },
      { label: "Visit", href: "#visit" },
    ],
    call: "Call",
    callFull: "Call 595 63 00 03",
    language: "ქართული",
  },
  ka: {
    brand: "ფასანაური",
    links: [
      { label: "მთავარი", href: "#home" },
      { label: "მენიუ", href: "#menu" },
      { label: "შეფასებები", href: "#reviews" },
      { label: "მისვლა", href: "#visit" },
    ],
    call: "ზარი",
    callFull: "დარეკვა 595 63 00 03",
    language: "English",
  },
};

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const copy = labels[language];
  const nextLanguage: Language = language === "en" ? "ka" : "en";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold text-primary">
          {copy.brand}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {copy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => onLanguageChange(nextLanguage)}
            className="border border-border text-foreground font-body font-bold text-sm px-4 py-2.5 rounded-md hover:bg-muted transition-all"
            aria-label="Change language"
          >
            {copy.language}
          </button>
          <a
            href="tel:+995595630003"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-md hover:brightness-110 transition-all"
          >
            <Phone size={16} /> {copy.call}
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
              {copy.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  onLanguageChange(nextLanguage);
                  setOpen(false);
                }}
                className="border border-border text-foreground font-body font-bold text-sm px-5 py-2.5 rounded-md text-center hover:bg-muted transition-all"
              >
                {copy.language}
              </button>
              <a
                href="tel:+995595630003"
                className="bg-primary text-primary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-md text-center hover:brightness-110 transition-all"
              >
                {copy.callFull}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
