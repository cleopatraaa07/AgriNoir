import React from 'react';
import { ScreenName } from '../types';

interface SubscriptionProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Subscription: React.FC<SubscriptionProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="relative h-64 w-full bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background-dark z-10"></div>
        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Premium Background" />
        <button onClick={() => onNavigate(ScreenName.ACCOUNT)} className="absolute top-4 left-4 z-20 p-2 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="absolute bottom-6 left-6 z-20">
          <div className="flex items-center gap-2 mb-2">
             <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
             <h1 className="text-3xl font-bold italic">AgriNoir <span className="text-primary">Premium</span></h1>
          </div>
          <p className="text-gray-300 max-w-xs text-sm">Tingkatkan hasil panen dengan teknologi presisi dan akses pasar prioritas.</p>
        </div>
      </div>

      <div className="px-4 -mt-4 relative z-20">
        <div className="bg-surface-dark border border-primary/30 rounded-2xl p-6 shadow-xl shadow-primary/5">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-gray-400 text-sm">Langganan Bulanan</p>
              <div className="flex items-end gap-1 mt-1">
                 <span className="text-3xl font-bold text-white">Rp 50.000</span>
                 <span className="text-sm text-gray-500 mb-1">/ bulan</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">POPULER</span>
          </div>

          <div className="space-y-4 mb-8">
            {[
              'Analisis Cuaca & Tanah Real-time',
              'Deteksi Hama via Kamera AI',
              'Prioritas Penjualan di Marketplace',
              'Konsultasi Ahli Agronomi 24/7',
              'Laporan Keuangan Bulanan',
              'Akses Penuh Video Edukasi'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span className="text-sm text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <button onClick={() => alert('Melanjutkan ke pembayaran langganan...')} className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-green-400 text-background-dark font-bold text-lg shadow-lg hover:opacity-90 transition-opacity">
            Berlangganan Sekarang
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">Batalkan kapan saja. Syarat & Ketentuan berlaku.</p>
        </div>
      </div>
    </div>
  );
};
