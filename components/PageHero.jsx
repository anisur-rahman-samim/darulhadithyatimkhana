'use client';

import { useLang } from '@/lib/i18n';

export default function PageHero({ titleKey, subKey }) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-emerald-deep text-cream">
      <div className="pattern-gold absolute inset-0 opacity-60" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative py-16 text-center sm:py-20">
        <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-gold-soft">
          {t('hero_kicker')}
        </p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{t(titleKey)}</h1>
        {subKey && <p className="mx-auto mt-4 max-w-2xl text-cream/80">{t(subKey)}</p>}
        <div className="divider-star mt-6" />
      </div>
    </section>
  );
}
