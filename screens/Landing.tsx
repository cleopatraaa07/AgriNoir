import React from 'react';
import { ScreenName } from '../types';

interface LandingProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden border-x border-border-dark/30 shadow-2xl bg-background-dark text-white font-display">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-background-dark/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <div className="text-primary flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-dark/50">
          <span className="material-symbols-outlined text-3xl">agriculture</span>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-tight flex-1 pl-3">
          Agri<span className="text-primary">Noir</span>
        </h2>
        <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div 
            className="relative flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-end p-6 pb-10 overflow-hidden group"
            style={{ backgroundImage: 'linear-gradient(to top, rgba(16, 34, 23, 1) 0%, rgba(16, 34, 23, 0.8) 40%, rgba(16, 34, 23, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY_l2wsdNd_GwTeqOVHE-ruFcmt03yagSlNowpwiAMSG1uZONsHVDw7C1QLPRW5YDsNoE_Hi3xFwKEVQWMb6rYh_dy68sYUBXkT72Cp2VjUZ8_q44jpK8SppwR4zTF7kRzYpwjZRJfXMthxoPUhp77xpxyHP1VqOIeQ5DbndLJbwSl2fj5M1MouWuaArpzQh6mdqYhG7DOpJwM7Piy-Kd4_r1dB6WFG40nz23wfVrsjfBkpYgJ915pX9d5FqjwwCS4djgI2MkeeJo")' }}
          >
             {/* Noise Overlay */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             
             <div className="relative z-10 flex flex-col gap-3 text-center items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 backdrop-blur-sm mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Teknologi Presisi v2.0</span>
                </div>
                <h1 className="text-white text-4xl font-black leading-[1.1] tracking-tight">
                  Masa Depan <br/> <span className="text-primary">Pertanian</span>
                </h1>
                <h2 className="text-text-secondary text-base font-medium leading-relaxed max-w-[300px]">
                  Optimalkan hasil panen Anda dengan data real-time dan akses pasar yang adil.
                </h2>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex overflow-x-auto gap-3 px-4 py-2 pb-6 no-scrollbar snap-x">
        {[
          { icon: 'groups', val: '10,000+', label: 'Petani Aktif' },
          { icon: 'storefront', val: '50+', label: 'Mitra Pasar' },
          { icon: 'payments', val: 'Rp 1M+', label: 'Transaksi' }
        ].map((stat, idx) => (
          <div key={idx} className="flex min-w-[140px] flex-1 snap-center flex-col gap-1 rounded-lg border border-surface-border bg-surface-dark p-4 items-center text-center shadow-lg shadow-black/20">
            <span className="material-symbols-outlined text-primary mb-1 text-2xl">{stat.icon}</span>
            <p className="text-white tracking-tight text-xl font-bold">{stat.val}</p>
            <p className="text-text-secondary text-xs font-medium uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Feature Section */}
      <div className="flex flex-col gap-8 px-4 py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-2xl font-bold leading-tight">Keunggulan Kami</h3>
          <p className="text-text-secondary text-sm font-normal">Teknologi canggih untuk petani modern Indonesia.</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: 'analytics', title: 'Keputusan Berbasis Data', desc: 'Pantau cuaca, kelembapan tanah, dan prediksi hama secara real-time lewat satelit.' },
            { icon: 'handshake', title: 'Akses Pasar Adil', desc: 'Potong rantai pasok yang panjang. Jual hasil panen langsung ke pembeli dengan harga transparan.' },
            { icon: 'school', title: 'Edukasi Tani', desc: 'Akses ratusan modul video dan artikel tentang metode pertanian modern.' }
          ].map((item, idx) => (
            <div key={idx} className="group flex gap-5 rounded-lg border border-surface-border bg-surface-dark p-5 items-start transition-all duration-300 hover:border-primary/50 hover:bg-surface-dark/80">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="sticky bottom-0 z-20 mt-auto bg-gradient-to-t from-background-dark via-background-dark to-transparent px-4 pb-8 pt-10">
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => onNavigate(ScreenName.SIGNUP)}
            className="relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary/90 transition-all active:scale-[0.98] text-background-dark text-lg font-bold leading-normal tracking-wide shadow-[0_0_20px_rgba(43,238,121,0.3)]"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></span>
            <span className="mr-2">Daftar Akun</span>
            <span className="material-symbols-outlined text-xl font-bold">arrow_forward</span>
          </button>
          <button 
            onClick={() => onNavigate(ScreenName.LOGIN)}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-transparent border border-primary/30 text-primary hover:bg-primary/5 transition-all active:scale-[0.98] text-base font-bold leading-normal tracking-wide"
          >
            <span>Masuk</span>
          </button>
          <p className="text-center text-xs text-text-secondary mt-2">
            Dengan mendaftar, Anda menyetujui <a className="text-primary underline decoration-primary/30" href="#">Syarat & Ketentuan</a> kami.
          </p>
        </div>
      </div>
    </div>
  );
};
