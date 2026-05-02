import { Camera, Award, Users, Clock } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

export default function About() {
  const stats = [
    { icon: Camera, value: '500+', label: 'Sessions Completed' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Clock, value: '24hr', label: 'Quick Delivery' },
  ];

  const skills = [
    'Wedding Photography',
    'Event Photography',
    'Portrait Photography',
    'Fashion Photography',
    'Photo Editing',
    'Lightroom & Photoshop',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              About Us
            </p>
            <h1
              className="font-heading text-4xl md:text-5xl font-semibold mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              The Story Behind
              <br />
              Lens & Light
            </h1>
            <div className="space-y-4">
              <p
                className="text-lg opacity-80 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Founded in 2010, Lens & Light Photography has been capturing life's
                most beautiful moments for over a decade. Our team of passionate
                photographers combines artistic vision with technical excellence to
                create timeless images.
              </p>
              <p
                className="text-lg opacity-80 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                We believe every photograph should tell a story, evoke emotion, and be
                cherished for generations. From intimate weddings to grand corporate
                events, we approach each project with dedication and creativity.
              </p>
              <p
                className="text-lg opacity-80 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our studio is equipped with state-of-the-art equipment, and we stay
                updated with the latest photography trends and techniques to deliver
                exceptional results every time.
              </p>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80"
                alt="Photographer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 p-6 hidden md:block"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <p className="font-heading text-3xl font-bold" style={{ color: 'var(--bg-primary)' }}>
                15+
              </p>
              <p className="text-sm" style={{ color: 'var(--bg-primary)' }}>
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          style={{ backgroundColor: 'var(--surface)', padding: '3rem' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon
                size={32}
                className="mx-auto mb-3"
                style={{ color: 'var(--accent)' }}
              />
              <p
                className="font-heading text-3xl md:text-4xl font-bold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm opacity-70"
                style={{ color: 'var(--text-secondary)' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="font-heading text-3xl md:text-4xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Our Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg animate-slide-up"
                style={{
                  backgroundColor: 'var(--surface)',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span
                  className="font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Testimonials
            </p>
            <h2
              className="font-heading text-3xl md:text-4xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Client Love
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
}