'use client';

import { useLang } from '@/lib/i18n';
import PageHero from '@/components/PageHero';
import CopyField from '@/components/CopyField';
import { donation } from '@/lib/data';

export default function DonationPage() {
  const { t, lang } = useLang();
  const { bkash, nagad, bank, qr } = donation;

  return (
    <>
      <PageHero titleKey="donate_hero_title" subKey="donate_hero_sub" />

      <section className="container-x py-16 sm:py-20">
        {/* Instruction */}
        <div className="mx-auto max-w-3xl rounded-3xl border-l-4 border-gold bg-white p-6 shadow-card sm:p-8">
          <h2 className="font-display text-2xl font-bold text-emerald-deep">{t('donate_instruction_title')}</h2>
          <p className="mt-3 leading-relaxed text-ink/80">{t('donate_instruction')}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Mobile banking */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-display text-xl font-bold text-emerald-deep">{t('donate_mobile')}</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {[bkash, nagad].map((m) => (
                <div key={m.label} className="rounded-3xl border border-emerald/10 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-emerald-deep">{m.label}</span>
                    <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-emerald">
                      {m.type[lang]}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink/55">{t('donate_send_money')}</p>
                  <div className="mt-4">
                    <CopyField label={m.label} value={m.number} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bank */}
            <h3 className="mb-4 mt-10 font-display text-xl font-bold text-emerald-deep">{t('donate_bank')}</h3>
            <div className="space-y-3 rounded-3xl border border-emerald/10 bg-white p-6 shadow-card">
              <Row label={t('bank_name')} value={bank.name[lang]} />
              <CopyField label={t('bank_acc_name')} value={bank.accName[lang]} />
              <CopyField label={t('bank_acc_no')} value={bank.accNo} />
              <Row label={t('bank_branch')} value={bank.branch[lang]} />
              <CopyField label={t('bank_routing')} value={bank.routing} />
            </div>
          </div>

          {/* QR */}
          <div>
            <h3 className="mb-4 font-display text-xl font-bold text-emerald-deep">{t('donate_qr')}</h3>
            <div className="flex flex-col items-center rounded-3xl border border-emerald/10 bg-white p-6 text-center shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qr}
                alt="Donation QR code"
                className="h-56 w-56 rounded-2xl border-4 border-mint object-cover"
              />
              <p className="mt-4 text-sm text-ink/65">{t('donate_qr_note')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-emerald/10 bg-mint/40 px-4 py-3">
      <p className="text-xs font-medium text-ink/55">{label}</p>
      <p className="text-right font-semibold text-emerald-deep">{value}</p>
    </div>
  );
}
