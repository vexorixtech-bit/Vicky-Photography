import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Camera, Heart, Clock, Star } from 'lucide-react';

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const heroImages = [
  'https://images.unsplash.com/photo-1507525427490-5e80a8a7da82?w=1920&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1920&q=80',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 bg-mesh"
      />

      <div className="relative z-10">

        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {heroImages.map((src, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />

          <motion.div
            className="relative z-10 text-center px-4"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
              <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              📸 Digital Photography
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Vikky
              <br />
              Photography
            </motion.h1>
              <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              Turning your precious moments into timeless visual stories.
              Professional photography that captures the real you. ✨
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 animate-pulse-glow"
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
            </motion.div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'w-8' : ''
                }`}
                style={{
                  backgroundColor:
                    index === currentImageIndex
                      ? 'var(--accent)'
                      : 'rgba(255,255,255,0.4)',
                }}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ color: 'var(--text-primary)' }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowRight size={24} className="rotate-90" />
          </motion.div>
        </section>

        <section
          className="py-20 md:py-32 px-4 relative bg-dots"
          style={{
            background: 'var(--gradient-primary)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p
                className="text-sm tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--accent)' }}
              >
                Why Choose Us
              </p>
              <h2
                className="font-heading text-4xl md:text-5xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Why Clients Love Us
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  icon: Camera,
                  title: 'Professional Gear',
                  description:
                    'State-of-the-art cameras and lenses for stunning image quality',
                  stat: 500,
                  statLabel: 'Photos per Session',
                },
                {
                  icon: Heart,
                  title: 'Passionate Vision',
                  description:
                    'Every shot tells a story with artistic flair and emotional depth',
                  stat: 1000,
                  statLabel: 'Happy Clients',
                },
                {
                  icon: Clock,
                  title: 'Timely Delivery',
                  description:
                    'Quick turnaround without compromising on quality',
                  stat: 24,
                  statLabel: 'Quick Delivery',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 rounded-lg text-center border relative overflow-hidden group"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  <item.icon
                    size={40}
                    className="mx-auto mb-4 animate-float"
                    style={{ color: 'var(--accent)', animationDelay: `${index * 0.5}s` }}
                  />
                  <h3
                    className="font-heading text-xl font-semibold mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="opacity-70 mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="text-3xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    <AnimatedCounter end={item.stat} duration={2} />
                  </div>
                  <p
                    className="text-xs mt-1 opacity-60"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.statLabel}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          className="py-20 md:py-32 px-4 relative"
          style={{
            background: 'var(--gradient-primary)',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
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
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
                'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
              ].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={src}
                    alt={`Featured ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
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
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:gap-3"
                style={{ color: 'var(--accent)' }}
              >
                View All Portfolio
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 px-4 relative bg-dots" style={{ background: 'var(--gradient-primary)', borderTop: '1px solid var(--border)' }}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
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
            </motion.div>

            <motion.div
              className="p-8 md:p-12 rounded-lg border relative overflow-hidden"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="var(--accent)"
                    style={{ color: 'var(--accent)' }}
                  />
                ))}
              </div>
              <motion.p
                className="font-heading text-xl md:text-2xl text-center leading-relaxed mb-8"
                style={{ color: 'var(--text-primary)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                "Absolutely stunning work! The team captured every special moment
                of our wedding day perfectly. The photos exceed our wildest dreams.
                Thank you for making our memories last forever."
              </motion.p>
              <div className="text-center">
                <p></p>
              </div>
              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
