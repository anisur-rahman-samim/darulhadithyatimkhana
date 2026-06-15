'use client';

import { useLang } from '@/lib/i18n';
import { messages } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Messages() {
  const { t, lang } = useLang();

  return (
    <section className="bg-white">
      <div className="container-x py-16 sm:py-20">
        <SectionHeading eyebrowKey="msg_eyebrow" titleKey="msg_title" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {messages.map((m) => (
            <figure
              key={m.id}
              className="relative overflow-hidden rounded-3xl border border-emerald/10 bg-cream p-6 shadow-card sm:p-8"
            >
              <span className="absolute right-6 top-4 font-display text-7xl leading-none text-gold/25">
                &#8221;
              </span>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.photo}
                  alt={m.name[lang]}
                  className="h-20 w-20 rounded-full border-4 border-gold/40 object-cover"
                />
                <figcaption>
                  <p className="font-display text-lg font-bold text-emerald-deep">{m.name[lang]}</p>
                  <p className="text-sm font-medium text-gold">{t(m.roleKey)}</p>
                </figcaption>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-ink/80">
                {m.message[lang]}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
