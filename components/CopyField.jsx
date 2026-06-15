'use client';

import { useState } from 'react';
import { useLang } from '@/lib/i18n';

export default function CopyField({ label, value }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch (e) {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald/15 bg-mint/60 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs font-medium text-ink/55">{label}</p>
        <p className="truncate font-semibold text-emerald-deep">{value}</p>
      </div>
      <button
        onClick={copy}
        className="shrink-0 rounded-full bg-emerald px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-deep"
      >
        {done ? t('copied') : t('copy')}
      </button>
    </div>
  );
}
