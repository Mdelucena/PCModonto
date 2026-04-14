import { Link } from 'react-scroll';
import heroImg from '../assets/image/foto hero.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
            <div className="hero__pills">
              <span className="hero__pill">✦ +25 anos de experiência</span>
              <span className="hero__pill">✦ Ambiente acolhedor</span>
              <span className="hero__pill">✦ Resultado garantido</span>
            </div>
            <div className="hero__actions">
              <a href="https://wa.me/5581986284435" className="hero__btn hero__btn--primary">
                Agendar Consulta
              </a>
              <Link to="services" smooth offset={-70} duration={600} className="hero__btn hero__btn--outline">
                Conheça nossos serviços
              </Link>
            </div>
            <div className="hero__no-plan">
              <span className="hero__no-plan-badge">✦ Convênios aceitos em procedimentos selecionados</span>
            </div>
          </div>
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
