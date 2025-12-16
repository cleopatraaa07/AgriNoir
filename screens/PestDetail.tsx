import React from 'react';
import { ScreenName } from '../types';

interface PestDetailProps {
  onNavigate: (screen: ScreenName) => void;
}

export const PestDetail: React.FC<PestDetailProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
          <span className="material-symbols-outlined">warning</span> Pest Detected
        </h2>
        <div className="w-10"></div>
      </div>

      <div className="p-4 flex flex-col gap-6">
        <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-red-900/50 shadow-lg shadow-red-900/20">
          <img src="https://images.unsplash.com/photo-1590422502446-51d07c394c8e?q=80&w=1000&auto=format&fit=crop" alt="Fall Armyworm" className="w-full h-56 object-cover opacity-80" style={{backgroundColor: '#3b0000'}}/>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
             <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">High Severity</div>
             <h1 className="text-2xl font-bold">Fall Armyworm</h1>
             <p className="text-gray-300 text-sm">Detected in Plot B (Chili)</p>
          </div>
        </div>

        <div className="bg-surface-dark p-5 rounded-xl border border-white/10">
          <h3 className="font-bold text-lg mb-2">Impact</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Larvae feed on leaves and young corn/chili plants, potentially causing 70% yield loss if untreated within 3 days.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Recommended Actions</h3>
          <div className="space-y-3">
             {[
               { title: 'Mechanical Control', desc: 'Handpick larvae and egg masses early morning.' },
               { title: 'Biological Control', desc: 'Release Trichogramma wasps (natural predators).' },
               { title: 'Chemical Control', desc: 'Spray Emamectin Benzoate 5% SG (Emergency).' }
             ].map((action, idx) => (
               <div key={idx} className="flex gap-4 p-4 rounded-xl bg-surface-dark border border-white/5">
                 <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">{idx + 1}</div>
                 <div>
                   <h4 className="font-bold text-white">{action.title}</h4>
                   <p className="text-sm text-gray-400 mt-1">{action.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-white/5 flex gap-3">
         <button className="flex-1 h-12 rounded-xl border border-primary text-primary font-bold hover:bg-primary/10 transition-colors">Log Action</button>
         <button className="flex-1 h-12 rounded-xl bg-primary text-background-dark font-bold hover:bg-green-400 transition-colors shadow-lg shadow-primary/20">Buy Pesticide</button>
      </div>
    </div>
  );
};
