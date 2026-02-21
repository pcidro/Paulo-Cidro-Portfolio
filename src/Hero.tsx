import React from "react";
import PauloCidro from "./assets/Pcidro.png";
import "./css/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Olá, eu sou <span>Paulo Cidro!</span>
        </h1>
        <span className="role">Desenvolvedor front end</span>
        <p>
          Especializado em criar interfaces modernas, performaticas e
          responsivas{" "}
        </p>
        <div className="hero-buttons">
          <a className="btn-primary">Download CV</a>
          <a className="btn-secondary">Entre em contato</a>
        </div>
      </div>
      <div className="hero-foto">
        <img src={PauloCidro} alt="" />
      </div>
    </section>
  );
};

export default Hero;
