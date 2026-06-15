import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-bold text-gold">৪০৪</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-emerald-deep">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-ink/70">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary mt-6">হোমে ফিরে যান</Link>
    </section>
  );
}
