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
            Na PCM Odonto, localizada na Ilha do Leite, Recife, oferecemos uma experiência odontológica acolhedora e completamente personalizada. Liderada pela <strong>Dra. Patrícia Castro de Medeiros</strong>, nossa clínica une tecnologia de ponta, equipe altamente especializada e um atendimento profundamente humanizado para transformar sorrisos com conforto, segurança e resultados de qualidade que falam por si.
          </p>

          <p className="clinic__text">
            Aqui, cada paciente é tratado com atenção individual, porque acreditamos que um sorriso saudável começa com uma relação de confiança.
          </p>
        </div>

      </div>
    </section>
  );
}
