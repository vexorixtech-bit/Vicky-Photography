import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera
                className="w-8 h-8"
                style={{ color: 'var(--accent)' }}
              />
              <span
                className="font-heading text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Vikky Photography
              </span>
            </div>
            <p
              className="text-sm leading-relaxed opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              Capturing life's most beautiful moments with artistic vision and
              professional excellence. Digital photography at its finest.
            </p>
          </div>

          <div>
            <h4
              className="font-heading text-lg font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-heading text-lg font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} style={{ color: 'var(--accent)' }} />
                <span
                  className="text-sm opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  vexorix.tech@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <span
                  className="text-sm opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  +91 9655058949
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                <span
                  className="text-sm opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  2/544 Anna Nagar, Chennai - 600002
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p
            className="text-sm text-center opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            &copy; {currentYear} Lens & Light Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}