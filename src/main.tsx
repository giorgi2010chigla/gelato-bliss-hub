import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const menuItems = [
  ["Khinkali", "Hand-folded Georgian dumplings with rich broth and herbs."],
  ["Adjarian Khachapuri", "Boat-shaped cheese bread finished with egg and butter."],
  ["Shkmeruli", "Chicken in creamy garlic sauce, served hot and generous."],
  ["Mtsvadi & Kebab", "Charcoal-grilled favorites with fresh herbs and sauces."],
];

const reviews = [
  ["Pietro Furfaro", "Very central position, fast service, easy communication, nice khinkali, and amazing soup."],
  ["Bahattin Duran", "Great spot for local Georgian cuisine. The khachapuri and meat dishes were excellent."],
  ["Ana K.", "Warm dining room, quick takeaway, and food that tastes like Tbilisi."],
];

function App() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>Pasanauri</a>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="call-link" href="tel:+995595630003" onClick={closeMenu}>Call</a>
        </div>
      </nav>

      <section id="home" className="hero section-anchor">
        <div className="hero-copy">
          <p className="eyebrow">4.6 rated · 6,885 reviews</p>
          <h1>Pasanauri</h1>
          <p className="lead">Traditional Georgian food in central Tbilisi, known for khinkali, khachapuri, shkmeruli, fast service, and a lively local dining room.</p>
          <div className="actions">
            <a className="primary" href="#menu">View Menu</a>
            <a className="secondary" href="#visit">Directions</a>
          </div>
        </div>
      </section>

      <section id="menu" className="content-band section-anchor">
        <p className="eyebrow">Signature dishes</p>
        <h2>Georgian comfort food, served fast and full of flavor.</h2>
        <div className="grid menu-grid">
          {menuItems.map(([name, description]) => (
            <article className="item-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="reviews section-anchor">
        <p className="eyebrow">Guest reviews</p>
        <h2>4.6 stars from 6,885 guests.</h2>
        <div className="grid review-grid">
          {reviews.map(([name, quote]) => (
            <article className="review-card" key={name}>
              <p>“{quote}”</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="content-band visit section-anchor">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2>Giorgi Leonidze Street, Tbilisi</h2>
          <p>Open for dine-in, takeaway, and delivery. Call ahead for a quick order or stop by for classic Georgian dishes in the city center.</p>
        </div>
        <a className="primary" href="https://www.google.com/maps/search/?api=1&query=Pasanauri%20Giorgi%20Leonidze%20Street%20Tbilisi" target="_blank" rel="noreferrer">Open Map</a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
