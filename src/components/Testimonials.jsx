import { Star } from 'lucide-react';
import claraImg from '../assets/image/coments/clara.jpeg';
import rafaelImg from '../assets/image/coments/rafael.jpeg';
import mateusImg from '../assets/image/coments/mateus.jpeg';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Clara Farias',
    photo: claraImg,
    text: 'Ambiente acolhedor e equipe incrível! Meu sorriso nunca esteve tão bonito.',
    rating: 5,
  },
  {
    name: 'Rafael Dias',
    photo: rafaelImg,
    text: 'Atendimento personalizado do início ao fim. Faz toda a diferença. Super recomendo!',
    rating: 5,
  },
  {
    name: 'Mateus Lucena',
    photo: mateusImg,
    text: 'Profissionalismo de alto nível. Tratamento com total confiança e resultado que superou tudo.',
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
          {TESTIMONIALS.map(({ name, photo, text, rating }) => (
            <div key={name} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                ))}
              </div>
              <p className="testimonial-card__text">{text}</p>
              <div className="testimonial-card__divider" />
              <div className="testimonial-card__author">
                <img src={photo} alt={name} className="testimonial-card__avatar" />
                <span className="testimonial-card__name">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
