import React from 'react';
import { ScreenName } from '../types';

interface PlantingGuideProps {
  onNavigate: (screen: ScreenName) => void;
}

export const PlantingGuide: React.FC<PlantingGuideProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.WEATHER)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Panduan Tanam</h2>
        <div className="w-10"></div>
      </div>

      <div className="p-4">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6 flex gap-4 items-start">
           <span className="material-symbols-outlined text-primary text-3xl">psychiatry</span>
           <div>
             <h3 className="font-bold text-primary text-lg">Kondisi Optimal</h3>
             <p className="text-sm text-gray-300 mt-1">Berdasarkan cuaca saat ini (28°C, Berawan), tanah memiliki kelembaban yang cukup untuk memulai persemaian.</p>
           </div>
        </div>

        <h3 className="font-bold text-xl mb-4">Langkah-langkah Tanam Padi</h3>
        
        <div className="relative border-l-2 border-white/10 ml-3 space-y-8 py-2">
           {[
             { title: 'Persiapan Lahan', desc: 'Bajak tanah hingga gembur. Pastikan saluran irigasi lancar.', status: 'done' },
             { title: 'Pemilihan Benih', desc: 'Rendam benih dalam air garam untuk memisahkan benih hampa.', status: 'current' },
             { title: 'Persemaian', desc: 'Tebar benih di lahan persemaian yang terlindung dari burung.', status: 'next' },
             { title: 'Penanaman (Tandur)', desc: 'Pindahkan bibit usia 21 hari ke lahan utama dengan jarak 25x25cm.', status: 'next' }
           ].map((step, idx) => (
             <div key={idx} className="relative pl-8">
               <div className={`absolute -left-[9px] top-0 size-4 rounded-full border-2 border-background-dark ${step.status === 'done' ? 'bg-primary' : step.status === 'current' ? 'bg-white animate-pulse' : 'bg-gray-700'}`}></div>
               <h4 className={`font-bold text-lg ${step.status === 'current' ? 'text-white' : 'text-gray-400'}`}>{step.title}</h4>
               <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

        <div className="mt-8 bg-surface-dark p-4 rounded-xl">
           <h4 className="font-bold mb-2">Tips Tambahan</h4>
           <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
             <li>Gunakan pupuk kandang sebagai dasar.</li>
             <li>Jaga ketinggian air sekitar 2-3 cm saat awal tanam.</li>
             <li>Lakukan penyiangan gulma secara rutin setiap minggu.</li>
           </ul>
        </div>
      </div>
    </div>
  );
};
