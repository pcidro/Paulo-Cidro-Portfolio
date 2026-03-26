import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import "./css/app.css";
import Projetos from "./Sections/Projetos";
import Skills from "./Sections/Skills";
import AboutSection from "./Sections/AboutSection";
import { UiContextProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <UiContextProvider>
      <Header />
      <Hero />
      <Projetos />
      <Skills />
      <AboutSection />
    </UiContextProvider>
  );
};

export default App;
