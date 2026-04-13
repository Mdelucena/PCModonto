import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Smile,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Layers,
  HeartPulse,
  Moon,
} from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    slug: 'periodontia',
    icon: HeartPulse,
    title: 'Periodontia',
    short: 'Saúde e estética da gengiva',
    desc: 'Especialidade focada na prevenção, diagnóstico e tratamento de doenças que afetam os tecidos de suporte dos dentes — gengiva, osso alveolar e ligamentos periodontais. Trata inflamações como gengivite e periodontite, essenciais para evitar a perda dentária. Inclui também plásticas gengivais que transformam sorrisos de quem tem dentes curtos ou gengivas excessivas.',
  },
  {
    slug: 'protese-dentaria',
    icon: Smile,
    title: 'Prótese Dentária',
    short: 'Função e estética restauradas',
    desc: 'Especialidade que recupera a função mastigatória e a estética através da substituição de dentes danificados ou perdidos. As próteses podem ser fixas — como coroas e pivôs — ou móveis, como próteses parciais removíveis ou prótese total, sempre com foco em conforto e naturalidade.',
  },
  {
    slug: 'implantes-dentarios',
    icon: ShieldCheck,
    title: 'Implantes Dentários',
    short: 'Solução definitiva e moderna',
    desc: 'A solução mais moderna para dentes perdidos. Os implantes são dispositivos de titânio que substituem a raiz do dente, dando suporte a uma prótese parafusada ou cimentada. Proporcionam estética e funcionalidade idênticas aos dentes naturais, com resultado duradouro e seguro.',
  },
  {
    slug: 'clareamento-dental',
    icon: Sparkles,
    title: 'Clareamento Dental',
    short: 'Sorriso mais branco e saudável',
    desc: 'Tratamento seguro e eficaz que remove o tom amarelado com produtos de alta qualidade, proporcionando resultados rápidos e duradouros. O processo é personalizado, considerando as necessidades de cada sorriso, com acompanhamento profissional em todas as etapas.',
  },
  {
    slug: 'facetas-de-resina',
    icon: Layers,
    title: 'Facetas de Resina',
    short: 'Transformação rápida e sem desgaste',
    desc: 'A solução ideal para um sorriso mais bonito de forma rápida, simples e sem desgastes. Corrigem manchas, desgastes, espaços entre os dentes e pequenas imperfeições, proporcionando um resultado natural e harmonioso sem necessidade de procedimentos invasivos.',
  },
  {
    slug: 'endodontia',
    icon: Stethoscope,
    title: 'Endodontia',
    short: 'Tratamento de canal especializado',
    desc: 'Especialidade que trata doenças e lesões da polpa dentária — o tecido interno com nervos e vasos sanguíneos. Conhecida como tratamento de canal, salva dentes comprometidos por cáries profundas, traumas ou infecções, restaurando saúde e funcionalidade sem extração.',
  },
  {
    slug: 'bruxismo',
    icon: Moon,
    title: 'Bruxismo',
    short: 'Proteção e equilíbrio da mordida',
    desc: 'Tratamento do hábito involuntário de apertar ou ranger os dentes, intensificado pelo estresse. Causa desgaste dentário, dores na mandíbula, dor de cabeça e sensibilidade. O tratamento inclui placas de mordida personalizadas, fisioterapia da mandíbula e orientações para reduzir o estresse.',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

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
          {SERVICES.map(({ slug, icon: Icon, title, short, desc }) => (
            <div
              key={title}
              className={`service-card ${active === title ? 'service-card--open' : ''}`}
              onClick={() => setActive(active === title ? null : title)}
            >
              <div className="service-card__top">
                <div className="service-card__icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="service-card__info">
                  <h3 className="service-card__title">{title}</h3>
                  <span className="service-card__short">{short}</span>
                </div>
                <span className="service-card__arrow">+</span>
              </div>
              <p className="service-card__desc">{desc}</p>
              <RouterLink
                to={`/servicos/${slug}`}
                className="service-card__link"
                onClick={(e) => e.stopPropagation()}
              >
                Saiba mais →
              </RouterLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
