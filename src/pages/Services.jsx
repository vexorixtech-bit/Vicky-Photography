import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

const serviceTypes = ['Wedding', 'Event', 'Studio'];

export default function Services() {
  const [activeService, setActiveService] = useState('Wedding');

  const activeServiceData = services.find((s) => s.category === activeService);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Pricing & Packages
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Our Services
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Choose from our range of professional photography packages designed to
            meet your needs and budget.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveService(type)}
              className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeService === type ? 'scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor:
                  activeService === type ? 'var(--accent)' : 'var(--surface)',
                color:
                  activeService === type
                    ? 'var(--bg-primary)'
                    : 'var(--text-primary)',
              }}
            >
              {type} Photography
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeServiceData?.packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg animate-slide-up transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2' : ''
              }`}
              style={{
                backgroundColor: 'var(--surface)',
                ringColor: pkg.popular ? 'var(--accent)' : 'transparent',
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {pkg.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-medium tracking-wider uppercase rounded-full"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg-primary)',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className="font-heading text-2xl font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm opacity-70 mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {pkg.description}
                </p>
                <p
                  className="font-heading text-4xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {pkg.price}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--accent)' }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/booking"
                className="block w-full py-3 text-center text-sm font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: pkg.popular ? 'var(--accent)' : 'transparent',
                  border: '2px solid',
                  borderColor: pkg.popular ? 'var(--accent)' : 'var(--border)',
                  color: pkg.popular ? 'var(--bg-primary)' : 'var(--text-primary)',
                }}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 md:p-12 rounded-lg text-center"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <h2
            className="font-heading text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Custom Package?
          </h2>
          <p
            className="text-lg opacity-80 mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Need something tailored to your specific requirements? We offer custom
            packages for unique events.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium tracking-wider uppercase border transition-all duration-300 hover:bg-white hover:text-black"
            style={{
              borderColor: 'var(--text-primary)',
              color: 'var(--text-primary)',
            }}
          >
            Contact Us
            <Star size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}