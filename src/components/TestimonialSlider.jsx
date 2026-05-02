import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="p-8 md:p-12 rounded-lg transition-all duration-500"
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill="var(--accent)"
              style={{ color: 'var(--accent)' }}
            />
          ))}
        </div>

        <blockquote
          className="font-heading text-xl md:text-2xl text-center leading-relaxed mb-8"
          style={{ color: 'var(--text-primary)' }}
        >
          "{testimonial.quote}"
        </blockquote>

        <div className="text-center">
          <p
            className="font-heading text-lg font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {testimonial.name}
          </p>
          <p
            className="text-sm mt-1 opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            {testimonial.location}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                index === current
                  ? 'var(--accent)'
                  : 'var(--border)',
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
        style={{
          backgroundColor: 'var(--surface)',
          color: 'var(--text-primary)',
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full transition-all duration-300 hover:scale-110 hidden md:block"
        style={{
          backgroundColor: 'var(--surface)',
          color: 'var(--text-primary)',
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}