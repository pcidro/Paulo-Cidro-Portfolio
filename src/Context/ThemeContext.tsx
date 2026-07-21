import React from "react";

type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const UiContext = React.createContext<IUiContext | null>(null);
const THEME_STORAGE_KEY = "theme";

export const Theme = () => {
  const context = React.useContext(UiContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) === "dark";
    } catch {
      return false;
    }
  });

  React.useEffect(() => {
    document.body.classList.toggle("dark", dark);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Mantém a troca de tema funcionando mesmo se o armazenamento for bloqueado.
    }
  }, [dark]);

  return (
    <UiContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
