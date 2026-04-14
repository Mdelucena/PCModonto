import ReactCompareImage from 'react-compare-image';
import clareamentoAntes from '../assets/image/antes_depois/clareamento_antes.png';
import clareamentoDepois from '../assets/image/antes_depois/clareamento_depois.png';
import facetasAntes from '../assets/image/antes_depois/facetas_antes.png';
import facetasDepois from '../assets/image/antes_depois/facetas_depois.png';
import proteseAntes from '../assets/image/antes_depois/implante_antes.png';
import proteseDepois from '../assets/image/antes_depois/implante_depois.png';
import plasticaAntes from '../assets/image/antes_depois/plastica_antes.png';
import plasticaDepois from '../assets/image/antes_depois/plastica_depois.png';
import './BeforeAfter.css';

const CASES = [
  {
    id: 1,
    label: 'Clareamento Dental',
    before: clareamentoAntes,
    after: clareamentoDepois,
  },
  {
    id: 2,
    label: 'Facetas de Resina',
    before: facetasAntes,
    after: facetasDepois,
  },
  {
    id: 3,
    label: 'Plástica Gengival',
    before: plasticaAntes,
    after: plasticaDepois,
  },
  {
    id: 4,
    label: 'Prótese Dentária',
    before: proteseAntes,
    after: proteseDepois,
  },
];

function PlaceholderSlider({ label }) {
  return (
    <div className="ba__placeholder">
      <div className="ba__placeholder-before">
        <span>Antes</span>
      </div>
      <div className="ba__placeholder-divider">
        <div className="ba__placeholder-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
      <div className="ba__placeholder-after">
        <span>Depois</span>
      </div>
      <div className="ba__placeholder-label">{label}</div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="ba">
      <div className="ba__bg-accent" />

      <div className="ba__header container">
        <span className="section-label">Transformações Reais</span>
        <h2 className="ba__title">
          O impacto dos nossos <em>tratamentos</em><br />em cada sorriso
        </h2>
        <p className="ba__subtitle">
          Arraste para ver a diferença. Resultados reais, pacientes reais.
        </p>
      </div>

      <div className="ba__grid container">
        {CASES.map((c) => (
          <div key={c.id} className="ba__card">
            {c.before && c.after ? (
              <div className="ba__slider-wrap">
                <ReactCompareImage
                  leftImage={c.before}
                  rightImage={c.after}
                  leftImageLabel="Antes"
                  rightImageLabel="Depois"
                  sliderLineColor="#C9A84C"
                  sliderLineWidth={2}
                  handle={
                    <div className="ba__handle">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  }
                />
                <span className="ba__card-label">{c.label}</span>
              </div>
            ) : (
              <PlaceholderSlider label={c.label} />
            )}
          </div>
        ))}
      </div>

      <div className="ba__cta container">
        <a href="https://wa.me/5581986284435" className="ba__btn">
          Quero transformar meu sorriso
        </a>
      </div>
    </section>
  );
}
