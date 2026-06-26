export default function Character({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* hair */}
      <path
        d="M30 44 Q30 20 60 16 Q90 20 90 44 L88 50 Q86 38 60 36 Q34 38 32 50 Z"
        fill="currentColor"
        stroke="none"
      />
      {/* head */}
      <rect x="34" y="36" width="52" height="52" rx="8" />
      {/* ears */}
      <path d="M34 58 Q29 62 32 70" />
      <path d="M86 58 Q91 62 88 70" />
      {/* eyebrows */}
      <line x1="42" y1="52" x2="54" y2="52" />
      <line x1="66" y1="52" x2="78" y2="52" />
      {/* glasses */}
      <rect x="41" y="56" width="14" height="10" rx="2" />
      <rect x="65" y="56" width="14" height="10" rx="2" />
      <line x1="55" y1="61" x2="65" y2="61" />
      {/* nose */}
      <path d="M60 68 L58 74 L60 75" />
      {/* mouth */}
      <path d="M52 80 Q60 84 68 80" />
      {/* neck */}
      <path d="M50 88 L50 96 L70 96 L70 88" />
      {/* hoodie body */}
      <path
        d="M16 140 Q18 100 50 96 L70 96 Q102 100 104 140"
        fill="currentColor"
        fillOpacity="0.14"
      />
      {/* hoodie hood outline */}
      <path d="M50 96 Q42 88 42 80" />
      <path d="M70 96 Q78 88 78 80" />
      {/* hoodie V collar */}
      <path d="M50 96 Q60 106 70 96" />
      {/* drawstrings */}
      <line x1="56" y1="104" x2="55" y2="122" />
      <line x1="64" y1="104" x2="65" y2="122" />
      <circle cx="55" cy="124" r="1.5" fill="currentColor" />
      <circle cx="65" cy="124" r="1.5" fill="currentColor" />
    </svg>
  );
}
