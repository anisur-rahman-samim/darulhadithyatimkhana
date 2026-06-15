'use client';

import { useLang } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { mapEmbed, mapLink } from '@/lib/data';

export default function LocationPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero titleKey="loc_hero_title" subKey="loc_hero_sub" />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">{t('loc_hero_title')}</span>
            <h2 className="section-title mt-3" style={{ textAlign: 'left' }}>
              {t('loc_address_title')}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/80">{t('loc_address')}</p>

            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10Z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
              {t('loc_directions')}
            </a>

            <div className="arch-card mt-8 aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/signboard.png"
                alt={t('brand_name')}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-emerald/10 shadow-card lg:col-span-3">
            <iframe
              title="Madrasa location map"
              src={mapEmbed}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
