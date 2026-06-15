'use client';

import { useLang } from '@/lib/i18n';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero titleKey="about_hero_title" subKey="about_hero_sub" />

      {/* History */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="arch-card aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/signboard.png"
              alt={t('about_history_title')}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">{t('about_hero_title')}</span>
            <h2 className="section-title mt-3">{t('about_history_title')}</h2>
            <p className="mt-5 leading-relaxed text-ink/80">{t('about_history_p1')}</p>
            <p className="mt-3 leading-relaxed text-ink/80">{t('about_history_p2')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="container-x grid gap-6 py-16 sm:py-20 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald/10 bg-cream p-8">
            <h3 className="font-display text-2xl font-bold text-emerald-deep">{t('about_mission_title')}</h3>
            <div className="divider-star my-4 !justify-start before:!w-10 after:!hidden" />
            <p className="leading-relaxed text-ink/80">{t('about_mission_text')}</p>
          </div>
          <div className="rounded-3xl border border-emerald/10 bg-cream p-8">
            <h3 className="font-display text-2xl font-bold text-emerald-deep">{t('about_vision_title')}</h3>
            <div className="divider-star my-4 !justify-start before:!w-10 after:!hidden" />
            <p className="leading-relaxed text-ink/80">{t('about_vision_text')}</p>
          </div>
        </div>
      </section>

      {/* Educational system */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t('about_system_title')}</span>
          <h2 className="section-title mt-3">{t('about_system_title')}</h2>
          <div className="divider-star mt-5" />
          <p className="mt-6 leading-relaxed text-ink/80">{t('about_system_text')}</p>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-4 rounded-2xl border-l-4 border-gold bg-gold/10 p-5">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" d="M12 8h.01M11 12h1v4h1" />
          </svg>
          <p className="text-sm font-medium leading-relaxed text-ink/85">{t('about_no_admission')}</p>
        </div>
      </section>
    </>
  );
}
