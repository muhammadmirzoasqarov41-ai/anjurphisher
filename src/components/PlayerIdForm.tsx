/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FreeFireDiamond } from './FreeFireDiamond';
import { FreeFireEmblem } from './FreeFireEmblem';
import { FreeFireWordmark } from './FreeFireWordmark';
import { ArrowLeft, CheckCircle2, Sparkles, Hash, Send, AtSign, Layers, Mail } from 'lucide-react';

interface PlayerIdFormProps {
  selectedAmount: string;
  providerName: string;
  onBack: () => void;
  onSuccess: (playerId: string) => void;
}

export function PlayerIdForm({
  selectedAmount,
  providerName,
  onBack,
  onSuccess,
}: PlayerIdFormProps) {
  const [playerId, setPlayerId] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [exampleOne, setExampleOne] = useState('');
  const [exampleTwo, setExampleTwo] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerId.trim()) {
      setError("Iltimos, 1-qatorga Free Fire ID raqamingizni kiriting!");
      return;
    }
    if (!telegramUsername.trim()) {
      setError("Iltimos, 2-qatorga Telegram usernameni kiriting!");
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(playerId.trim());
    }, 1200);
  };

  return (
    <motion.div
      id="player-id-form-page"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative w-full max-w-4xl h-full max-h-[96vh] flex flex-col items-center justify-between py-2 sm:py-3 px-3 sm:px-6 overflow-hidden select-none"
    >
      {/* Background Ambience & Floating Diamonds */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.35) 0%, rgba(255, 185, 0, 0.2) 60%, transparent 75%)',
          }}
        />
        <div className="absolute top-8 left-8 drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
          <FreeFireDiamond size={34} />
        </div>
        <div className="absolute top-12 right-10 drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
          <FreeFireDiamond size={38} />
        </div>
        <div className="absolute bottom-12 left-12 drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
          <FreeFireDiamond size={36} />
        </div>
        <div className="absolute bottom-10 right-14 drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
          <FreeFireDiamond size={42} />
        </div>
      </div>

      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between shrink-0 px-2 sm:px-4 z-10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono tracking-wider transition-colors cursor-pointer active:scale-95 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">ORQAGA</span>
        </button>

        <div className="flex items-center gap-2">
          <FreeFireEmblem className="w-9 h-9 sm:w-10 sm:h-10" />
          <FreeFireWordmark className="w-32 sm:w-40" />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/70 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
          <FreeFireDiamond size={18} glow={false} />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 font-mono tracking-wider">
            {selectedAmount}
          </span>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="relative z-10 w-full max-w-2xl my-auto px-4 sm:px-6 py-4 sm:py-5 rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-[0_0_35px_rgba(0,0,0,0.85),0_0_20px_rgba(0,229,255,0.15)] flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase font-['Teko',sans-serif] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(255,185,0,0.4)]">
            AKKAUNT MA'LUMOTLARINI KIRITING
          </h2>
          <p className="text-xs font-mono text-zinc-400 flex items-center justify-center gap-1.5">
            <span>Tanlangan provayder:</span>
            <span className="text-cyan-400 font-bold uppercase">{providerName}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          {/* 4 INPUTS IN A 2x2 GRID (SM+) FOR CLEANEST DESKTOP & MOBILE FIT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {/* Input 1: Free Fire ID */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-amber-400" />
                <span>1. Free Fire ID</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={playerId}
                  onChange={(e) => {
                    setPlayerId(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Masalan: 284917203"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 text-white font-mono text-sm tracking-wider placeholder:text-zinc-600 transition-all shadow-inner"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <FreeFireDiamond size={18} glow={false} />
                </div>
              </div>
            </div>

            {/* Input 2: Telegram Username */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <AtSign className="w-3.5 h-3.5 text-cyan-400" />
                <span>2. Telegram Username</span>
              </label>
              <input
                type="text"
                value={telegramUsername}
                onChange={(e) => {
                  setTelegramUsername(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Masalan: @username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 text-white font-mono text-sm tracking-wider placeholder:text-zinc-600 transition-all shadow-inner"
              />
            </div>

            {/* Input 3: Gmail */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>3. Gmail</span>
              </label>
              <input
                type="email"
                value={exampleOne}
                onChange={(e) => setExampleOne(e.target.value)}
                placeholder="Masalan: user@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 text-white font-mono text-sm tracking-wider placeholder:text-zinc-600 transition-all shadow-inner"
              />
            </div>

            {/* Input 4: Example */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>4. parol</span>
              </label>
              <input
                type="text"
                value={exampleTwo}
                onChange={(e) => setExampleTwo(e.target.value)}
                placeholder="Example ma'lumot"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 text-white font-mono text-sm tracking-wider placeholder:text-zinc-600 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="text-xs font-mono font-bold text-red-400 bg-red-950/60 border border-red-800/80 rounded-lg p-2 text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full mt-1 py-3 rounded-xl font-['Teko',sans-serif] text-2xl font-extrabold uppercase tracking-widest text-black transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
              isSubmitting
                ? 'bg-zinc-600 text-zinc-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(255,185,0,0.55)] hover:shadow-[0_0_35px_rgba(255,185,0,0.75)] border border-amber-300'
            }`}
          >
            {isSubmitting ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>SERVERGA YUBORILMOQDA...</span>
              </>
            ) : (
              <>
                <span>{selectedAmount} OLMOSNI YUBORISH</span>
                <Send className="w-5 h-5 stroke-[2.5]" />
              </>
            )}
          </motion.button>
        </form>

        <p className="text-[11px] font-mono text-zinc-500 mt-2.5 text-center">
          Ma'lumotlar to'g'riligini tekshiring va yuborish tugmasini bosing.
        </p>
      </div>

      {/* Bottom Info bar */}
      <div className="w-full flex items-center justify-center py-1 shrink-0 z-10 text-center">
        <p className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>GARANTIALI VA XAVFSIZ TIZIM</span>
        </p>
      </div>
    </motion.div>
  );
}
