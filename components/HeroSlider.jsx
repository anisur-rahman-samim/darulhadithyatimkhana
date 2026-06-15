'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLang } from '@/lib/i18n';
import { slides } from '@/lib/data';

export default function HeroSlider() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const count = slides.length;

  const go = useCallback((i) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex((p) => (p + 1) % count), [count]);

  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => clearInterval(timer.current);
  }, [next]);

  const pause = () => clearInterval(timer.current);
  const resume = () => {
    clearInterval(timer.current);
    timer.current = setInterval(next, 6000);
  };

  return (
    <section
      className="relative h-[78vh] min-h-[480px] w-full overflow-hidden bg-emerald-dark"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.img}
            alt=""
            className={`h-full w-full object-cover ${i === index ? 'animate-kenburns' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/90 via-emerald-dark/55 to-emerald-dark/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container-x relative flex h-full flex-col items-start justify-center text-cream">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-gold-soft animate-fadeUp">
          {t('hero_kicker')}
        </p>
        <h1
          key={`title-${index}`}
          className="max-w-3xl font-display text-4xl font-bold leading-tight animate-fadeUp sm:text-5xl lg:text-6xl"
        >
          {t(slides[index].titleKey)}
        </h1>
        <p
          key={`text-${index}`}
          className="mt-5 max-w-xl text-lg text-cream/85 animate-fadeUp"
        >
          {t(slides[index].textKey)}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fadeUp">
          <Link href="/donation" className="btn-primary">
            {t('hero_cta_donate')}
          </Link>
          <Link href="/about" className="btn-ghost">
            {t('hero_cta_about')}
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-gold' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
