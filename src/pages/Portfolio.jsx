import { useState } from 'react';
import { portfolioImages, categories } from '../data/images';
import Lightbox from '../components/Lightbox';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    activeCategory === 'All'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Our Work
          </p>
          <h1
            className="font-heading text-4xl md:text-5xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Portfolio
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--text-secondary)' }}
          >
            Explore our collection of stunning photographs captured across weddings,
            events, portraits, and fashion shoots.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category ? 'scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor:
                  activeCategory === category
                    ? 'var(--accent)'
                    : 'var(--surface)',
                color:
                  activeCategory === category
                    ? 'var(--bg-primary)'
                    : 'var(--text-primary)',
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer animate-fade-in"
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
              >
                <span
                  className="px-4 py-2 text-xs font-medium tracking-wider uppercase mb-2"
                  style={{ color: 'var(--accent)' }}
                >
                  {image.category}
                </span>
                <h3
                  className="font-heading text-xl font-semibold text-center px-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p
              className="text-lg opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              No images found in this category.
            </p>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}