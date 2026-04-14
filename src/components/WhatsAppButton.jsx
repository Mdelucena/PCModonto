import whatsappIcon from '../assets/icons/whatsapp.png';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5581986284435"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-btn__icon" />
    </a>
  );
}
