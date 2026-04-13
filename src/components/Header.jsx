import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/icons/logo.png';
import './Header.css';

const NAV_ITEMS = [
  { to: 'hero', label: 'Início' },
  { to: 'services', label: 'Serviços' },
  { to: 'about', label: 'Sobre Nós' },
  { to: 'contact', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Só mostra o header compacto quando a nav do hero já saiu de cena
    const onScroll = () => setScrolled(window.scrollY > 380);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    /* Header compacto — só visível após scroll */
    <header className={`header ${scrolled ? 'header--visible' : ''}`}>
      <div className="header__inner container">
        <Link to="hero" smooth duration={600} className="header__logo">
          <img src={logo} alt="PCM Odonto" className="header__logo-img" />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_ITEMS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              offset={-70}
              duration={600}
              className="header__link"
              activeClass="header__link--active"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href="https://wa.me/5581986284435" className="header__cta header__cta--mobile">
            <Phone size={16} />
            Agendar Consulta
          </a>
        </nav>

        <a href="https://wa.me/5581986284435" className="header__cta header__cta--desktop">
          <Phone size={16} />
          Agendar Consulta
        </a>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && <div className="header__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
