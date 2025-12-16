import React, { useState } from 'react';
import { ScreenName } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AccountProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Account: React.FC<AccountProps> = ({ onNavigate }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const { t, language, setLanguage } = useLanguage();

  // Kalkulasi tanggal kadaluarsa (1 bulan dari sekarang)
  const today = new Date();
  const expiryDate = new Date(today);
  expiryDate.setMonth(today.getMonth() + 1);
  const formattedExpiryDate = expiryDate.toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  const handleFeatureClick = (featureName: string) => {
    alert(`Fitur "${featureName}" akan segera tersedia.`);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <div className="bg-background-dark font-display text-white overflow-x-hidden antialiased min-h-screen pb-24">
      <div className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center p-4 justify-between">
          <button onClick={() => onNavigate(ScreenName.HOME)} className="p-2 rounded-full hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-center">{t.account.title}</h2>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors opacity-0 pointer-events-none"><span className="material-symbols-outlined">settings</span></button>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col items-center p-6 gap-5">
          <div className="relative group">
            <div className="h-28 w-28 rounded-full bg-cover bg-center border-4 border-surface-dark shadow-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDloNi-k2E22Gi3gN3ztsAR8EYlOkaP-cmMmb2wAClPjiNqdiWLlvG4iwEz1lG6e5Q1QA9f2BX3hutBonHjrKccBkwzo8sDAOR_-qgecsyJAXwUTNVeO121PhHSe_QHo-bfueBQ8DOKABPTVpGeswO47w9MYAQgoggcTDbJ8gCjEbo6agTILR0J906WNVEXEW4_0x2rsqFppZhaTcEvn9GHRv9wdAQTXHu16g9xWH3fwW83X3ubCF9kb62_XrDXPrritX48MLxwDXM")'}}></div>
            <button onClick={() => onNavigate(ScreenName.EDIT_PROFILE)} className="absolute bottom-0 right-0 h-9 w-9 bg-primary text-background-dark rounded-full flex items-center justify-center border-4 border-background-dark shadow-sm hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold leading-tight tracking-tight">Budi Santoso</h1>
            <p className="text-slate-400 text-sm font-medium mt-1">Petani Padi • Karawang, Jawa Barat</p>
          </div>
          <button onClick={() => onNavigate(ScreenName.FARMER_CARD)} className="w-full max-w-[200px] h-10 px-4 bg-surface-dark border border-white/10 rounded-full text-primary text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-[18px]">badge</span> Kartu Petani
          </button>
        </div>

        <div className="px-4 mt-2">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider px-2 mb-3">{t.account.subscription}</h3>
          <div onClick={() => onNavigate(ScreenName.SUBSCRIPTION)} className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-dark to-[#0f1f16] border border-primary/20 p-4 shadow-lg group cursor-pointer active:scale-[0.98] transition-all">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                  <p className="text-white text-base font-bold">AgriNoir Premium</p>
                </div>
                <p className="text-slate-400 text-xs font-normal">{t.account.activeUntil} {formattedExpiryDate}</p>
              </div>
              <span className="material-symbols-outlined text-primary/50 group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>
        </div>

        <div className="px-4 mt-8">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider px-2 mb-3">{t.account.appSettings}</h3>
          <div className="bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-white/5">
            <div 
              className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer select-none"
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500"><span className="material-symbols-outlined text-[20px]">notifications</span></div>
                <span className="text-sm font-medium">{t.account.notifications}</span>
              </div>
              <div className="relative inline-flex items-center pointer-events-none">
                <input checked={notificationsEnabled} readOnly className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </div>
            <div 
              className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer active:bg-white/10"
              onClick={toggleLanguage}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><span className="material-symbols-outlined text-[20px]">language</span></div>
                <span className="text-sm font-medium">{t.account.language}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">{language === 'id' ? 'Indonesia' : 'English'}</span>
                <span className="material-symbols-outlined text-slate-500 text-[20px]">sync_alt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mt-8">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider px-2 mb-3">{t.account.help}</h3>
          <div className="bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-white/5">
             {[
               {icon: 'help', color: 'purple', label: 'Pusat Bantuan'},
               {icon: 'support_agent', color: 'teal', label: 'Hubungi Kami'},
               {icon: 'info', color: 'gray', label: 'Tentang Aplikasi'}
             ].map((item, idx) => (
               <div 
                 key={idx} 
                 className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer active:bg-white/10"
                 onClick={() => handleFeatureClick(item.label)}
               >
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/10 flex items-center justify-center text-${item.color === 'gray' ? 'gray-400' : item.color + '-500'}`}><span className="material-symbols-outlined text-[20px]">{item.icon}</span></div>
                     <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-500 text-[20px]">chevron_right</span>
               </div>
             ))}
          </div>
        </div>

        <div className="px-6 mt-8 mb-6 flex flex-col gap-6">
          <button onClick={() => onNavigate(ScreenName.LANDING)} className="w-full py-3.5 rounded-xl border border-red-500/30 text-red-500 font-bold text-sm bg-red-500/5 hover:bg-red-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">logout</span> {t.account.logout}
          </button>
          <div className="text-center">
            <p className="text-xs text-slate-600 font-medium">AgriNoir v1.0.2 (Build 204)</p>
            <p className="text-[10px] text-slate-700 mt-1">© 2024 AgriNoir Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};