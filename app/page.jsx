'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import { stats } from '@/lib/data';
import HeroSlider from '@/components/HeroSlider';
import SectionHeading from '@/components/SectionHeading';
import NamazTime from '@/components/NamazTime';
import Teachers from '@/components/Teachers';
import Messages from '@/components/Messages';

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C10.5 5 7.5 4.5 4 5v13c3.5-.5 6.5 0 8 1.5 1.5-1.5 4.5-2 8-1.5V5c-3.5-.5-6.5 0-8 1.5Zm0 0V19" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.4-9.2-8.6C1.3 8.1 2.9 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.1 0 4.7 3.1 3.2 6.4C19 15.6 12 20 12 20Z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.5 5.5L20 9.3l-4 4 1 5.7L12 16l-5 3 1-5.7-4-4 5.5-.8L12 3Z" />
    </svg>
  );
}

const objectives = [
  { icon: BookIcon, titleKey: 'obj1_title', textKey: 'obj1_text' },
  { icon: HeartIcon, titleKey: 'obj2_title', textKey: 'obj2_text' },
  { icon: StarIcon, titleKey: 'obj3_title', textKey: 'obj3_text' },
];

export default function HomePage() {
  const { t, lang } = useLang();

  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="arch-card aspect-[4/3] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/signboard.png"
                alt={t('intro_title')}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-emerald-deep px-6 py-4 text-cream shadow-soft sm:block">
              <p className="font-display text-2xl font-bold text-gold-soft">
                {lang === 'bn' ? stats[2].value : stats[2].valueEn}
              </p>
              <p className="text-xs text-cream/80">{t('stat_years')}</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">{t('intro_eyebrow')}</span>
            <h2 className="section-title mt-3">{t('intro_title')}</h2>
            <p className="mt-5 leading-relaxed text-ink/80">{t('intro_p1')}</p>
            <p className="mt-3 leading-relaxed text-ink/80">{t('intro_p2')}</p>

            <div className="mt-7 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.labelKey} className="rounded-2xl bg-mint px-3 py-4 text-center">
                  <p className="font-display text-2xl font-bold text-emerald-deep">
                    {lang === 'bn' ? s.value : s.valueEn}
                  </p>
                  <p className="mt-1 text-xs text-ink/65">{t(s.labelKey)}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-outline mt-7">
              {t('hero_cta_about')}
            </Link>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-white">
        <div className="container-x py-16 sm:py-20">
          <SectionHeading eyebrowKey="obj_eyebrow" titleKey="obj_title" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {objectives.map((o) => {
              const Icon = o.icon;
              return (
                <div
                  key={o.titleKey}
                  className="group rounded-3xl border border-emerald/10 bg-cream p-7 text-center transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald text-white transition group-hover:bg-gold group-hover:text-emerald-dark">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-emerald-deep">
                    {t(o.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{t(o.textKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation highlight */}
      <section className="relative overflow-hidden bg-emerald-deep">
        <div className="pattern-gold absolute inset-0 opacity-50" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative flex flex-col items-center gap-6 py-16 text-center text-cream sm:py-20">
          <span className="font-display text-sm uppercase tracking-[0.3em] text-gold-soft">
            {t('donate_hl_kicker')}
          </span>
          <h2 className="max-w-3xl font-display text-3xl font-bold sm:text-4xl">
            {t('donate_hl_title')}
          </h2>
          <p className="max-w-2xl text-cream/85">{t('donate_hl_text')}</p>
          <Link href="/donation" className="btn-primary !px-9 !py-4 !text-lg">
            {t('hero_cta_donate')}
          </Link>
        </div>
      </section>

      <NamazTime />
      <Teachers />
      <Messages />
    </>
  );
}
