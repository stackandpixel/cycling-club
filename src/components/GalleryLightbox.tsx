import React, { useEffect } from 'react';
import type { GalleryItem } from '../types/ride';
import { CyclingVisualCard } from './CyclingVisualCard';
import { X, ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalCount: number;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalCount,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-950 flex items-center justify-center overflow-hidden">
          <CyclingVisualCard
            theme={item.svgArtTheme}
            title={item.title}
            category={item.category}
            aspectRatio="16:9"
            className="w-full h-full"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="p-5 md:p-6 bg-neutral-900 border-t border-neutral-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-lime-400 font-bold block mb-0.5">
                {item.category}
              </span>
              <h3 className="text-xl font-bold font-display text-neutral-100">{item.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-400">
                {currentIndex + 1} of {totalCount}
              </span>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed mb-3">
            {item.caption}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800/60 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-lime-400" />
              {item.location}
            </span>
            {item.riderCount && (
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                {item.riderCount}
              </span>
            )}
            <span className="text-neutral-500 italic">
              Illustrative community photograph
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
