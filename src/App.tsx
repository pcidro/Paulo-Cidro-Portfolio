import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Sobre from "./Sobre";
import "./css/app.css";
import Projetos from "./Projetos";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projetos />
      <Sobre />
    </div>
  );
};

export default App;
