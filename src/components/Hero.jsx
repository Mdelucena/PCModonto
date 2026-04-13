import { Link } from 'react-scroll';
import { ArrowDown, Phone, MapPin } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import heroImg from '../assets/image/foto hero.jpeg';
import './Hero.css';

const NAV_ITEMS = [
  { to: 'hero', label: 'Início' },
  { to: 'services', label: 'Serviços' },
  { to: 'about', label: 'Sobre Nós' },
  { to: 'contact', label: 'Contato' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />

      {/* Canto superior esquerdo — telefone e localização */}
      <div className="hero__header-info">
        <a href="https://wa.me/5581986284435" className="hero__info-item">
          <Phone size={13} strokeWidth={2} />
          (81) 98628-4435
        </a>
        <a
          href="https://maps.google.com/?q=Rua+General+Joaquim+Inácio,+830,+Ilha+do+Leite,+Recife,+PE"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__info-item"
        >
          <MapPin size={13} strokeWidth={2} />
          Ver Localização
        </a>
      </div>

      {/* Canto superior direito — só Agendar Consulta */}
      <div className="hero__header-actions">
        <a href="https://wa.me/5581986284435" className="hero__btn hero__btn--primary hero__btn--sm">
          Agendar Consulta
        </a>
      </div>

      {/* Logo + nav centralizados */}
      <div className="hero__header container">
        <div className="hero__header-center">
          <div className="hero__logo-wrapper">
            <img src={logo} alt="PCM Odonto" className="hero__logo" />
          </div>
          <nav className="hero__nav">
            {NAV_ITEMS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                spy
                smooth
                offset={-70}
                duration={600}
                className="hero__nav-link"
                activeClass="hero__nav-link--active"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Split 50/50: texto esquerda | imagem direita */}
      <div className="hero__body">
        {/* Lado esquerdo — texto */}
        <div className="hero__left">
          <div className="hero__text">
            <span className="hero__label">Clínica Odontológica</span>
            <h1 className="hero__title">
              Cuidando do seu sorriso<br />com <em>excelência</em>
            </h1>
            <p className="hero__subtitle">
              Tratamentos personalizados em estética e saúde bucal,
              com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="hero__actions">
              <a href="https://wa.me/5581986284435" className="hero__btn hero__btn--primary">
                Agendar Consulta
              </a>
              <Link to="services" smooth offset={-70} duration={600} className="hero__btn hero__btn--outline">
                Conheça nossos serviços
              </Link>
            </div>
            <div className="hero__no-plan">
              <span className="hero__no-plan-badge">✓ Aceitamos plano de saúde</span>
            </div>
          </div>

          <Link to="services" smooth offset={-70} duration={600} className="hero__scroll">
            <ArrowDown size={20} />
          </Link>
        </div>

        {/* Lado direito — imagem preenche tudo */}
        <div className="hero__right">
          <img src={heroImg} alt="Foto da Dentista" className="hero__image" />
          <div className="hero__image-fade" />
        </div>
      </div>

      {/* Ticker de procedimentos */}
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {[
            'Periodontia',
            'Prótese Dentária',
            'Implantes Dentários',
            'Clareamento Dental',
            'Facetas de Resina',
            'Endodontia',
            'Bruxismo',
            'Plástica Gengival',
            'Tratamento de Canal',
            'Reabilitação Oral',
          ].concat([
            'Periodontia',
            'Prótese Dentária',
            'Implantes Dentários',
            'Clareamento Dental',
            'Facetas de Resina',
            'Endodontia',
            'Bruxismo',
            'Plástica Gengival',
            'Tratamento de Canal',
            'Reabilitação Oral',
          ]).map((item, i) => (
            <span key={i} className="hero__ticker-item">
              <span className="hero__ticker-dot">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
