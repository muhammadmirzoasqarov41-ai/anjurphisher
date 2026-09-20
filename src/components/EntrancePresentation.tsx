/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FreeFireDiamond } from './FreeFireDiamond';
import { DiamondChest } from './DiamondChest';
import { FreeFireEmblem } from './FreeFireEmblem';
import { FreeFireWordmark } from './FreeFireWordmark';
import { ChevronRight } from 'lucide-react';

interface EntrancePresentationProps {
  onNext?: () => void;
}

export function EntrancePresentation({ onNext }: EntrancePresentationProps) {
  const [clicked, setClicked] = useState(false);

  // Scattered diamond positions surrounding the text
  const scatteredDiamonds = [
    { id: 1, x: 'left-2 sm:left-10', y: 'top-1 sm:top-4', size: 30, delay: 0.1, rotate: -15 },
    { id: 2, x: 'left-1/4', y: '-top-3 sm:-top-5', size: 40, delay: 0.25, rotate: 18 },
    { id: 3, x: 'right-1/4', y: '-top-3 sm:-top-5', size: 42, delay: 0.3, rotate: -20 },
    { id: 4, x: 'right-2 sm:right-10', y: 'top-1 sm:top-4', size: 32, delay: 0.15, rotate: 12 },
    { id: 5, x: '-left-2 sm:-left-6', y: 'top-1/2 -translate-y-1/2', size: 36, delay: 0.35, rotate: -22 },
    { id: 6, x: '-right-2 sm:-right-6', y: 'top-1/2 -translate-y-1/2', size: 38, delay: 0.4, rotate: 25 },
    { id: 7, x: 'left-8 sm:left-20', y: '-bottom-3 sm:-bottom-4', size: 28, delay: 0.45, rotate: 15 },
    { id: 8, x: 'right-8 sm:right-20', y: '-bottom-3 sm:-bottom-4', size: 28, delay: 0.5, rotate: -15 },
  ];

  const handleNextClick = () => {
    setClicked(true);
    if (onNext) {
      onNext();
    }
  };

  return (
    <motion.div
      id="fullscreen-presentation-stage"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative w-full max-w-5xl h-full max-h-[96vh] flex flex-col items-center justify-between py-2 sm:py-4 px-2 sm:px-6 overflow-hidden"
    >
      {/* Top Free Fire Branding (Emblem & Wordmark) */}
      <div id="top-branding" className="flex flex-col items-center justify-center shrink-0">
        <FreeFireEmblem className="w-16 h-16 sm:w-20 sm:h-20 mb-1" />
        <FreeFireWordmark className="w-40 sm:w-56 md:w-64" />
      </div>

      {/* Main Center Area: Text surrounded by Diamonds and Chests */}
      <div
        id="center-content-card"
        className="relative w-full flex-1 max-h-[64vh] flex flex-col items-center justify-center my-auto px-4 py-3 sm:py-6"
      >
        {/* Dynamic Cyan Aura */}
        <div
          className="absolute inset-0 pointer-events-none blur-3xl opacity-35"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.3) 0%, rgba(255, 140, 0, 0.15) 55%, transparent 75%)',
          }}
        />

        {/* Text Area surrounded by Scattered Diamonds */}
        <div id="presentation-text-wrapper" className="relative w-full max-w-3xl text-center z-20 my-auto py-2 sm:py-4">
          {/* Scattered Diamonds surrounding the text */}
          {scatteredDiamonds.map((d) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.08, 1],
                rotate: d.rotate,
                y: [0, -5, 0],
              }}
              transition={{
                delay: d.delay,
                duration: 2.4 + (d.id % 2) * 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className={`absolute ${d.x} ${d.y} pointer-events-none drop-shadow-[0_0_12px_rgba(0,229,255,0.75)]`}
            >
              <FreeFireDiamond size={d.size} />
            </motion.div>
          ))}

          {/* Requested Main Text: "Tekin Free Fire olmoslar kerakmi?" */}
          <h1
            id="main-question-text"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight font-['Teko',sans-serif] leading-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_3px_15px_rgba(255,185,0,0.45)]">
              TEKIN FREE FIRE
            </span>
            <span className="block mt-0.5 sm:mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 drop-shadow-[0_3px_20px_rgba(0,229,255,0.65)]">
              OLMOSLAR KERAKMI?
            </span>
          </h1>
        </div>

        {/* Chests with Diamonds ("sandiqlarda") */}
        <div
          id="chests-container"
          className="relative z-20 w-full flex items-center justify-center gap-4 sm:gap-10 md:gap-14 mt-1 sm:mt-3 shrink-0"
        >
          {/* Left Chest */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="shrink-0"
          >
            <DiamondChest size={115} className="sm:scale-110 md:scale-125" />
          </motion.div>

          {/* Central Main Chest */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="shrink-0 -mt-1 sm:-mt-3"
          >
            <DiamondChest size={145} className="sm:scale-115 md:scale-130" />
          </motion.div>

          {/* Right Chest */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="shrink-0"
          >
            <DiamondChest size={115} className="sm:scale-110 md:scale-125" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Area: ONLY THE "KEYINGI" BUTTON */}
      <div id="bottom-action-area" className="w-full flex justify-center items-center py-2 sm:py-4 shrink-0 z-30">
        <motion.button
          id="keyingi-button"
          type="button"
          onClick={handleNextClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative group cursor-pointer px-10 sm:px-16 py-3 sm:py-4 rounded-xl font-['Teko',sans-serif] text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_25px_rgba(255,185,0,0.55)] hover:shadow-[0_0_35px_rgba(255,185,0,0.8)] border border-amber-300 transition-all flex items-center gap-3"
        >
          {/* Subtle button sheen */}
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <span>KEYINGI</span>
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3] text-black group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}
