import React from 'react';
import { ScreenName } from '../types';

interface FarmerCardProps {
  onNavigate: (screen: ScreenName) => void;
}

export const FarmerCard: React.FC<FarmerCardProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display flex flex-col">
      <div className="sticky top-0 z-50 flex items-center p-4 justify-between">
        <button onClick={() => onNavigate(ScreenName.ACCOUNT)} className="p-2 rounded-full hover:bg-white/10 transition-colors"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold">Kartu Tani Digital</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
        <div className="w-full max-w-sm aspect-[1.58] rounded-2xl relative overflow-hidden shadow-2xl shadow-primary/10 transform transition-transform hover:scale-105 duration-500">
          {/* Card Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c2e24] via-[#0f1f16] to-black border border-white/10"></div>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #2bee79 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          
          {/* Card Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                 <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                    <span className="material-symbols-outlined text-lg">agriculture</span>
                 </div>
                 <span className="font-bold tracking-wide">AgriNoir</span>
              </div>
              <span className="text-primary font-mono text-sm tracking-widest">ID: 8392-1029</span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Nama Petani</p>
                <h3 className="text-xl font-bold tracking-wide">BUDI SANTOSO</h3>
                <p className="text-xs text-gray-400 mt-1">Jawa Barat, Indonesia</p>
              </div>
              <div className="bg-white p-1 rounded">
                 {/* Mock QR */}
                 <div className="size-12 bg-black opacity-80" style={{backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)', backgroundSize: '25% 25%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2 max-w-xs">
          <h3 className="font-bold text-lg">Scan untuk Verifikasi</h3>
          <p className="text-gray-400 text-sm">Tunjukkan kode QR ini kepada mitra AgriNoir untuk mendapatkan diskon pupuk dan akses prioritas.</p>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-surface-dark border border-white/10 rounded-full hover:bg-white/5 transition-colors text-sm font-medium">
          <span className="material-symbols-outlined">download</span>
          Simpan ke Galeri
        </button>
      </div>
    </div>
  );
};
