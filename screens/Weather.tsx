import React from 'react';
import { ScreenName } from '../types';

interface WeatherProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Weather: React.FC<WeatherProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark font-display text-white antialiased overflow-x-hidden min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold leading-tight tracking-tight text-white">Lembang, West Java</h2>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
            <span className="text-xs font-medium text-text-secondary">Precision Farm A2</span>
          </div>
        </div>
        <button onClick={() => alert('Tidak ada peringatan cuaca baru.')} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-white">notifications</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Hero */}
        <div className="flex flex-col items-center px-4 pt-2">
          <div className="text-xs font-medium bg-surface-dark/50 text-text-secondary px-3 py-1 rounded-full mb-4 border border-white/5">
            Last updated: 10:45 AM
          </div>
          <div className="flex flex-col items-center justify-center relative w-full py-2">
             <div className="flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-8xl text-primary drop-shadow-[0_0_15px_rgba(43,238,121,0.3)]">partly_cloudy_day</span>
                <div className="flex flex-col">
                  <h1 className="text-7xl font-bold tracking-tighter text-white">28°</h1>
                  <span className="text-xl font-medium text-text-secondary">Partly Cloudy</span>
                </div>
             </div>
             <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-lg text-text-secondary">thermostat</span><span className="text-sm font-medium text-white">Feels 30°</span></div>
                <div className="flex items-center gap-1"><span className="material-symbols-outlined text-lg text-text-secondary">water_drop</span><span className="text-sm font-medium text-white">Precip 10%</span></div>
             </div>
          </div>
        </div>

        {/* Insight Card */}
        <div className="px-4">
          <div className="group relative overflow-hidden rounded-xl bg-surface-dark border border-white/5 shadow-lg cursor-pointer hover:border-primary/50 transition-colors" onClick={() => onNavigate(ScreenName.PLANTING_GUIDE)}>
             <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
             <div className="flex flex-col sm:flex-row p-5 gap-5">
                <div className="flex-1 flex flex-col gap-2">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-xl">psychiatry</span>
                      <h3 className="text-white text-base font-bold leading-tight">Optimal Planting Window</h3>
                   </div>
                   <p className="text-text-secondary text-sm leading-relaxed">Soil moisture is ideal. Moderate rain expected in 48h. Recommended to plant seedlings now to establish roots.</p>
                   <div className="mt-2 pt-2">
                      <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 text-sm font-bold transition-all">
                        <span>View Planting Guide</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                   </div>
                </div>
                <div className="w-full sm:w-24 h-24 sm:h-auto shrink-0 rounded-lg bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNwOvUdbzXBXzqv_yD6qLtHrpPj4iy_N0oBD4QX9Wedrhft6dFsEbcBFQe8DYEHE10QXdTzRsCLMh4INxT_apcvIQw-qUBujzI6yOxCdXtFUZwoFtaV1jzooK0X9Ss1Qoqa62edOPoFT82M_DGyGWRPz72dHljJKnY2nFc-5FWdE_CcvAVp4cCsfR_Egu7WM8I1LwB9HDZDf_eMNBcwUSj7gpgdaIOLREaMDTJOzL9CA7czlKwgQL_QUlGMiGiP0zGmwiRXEnc2xY")'}}>
                   <div className="absolute inset-0 bg-black/20"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="px-4 grid grid-cols-2 gap-3">
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">humidity_percentage</span><span className="text-sm font-medium">Humidity</span></div>
              <div><p className="text-2xl font-bold text-white">85%</p><p className="text-xs text-text-secondary mt-1">Dew Point 24°</p></div>
           </div>
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">air</span><span className="text-sm font-medium">Wind</span></div>
              <div><p className="text-2xl font-bold text-white">12 <span className="text-sm font-normal text-text-secondary">km/h</span></p><p className="text-xs text-text-secondary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs rotate-45">navigation</span> NW Direction</p></div>
           </div>
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">grass</span><span className="text-sm font-medium">Soil Temp</span></div>
              <div><p className="text-2xl font-bold text-white">24°C</p><div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden"><div className="bg-primary h-full rounded-full" style={{width: '70%'}}></div></div></div>
           </div>
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">wb_sunny</span><span className="text-sm font-medium">UV Index</span></div>
              <div><p className="text-2xl font-bold text-white">7 <span className="text-sm font-normal text-text-secondary">High</span></p><p className="text-xs text-text-secondary mt-1">Protection req.</p></div>
           </div>
        </div>

        {/* Hourly */}
        <div className="flex flex-col gap-3">
           <div className="px-4 flex justify-between items-end"><h3 className="text-white text-lg font-bold">Hourly Forecast</h3><button onClick={() => alert('Membuka ramalan per jam lengkap')} className="text-primary text-sm font-medium">See All</button></div>
           <div className="overflow-x-auto pb-4 px-4 no-scrollbar">
              <div className="flex gap-3 w-max">
                 <div className="flex flex-col items-center justify-between min-w-[72px] p-3 rounded-xl bg-primary text-black">
                    <span className="text-sm font-bold">Now</span><span className="material-symbols-outlined text-2xl my-2">partly_cloudy_day</span><span className="text-lg font-bold">28°</span>
                 </div>
                 {['1 PM', '2 PM', '3 PM', '4 PM', '5 PM'].map((t, i) => (
                    <div key={i} className="flex flex-col items-center justify-between min-w-[72px] p-3 rounded-xl bg-surface-dark border border-white/5">
                       <span className="text-sm text-text-secondary">{t}</span>
                       <span className="material-symbols-outlined text-2xl text-white my-2">{i===2 || i===3 ? 'rainy' : i===4 ? 'thunderstorm' : 'cloud'}</span>
                       <span className="text-lg font-bold text-white">{[29, 30, 27, 26, 25][i]}°</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Weekly */}
        <div className="px-4 pb-20">
           <h3 className="text-white text-lg font-bold mb-3">7-Day Forecast</h3>
           <div className="flex flex-col gap-1 bg-surface-dark rounded-xl p-2 border border-white/5">
              {[
                  {d: 'Today', w: 10, h: 29, l: 22, i: 'wb_sunny', c: 'yellow-400'},
                  {d: 'Tue', w: 60, h: 26, l: 21, i: 'rainy', c: 'gray-400', wC: 'blue-400'},
                  {d: 'Wed', w: 85, h: 24, l: 20, i: 'thunderstorm', c: 'gray-400', wC: 'blue-400'},
                  {d: 'Thu', w: 20, h: 28, l: 21, i: 'partly_cloudy_day', c: 'yellow-400'},
                  {d: 'Fri', w: 0, h: 30, l: 22, i: 'wb_sunny', c: 'yellow-400'}
              ].map((day, idx) => (
                 <div key={idx} className="flex items-center justify-between p-3 border-b border-white/5 last:border-0">
                    <span className="text-white font-medium w-16">{day.d}</span>
                    <div className="flex flex-1 items-center gap-3">
                       <span className={`material-symbols-outlined text-${day.wC || 'text-secondary'}`}>water_drop</span>
                       <span className={`text-xs text-${day.wC || 'text-secondary'} font-medium`}>{day.w}%</span>
                       <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden"><div className={`bg-${day.wC ? day.wC : 'primary'} h-full rounded-full`} style={{width: `${day.w}%`}}></div></div>
                    </div>
                    <div className="flex items-center justify-end w-24 gap-3">
                       <span className={`material-symbols-outlined text-${day.c}`}>{day.i}</span>
                       <div className="text-right"><span className="text-white font-bold">{day.h}°</span><span className="text-text-secondary text-sm ml-1">{day.l}°</span></div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};
