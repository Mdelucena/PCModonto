import { Link as RouterLink } from 'react-router-dom';
import {
  Smile,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Layers,
  HeartPulse,
  Moon,
  Scissors,
} from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    slug: 'periodontia',
    icon: HeartPulse,
    title: 'Periodontia',
    short: 'Saúde e estética da gengiva',
  },
  {
    slug: 'protese-dentaria',
    icon: Smile,
    title: 'Prótese Dentária',
    short: 'Função e estética restauradas',
  },
  {
    slug: 'implantes-dentarios',
    icon: ShieldCheck,
    title: 'Implantes Dentários',
    short: 'Solução definitiva e moderna',
  },
  {
    slug: 'clareamento-dental',
    icon: Sparkles,
    title: 'Clareamento Dental',
    short: 'Sorriso mais branco e saudável',
  },
  {
    slug: 'facetas-de-resina',
    icon: Layers,
    title: 'Facetas de Resina',
    short: 'Transformação rápida e sem desgaste',
  },
  {
    slug: 'endodontia',
    icon: Stethoscope,
    title: 'Endodontia',
    short: 'Tratamento de canal especializado',
  },
  {
    slug: 'bruxismo',
    icon: Moon,
    title: 'Bruxismo',
    short: 'Proteção e equilíbrio da mordida',
  },
  {
    slug: 'plastica-gengival',
    icon: Scissors,
    title: 'Plástica Gengival',
    short: 'Harmonização do sorriso',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">Nossos Tratamentos</span>
          <h2 className="section-title">
            Cuidado completo para o seu <em>sorriso</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Tratamentos especializados com tecnologia avançada e atendimento humanizado,
            para devolver função, beleza e confiança ao seu sorriso.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ slug, icon: Icon, title, short }) => (
            <RouterLink
              key={slug}
              to={`/servicos/${slug}`}
              className="service-card"
            >
              <div className="service-card__icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{title}</h3>
                <span className="service-card__short">{short}</span>
              </div>
              <span className="service-card__arrow">→</span>
            </RouterLink>
          ))}
        </div>
      </div>
    </section>
  );
}
