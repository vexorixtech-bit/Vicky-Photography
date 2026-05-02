import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '15551234567';
  const message = 'Hi! I would like to inquire about your photography services.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
      style={{
        backgroundColor: '#25D366',
        color: '#FFFFFF',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}