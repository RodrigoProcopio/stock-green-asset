import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Solutions } from "../components/sections/Solutions";
import { Projects } from "../components/sections/Projects";
import { Sustainability } from "../components/sections/Sustainability";
import { Governance } from "../components/sections/Governance";
import { Team } from "../components/sections/Team";
import Partners from "../components/sections/Partners";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export function Home() {
  const location = useLocation();

  // 👇 Scroll automático quando carregar com hash (/#solutions)
  useEffect(() => {
    if (!location.hash) return;

    const el = document.querySelector(location.hash);
    if (el) {
      // pequeno delay garante que tudo já renderizou
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Solutions />
        <Projects />
        <Sustainability />
        <Governance />
        <Team />
        <Partners />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
