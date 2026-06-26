import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import DetailExperiencePage from "./pages/DetailExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import DetailProjectPage from "./pages/DetailProjectPage";
import CertificatesPage from "./pages/CertificatesPage";
import DetailCertificatesPage from "./pages/DetailCertificatesPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/:slug" element={<DetailExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<DetailProjectPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/certificates/:slug" element={<DetailCertificatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
