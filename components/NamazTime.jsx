'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';

// Salafi-aligned calculation: Muslim World League (method=3), standard Asr (school=0)
const METHOD = 3;
const SCHOOL = 0;
const DHAKA = { lat: 23.8103, lng: 90.4125, name: { bn: 'ঢাকা, বাংলাদেশ', en: 'Dhaka, Bangladesh' } };

const order = [
  { id: 'Fajr', key: 'prayer_fajr' },
  { id: 'Sunrise', key: 'prayer_sunrise' },
  { id: 'Dhuhr', key: 'prayer_dhuhr' },
  { id: 'Asr', key: 'prayer_asr' },
  { id: 'Maghrib', key: 'prayer_maghrib' },
  { id: 'Isha', key: 'prayer_isha' },
];

const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBn = (str) => String(str).replace(/[0-9]/g, (d) => bnDigits[+d]);

function clean(t) {
  return (t || '').replace(/\s*\(.*\)\s*/, '').trim(); // "04:12 (BDT)" -> "04:12"
}

function to12h(hhmm, lang) {
  const [h, m] = clean(hhmm).split(':').map(Number);
  if (Number.isNaN(h)) return hhmm;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const str = `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
  return lang === 'bn' ? toBn(str) : str;
}

export default function NamazTime() {
  const { t, lang } = useLang();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState(DHAKA.name);

  useEffect(() => {
    let cancelled = false;

    const load = async (lat, lng) => {
      try {
        const d = new Date();
        const dateStr = `${String(d.getDate()).padStart(2, '0')}-${String(
          d.getMonth() + 1
        ).padStart(2, '0')}-${d.getFullYear()}`;
        const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=${METHOD}&school=${SCHOOL}`;
        const res = await fetch(url);
        const json = await res.json();
        if (!cancelled && json?.data) {
          setData(json.data);
          setLoading(false);
        }
      } catch (e) {
        if (!cancelled) setLoading(false);
      }
    };

    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPlace({ bn: 'আপনার অবস্থান', en: 'Your location' });
          load(pos.coords.latitude, pos.coords.longitude);
        },
        () => load(DHAKA.lat, DHAKA.lng),
        { timeout: 6000 }
      );
    } else {
      load(DHAKA.lat, DHAKA.lng);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const timings = data?.timings;
  const greg = data?.date?.gregorian;
  const hijri = data?.date?.hijri;

  // Determine next prayer
  let nextId = null;
  if (timings) {
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    for (const p of prayers) {
      const [h, m] = clean(timings[p]).split(':').map(Number);
      if (h * 60 + m > mins) {
        nextId = p;
        break;
      }
    }
    if (!nextId) nextId = 'Fajr';
  }

  return (
    <section className="bg-mint pattern-geo">
      <div className="container-x py-16 sm:py-20">
        <div className="text-center">
          <span className="eyebrow">{t('namaz_eyebrow')}</span>
          <h2 className="section-title mt-3">{t('namaz_title')}</h2>
          <div className="divider-star mt-5" />
        </div>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl bg-emerald-deep text-cream shadow-soft">
          {/* date bar */}
          <div className="flex flex-col items-center justify-between gap-2 border-b border-white/10 px-6 py-4 sm:flex-row">
            <div className="text-sm text-cream/80">
              <span className="text-gold-soft">{t('namaz_loc')}:</span>{' '}
              {place[lang] ?? place.bn}
            </div>
            <div className="text-center text-sm sm:text-right">
              {greg && (
                <span className="text-cream/90">
                  {lang === 'bn' ? toBn(greg.date) : greg.date}
                </span>
              )}
              {hijri && (
                <span className="ml-2 text-gold-soft">
                  · {lang === 'bn' ? toBn(hijri.day) : hijri.day} {hijri.month?.en} {lang === 'bn' ? toBn(hijri.year) : hijri.year} AH
                </span>
              )}
            </div>
          </div>

          {loading || !timings ? (
            <div className="px-6 py-12 text-center text-cream/70">{t('namaz_loading')}</div>
          ) : (
            <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
              {order.map((p) => {
                const isNext = nextId === p.id;
                return (
                  <div
                    key={p.id}
                    className={`flex flex-col items-center gap-1 px-3 py-6 transition ${
                      isNext ? 'bg-gold text-emerald-dark' : 'bg-emerald-deep'
                    }`}
                  >
                    <span className={`text-sm font-medium ${isNext ? 'text-emerald-dark/80' : 'text-cream/70'}`}>
                      {t(p.key)}
                    </span>
                    <span className="font-display text-lg font-bold">
                      {to12h(timings[p.id], lang)}
                    </span>
                    {isNext && (
                      <span className="mt-1 rounded-full bg-emerald-dark px-2 py-0.5 text-[10px] font-semibold text-gold-soft">
                        {t('next_prayer')}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="px-6 py-3 text-center text-xs text-cream/60">
            {t('namaz_method')} · {t('namaz_allow')}
          </div>
        </div>
      </div>
    </section>
  );
}
