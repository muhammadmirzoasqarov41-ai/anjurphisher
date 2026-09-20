/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FreeFireDiamond } from './FreeFireDiamond';
import { FreeFireEmblem } from './FreeFireEmblem';
import { DiamondChest } from './DiamondChest';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface SuccessScreenProps {
  selectedAmount: string;
  playerId: string;
  onRestart: () => void;
}

export function SuccessScreen({ selectedAmount, playerId, onRestart }: SuccessScreenProps) {
  return (
    <motion.div
      id="success-screen-page"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full max-w-4xl h-full max-h-[96vh] flex flex-col items-center justify-between py-3 px-4 overflow-hidden select-none"
    >
      {/* Radiant Background Aura */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 240, 255, 0.45) 0%, rgba(255, 185, 0, 0.3) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* Top Header */}
      <div className="flex items-center gap-2 z-10 shrink-0">
        <FreeFireEmblem className="w-10 h-10" />
      </div>

      {/* Central Celebration Area */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4 max-w-xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.15, 1] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative my-2"
        >
          <div className="absolute -inset-4 rounded-full bg-cyan-400/25 blur-xl animate-pulse" />
          <DiamondChest size={170} />
        </motion.div>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 text-xs font-mono tracking-wider mb-2"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>MUVAFFAQIYATLI YUBORILDI</span>
        </motion.div>

        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase font-['Teko',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_2px_15px_rgba(255,185,0,0.6)]">
          TABRIKLAYMIZ!
        </h1>

        <p className="text-base sm:text-lg text-white font-mono font-bold mt-1 flex items-center justify-center gap-2">
          <span>{selectedAmount}</span>
          <FreeFireDiamond size={22} />
          <span>FREE FIRE AKKAUNTINGIZGA YUBORILDI!</span>
        </p>

        <div className="mt-3 px-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Qabul qiluvchi Free Fire ID: <strong className="text-cyan-300">{playerId}</strong></span>
        </div>
      </div>

      {/* Restart Button */}
      <div className="z-10 shrink-0 pb-2">
        <button
          type="button"
          onClick={onRestart}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white font-mono text-sm tracking-wider uppercase transition-all cursor-pointer active:scale-95 shadow-lg"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <span>BOSH SAHIFAGA QAYTISH</span>
        </button>
      </div>
    </motion.div>
  );
}
