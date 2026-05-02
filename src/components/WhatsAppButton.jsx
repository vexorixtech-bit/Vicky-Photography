import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919655058949';
  const message = 'Hi! I would like to inquire about your photography services.';
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const phoneUrl = 'tel:+919655058949';

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 animate-fade-in">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#25D366',
          color: '#FFFFFF',
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href={phoneUrl}
        className="p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#3B82F6',
          color: '#FFFFFF',
        }}
        aria-label="Call us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}