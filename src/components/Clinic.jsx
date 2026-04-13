import { Link } from 'react-scroll';
import ambienteImg from '../assets/image/ammbiente lista .jpeg';
import porcelanatoBg from '../assets/image/porcelanato.jpg';
import './Clinic.css';

export default function Clinic() {
  return (
    <section
      className="clinic"
      style={{ backgroundImage: `url(${porcelanatoBg})` }}
    >
      <div className="clinic__inner">

        {/* Imagem à esquerda */}
        <div className="clinic__image-col">
          <div className="clinic__image-frame">
            <img src={ambienteImg} alt="Ambiente da clínica" className="clinic__image" />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="clinic__content">
          <span className="clinic__badge">Bem-vindos à PCM Odonto</span>

          <h2 className="clinic__title">
            Clínica Odontológica<br />Especializada em<br />Recife-PE
          </h2>

          <hr className="clinic__divider" />

          <p className="clinic__text">
            Na PCM Odonto, localizada na Ilha do Leite, Recife, oferecemos uma experiência odontológica acolhedora e personalizada. Liderada pela <strong>Dra. Patrícia Monteiro</strong>, nossa clínica une tecnologia de ponta, equipe especializada e atendimento humanizado para transformar sorrisos com conforto, segurança e resultados de qualidade.
          </p>

          <Link to="about" smooth offset={-70} duration={600} className="clinic__btn">
            Sobre a Clínica
          </Link>
        </div>

      </div>
    </section>
  );
}
