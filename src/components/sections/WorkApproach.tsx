import SectionReveal from "../ui/SectionReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faCode, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Principle {
  icon: IconDefinition;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    icon: faLayerGroup,
    title: "Interfaces claras e responsivas",
    description:
      "Cada tela é construída com atenção à hierarquia visual, acessibilidade e adaptação a diferentes dispositivos e contextos de uso.",
  },
  {
    icon: faCode,
    title: "Código organizado e componentizado",
    description:
      "Componentes reutilizáveis, tipagem consistente e separação de responsabilidades para facilitar a manutenção e a evolução do projeto.",
  },
  {
    icon: faPuzzlePiece,
    title: "Integração entre interface e negócio",
    description:
      "Conexão entre o que o usuário vê e as regras de negócio no back-end, garantindo que a experiência visual reflita os dados e fluxos reais da aplicação.",
  },
];

export default function WorkApproach() {
  return (
    <section className="section section-alt" aria-labelledby="work-approach-title">
      <div className="container-main">
        <SectionReveal>
          <div className="section-header">
            <h2 id="work-approach-title" className="section-title">Como trabalho</h2>
          </div>
        </SectionReveal>

        <div className="grid-3">
          {principles.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.1}>
              <div className="approach-card">
                <div className="approach-icon">
                  <FontAwesomeIcon icon={p.icon} />
                </div>
                <h3 className="approach-title">{p.title}</h3>
                <p className="approach-desc">{p.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
