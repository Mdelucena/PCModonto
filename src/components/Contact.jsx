import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

function maskPhone(value) {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
}

export default function Contact() {
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

Gostaria de agendar uma consulta!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5581986284435?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <span className="section-label">Contato</span>
            <h2 className="section-title">
              Agende sua <em>consulta</em>
            </h2>
            <div className="gold-divider" />
            <p className="contact__text">
              Dê o próximo passo para um sorriso saudável e bonito. 
              Entre em contato e agende sua avaliação.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <Phone size={18} strokeWidth={1.5} />
                <div>
                  <strong>WhatsApp</strong>
                  <span>(81) 98628-4435</span>
                </div>
              </div>
              <div className="contact__detail">
                <Mail size={18} strokeWidth={1.5} />
                <div>
                  <strong>E-mail</strong>
                  <span>Pcmodonto@gmail.com</span>
                </div>
              </div>
              <div className="contact__detail">
                <MapPin size={18} strokeWidth={1.5} />
                <div>
                  <strong>Endereço</strong>
                  <span>Rua General Joaquim Inácio, 830 - Ilha do Leite, Recife - PE</span>
                </div>
              </div>
              <div className="contact__detail">
                <Clock size={18} strokeWidth={1.5} />
                <div>
                  <strong>Horário</strong>
                  <span>Seg-Sex: 08h às 18h</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Envie uma mensagem</h3>
            <div className="contact__field">
              <input
                type="text"
                name="name"
                placeholder="Qual é o seu nome?"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
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
            <div className="contact__field">
              <textarea
                name="message"
                placeholder="Qual tratamento te interessa ou como podemos te ajudar?"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact__submit">
              <Send size={18} />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
