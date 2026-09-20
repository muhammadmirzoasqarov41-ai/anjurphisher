/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function FreeFireEmblem({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <div id="free-fire-emblem" className={`relative flex items-center justify-center ${className}`}>
      {/* Background radial glow */}
      <div 
        id="emblem-ambient-glow"
        className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-orange-500/30 to-transparent rounded-full blur-2xl transform scale-125 pointer-events-none"
      />
      
      {/* Precision Vector Emblem */}
      <svg
        id="emblem-svg"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_25px_rgba(255,145,0,0.6)]"
      >
        <defs>
          <linearGradient id="fireGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="40%" stopColor="#FFB900" />
            <stop offset="75%" stopColor="#FF6200" />
            <stop offset="100%" stopColor="#CC2200" />
          </linearGradient>

          <linearGradient id="darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2E39" />
            <stop offset="50%" stopColor="#15171D" />
            <stop offset="100%" stopColor="#0B0C10" />
          </linearGradient>

          <linearGradient id="goldEdge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="60%" stopColor="#FF9D00" />
            <stop offset="100%" stopColor="#B35900" />
          </linearGradient>

          <filter id="flameBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Shield Wings (Left) */}
        <path
          d="M 24 64 L 62 48 L 74 76 L 46 96 L 68 108 L 48 132 L 76 138 L 88 166 L 50 154 L 34 116 Z"
          fill="url(#darkMetal)"
          stroke="url(#goldEdge)"
          strokeWidth="2.5"
          strokeLinejoin="bevel"
        />

        {/* Outer Shield Wings (Right) */}
        <path
          d="M 176 64 L 138 48 L 126 76 L 154 96 L 132 108 L 152 132 L 124 138 L 112 166 L 150 154 L 166 116 Z"
          fill="url(#darkMetal)"
          stroke="url(#goldEdge)"
          strokeWidth="2.5"
          strokeLinejoin="bevel"
        />

        {/* Fiery Wing Flares (Left) */}
        <path
          d="M 38 72 L 72 58 L 56 90 L 76 104 L 54 126 L 82 132 L 68 152 L 46 122 Z"
          fill="url(#fireGold)"
          opacity="0.9"
        />

        {/* Fiery Wing Flares (Right) */}
        <path
          d="M 162 72 L 128 58 L 144 90 L 124 104 L 146 126 L 118 132 L 132 152 L 154 122 Z"
          fill="url(#fireGold)"
          opacity="0.9"
        />

        {/* Central Shield Crest Base */}
        <polygon
          points="100,24 136,56 128,140 100,182 72,140 64,56"
          fill="url(#darkMetal)"
          stroke="url(#goldEdge)"
          strokeWidth="3.5"
        />

        {/* Inner Crest Core */}
        <polygon
          points="100,36 126,62 120,132 100,168 80,132 74,62"
          fill="#0e1017"
          stroke="#ff8800"
          strokeWidth="1.5"
        />

        {/* Tactical Crest V-Cuts */}
        <path
          d="M 78 70 L 100 88 L 122 70"
          stroke="url(#fireGold)"
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />
        <path
          d="M 82 96 L 100 112 L 118 96"
          stroke="url(#fireGold)"
          strokeWidth="2.5"
          strokeLinecap="square"
          fill="none"
        />

        {/* Iconic Central Flame Dagger / Blade */}
        <path
          d="M 100 30 C 104 46 112 56 114 74 C 116 88 110 102 107 118 L 100 156 L 93 118 C 90 102 84 88 86 74 C 88 56 96 46 100 30 Z"
          fill="url(#fireGold)"
        />

        {/* Inner Blade Highlights */}
        <path
          d="M 100 38 C 102 50 106 60 106 76 C 106 90 102 104 100 132 C 98 104 94 90 94 76 C 94 60 98 50 100 38 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />

        {/* Iconic FF Mark on Crest */}
        <g id="crest-ff-letters">
          {/* First F */}
          <path
            d="M 88 78 H 97 V 83 H 92 V 87 H 96 V 92 H 92 V 104 H 88 Z"
            fill="#FFFFFF"
          />
          {/* Second F */}
          <path
            d="M 103 78 H 112 V 83 H 107 V 87 H 111 V 92 H 107 V 104 H 103 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Sharp Lower Point Flare */}
        <polygon
          points="100,166 105,182 100,192 95,182"
          fill="url(#fireGold)"
        />
      </svg>
    </div>
  );
}
