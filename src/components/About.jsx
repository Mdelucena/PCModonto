import { Award, GraduationCap, Heart, Clock } from 'lucide-react';
import drPatricia from '../assets/image/dr_patricia.jpeg';
import './About.css';

const STATS = [
  { icon: Clock, value: '25+', label: 'Anos de experiência' },
  { icon: Heart, value: 'Milhares', label: 'Sorrisos transformados' },
  { icon: Award, value: '3', label: 'Especializações' },
  { icon: GraduationCap, value: 'UPE', label: 'Graduada em Odontologia' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">

        {/* Foto sangrada à esquerda */}
        <div className="about__image-col">
          <img src={drPatricia} alt="Dra. Patrícia" className="about__photo" />
          <div className="about__photo-overlay" />
        </div>

        {/* Conteúdo à direita */}
        <div className="about__content">
          <span className="section-label">Conheça a Dra. Patrícia</span>
          <h2 className="about__title">
            25 anos dedicados a <em>reabilitar sorrisos</em>
          </h2>
          <div className="gold-divider" />

          <p className="about__text">
            Sou formada pela FOP, Universidade de Pernambuco (2000), e abri meu consultório logo depois. Há 25 anos atendo no mesmo lugar, com as mesmas mãos. Me especializei em <strong>Periodontia, Prótese e Implantodontia</strong> porque essas três juntas resolvem de verdade, não só esteticamente, mas funcionalmente.
          </p>
          <p className="about__text">
            Já atendi muita gente que chegou aqui envergonhada de sorrir. Isso me move. Tecnologia e técnica eu tenho, mas o que faz diferença mesmo é sentar, ouvir e entender o que cada pessoa precisa, sem pressa.
          </p>
          <p className="about__text">
            Quero que você saia daqui melhor do que entrou. Simples assim.
          </p>

          {/* Stats em linha */}
          <div className="about__stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Frase + CTA */}
          <div className="about__quote">
            <span className="about__quote-mark">"</span>
            <p>
              Que você saia daqui se sentindo melhor do que entrou,
              <em> por dentro e por fora.</em>
            </p>
          </div>

          <a href="https://wa.me/5581986284435" className="about__cta">
            Agende sua consulta
          </a>
        </div>

      </div>
    </section>
  );
}
