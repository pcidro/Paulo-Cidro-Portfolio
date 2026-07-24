import { ScrollProvider } from "./hooks/useScroll";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Credibility from "./components/sections/Credibility";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import WorkApproach from "./components/sections/WorkApproach";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <ScrollProvider>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Credibility />
        <Projects />
        <Skills />
        <About />
        <WorkApproach />
        <Contact />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
