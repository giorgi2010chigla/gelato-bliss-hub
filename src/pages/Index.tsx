import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { useState } from "react";

export type Language = "en" | "ka";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <MenuSection language={language} />
      <Reviews language={language} />
      <Location language={language} />
      <Footer language={language} />
    </>
  );
};

export default Index;
