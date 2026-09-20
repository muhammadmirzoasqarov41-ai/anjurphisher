/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FreeFireDiamond } from './FreeFireDiamond';
import { FreeFireEmblem } from './FreeFireEmblem';
import { FreeFireWordmark } from './FreeFireWordmark';
import { DiamondChest } from './DiamondChest';
import { ArrowLeft, ChevronRight, Check, Sparkles, ShieldCheck } from 'lucide-react';

export interface AccountProvider {
  id: 'google' | 'vk' | 'facebook';
  name: string;
  shortLabel: string;
  badge?: string;
  color: string;
}

interface AccountTypeSelectionProps {
  selectedAmount?: string;
  onBack: () => void;
  onSelectProvider: (providerId: 'google' | 'vk' | 'facebook') => void;
}

export function AccountTypeSelection({
  selectedAmount = '9,999x',
  onBack,
  onSelectProvider,
}: AccountTypeSelectionProps) {
  const [selectedProvider, setSelectedProvider] = useState<'google' | 'vk' | 'facebook'>('google');

  const providers: AccountProvider[] = [
    {
      id: 'google',
      name: 'Google',
      shortLabel: 'Google Play',
      badge: 'TAVSIYA',
      color: '#4285F4',
    },
    {
      id: 'vk',
      name: 'VKontakte',
      shortLabel: 'VK ID',
      color: '#0077FF',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      shortLabel: 'Meta FB',
      badge: 'TEZKOR',
      color: '#1877F2',
    },
  ];

  // Floating background diamonds array: always present across the background
  const bgDiamonds = [
    { id: 1, top: '8%', left: '4%', size: 38, delay: 0, rotate: -15 },
    { id: 2, top: '15%', right: '6%', size: 44, delay: 0.2, rotate: 20 },
    { id: 3, top: '35%', left: '3%', size: 32, delay: 0.4, rotate: 10 },
    { id: 4, top: '42%', right: '4%', size: 36, delay: 0.3, rotate: -18 },
    { id: 5, bottom: '22%', left: '6%', size: 42, delay: 0.5, rotate: -25 },
    { id: 6, bottom: '20%', right: '7%', size: 46, delay: 0.1, rotate: 15 },
    { id: 7, top: '22%', left: '18%', size: 28, delay: 0.6, rotate: 8 },
    { id: 8, top: '20%', right: '18%', size: 28, delay: 0.7, rotate: -12 },
    { id: 9, bottom: '36%', left: '12%', size: 26, delay: 0.2, rotate: -8 },
    { id: 10, bottom: '34%', right: '14%', size: 30, delay: 0.45, rotate: 22 },
    { id: 11, top: '5%', left: '38%', size: 24, delay: 0.35, rotate: 14 },
    { id: 12, top: '6%', right: '36%', size: 24, delay: 0.55, rotate: -10 },
    { id: 13, bottom: '10%', left: '26%', size: 34, delay: 0.65, rotate: -16 },
    { id: 14, bottom: '11%', right: '28%', size: 32, delay: 0.75, rotate: 18 },
  ];

  const currentProviderObj = providers.find((p) => p.id === selectedProvider) || providers[0];

  return (
    <motion.div
      id="account-type-selection-page"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative w-full max-w-5xl h-full max-h-[96vh] flex flex-col items-center justify-between py-2 sm:py-3 px-2 sm:px-6 overflow-hidden select-none"
    >
      {/* BACKGROUND FLOATING & GLOWING FREE FIRE DIAMONDS (ORQA FONDA HAR DOIM OLMOSLAR) */}
      <div id="bg-diamonds-layer" className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Cyan/Amber Backlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(255, 185, 0, 0.18) 50%, transparent 75%)',
          }}
        />

        {/* Ambient Diamond Chest in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 scale-125 blur-[1px]">
          <DiamondChest size={320} />
        </div>

        {/* Scattered Background Floating Diamonds */}
        {bgDiamonds.map((d) => (
          <motion.div
            key={d.id}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.06, 1],
              rotate: [d.rotate, d.rotate + 6, d.rotate],
            }}
            transition={{
              duration: 3 + (d.id % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: d.delay,
            }}
            className="absolute drop-shadow-[0_0_18px_rgba(0,229,255,0.7)]"
            style={{
              top: d.top,
              bottom: d.bottom,
              left: d.left,
              right: d.right,
            }}
          >
            <FreeFireDiamond size={d.size} />
          </motion.div>
        ))}
      </div>

      {/* Top Header Bar */}
      <div id="account-top-bar" className="w-full flex items-center justify-between shrink-0 px-2 sm:px-4 z-10">
        <button
          id="account-back-button"
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono tracking-wider transition-colors cursor-pointer active:scale-95 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">KATALOGGA QAYTISH</span>
        </button>

        {/* Center Free Fire Logo */}
        <div className="flex items-center gap-2">
          <FreeFireEmblem className="w-9 h-9 sm:w-11 sm:h-11" />
          <FreeFireWordmark className="w-32 sm:w-44" />
        </div>

        {/* Diamond Allocation Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/70 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
          <FreeFireDiamond size={18} glow={false} />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 font-mono tracking-wider">
            {selectedAmount}
          </span>
        </div>
      </div>

      {/* Title Section: "OLMOSLAR TUSHISHI KERAK BO'LGAN AKKAUNT TURINI TANLANG!" */}
      <div id="account-title-section" className="text-center my-1 sm:my-2 px-2 shrink-0 z-10">
        <motion.h1
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          id="account-headline"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight font-['Teko',sans-serif] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_2px_14px_rgba(255,185,0,0.5)]"
        >
          OLMOSLAR TUSHISHI KERAK BO'LGAN AKKAUNT TURINI TANLANG!
        </motion.h1>

        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 font-mono mt-0.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>XAVFSIZ VA RASMIY SERVER SINXRONIZATSIYASI</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
        </div>
      </div>

      {/* 1 QATORDA UCHCHALASI HAM (GOOGLE | VK | FACEBOOK) - COMPACT & ELEGANT */}
      <div
        id="providers-stage"
        className="w-full flex-1 max-h-[50vh] flex flex-col justify-center items-center my-auto z-20 px-2"
      >
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 w-full max-w-2xl sm:max-w-3xl">
          {providers.map((p) => {
            const isSelected = selectedProvider === p.id;

            return (
              <motion.div
                key={p.id}
                id={`provider-card-${p.id}`}
                onClick={() => setSelectedProvider(p.id)}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group cursor-pointer flex flex-col items-center justify-between p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/80 via-zinc-900/95 to-black border-cyan-400 shadow-[0_0_28px_rgba(0,229,255,0.6),0_0_12px_rgba(255,185,0,0.3)] ring-2 ring-cyan-400/70 scale-102 z-10'
                    : 'bg-zinc-900/80 hover:bg-zinc-900 border-zinc-800 hover:border-zinc-700 shadow-[0_4px_18px_rgba(0,0,0,0.7)] opacity-90 hover:opacity-100'
                }`}
              >
                {/* Optional Badge */}
                {p.badge && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider font-mono bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-md">
                      {p.badge}
                    </span>
                  </div>
                )}

                {/* Selected Checkmark */}
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_10px_#00e5ff] z-20">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                {/* Compact Logo Container */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-center p-2 shadow-inner my-1 sm:my-2 group-hover:scale-105 transition-transform">
                  {p.id === 'google' && (
                    <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 drop-shadow-md">
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                    </svg>
                  )}

                  {p.id === 'vk' && (
                    <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13">
                      <rect width="48" height="48" rx="10" fill="#0077FF" />
                      <path
                        fill="#FFFFFF"
                        d="M26.2 33.2h2.2s.7-.1 1-.4c.3-.3.3-.9.3-.9s0-2.8 1.3-3.2c1.3-.4 2.9 2.7 4.7 3.9 1.3.9 2.4.7 2.4.7l4.7-.1s2.5-.2 1.3-2.1c-.1-.2-.7-1.5-3.6-4.2-3.1-2.9-2.7-2.4 1-7.4 2.3-3 3.2-4.9 2.9-5.7-.3-.7-2-.5-2-.5l-5.3.1s-.4 0-.7.2c-.2.2-.4.6-.4.6s-.8 2.2-2 4.1c-2.4 3.9-3.3 4.1-3.7 3.8-.9-.6-.7-2.4-.7-3.7 0-4-.6-5.7-2.6-6.1-.7-.1-1.2-.2-2.5-.2-2 0-3.7 0-4.7.5-.7.3-1.2.9-.9 1 .4.1 1.3.3 1.8 1 1 1.2 1 4 1 4s.6 4.9-1.4 5.5c-1.4.4-3.2-1.5-4.5-4.3-1.2-2.7-2.2-5.7-2.2-5.7s-.2-.4-.5-.6c-.4-.2-.9-.3-.9-.3l-5.1.1s-.8 0-1.1.4c-.2.3 0 1 0 1s3.9 9.3 8.4 14c4.1 4.3 8.8 4 8.8 4z"
                      />
                    </svg>
                  )}

                  {p.id === 'facebook' && (
                    <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13">
                      <circle cx="24" cy="24" r="24" fill="#1877F2" />
                      <path
                        fill="#FFFFFF"
                        d="M29.5 24.8h-4.3v15.7h-6.5V24.8h-3.1v-5.6h3.1v-3.6c0-4.3 2.6-6.7 6.5-6.7 1.9 0 3.8.3 3.8.3v4.2h-2.2c-2.1 0-2.8 1.3-2.8 2.7v3.1h4.7l-.8 5.6z"
                      />
                    </svg>
                  )}
                </div>

                {/* Name */}
                <div className="text-center w-full mt-1">
                  <h3
                    className={`text-lg sm:text-2xl md:text-3xl font-extrabold uppercase font-['Teko',sans-serif] tracking-wider leading-tight ${
                      isSelected ? 'text-cyan-300 drop-shadow-[0_2px_8px_rgba(0,229,255,0.7)]' : 'text-white'
                    }`}
                  >
                    {p.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-400 block">
                    {p.shortLabel}
                  </span>
                </div>

                {/* Card Button */}
                <div
                  className={`w-full mt-2 py-1 rounded-md sm:rounded-lg text-center text-[10px] sm:text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,229,255,0.6)] font-extrabold'
                      : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200'
                  }`}
                >
                  {isSelected ? 'TANLANDI ✓' : 'TANLASH'}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Section: Proceed with Selected Account */}
      <div id="account-bottom-bar" className="w-full flex flex-col items-center justify-center py-2 shrink-0 z-30">
        <motion.button
          id="confirm-account-button"
          type="button"
          onClick={() => onSelectProvider(selectedProvider)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative group cursor-pointer px-8 sm:px-14 py-2.5 sm:py-3 rounded-xl font-['Teko',sans-serif] text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_30px_rgba(255,185,0,0.6)] hover:shadow-[0_0_40px_rgba(255,185,0,0.85)] border border-amber-300 transition-all flex items-center gap-2.5"
        >
          <div className="flex items-center gap-2">
            <span>{currentProviderObj.name.toUpperCase()} BILAN DAVOM ETISH</span>
            <FreeFireDiamond size={24} glow={false} />
          </div>
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] text-black group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-wider mt-1.5">
          FREE FIRE ID VA MA'LUMOTLAR XAVFSIZLIGI KAFOLATLANGAN
        </p>
      </div>
    </motion.div>
  );
}
