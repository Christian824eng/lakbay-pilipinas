import React from 'react';

interface PearlLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const PearlLogo: React.FC<PearlLogoProps> = ({
  size = 'md',
  showText = false,
  textColor = 'text-[#0F172A]',
  className = '',
}) => {
  const pixelSizes = {
    sm: 32,
    md: 44,
    lg: 64,
    xl: 96,
  };

  const px = pixelSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Luminous Pearl SVG Emblem */}
      <div className="relative flex items-center justify-center shrink-0" style={{ width: px, height: px }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(2,132,199,0.18)]"
          aria-hidden="true"
        >
          <defs>
            {/* Luminous Pearl Sphere Radial Gradient */}
            <radialGradient id="pearlShine" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#F8FAFC" />
              <stop offset="65%" stopColor="#E0F2FE" />
              <stop offset="85%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#38BDF8" />
            </radialGradient>

            {/* Ocean Wave Outer Ripple Gradient */}
            <linearGradient id="oceanWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#0369A1" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#075985" stopOpacity="0.95" />
            </linearGradient>

            {/* Soft Warm Gold Accent Ring */}
            <linearGradient id="softGoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.9" />
            </linearGradient>

            {/* Soft glow filter */}
            <filter id="softPearlGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ocean Wave Ripples / Swirl */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#oceanWaveGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.45"
          />

          {/* Dynamic flowing ocean wave arms embracing the pearl */}
          <path
            d="M 20 62 C 26 78, 48 84, 68 76 C 82 70, 88 54, 82 40 C 78 30, 68 24, 58 24"
            fill="none"
            stroke="url(#oceanWaveGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Golden delicate crest / sunlight ray accent */}
          <path
            d="M 50 12 C 68 12, 85 28, 86 48"
            fill="none"
            stroke="url(#softGoldGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Delicate lower wave ripple */}
          <path
            d="M 30 76 C 42 82, 58 82, 70 76"
            fill="none"
            stroke="url(#softGoldGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Central Luminous Pearl Body */}
          <circle
            cx="50"
            cy="50"
            r="26"
            fill="url(#pearlShine)"
            filter="url(#softPearlGlow)"
            stroke="#FFFFFF"
            strokeWidth="1"
          />

          {/* Specular high-luster pearl glint */}
          <ellipse
            cx="42"
            cy="40"
            rx="6.5"
            ry="4"
            transform="rotate(-28 42 40)"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <circle cx="48" cy="36" r="1.8" fill="#FFFFFF" opacity="0.95" />

          {/* Subtle pearlescent iridescent arc */}
          <path
            d="M 36 58 C 42 66, 56 66, 62 60"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Brand Title & Optional Baybayin Subtitle */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif text-lg tracking-[0.14em] font-bold uppercase leading-tight ${textColor}`}
          >
            Perlas ng Silangan
          </span>
          <span
            className="text-[12px] leading-tight font-sans tracking-[0.16em] text-[#0284C7] font-semibold mt-0.5"
            title="ᜉᜒᜇ᜔ᜎᜐ᜔ ᜈᜅ᜔ ᜐᜒᜎᜅᜈᜈ᜔"
          >
            ᜉᜒᜇ᜔ᜎᜐ᜔ ᜈᜅ᜔ ᜐᜒᜎᜅᜈᜈ᜔
          </span>
          <span
            className={`text-[9.5px] sm:text-[10px] font-sans tracking-[0.15em] uppercase font-medium leading-tight ${
              textColor.includes('text-white') ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Pearl of the Orient Seas
          </span>
        </div>
      )}
    </div>
  );
};
