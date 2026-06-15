export default function Logo({ className = 'h-10 w-10', tone = 'gold' }) {
  const c = tone === 'white' ? '#ffffff' : '#c79a3a';
  const c2 = tone === 'white' ? 'rgba(255,255,255,0.5)' : '#0f6b4f';
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* mihrab arch */}
      <path
        d="M14 56V30c0-9.94 8.06-18 18-18s18 8.06 18 18v26"
        stroke={c}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 56V31c0-6.63 5.37-12 12-12s12 5.37 12 12v25"
        stroke={c2}
        strokeWidth="2"
        opacity="0.7"
      />
      {/* crescent + star */}
      <path
        d="M36 26.5a6 6 0 1 0 0 11 7.5 7.5 0 1 1 0-11Z"
        fill={c}
      />
      <path d="M30 23.5l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.9Z" fill={c} />
    </svg>
  );
}
