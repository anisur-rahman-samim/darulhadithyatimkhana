'use client';

import { useLang } from '@/lib/i18n';

export default function SectionHeading({ eyebrowKey, titleKey, subKey, center = true }) {
  const { t } = useLang();
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrowKey && <span className="eyebrow">{t(eyebrowKey)}</span>}
      <h2 className="section-title mt-3">{t(titleKey)}</h2>
      {subKey && <p className="mt-2 text-ink/65">{t(subKey)}</p>}
      {center && <div className="divider-star mt-5" />}
    </div>
  );
}
