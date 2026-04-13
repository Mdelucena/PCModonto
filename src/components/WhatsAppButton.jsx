import { MessageCircle } from 'lucide-react';
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
      <MessageCircle size={26} />
    </a>
  );
}
