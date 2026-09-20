/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { FreeFireDiamond } from './FreeFireDiamond';
import { DiamondChest } from './DiamondChest';
import { FreeFireEmblem } from './FreeFireEmblem';
import { FreeFireWordmark } from './FreeFireWordmark';
import { Check, Sparkles, Flame, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

export interface DiamondPackage {
  id: string;
  amount: number;
  displayText: string;
  label: string;
  tier: 'starter' | 'rare' | 'epic' | 'legendary' | 'mythic';
  badge?: string;
  bonus?: string;
  chestSize: number;
}

interface DiamondCatalogProps {
  onBack?: () => void;
  onSelectPackage?: (pkg: DiamondPackage) => void;
  onProceed?: (pkg: DiamondPackage) => void;
}

export function DiamondCatalog({ onBack, onSelectPackage, onProceed }: DiamondCatalogProps) {
  const packages: DiamondPackage[] = [
    {
      id: '100',
      amount: 100,
      displayText: '100x',
      label: 'STARTER CHEST',
      tier: 'starter',
      chestSize: 130,
    },
    {
      id: '310',
      amount: 310,
      displayText: '310x',
      label: 'TACTICAL BOX',
      tier: 'rare',
      bonus: '+15 BONUS',
      chestSize: 135,
    },
    {
      id: '520',
      amount: 520,
      displayText: '520x',
      label: 'SPECIAL CRATE',
      tier: 'rare',
      bonus: '+35 BONUS',
      chestSize: 140,
    },
    {
      id: '1060',
      amount: 1060,
      displayText: '1,060x',
      label: 'ROYALE CHEST',
      tier: 'epic',
      badge: 'MASHHUR',
      bonus: '+100 BONUS',
      chestSize: 148,
    },
    {
      id: '2180',
      amount: 2180,
      displayText: '2,180x',
      label: 'ELITE TREASURE',
      tier: 'epic',
      bonus: '+220 BONUS',
      chestSize: 152,
    },
    {
      id: '5600',
      amount: 5600,
      displayText: '5,600x',
      label: 'MYTHIC VAULT',
      tier: 'mythic',
      badge: 'SUPER FOYDA',
      bonus: '+600 BONUS',
      chestSize: 160,
    },
    {
      id: '9999',
      amount: 9999,
      displayText: '9,999x',
      label: 'GRAND VIP CHEST',
      tier: 'legendary',
      badge: 'MEGA JACKPOT',
      bonus: 'MAX OLMOS 🔥',
      chestSize: 175,
    },
  ];

  const [selectedId, setSelectedId] = useState<string>('9999');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedPkg = packages.find((p) => p.id === selectedId) || packages[packages.length - 1];

  const handleChoose = (pkg: DiamondPackage) => {
    setSelectedId(pkg.id);
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      id="diamond-catalog-page"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative w-full max-w-7xl h-full max-h-[96vh] flex flex-col items-center justify-between py-2 sm:py-3 px-2 sm:px-4 overflow-hidden"
    >
      {/* Top Header Bar */}
      <div id="catalog-top-bar" className="w-full flex items-center justify-between shrink-0 px-2 sm:px-6">
        {onBack ? (
          <button
            id="catalog-back-button"
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 hover:text-white text-xs font-mono tracking-wider transition-colors cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">ORQAGA</span>
          </button>
        ) : (
          <div className="w-16" />
        )}

        {/* Center Logo */}
        <div className="flex items-center gap-2">
          <FreeFireEmblem className="w-9 h-9 sm:w-11 sm:h-11" />
          <FreeFireWordmark className="w-32 sm:w-44" />
        </div>

        {/* Right Active Diamond Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
          <FreeFireDiamond size={18} glow={false} />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 font-mono tracking-wider">
            {selectedPkg.displayText}
          </span>
        </div>
      </div>

      {/* Main Title: "SIZNING AKKAUNTINGIZGA YUBORILADIGAN OLMOSLAR SONINI TANLANG!" */}
      <div id="catalog-title-section" className="text-center my-1 sm:my-2 px-2 shrink-0 z-10">
        <h1
          id="catalog-headline"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight font-['Teko',sans-serif] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_2px_12px_rgba(255,185,0,0.5)]"
        >
          SIZNING AKKAUNTINGIZGA YUBORILADIGAN OLMOSLAR SONINI TANLANG!
        </h1>
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 font-mono mt-0.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span>SANDIQLARNI SURING VA KERAKLISINI TANLANG</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        </div>
      </div>

      {/* CHESTS SCROLLABLE CAROUSEL CONTAINER */}
      <div className="relative w-full flex-1 max-h-[66vh] flex flex-col justify-center items-center my-auto z-20">
        {/* Left Scroll Navigation Button */}
        <button
          id="scroll-left-btn"
          type="button"
          onClick={scrollLeft}
          aria-label="Oldingi sandiqlar"
          className="absolute -left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-zinc-900 border border-amber-500/60 text-amber-400 hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-all active:scale-90 cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Right Scroll Navigation Button */}
        <button
          id="scroll-right-btn"
          type="button"
          onClick={scrollRight}
          aria-label="Keyingi sandiqlar"
          className="absolute -right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/80 hover:bg-zinc-900 border border-cyan-500/60 text-cyan-400 hover:text-white shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-all active:scale-90 cursor-pointer hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>

        {/* The Horizontal Scrollable Strip with Custom Gaming Scrollbar */}
        <div
          id="catalog-cards-scroll-container"
          ref={scrollContainerRef}
          className="w-full flex items-center gap-4 sm:gap-6 overflow-x-auto ff-scrollbar snap-x snap-mandatory py-4 px-4 sm:px-12 scroll-smooth"
        >
          {packages.map((pkg) => {
            const isSelected = selectedId === pkg.id;
            const isJackpot = pkg.id === '9999';

            return (
              <motion.div
                key={pkg.id}
                onClick={() => handleChoose(pkg)}
                whileHover={{ scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`snap-center shrink-0 w-[220px] sm:w-[250px] md:w-[270px] min-h-[310px] sm:min-h-[340px] relative group cursor-pointer flex flex-col items-center justify-between p-3 sm:p-4 rounded-2xl border transition-all duration-300 select-none ${
                  isSelected
                    ? isJackpot
                      ? 'bg-gradient-to-b from-amber-950/85 via-zinc-900/95 to-cyan-950/90 border-amber-400 shadow-[0_0_35px_rgba(255,185,0,0.7),0_0_50px_rgba(0,229,255,0.45)] scale-105 z-10'
                      : 'bg-gradient-to-b from-cyan-950/85 via-zinc-900/95 to-black/95 border-cyan-400 shadow-[0_0_30px_rgba(0,229,255,0.6)] scale-105 z-10'
                    : 'bg-zinc-900/70 hover:bg-zinc-900/95 border-zinc-800/90 hover:border-zinc-700 shadow-[0_6px_25px_rgba(0,0,0,0.7)] opacity-90 hover:opacity-100'
                }`}
              >
                {/* Top Badge (e.g. MEGA JACKPOT, MASHHUR) */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span
                      className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider font-mono shadow-lg flex items-center gap-1 ${
                        isJackpot
                          ? 'bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 text-black animate-pulse'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      }`}
                    >
                      <Flame className="w-3 h-3 fill-current" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Selected Checkmark Badge */}
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_12px_#00e5ff] z-20">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}

                {/* Chest with overflowing glowing diamonds */}
                <div className="relative w-full flex flex-col items-center justify-center my-auto py-2">
                  {/* Radiant Light Aura Behind Chest */}
                  <div
                    className={`absolute inset-0 rounded-full blur-2xl pointer-events-none transition-opacity ${
                      isSelected ? 'opacity-95 scale-125' : 'opacity-40 group-hover:opacity-75'
                    }`}
                    style={{
                      background: isJackpot
                        ? 'radial-gradient(circle, rgba(255, 185, 0, 0.6) 0%, rgba(0, 229, 255, 0.4) 55%, transparent 80%)'
                        : 'radial-gradient(circle, rgba(0, 229, 255, 0.55) 0%, rgba(0, 119, 255, 0.25) 55%, transparent 80%)',
                    }}
                  />

                  {/* High Detail Animated Chest */}
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    <DiamondChest size={pkg.chestSize} />
                  </div>
                </div>

                {/* Amount Display & Diamond Icon */}
                <div className="w-full text-center mt-2 pt-2 border-t border-zinc-800/80 shrink-0">
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className={`text-3xl sm:text-4xl font-black font-['Teko',sans-serif] tracking-wider leading-none ${
                        isSelected
                          ? isJackpot
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 drop-shadow-[0_2px_12px_rgba(255,185,0,0.7)]'
                            : 'text-cyan-300 drop-shadow-[0_2px_12px_rgba(0,229,255,0.75)]'
                          : 'text-white group-hover:text-cyan-200'
                      }`}
                    >
                      {pkg.displayText}
                    </span>
                    <FreeFireDiamond size={26} />
                  </div>

                  {/* Bonus Tag or Label */}
                  {pkg.bonus ? (
                    <div className="text-[11px] font-bold text-amber-400 font-mono tracking-wider mt-0.5">
                      {pkg.bonus}
                    </div>
                  ) : (
                    <div className="text-[11px] text-zinc-400 font-mono tracking-wider mt-0.5">
                      {pkg.label}
                    </div>
                  )}

                  {/* Action button inside card */}
                  <div
                    className={`w-full mt-2.5 py-1.5 rounded-lg text-center text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                      isSelected
                        ? isJackpot
                          ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-black shadow-[0_0_15px_rgba(255,185,0,0.65)]'
                          : 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,229,255,0.65)]'
                        : 'bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700'
                    }`}
                  >
                    {isSelected ? 'TANLANDI ✓' : 'TANLASH'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Helper Indicator below chests */}
        <div className="flex items-center gap-2 mt-1 text-[11px] font-mono tracking-widest text-zinc-400">
          <ChevronLeft className="w-3.5 h-3.5 animate-pulse text-amber-500" />
          <span>Barcha sandiqlarni ko'rish uchun chapga/o'ngga suring</span>
          <ChevronRight className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
        </div>
      </div>

      {/* Bottom Confirmation Button */}
      <div id="catalog-bottom-bar" className="w-full flex justify-center items-center py-2 shrink-0 z-30">
        <motion.button
          id="confirm-diamond-button"
          type="button"
          onClick={() => {
            if (onProceed) {
              onProceed(selectedPkg);
            } else if (onSelectPackage) {
              onSelectPackage(selectedPkg);
            }
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative group cursor-pointer px-10 sm:px-16 py-3 rounded-xl font-['Teko',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_30px_rgba(255,185,0,0.6)] hover:shadow-[0_0_40px_rgba(255,185,0,0.85)] border border-amber-300 transition-all flex items-center gap-3"
        >
          <div className="flex items-center gap-2">
            <span>{selectedPkg.displayText} OLMOSNI OLISH</span>
            <FreeFireDiamond size={28} glow={false} />
          </div>
          <ChevronRight className="w-6 h-6 stroke-[3] text-black group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}
