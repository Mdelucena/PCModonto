import { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ChevronDown, ArrowLeft, Check, Phone, MapPin, Send, Menu, X } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import drPatricia from '../assets/image/dr_patricia.jpeg';
import porcelanato from '../assets/image/porcelanato.jpg';
import apontando from '../assets/image/apontando.jpeg';
import { SERVICES } from '../data/servicesData';

import clareamento1 from '../assets/image/servicos/clareamento_1.png';
import clareamento2 from '../assets/image/servicos/clareamento_2.png';
import clareamento3 from '../assets/image/servicos/clareamento_3.png';
import implante1 from '../assets/image/servicos/implantedentario_1.png';
import implante2 from '../assets/image/servicos/implantedentario_2.png';
import implante3 from '../assets/image/servicos/implantedentario_3.png';
import periodontia1 from '../assets/image/servicos/periodontia_1.png';
import periodontia2 from '../assets/image/servicos/periodontia_2.png';
import periodontia3 from '../assets/image/servicos/periodontia3.png';
import protese1 from '../assets/image/servicos/protesedentaria_1.png';
import protese2 from '../assets/image/servicos/protesedentaria_2.png';
import protese3 from '../assets/image/servicos/protesedentaria_3.png';
import facetas1 from '../assets/image/servicos/facetas_1.png';
import facetas2 from '../assets/image/servicos/facetas_2.png';
import facetas3 from '../assets/image/servicos/facetas_3.png';
import endodontia1 from '../assets/image/servicos/endodontia_1.png';
import endodontia2 from '../assets/image/servicos/endodontia_2.png';
import endodontia3 from '../assets/image/servicos/endodontia_3.png';
import bruxismo1 from '../assets/image/servicos/bruximos_1.png';
import bruxismo2 from '../assets/image/servicos/bruximos_2.png';
import bruxismo3 from '../assets/image/servicos/bruxismo_3.png';
import plastica1 from '../assets/image/servicos/plasticagengival_1.png';
import plastica2 from '../assets/image/servicos/plasticagengival_2.png';
import plastica3 from '../assets/image/servicos/plasticagengival_3.png';

const SERVICE_IMAGES = {
  'clareamento-dental':   [clareamento1, clareamento2, clareamento3],
  'implantes-dentarios':  [implante1,    implante2,    implante3],
  'periodontia':          [periodontia1, periodontia2, periodontia3],
  'protese-dentaria':     [protese1,     protese2,     protese3],
  'facetas-de-resina':    [facetas1,     facetas2,     facetas3],
  'endodontia':           [endodontia1,  endodontia2,  endodontia3],
  'bruxismo':             [bruxismo1,    bruxismo2,    bruxismo3],
  'plastica-gengival':    [plastica1,    plastica2,    plastica3],
};
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './ServicePage.css';

