import React from 'react';
import { ScreenName } from '../types';

interface EditProfileProps {
  onNavigate: (screen: ScreenName) => void;
}

export const EditProfile: React.FC<EditProfileProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.ACCOUNT)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <h2 className="text-lg font-bold">Edit Profile</h2>
        <button onClick={() => { alert('Profile saved!'); onNavigate(ScreenName.ACCOUNT); }} className="text-primary font-bold text-sm">Save</button>
      </div>

      <div className="flex flex-col items-center py-6">
        <div className="relative group mb-6">
            <div className="h-24 w-24 rounded-full bg-cover bg-center border-2 border-primary/50" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDloNi-k2E22Gi3gN3ztsAR8EYlOkaP-cmMmb2wAClPjiNqdiWLlvG4iwEz1lG6e5Q1QA9f2BX3hutBonHjrKccBkwzo8sDAOR_-qgecsyJAXwUTNVeO121PhHSe_QHo-bfueBQ8DOKABPTVpGeswO47w9MYAQgoggcTDbJ8gCjEbo6agTILR0J906WNVEXEW4_0x2rsqFppZhaTcEvn9GHRv9wdAQTXHu16g9xWH3fwW83X3ubCF9kb62_XrDXPrritX48MLxwDXM")'}}></div>
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
               <span className="material-symbols-outlined text-white">camera_alt</span>
            </div>
        </div>
        
        <div className="w-full px-6 flex flex-col gap-5">
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-gray-400">Full Name</label>
             <input className="w-full bg-surface-dark border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" defaultValue="Budi Santoso" />
           </div>
           
           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-gray-400">Phone Number</label>
             <input className="w-full bg-surface-dark border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" defaultValue="+62 812 3456 7890" />
           </div>

           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-gray-400">Location</label>
             <div className="relative">
                <input className="w-full bg-surface-dark border border-white/10 rounded-lg h-12 px-4 pr-10 text-white focus:outline-none focus:border-primary transition-colors" defaultValue="Karawang, Jawa Barat" />
                <span className="material-symbols-outlined absolute right-3 top-3 text-gray-500">location_on</span>
             </div>
           </div>

           <div className="flex flex-col gap-2">
             <label className="text-sm font-bold text-gray-400">Farm Type</label>
             <select className="w-full bg-surface-dark border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors">
               <option>Paddy (Rice)</option>
               <option>Corn</option>
               <option>Horticulture (Chili/Tomato)</option>
             </select>
           </div>
        </div>
      </div>
    </div>
  );
};
