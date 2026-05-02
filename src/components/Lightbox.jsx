import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex + 1);
    },
    [currentIndex, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  const handlePrev = () => onNavigate(currentIndex - 1);
  const handleNext = () => onNavigate(currentIndex + 1);

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110 z-50"
        onClick={onClose}
        style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)' }}
      >
        <X size={24} />
      </button>

      {currentIndex > 0 && (
        <button
          className="absolute left-4 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)' }}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          className="absolute right-4 p-3 rounded-full transition-all duration-300 hover:scale-110 z-50"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)' }}
        >
          <ChevronRight size={28} />
        </button>
      )}

      <div
        className="max-w-5xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[85vh] object-contain"
        />
        <div className="text-center mt-4">
          <h3
            className="font-heading text-xl font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {image.title}
          </h3>
          <p
            className="text-sm mt-1 opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            {image.category} &bull; {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}