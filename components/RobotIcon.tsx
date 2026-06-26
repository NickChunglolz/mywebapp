export type RobotAction =
  | "idle"
  | "wave-l"
  | "wave-r"
  | "kick-l"
  | "kick-r"
  | "nod"
  | "jump";

export default function RobotIcon({
  className = "w-6 h-6",
  action = "idle",
}: {
  className?: string;
  action?: RobotAction;
}) {
  const armL = action === "wave-l" ? "bot-arm-l bot-do-wave" : "bot-arm-l";
  const armR = action === "wave-r" ? "bot-arm bot-do-wave" : "bot-arm";
  const legL = action === "kick-l" ? "bot-leg-l bot-do-kick" : "bot-leg-l";
  const legR = action === "kick-r" ? "bot-leg-r bot-do-kick" : "bot-leg-r";
  const head = action === "nod" ? "bot-head bot-do-nod" : "bot-head";
  const wrap = action === "jump" ? "bot-do-jump" : "";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <g className={wrap}>
        <g className={head}>
          <line x1="16" y1="1.5" x2="16" y2="3" />
          <circle cx="16" cy="1.2" r="0.9" fill="currentColor" stroke="none" />
          <rect x="10" y="3" width="12" height="9" rx="1.5" />
          <line x1="9" y1="6.5" x2="10" y2="6.5" />
          <line x1="9" y1="9.5" x2="10" y2="9.5" />
          <line x1="22" y1="6.5" x2="23" y2="6.5" />
          <line x1="22" y1="9.5" x2="23" y2="9.5" />
          <rect
            className="bot-visor"
            x="11.5"
            y="5.5"
            width="9"
            height="3"
            rx="0.4"
            fill="currentColor"
            stroke="none"
            opacity="0.85"
          />
          <circle
            cx="16"
            cy="7"
            r="0.9"
            fill="var(--background)"
            stroke="none"
            className="scan-dot"
          />
        </g>

        <line x1="15" y1="12" x2="15" y2="13.5" />
        <line x1="17" y1="12" x2="17" y2="13.5" />

        <path d="M 7 14 L 25 14 L 26 16 L 26 23 L 6 23 L 6 16 Z" />

        <circle cx="16" cy="18.5" r="1.3" fill="currentColor" stroke="none" />
        <line x1="10" y1="17" x2="12.5" y2="17" opacity="0.4" />
        <line x1="19.5" y1="17" x2="22" y2="17" opacity="0.4" />
        <line x1="10" y1="21" x2="12.5" y2="21" opacity="0.4" />
        <line x1="19.5" y1="21" x2="22" y2="21" opacity="0.4" />

        <line className={armL} x1="4.5" y1="16" x2="4.5" y2="22" strokeWidth="2" />
        <line className={armR} x1="27.5" y1="16" x2="27.5" y2="22" strokeWidth="2" />

        <rect className={legL} x="11" y="23" width="3.5" height="6" rx="0.5" />
        <rect className={legR} x="17.5" y="23" width="3.5" height="6" rx="0.5" />

        <line x1="10" y1="30" x2="15.5" y2="30" strokeWidth="1.6" />
        <line x1="16.5" y1="30" x2="22" y2="30" strokeWidth="1.6" />
      </g>
    </svg>
  );
}
