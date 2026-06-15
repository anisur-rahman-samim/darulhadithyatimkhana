'use client';

import { useLang } from '@/lib/i18n';
import { teachers } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Teachers({ withHeading = true }) {
  const { t, lang } = useLang();

  return (
    <section className="container-x py-16 sm:py-20">
      {withHeading && (
        <SectionHeading eyebrowKey="teachers_eyebrow" titleKey="teachers_title" subKey="teachers_sub" />
      )}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((tch) => (
          <article key={tch.id} className="arch-card group flex flex-col">
            <div className="relative h-64 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tch.photo}
                alt={tch.name[lang]}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/40 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="font-display text-xl font-bold text-emerald-deep">{tch.name[lang]}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{tch.responsibility[lang]}</p>
              <dl className="mt-4 space-y-2 text-left text-sm text-ink/75">
                <div>
                  <dt className="inline font-semibold text-emerald-deep">{t('t_qualification')}: </dt>
                  <dd className="inline">{tch.qualification[lang]}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-emerald-deep">{t('t_experience')}: </dt>
                  <dd className="inline">{tch.experience[lang]}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
