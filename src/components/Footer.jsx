import { Phone } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import './Footer.css';

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="PCM Odonto" className="footer__logo-img" />
            </div>
            <p className="footer__desc">
              Cuidando do seu sorriso com excelência, tecnologia e atendimento humanizado.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/pattycmedeiros" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <IconInstagram />
              </a>
              <a href="https://wa.me/5581986284435" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Serviços</h4>
            <ul>
              <li><a href="#services">Ortodontia</a></li>
              <li><a href="#services">Clareamento</a></li>
              <li><a href="#services">Implantes</a></li>
              <li><a href="#services">Lentes de Contato</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contato</h4>
            <ul>
              <li>(81) 98628-4435</li>
              <li>Pcmodonto@gmail.com</li>
              <li>@pattycmedeiros</li>
            </ul>
          </div>

          <div className="footer__col footer__col--map">
            <h4 className="footer__col-title">Localização</h4>
            <div className="footer__map">
              <iframe
                title="PCM Odonto"
                src="https://www.google.com/maps?q=Rua+General+Joaquim+Inácio,+830,+Ilha+do+Leite,+Recife,+PE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} PCM Odonto. Todos os direitos reservados.</p>
          <span className="footer__sep">|</span>
          <p className="footer__dev">
            Desenvolvido por <a href="https://zettotech.com.br/" target="_blank" rel="noopener noreferrer">ZettoTech</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
