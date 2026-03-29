import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import "./css/app.css";
import Projetos from "./Sections/Projetos";
import Skills from "./Sections/Skills";
import AboutSection from "./Sections/AboutSection";
import { UiContextProvider } from "./Context/ThemeContext";
import Contato from "./Sections/Contato";
import Footer from "./Sections/Footer";
import { ScrollProvider } from "./Context/ScrollContext";

const App = () => {
  return (
    <ScrollProvider>
      <UiContextProvider>
        <Header />
        <Hero />
        <Projetos />
        <Skills />
        <AboutSection />
        <Contato />
        <Footer />
      </UiContextProvider>
    </ScrollProvider>
  );
};

export default App;
