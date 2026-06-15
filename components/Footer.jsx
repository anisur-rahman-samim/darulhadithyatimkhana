'use client';

import Link from 'next/link';
import { useLang } from '@/lib/i18n';
import Logo from './Logo';
import { contactInfo } from '@/lib/data';

const quickLinks = [
  { href: '/about', key: 'nav_about' },
  { href: '/teachers', key: 'nav_teachers' },
  { href: '/gallery', key: 'nav_gallery' },
  { href: '/location', key: 'nav_location' },
  { href: '/contact', key: 'nav_contact' },
];

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-emerald-dark text-cream">
      {/* Quote band */}
      <div className="pattern-gold border-b border-white/10">
        <div className="container-x py-10 text-center">
          <p className="mx-auto max-w-2xl font-display text-xl italic text-gold-soft sm:text-2xl">
            {t('footer_quote')}
          </p>
          <p className="mt-3 text-sm text-cream/70">{t('footer_quote_src')}</p>
        </div>
      </div>

      <div className="container-x grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" tone="white" />
            <div>
              <p className="font-display text-lg font-bold">{t('brand_name')}</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            {t('intro_p1')}
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-gold-soft">{t('footer_quicklinks')}</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/75 transition hover:text-gold-soft">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-gold-soft">{t('footer_contact')}</h3>
          <ul className="space-y-2 text-sm text-cream/75">
            <li>{t('loc_address')}</li>
            <li>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-gold-soft">
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-soft">
                {contactInfo.email}
              </a>
            </li>
          </ul>
          <Link href="/donation" className="btn-primary mt-4 !py-2 !text-sm">
            {t('footer_donate_text')}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-cream/60 sm:flex-row sm:text-left">
          <p>
            © {year} {t('brand_name')}. {t('footer_rights')}
          </p>
          <p>{t('footer_built')}</p>
        </div>
      </div>
    </footer>
  );
}
