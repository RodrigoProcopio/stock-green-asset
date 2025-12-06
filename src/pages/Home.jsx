import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

// 🔹 Lazy-load das seções (code splitting por seção)
const Hero = lazy(() =>
  import("../components/sections/Hero").then((m) => ({ default: m.Hero }))
);

const About = lazy(() =>
  import("../components/sections/About").then((m) => ({ default: m.About }))
);

const Solutions = lazy(() =>
  import("../components/sections/Solutions").then((m) => ({
    default: m.Solutions,
  }))
);

const Projects = lazy(() =>
  import("../components/sections/Projects").then((m) => ({
    default: m.Projects,
  }))
);

const Sustainability = lazy(() =>
  import("../components/sections/Sustainability").then((m) => ({
    default: m.Sustainability,
  }))
);

const Governance = lazy(() =>
  import("../components/sections/Governance").then((m) => ({
    default: m.Governance,
  }))
);

const Team = lazy(() =>
  import("../components/sections/Team").then((m) => ({ default: m.Team }))
);

// Partners tem `export function Partners` *e* `export default Partners`
const Partners = lazy(() =>
  import("../components/sections/Partners").then((m) => ({
    default: m.default || m.Partners,
  }))
);

const Contact = lazy(() =>
  import("../components/sections/Contact").then((m) => ({
    default: m.Contact,
  }))
);

export function Home() {
  const location = useLocation();

  // 👇 Scroll automático quando carregar com hash (/#solutions etc.)
  useEffect(() => {
    if (!location.hash) return;

    const el = document.querySelector(location.hash);
    if (el) {
      // delay pra garantir que os lazy já renderizaram
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location]);

  // 👇 Scroll automático via ?scroll=contact (ex: /?scroll=contact)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scroll");
    if (!target) return;

    const el = document.getElementById(target);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }

    // limpa o query param da URL
    window.history.replaceState({}, "", location.pathname);
  }, [location.search, location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-main)]">
      <Navbar />
      <main>
        {/* Hero: principal para LCP, com fallback que mantém a altura */}
        <Suspense fallback={<div className="min-h-[70vh] w-full bg-[var(--bg-section)]" />}>
          <Hero />
        </Suspense>

        {/* Demais seções podem carregar em paralelo, fallback simples */}
        <Suspense fallback={null}>
          <About />
          <Solutions />
          <Projects />
          <Sustainability />
          <Governance />
          <Team />
          <Partners />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
