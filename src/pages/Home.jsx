import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Heart, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <p
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 opacity-80"
            style={{ color: 'var(--accent)' }}
          >
            Professional Photography
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Capturing Life's
            <br />
            Beautiful Moments
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Artistry in every frame. We specialize in weddings, events, portraits,
            and fashion photography.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg-primary)',
              }}
            >
              Book Now
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--text-primary)',
                color: 'var(--text-primary)',
              }}
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: 'var(--text-primary)' }}
        >
          <ArrowRight size={24} className="rotate-90" />
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Professional Gear',
                description:
                  'State-of-the-art cameras and lenses for stunning image quality',
              },
              {
                icon: Heart,
                title: 'Passionate Vision',
                description:
                  'Every shot tells a story with artistic flair and emotional depth',
              },
              {
                icon: Clock,
                title: 'Timely Delivery',
                description:
                  'Quick turnaround without compromising on quality',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg text-center animate-slide-up"
                style={{
                  backgroundColor: 'var(--surface)',
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <item.icon
                  size={40}
                  className="mx-auto mb-4"
                  style={{ color: 'var(--accent)' }}
                />
                <h3
                  className="font-heading text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="opacity-70"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 px-4"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Featured Work
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Latest Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
              'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
              'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            ].map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[3/4] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={src}
                  alt={`Featured ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <Link
                    to="/portfolio"
                    className="px-6 py-3 text-sm font-medium tracking-wider uppercase border transition-all duration-300 hover:bg-white hover:text-black"
                    style={{
                      borderColor: 'var(--text-primary)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:gap-3"
              style={{ color: 'var(--accent)' }}
            >
              View All Portfolio
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Testimonials
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              What Our Clients Say
            </h2>
          </div>

          <div
            className="p-8 md:p-12 rounded-lg"
            style={{ backgroundColor: 'var(--surface)' }}
          >
            <p
              className="font-heading text-xl md:text-2xl text-center leading-relaxed mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              "Absolutely stunning work! The team captured every special moment
              of our wedding day perfectly. The photos exceed our wildest dreams.
              Thank you for making our memories last forever."
            </p>
            <div className="text-center">
              <p
                className="font-heading text-lg font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Sarah & Michael
              </p>
              <p
                className="text-sm mt-1 opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                New York
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 md:py-32 px-4"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Ready to Capture Your Story?
          </h2>
          <p
            className="text-lg opacity-80 mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            Let's create beautiful memories together. Book your session today.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
            }}
          >
            Book Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}