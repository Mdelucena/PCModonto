import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Maria Silva',
    text: 'Clínica incrível! Ambiente acolhedor e equipe extremamente profissional. Meu sorriso nunca esteve tão bonito.',
    rating: 5,
  },
  {
    name: 'João Santos',
    text: 'Excelente experiência do início ao fim. O atendimento personalizado faz toda a diferença. Super recomendo!',
    rating: 5,
  },
  {
    name: 'Ana Oliveira',
    text: 'Profissionalismo de alto nível. Fiz meu tratamento com total confiança e o resultado superou todas as minhas expectativas.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">
            O que nossos pacientes <em>dizem</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A satisfação dos nossos pacientes é o nosso maior reconhecimento.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ name, text, rating }) => (
            <div key={name} className="testimonial-card">
              <Quote size={32} strokeWidth={1} className="testimonial-card__quote" />
              <div className="testimonial-card__stars">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <p className="testimonial-card__text">{text}</p>
              <div className="testimonial-card__divider" />
              <span className="testimonial-card__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
