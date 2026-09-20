/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { EntrancePresentation } from './components/EntrancePresentation';
import { DiamondCatalog, DiamondPackage } from './components/DiamondCatalog';
import { AccountTypeSelection } from './components/AccountTypeSelection';
import { PlayerIdForm } from './components/PlayerIdForm';
import { SuccessScreen } from './components/SuccessScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<
    'entrance' | 'catalog' | 'account_type' | 'player_id_form' | 'success'
  >('entrance');
  const [selectedPackageAmount, setSelectedPackageAmount] = useState<string>('9,999x');
  const [selectedProvider, setSelectedProvider] = useState<'Google' | 'VK' | 'Facebook'>('Google');
  const [submittedPlayerId, setSubmittedPlayerId] = useState<string>('');

  const handleProceedToAccount = (pkg: DiamondPackage) => {
    setSelectedPackageAmount(pkg.displayText);
    setCurrentPage('account_type');
  };

  const handleProviderSelect = (providerId: 'google' | 'vk' | 'facebook') => {
    const providerNameMap = {
      google: 'Google',
      vk: 'VK',
      facebook: 'Facebook',
    };
    setSelectedProvider(providerNameMap[providerId] as 'Google' | 'VK' | 'Facebook');
    setCurrentPage('player_id_form');
  };

  const handlePlayerIdSuccess = (id: string) => {
    setSubmittedPlayerId(id);
    setCurrentPage('success');
  };

  return (
    <div
      id="app-root"
      className="relative h-screen h-[100dvh] w-full max-h-screen bg-[#07080b] text-neutral-100 flex flex-col justify-center items-center overflow-hidden select-none font-['Rajdhani',sans-serif]"
    >
      {/* 2-second Loading Screen with Free Fire Logo */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => setIsLoading(false)}
            durationMs={2000}
          />
        )}
      </AnimatePresence>

      {/* Dynamic Background Ambience & Lighting */}
      <div id="frame-bg-glow" className="pointer-events-none fixed inset-0 z-0">
        <div
          id="bg-radial-gradient-amber"
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full bg-gradient-to-b from-amber-600/15 via-orange-600/10 to-transparent blur-3xl"
        />
        <div
          id="bg-radial-gradient-cyan"
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-gradient-to-t from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl"
        />
        <div
          id="bg-grid-overlay"
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_80%,transparent_100%)]"
        />
      </div>

      {/* Main Fullscreen Presentation Area */}
      <main
        id="fullscreen-main"
        className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden"
      >
        {!isLoading && (
          <AnimatePresence mode="wait">
            {currentPage === 'entrance' && (
              <EntrancePresentation
                key="entrance"
                onNext={() => setCurrentPage('catalog')}
              />
            )}

            {currentPage === 'catalog' && (
              <DiamondCatalog
                key="catalog"
                onBack={() => setCurrentPage('entrance')}
                onProceed={handleProceedToAccount}
                onSelectPackage={(pkg) => setSelectedPackageAmount(pkg.displayText)}
              />
            )}

            {currentPage === 'account_type' && (
              <AccountTypeSelection
                key="account_type"
                selectedAmount={selectedPackageAmount}
                onBack={() => setCurrentPage('catalog')}
                onSelectProvider={handleProviderSelect}
              />
            )}

            {currentPage === 'player_id_form' && (
              <PlayerIdForm
                key="player_id_form"
                selectedAmount={selectedPackageAmount}
                providerName={selectedProvider}
                onBack={() => setCurrentPage('account_type')}
                onSuccess={handlePlayerIdSuccess}
              />
            )}

            {currentPage === 'success' && (
              <SuccessScreen
                key="success"
                selectedAmount={selectedPackageAmount}
                playerId={submittedPlayerId}
                onRestart={() => setCurrentPage('entrance')}
              />
            )}
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
