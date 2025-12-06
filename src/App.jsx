import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useEffect } from "react";

// Lazy-loaded pages (code splitting por rota)
const Home = lazy(() => import("./pages/Home"));
const SocialProjects = lazy(() => import("./pages/SocialProjects"));
const ProjectMazuay = lazy(() => import("./pages/ProjectMazuay"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const PartnersEcosystem = lazy(() => import("./pages/PartnersEcosystem"));

function App() {
  // 🌞 Força o tema claro assim que o app monta
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      {/* Suspense exibe um fallback leve enquanto cada chunk é carregado */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-black text-neutral-200">
            <span className="text-sm tracking-wide uppercase">
              Carregando experiência Stock Capital...
            </span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/social-projects" element={<SocialProjects />} />
          <Route path="/projects/mazuay-redd" element={<ProjectMazuay />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/partners-ecosystem" element={<PartnersEcosystem />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
