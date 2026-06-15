'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { galleryImages, galleryCategories } from '@/lib/data';

export default function GalleryPage() {
  const { t, lang } = useLang();
  const [cat, setCat] = useState('all');
  const [active, setActive] = useState(null); // index in filtered list

  const filtered = galleryImages.filter((g) => cat === 'all' || g.cat === cat);

  useEffect(() => {
    const onKey = (e) => {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, filtered.length]);

  return (
    <>
      <PageHero titleKey="gallery_hero_title" subKey="gallery_hero_sub" />

      <section className="container-x py-12 sm:py-16">
        {/* Filters */}
        <div className="no-scrollbar -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 sm:justify-center">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setActive(null);
              }}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${
                cat === c
                  ? 'bg-emerald text-white shadow-card'
                  : 'bg-white text-ink/70 hover:bg-mint'
              }`}
            >
              {t(`cat_${c}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-mint"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={g.src}
                alt={g.alt[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-emerald-dark/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                <span className="p-3 text-sm font-medium text-cream">{g.alt[lang]}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && filtered[active] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-emerald-dark/95 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"
            onClick={() => setActive(null)}
            aria-label={t('gallery_close')}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i - 1 + filtered.length) % filtered.length);
            }}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[active].src}
              alt={filtered[active].alt[lang]}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-cream/90">
              {filtered[active].alt[lang]}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i + 1) % filtered.length);
            }}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
