/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface FreeFireDiamondProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export function FreeFireDiamond({ size = 48, className = "", glow = true }: FreeFireDiamondProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Cyan Ambient Glow */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md pointer-events-none transform scale-125"
          style={{
            background: "radial-gradient(circle, rgba(0, 240, 255, 0.45) 0%, rgba(0, 110, 255, 0.15) 60%, transparent 80%)",
          }}
        />
      )}

      {/* Faceted Free Fire Diamond SVG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
      >
        <defs>
          <linearGradient id="diamondTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0FFFF" />
            <stop offset="50%" stopColor="#70E4FF" />
            <stop offset="100%" stopColor="#00B8F5" />
          </linearGradient>

          <linearGradient id="diamondLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C4FF" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>

          <linearGradient id="diamondCenter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A8F5FF" />
            <stop offset="60%" stopColor="#00B0FF" />
            <stop offset="100%" stopColor="#004D99" />
          </linearGradient>

          <linearGradient id="diamondRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007ACC" />
            <stop offset="100%" stopColor="#003D7A" />
          </linearGradient>

          <linearGradient id="diamondBottom" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0099EE" />
            <stop offset="100%" stopColor="#002D59" />
          </linearGradient>

          {/* Sparkle Glint */}
          <linearGradient id="sparkleGlint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Crown Upper Table facet */}
        <polygon
          points="25,32 75,32 64,18 36,18"
          fill="url(#diamondTop)"
          stroke="#00E5FF"
          strokeWidth="1.2"
        />

        {/* Crown Left Star facet */}
        <polygon
          points="12,32 25,32 36,18 20,23"
          fill="url(#diamondLeft)"
          stroke="#00E5FF"
          strokeWidth="1.2"
        />

        {/* Crown Right Star facet */}
        <polygon
          points="75,32 88,32 80,23 64,18"
          fill="url(#diamondRight)"
          stroke="#00E5FF"
          strokeWidth="1.2"
        />

        {/* Pavilion Main Center facet (The iconic downward wedge) */}
        <polygon
          points="25,32 75,32 50,88"
          fill="url(#diamondCenter)"
          stroke="#00E5FF"
          strokeWidth="1.2"
        />

        {/* Pavilion Left facet */}
        <polygon
          points="12,32 25,32 50,88"
          fill="url(#diamondLeft)"
          stroke="#00C4FF"
          strokeWidth="1.2"
        />

        {/* Pavilion Right facet */}
        <polygon
          points="75,32 88,32 50,88"
          fill="url(#diamondRight)"
          stroke="#007ACC"
          strokeWidth="1.2"
        />

        {/* Inner Light Reflection Shimmer */}
        <polygon
          points="35,32 65,32 50,68"
          fill="url(#sparkleGlint)"
          opacity="0.6"
        />

        {/* Top Edge Highlight */}
        <line
          x1="36"
          y1="18"
          x2="64"
          y2="18"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Sparkle Star at the corner */}
        <circle cx="34" cy="22" r="2.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
