/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FreeFireDiamond } from './FreeFireDiamond';

interface DiamondChestProps {
  className?: string;
  size?: number;
  label?: string;
}

export function DiamondChest({ className = "", size = 160, label }: DiamondChestProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none group ${className}`}
      style={{ width: size }}
    >
      {/* Cyan & Gold Ambient Underglow */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.5) 0%, rgba(255, 170, 0, 0.25) 50%, transparent 80%)",
        }}
      />

      {/* Chest SVG */}
      <svg
        viewBox="0 0 200 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
      >
        <defs>
          {/* Wood / Dark Carbon Plates */}
          <linearGradient id="chestWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2633" />
            <stop offset="50%" stopColor="#1C1824" />
            <stop offset="100%" stopColor="#0F0C14" />
          </linearGradient>

          {/* Gold / Amber Metal Trim */}
          <linearGradient id="chestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE177" />
            <stop offset="40%" stopColor="#FFB300" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#8A4500" />
          </linearGradient>

          {/* Glowing Diamond Interior Aura */}
          <radialGradient id="chestInteriorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0FFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#0077B6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#001833" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Interior Glow Shining Upwards from Chest */}
        <ellipse cx="100" cy="88" rx="72" ry="24" fill="url(#chestInteriorGlow)" />

        {/* Chest Open Lid (Behind) */}
        <g id="chest-lid">
          <path
            d="M 28 62 L 40 24 Q 100 10 160 24 L 172 62 Q 100 48 28 62 Z"
            fill="url(#chestWood)"
            stroke="url(#chestGold)"
            strokeWidth="3.5"
          />
          {/* Lid Gold Reinforcement Straps */}
          <path d="M 52 28 Q 100 18 148 28" stroke="url(#chestGold)" strokeWidth="3" fill="none" />
          <path d="M 68 22 L 64 56" stroke="url(#chestGold)" strokeWidth="3" />
          <path d="M 132 22 L 136 56" stroke="url(#chestGold)" strokeWidth="3" />
          {/* Lid Inner Shadow */}
          <ellipse cx="100" cy="54" rx="60" ry="10" fill="#0b0910" opacity="0.8" />
        </g>

        {/* Overflowing Diamond Crystals Layer Inside Chest */}
        <g id="overflowing-diamonds">
          {/* Central diamond pile */}
          <polygon points="90,62 110,62 100,82" fill="#00E5FF" stroke="#FFFFFF" strokeWidth="1" />
          <polygon points="76,68 94,68 85,86" fill="#70E4FF" stroke="#00E5FF" strokeWidth="1" />
          <polygon points="106,68 124,68 115,86" fill="#00B8F5" stroke="#70E4FF" strokeWidth="1" />
          <polygon points="62,74 78,74 70,90" fill="#00C4FF" stroke="#E0FFFF" strokeWidth="0.8" />
          <polygon points="122,74 138,74 130,90" fill="#0099EE" stroke="#E0FFFF" strokeWidth="0.8" />
          <polygon points="86,76 114,76 100,96" fill="#E0FFFF" stroke="#00E5FF" strokeWidth="1.2" />

          {/* Diamond light glints */}
          <circle cx="100" cy="62" r="2.5" fill="#FFFFFF" />
          <circle cx="78" cy="70" r="2" fill="#FFFFFF" />
          <circle cx="122" cy="70" r="2" fill="#FFFFFF" />
          <circle cx="94" cy="78" r="3" fill="#FFFFFF" />
        </g>

        {/* Chest Main Box Body */}
        <g id="chest-body">
          {/* Main Box Face */}
          <path
            d="M 28 82 L 36 142 Q 100 156 164 142 L 172 82 Q 100 94 28 82 Z"
            fill="url(#chestWood)"
            stroke="url(#chestGold)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Chest Corner Metal Brackets */}
          <path d="M 30 84 L 38 140" stroke="url(#chestGold)" strokeWidth="6" strokeLinecap="round" />
          <path d="M 170 84 L 162 140" stroke="url(#chestGold)" strokeWidth="6" strokeLinecap="round" />

          {/* Chest Horizontal Gold Belts */}
          <path d="M 32 108 Q 100 120 168 108" stroke="url(#chestGold)" strokeWidth="4" fill="none" />
          <path d="M 34 138 Q 100 152 166 138" stroke="url(#chestGold)" strokeWidth="3" fill="none" />

          {/* Chest Vertical Straps */}
          <path d="M 68 87 L 72 144" stroke="url(#chestGold)" strokeWidth="4" />
          <path d="M 132 87 L 128 144" stroke="url(#chestGold)" strokeWidth="4" />

          {/* Rivets on Straps */}
          <circle cx="70" cy="98" r="2" fill="#FFFFFF" />
          <circle cx="71" cy="126" r="2" fill="#FFFFFF" />
          <circle cx="130" cy="98" r="2" fill="#FFFFFF" />
          <circle cx="129" cy="126" r="2" fill="#FFFFFF" />

          {/* Keyhole / Lock Plate */}
          <polygon
            points="92,94 108,94 104,116 96,116"
            fill="url(#chestGold)"
            stroke="#4A2600"
            strokeWidth="1.5"
          />
          {/* Glowing Cyan Keyhole Gem */}
          <polygon points="98,99 102,99 100,107" fill="#00F0FF" />
        </g>
      </svg>

      {/* Floating Sparkle / Single Big Diamond spilling in front */}
      <div className="absolute -top-3 -right-2 transform rotate-12">
        <FreeFireDiamond size={34} />
      </div>
      <div className="absolute top-1/2 -left-3 transform -rotate-12">
        <FreeFireDiamond size={26} />
      </div>

      {label && (
        <span className="mt-2 text-[11px] font-bold tracking-widest text-amber-400/90 uppercase font-mono bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
          {label}
        </span>
      )}
    </div>
  );
}
