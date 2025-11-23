import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SocialProjects from "./pages/SocialProjects";
import ProjectMazuay from "./pages/ProjectMazuay";
import SustainabilityPage from "./pages/SustainabilityPage";
import PartnersEcosystem from "./pages/PartnersEcosystem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-projects" element={<SocialProjects />} />
        <Route path="/projects/mazuay-redd" element={<ProjectMazuay />} />
        <Route path="/sustainability" element={<SustainabilityPage />} /> 
        <Route path="/partners-ecosystem" element={<PartnersEcosystem />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
