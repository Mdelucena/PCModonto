import {
  MapPin,
  ShieldCheck,
  Car,
  Cpu,
  UserCheck,
  CalendarClock,
} from 'lucide-react';
import './Differentials.css';

const ITEMS = [
  { icon: MapPin, title: 'Localização Privilegiada', desc: 'Acesso fácil e prático para nossos pacientes.' },
  { icon: ShieldCheck, title: 'Segurança Garantida', desc: 'Ambiente seguro e protocolos rigorosos de biossegurança.' },
  { icon: Car, title: 'Estacionamento', desc: 'Estacionamento no local para sua comodidade.' },
  { icon: Cpu, title: 'Tecnologia Avançada', desc: 'Equipamentos de última geração para diagnósticos precisos.' },
  { icon: UserCheck, title: 'Atendimento Personalizado', desc: 'Cada paciente é único e merece atenção exclusiva.' },
  { icon: CalendarClock, title: 'Horários Flexíveis', desc: 'Agenda adaptada à sua rotina para mais conveniência.' },
];

export default function Differentials() {
  return (
    <section id="differentials" className="differentials">
      <div className="container">
        <div className="differentials__header">
          <span className="section-label">Nossos Diferenciais</span>
          <h2 className="section-title">
            Mais do que uma clínica, uma <em>experiência</em>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="differentials__grid">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="diff-item">
              <div className="diff-item__icon">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="diff-item__title">{title}</h3>
                <p className="diff-item__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
