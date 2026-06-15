'use client';

import { useState } from 'react';
import { useLang } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import { contactInfo } from '@/lib/data';

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // 'ok' | 'err'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('err');
      return;
    }
    // Demo only — no backend. Wire this to your API / email service.
    setStatus('ok');
    setForm({ name: '', phone: '', message: '' });
  };

  const cards = [
    {
      key: 'contact_address',
      value: t('loc_address'),
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10Zm0-8a2 2 0 100-4 2 2 0 000 4Z" />
      ),
    },
    {
      key: 'contact_phone',
      value: `${contactInfo.phone} · ${contactInfo.phone2}`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0 8.3 6.7 15 15 15v-3.5l-4-1.5-2 2a11 11 0 01-5-5l2-2L8.5 5H4Z" />
      ),
    },
    {
      key: 'contact_email',
      value: contactInfo.email,
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 5 8-5" />
        </>
      ),
    },
  ];

  return (
    <>
      <PageHero titleKey="contact_hero_title" subKey="contact_hero_sub" />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-4">
            {cards.map((c) => (
              <div key={c.key} className="flex items-start gap-4 rounded-2xl border border-emerald/10 bg-white p-5 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald text-white">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                    {c.icon}
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-emerald-deep">{t(c.key)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-emerald/10 bg-white p-7 shadow-card sm:p-8">
            <h2 className="font-display text-2xl font-bold text-emerald-deep">{t('contact_form_title')}</h2>
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink/70">{t('form_name')}</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-emerald/20 bg-cream px-4 py-3 text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink/70">{t('form_phone')}</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full rounded-xl border border-emerald/20 bg-cream px-4 py-3 text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink/70">{t('form_message')}</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="w-full resize-none rounded-xl border border-emerald/20 bg-cream px-4 py-3 text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                />
              </div>

              {status === 'ok' && (
                <p className="rounded-xl bg-emerald/10 px-4 py-3 text-sm font-medium text-emerald-deep">
                  {t('form_success')}
                </p>
              )}
              {status === 'err' && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {t('form_required')}
                </p>
              )}

              <button onClick={submit} className="btn-primary w-full">
                {t('form_submit')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
