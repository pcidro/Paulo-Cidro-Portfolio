import SectionReveal from "../ui/SectionReveal";

const items = [
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas" },
  { label: "Projetos", value: "Full Stack publicados e em produção" },
  { label: "Clientes reais", value: "Sites institucionais em domínio próprio" },
  { label: "Stack principal", value: "React, Next.js e TypeScript" },
];

export default function Credibility() {
  return (
    <section className="credibility" aria-label="Credenciais profissionais">
      <SectionReveal>
        <div className="container-main">
          <div className="credibility-card">
            <div className="credibility-grid">
              {items.map((item) => (
                <div key={item.label} className="credibility-item">
                  <span className="credibility-label">{item.label}</span>
                  <span className="credibility-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
