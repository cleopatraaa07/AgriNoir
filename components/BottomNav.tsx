import React from 'react';
import { ScreenName } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface BottomNavProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const { t } = useLanguage();

  const getIconClass = (screen: ScreenName) => {
    return currentScreen === screen 
      ? "text-primary transition-colors" 
      : "text-gray-400 hover:text-white transition-colors";
  };

  const getTextClass = (screen: ScreenName) => {
    return currentScreen === screen 
      ? "text-[10px] font-bold text-primary" 
      : "text-[10px] font-medium text-gray-400";
  };

  // Do not show on auth/landing/weather screens
  const showNav = [
    ScreenName.HOME,
    ScreenName.MY_FARM,
    ScreenName.MARKETPLACE,
    ScreenName.EDUCATION,
    ScreenName.CHAT_BOT,
    ScreenName.ACCOUNT
  ].includes(currentScreen);

  if (!showNav) return null;

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/5 pb-5 pt-3 px-6 z-40 left-1/2 -translate-x-1/2">
      <div className="flex justify-between items-end">
        <button 
          onClick={() => onNavigate(ScreenName.HOME)}
          className="flex flex-col items-center gap-1 group w-12"
        >
          <span className={`material-symbols-outlined text-[26px] ${getIconClass(ScreenName.HOME)}`}>home</span>
          <span className={getTextClass(ScreenName.HOME)}>{t.nav.home}</span>
        </button>

        <button 
          onClick={() => onNavigate(ScreenName.MY_FARM)}
          className="flex flex-col items-center gap-1 group w-12"
        >
          <span className={`material-symbols-outlined text-[26px] ${getIconClass(ScreenName.MY_FARM)}`}>map</span>
          <span className={getTextClass(ScreenName.MY_FARM)}>{t.nav.land}</span>
        </button>

        {/* Center Button - Marketplace */}
        <div className="relative -top-5">
          <button 
            onClick={() => onNavigate(ScreenName.MARKETPLACE)}
            className={`h-14 w-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(43,238,121,0.4)] transition-transform hover:scale-105 ${currentScreen === ScreenName.MARKETPLACE ? 'bg-primary text-background-dark' : 'bg-surface-dark border border-white/10 text-white'}`}
          >
            <span className="material-symbols-outlined text-[28px]">storefront</span>
          </button>
        </div>

        {/* Restored Education (Library/Video) */}
        <button 
          onClick={() => onNavigate(ScreenName.EDUCATION)}
          className="flex flex-col items-center gap-1 group w-12"
        >
          <span className={`material-symbols-outlined text-[26px] ${getIconClass(ScreenName.EDUCATION)}`}>menu_book</span>
          <span className={getTextClass(ScreenName.EDUCATION)}>{t.nav.education}</span>
        </button>

        <button 
          onClick={() => onNavigate(ScreenName.ACCOUNT)}
          className="flex flex-col items-center gap-1 group w-12"
        >
          <span className={`material-symbols-outlined text-[26px] ${getIconClass(ScreenName.ACCOUNT)}`}>person</span>
          <span className={getTextClass(ScreenName.ACCOUNT)}>{t.nav.account}</span>
        </button>
      </div>
    </div>
  );
};