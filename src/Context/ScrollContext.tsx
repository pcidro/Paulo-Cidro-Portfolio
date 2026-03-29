import { createContext, useContext, useRef } from "react";

type iScrollContext = {
  heroRef: React.RefObject<HTMLElement | null>;
  projetosRef: React.RefObject<HTMLElement | null>;
  skillsRef: React.RefObject<HTMLElement | null>;
  contatoRef: React.RefObject<HTMLElement | null>;
  scrolltoSection: (ref: React.RefObject<HTMLElement | null>) => void;
};

const UiContext = createContext<iScrollContext | null>(null);

export const Scroll = () => {
  const context = useContext(UiContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const ScrollProvider = ({ children }: React.PropsWithChildren) => {
  const heroRef = useRef<HTMLElement>(null);
  const projetosRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contatoRef = useRef<HTMLElement>(null);

  const scrolltoSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <UiContext.Provider
      value={{ heroRef, projetosRef, skillsRef, contatoRef, scrolltoSection }}
    >
      {children}
    </UiContext.Provider>
  );
};
