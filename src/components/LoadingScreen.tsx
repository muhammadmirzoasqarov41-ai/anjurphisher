/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FreeFireEmblem } from './FreeFireEmblem';
import { FreeFireWordmark } from './FreeFireWordmark';

interface LoadingScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

export function LoadingScreen({ onComplete, durationMs = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 120);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080b] text-white select-none overflow-hidden"
    >
      {/* Dynamic Background Fiery Ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-600/20 via-orange-600/15 to-transparent blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Center Branding Showcase */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md w-full px-6">
        {/* Pulsating Emblem */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.95, 1.05, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 flex justify-center"
        >
          <FreeFireEmblem className="w-32 h-32 sm:w-40 sm:h-40" />
        </motion.div>

        {/* Free Fire Official Wordmark */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full flex justify-center mb-6"
        >
          <FreeFireWordmark className="w-64 sm:w-80" />
        </motion.div>

        {/* Tactical Loading Bar Container */}
        <div className="w-full max-w-xs flex flex-col items-center gap-2 mt-4">
          <div className="w-full h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden p-[1px] relative shadow-[0_0_15px_rgba(255,140,0,0.2)]">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="w-full flex justify-between items-center text-[11px] font-mono tracking-widest text-zinc-400 px-1">
            <span className="flex items-center gap-1.5 text-amber-500 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              LOADING...
            </span>
            <span className="text-zinc-300 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Subtitle / Footer hint */}
      <div className="absolute bottom-8 text-[11px] uppercase tracking-[0.3em] font-mono text-zinc-600">
        GARENA // FREE FIRE ONLINE
      </div>
    </motion.div>
  );
}
