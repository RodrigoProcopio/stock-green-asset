import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Solutions } from "../components/sections/Solutions";
import { Projects } from "../components/sections/Projects";
import { Sustainability } from "../components/sections/Sustainability";
import { Governance } from "../components/sections/Governance";
import { Team } from "../components/sections/Team";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export function Home() {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
