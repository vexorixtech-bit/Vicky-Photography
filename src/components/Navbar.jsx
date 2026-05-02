import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Booking', path: '/booking' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isScrolled
    ? 'bg-[var(--bg-secondary)]/95 backdrop-blur-md shadow-lg'
    : isHome
    ? 'bg-transparent'
    : 'bg-[var(--bg-secondary)]/95 backdrop-blur-md shadow-lg';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'py-3' : 'py-6'
      } ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Camera
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              style={{ color: 'var(--accent)' }}
            />
            <span
              className="font-heading text-xl font-semibold tracking-wide"
              style={{ color: 'var(--text-primary)' }}
            >
              Lens & Light
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:opacity-80 ${
                  location.pathname === link.path ? 'opacity-100' : 'opacity-70'
                }`}
                style={{ color: 'var(--text-primary)' }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-70'
              }`}
              style={{ color: 'var(--text-primary)' }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}