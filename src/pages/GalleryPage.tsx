import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem } from '../types/ride';
import { CyclingVisualCard } from '../components/CyclingVisualCard';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { Camera, MapPin, Maximize2, Sparkles, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Group Rides',
    'Mountain Biking',
    'Gravel & Ghats',
    'Portraits & Gear',
    'Meetups',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Header Banner */}
      <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-lime-400 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL CHRONICLES · PUNE & SAHYADRIS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-neutral-100 uppercase leading-none mb-4">
            Community Gallery
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            A visual documentation of early morning mist over Tamhini Ghat, tight pacelines along old highways, technical drops on Vetal Tekdi, and warm chai laughter.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-lime-400 text-neutral-950 font-bold shadow-md shadow-lime-400/20'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-neutral-500">
          Showing {filteredItems.length} Photographs
        </span>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 cursor-pointer hover:border-lime-400/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
          >
            {/* Visual Card */}
            <div className="relative aspect-[4/3] w-full bg-neutral-950 overflow-hidden">
              <CyclingVisualCard
                theme={item.svgArtTheme}
                title={item.title}
                category={item.category}
                aspectRatio="4:3"
                className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <span className="p-3 rounded-full bg-neutral-900/90 text-lime-400 border border-lime-400/40 shadow-xl flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                  <Maximize2 className="w-4 h-4" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>

            {/* Caption bar */}
            <div className="p-4 bg-neutral-950/90 border-t border-neutral-800/80">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                <span className="text-lime-400 font-semibold">{item.category}</span>
                <span>{item.location.split(',')[0]}</span>
              </div>
              <h4 className="text-sm font-bold text-neutral-200 group-hover:text-lime-300 transition-colors line-clamp-1">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeItem}
        currentIndex={lightboxIndex || 0}
        totalCount={filteredItems.length}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
