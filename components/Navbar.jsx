'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/i18n';
import Logo from './Logo';

const links = [
  { href: '/', key: 'nav_home' },
  { href: '/about', key: 'nav_about' },
  { href: '/teachers', key: 'nav_teachers' },
  { href: '/gallery', key: 'nav_gallery' },
  { href: '/location', key: 'nav_location' },
  { href: '/contact', key: 'nav_contact' },
];

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-cream/95 shadow-card backdrop-blur' : 'bg-cream'
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={t('brand_name')}>
          <Logo className="h-10 w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-emerald-deep sm:text-lg">
              {t('brand_name')}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${active ? 'nav-link-active' : ''}`}
              >
                {t(l.key)}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-full border border-emerald/30 px-3 py-1.5 text-sm font-semibold text-emerald-deep transition hover:bg-emerald hover:text-white"
            aria-label="Switch language"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
          <Link href="/donation" className="hidden btn-primary !px-5 !py-2 !text-sm sm:inline-flex">
            {t('nav_donate')}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-emerald-deep lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-emerald/10 bg-cream lg:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-3 py-3 text-base font-medium transition ${
                    active ? 'bg-mint text-emerald-deep' : 'text-ink/80 hover:bg-mint'
                  }`}
                >
                  {t(l.key)}
                </Link>
              );
            })}
            <Link href="/donation" className="btn-primary mt-2">
              {t('nav_donate')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