function maskPhone(value) {
  return value.replace(/\D/g, '').slice(0, 11)
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const imgs = SERVICE_IMAGES[slug] || [];
  const [openItem, setOpenItem] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'phone' ? maskPhone(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
`Olá, Dra. Patrícia! Vim pelo site da PCM Odonto.

*Nome:* ${form.name}
*E-mail:* ${form.email}
*WhatsApp:* ${form.phone}

*Mensagem:* ${form.message}

Gostaria de agendar uma consulta sobre ${service.title}!`;
    window.open(`https://wa.me/5581986284435?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!service) {
    return (
      <div className="sp-notfound">
        <h2>Serviço não encontrado</h2>
        <RouterLink to="/">Voltar ao início</RouterLink>
      </div>
    );
  }

  return (
    <div className="sp">

      {/* ── Navbar ── */}
      <header className="sp__navbar">
        <div className="sp__navbar-info">
          <a href="https://wa.me/5581986284435" className="sp__navbar-item">
            <Phone size={12} /> (81) 98628-4435
          </a>
          <a
            href="https://maps.google.com/?q=Rua+General+Joaquim+Inácio,+830,+Ilha+do+Leite,+Recife,+PE"
            target="_blank" rel="noopener noreferrer"
            className="sp__navbar-item"
          >
            <MapPin size={12} /> Ver Localização
          </a>
        </div>

        <div className="sp__navbar-center">
          <RouterLink to="/" className="sp__navbar-logo">
            <img src={logo} alt="PCM Odonto" />
          </RouterLink>
          <nav className="sp__navbar-nav">
            <RouterLink to="/" className="sp__navbar-link">Início</RouterLink>
            <RouterLink to="/#services" className="sp__navbar-link">Serviços</RouterLink>
            <RouterLink to="/#about" className="sp__navbar-link">Sobre Nós</RouterLink>
            <RouterLink to="/#contact" className="sp__navbar-link">Contato</RouterLink>
          </nav>
        </div>

        <div className="sp__navbar-cta">
          <a href="https://wa.me/5581986284435" className="sp__btn sp__btn--gold sp__btn--sm">
            Agendar Consulta
          </a>
        </div>

        {/* Hambúrguer — só mobile */}
        <button className="sp__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Overlay + Sidebar mobile */}
      {menuOpen && (
        <div className="sp__drawer-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <div className={`sp__drawer ${menuOpen ? 'sp__drawer--open' : ''}`}>
        <button className="sp__drawer-close" onClick={() => setMenuOpen(false)}>
          <X size={22} />
        </button>
        <nav className="sp__drawer-nav">
          <RouterLink to="/" className="sp__drawer-link" onClick={() => setMenuOpen(false)}>Início</RouterLink>
          <RouterLink to="/#services" className="sp__drawer-link" onClick={() => setMenuOpen(false)}>Serviços</RouterLink>
          <RouterLink to="/#about" className="sp__drawer-link" onClick={() => setMenuOpen(false)}>Sobre Nós</RouterLink>
          <RouterLink to="/#contact" className="sp__drawer-link" onClick={() => setMenuOpen(false)}>Contato</RouterLink>
        </nav>
        <div className="sp__drawer-cta">
          <a href="https://wa.me/5581986284435" className="sp__btn sp__btn--gold">
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="sp__hero">
        <div className="sp__hero-image-col">
          {imgs[0]
            ? <img src={imgs[0]} alt={service.title} className="sp__hero-image" />
            : <div className="sp__hero-image-placeholder"><span>{service.title}</span></div>
          }
        </div>
        <div className="sp__hero-content">
          <RouterLink to="/" className="sp__back">
            <ArrowLeft size={15} /> Voltar aos serviços
          </RouterLink>
          <span className="sp__badge">{service.badge}</span>
          <h1 className="sp__hero-title">{service.title}</h1>
          <div className="sp__divider" />
          <p className="sp__hero-text">{service.heroText}</p>
          <a href="https://wa.me/5581986284435" className="sp__btn sp__btn--gold">
            Agendar Consulta
          </a>
        </div>
      </section>

      {/* ── Sobre ── */}
      <section className="sp__about">
        <div className="sp__about-inner">
          <h2 className="sp__about-title">Sobre {service.title}</h2>
          <div className="sp__divider sp__divider--center" />
          <p className="sp__about-text">{service.about}</p>
        </div>
      </section>

      {/* ── Como Funciona ── */}
      <section className="sp__how">
        <div className="sp__how-inner">
          <div className="sp__how-left">
            <span className="sp__section-label">Processo</span>
            <h2 className="sp__how-title">Como Funciona</h2>
            <p className="sp__how-text">{service.howItWorks.text}</p>

            <div className="sp__accordion">
              {service.howItWorks.items.map((item, i) => (
                <div
                  key={i}
                  className={`sp__accordion-item ${openItem === i ? 'sp__accordion-item--open' : ''}`}
                >
                  <button
                    className="sp__accordion-trigger"
                    onClick={() => setOpenItem(openItem === i ? -1 : i)}
                  >
                    {item.title}
                    <ChevronDown size={16} className="sp__accordion-chevron" />
                  </button>
                  <div className="sp__accordion-body">
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/5581986284435" className="sp__btn sp__btn--gold sp__btn--mt">
              Agendar Consulta
            </a>
          </div>

          <div className="sp__how-right">
            {imgs[1]
              ? <img src={imgs[1]} alt={service.title} className="sp__how-image" />
              : <div className="sp__how-image-placeholder"><span>{service.title}</span></div>
            }
          </div>
        </div>
      </section>

      {/* ── Para quem é indicado ── */}
      <section className="sp__for-whom">
        <div className="sp__for-whom-inner">
          <div className="sp__for-whom-image">
            {imgs[2]
              ? <img src={imgs[2]} alt={service.title} className="sp__for-whom-img" />
              : <div className="sp__for-whom-placeholder"><span>Imagem</span></div>
            }
          </div>
          <div className="sp__for-whom-content">
            <span className="sp__section-label">Indicação</span>
            <h2 className="sp__for-whom-title">Para quem é indicado</h2>
            <div className="sp__divider" />
            <p className="sp__for-whom-intro">{service.forWhom.text}</p>
            <ul className="sp__checklist">
              {service.forWhom.items.map((item, i) => (
                <li key={i} className="sp__checklist-item">
                  <Check size={16} className="sp__check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Dra. Patrícia ── */}
      <section className="sp__doctor">
        <div className="sp__doctor-inner">
          <div
            className="sp__doctor-content"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url(${porcelanato})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="sp__badge">Dentista Especialista</span>
            <h2 className="sp__doctor-title">Dra. Patrícia Castro de Medeiros</h2>
            <p className="sp__doctor-text">
              Com mais de 25 anos de experiência e formação sólida em Periodontia, Prótese e Implantodontia pela FOP/UPE,
              a Dra. Patrícia Castro de Medeiros é referência em odontologia especializada em Recife. Atende na mesma clínica há
              25 anos com a mesma dedicação: entender cada paciente e devolver confiança através de um sorriso saudável.
            </p>
            <a href="https://wa.me/5581986284435" className="sp__btn sp__btn--gold">
              Agendar Consulta
            </a>
          </div>
          <div className="sp__doctor-photo">
            <img src={drPatricia} alt="Dra. Patrícia Castro de Medeiros" />
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="sp__cta">
        <div className="sp__cta-inner">

          {/* Imagem da Dra. */}
          <div className="sp__cta-img-col">
            <img src={apontando} alt="Dra. Patrícia" className="sp__cta-img" />
          </div>

          {/* Formulário com porcelanato */}
          <div
            className="sp__cta-form-col"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${porcelanato})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="sp__cta-title">
              Dê o próximo passo e agende uma consulta hoje mesmo
            </h2>
            <form className="sp__cta-form" onSubmit={handleSubmit}>
              <div className="sp__cta-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Qual é o seu nome?"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sp__cta-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sp__cta-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={15}
                  required
                />
              </div>
              <div className="sp__cta-field">
                <textarea
                  name="message"
                  placeholder="Qual tratamento te interessa ou como podemos te ajudar?"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="sp__cta-submit">
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
              <p className="sp__cta-note">✓ Aceitamos plano de saúde</p>
            </form>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />

    </div>
  );
}
