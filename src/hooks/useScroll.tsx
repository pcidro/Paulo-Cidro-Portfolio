import { createContext, useContext, useRef, useState, useEffect, useCallback } from "react";
import type { RefObject } from "react";

interface ScrollContextType {
  heroRef: RefObject<HTMLElement | null>;
  projetosRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  sobreRef: RefObject<HTMLElement | null>;
  contatoRef: RefObject<HTMLElement | null>;
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
  activeSection: string;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
};

export const ScrollProvider = ({ children }: React.PropsWithChildren) => {
  const heroRef = useRef<HTMLElement>(null);
  const projetosRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const sobreRef = useRef<HTMLElement>(null);
  const contatoRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = useCallback((ref: RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      const offset = 120;
      const sections = [
        { id: "contato", ref: contatoRef },
        { id: "sobre", ref: sobreRef },
        { id: "competencias", ref: skillsRef },
        { id: "projetos", ref: projetosRef },
        { id: "inicio", ref: heroRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const top = section.ref.current.offsetTop - offset;
          if (scrollTop >= top) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      setActiveSection("inicio");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        heroRef,
        projetosRef,
        skillsRef,
        sobreRef,
        contatoRef,
        scrollToSection,
        activeSection,
        scrollProgress,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
