import React from 'react';
import { ScreenName } from '../types';

interface OrderTrackingProps {
  onNavigate: (screen: ScreenName) => void;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.MARKETPLACE)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Lacak Pesanan</h2>
        <div className="w-10"></div>
      </div>

      <div className="p-4">
         {/* Order Summary Card */}
         <div className="bg-surface-dark rounded-xl p-4 border border-white/10 mb-6 flex gap-4">
             <div className="size-16 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUBNUg3V8f8bn2-tu8vl6Tt5t4j3IrAFP0sN05Lrj9TA7UNRlTI5ep5NYECvl-2BkzReD-x8W6JzUhTbyyVyCClaQxiPZ8CgDWqqES3ZQCAOTu37tKGg2y-FwfgrbDVUpyT5prfYImlhWhpmncVfj8SIKOSepm1HyUDi5qebsqAbx1YGx4v0p8jX-BN19wLwyWh2hjoRGVk_Zgkw1iGt4VtlgosvRySuEvuK6ehilKerOPxqL81ZQfQXE44eJneQgH9r1hLUX7fGo")'}}></div>
             <div>
                <h3 className="font-bold text-white">Pupuk Urea Subsidi</h3>
                <p className="text-gray-400 text-sm">Pesanan #2039</p>
                <p className="text-primary text-sm font-bold mt-1">Estimasi Tiba: Besok</p>
             </div>
         </div>

         {/* Timeline */}
         <div className="pl-2 relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-700">
             <div className="relative flex gap-4">
                <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center shrink-0 border-4 border-background-dark">
                   <span className="material-symbols-outlined text-background-dark text-lg">local_shipping</span>
                </div>
                <div>
                   <h4 className="font-bold text-white">Pesanan Dikirim</h4>
                   <p className="text-xs text-gray-400">Jakarta DC - 10:30 AM</p>
                   <p className="text-sm text-gray-300 mt-1">Kurir sedang menuju lokasi Anda.</p>
                </div>
             </div>

             <div className="relative flex gap-4">
                <div className="z-10 size-10 rounded-full bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0">
                   <span className="material-symbols-outlined text-primary text-lg">inventory_2</span>
                </div>
                <div>
                   <h4 className="font-bold text-gray-300">Pesanan Dikemas</h4>
                   <p className="text-xs text-gray-500">Gudang Pusat - Kemarin, 14:00</p>
                </div>
             </div>

             <div className="relative flex gap-4">
                <div className="z-10 size-10 rounded-full bg-surface-dark border-2 border-gray-600 flex items-center justify-center shrink-0">
                   <span className="material-symbols-outlined text-gray-500 text-lg">shopping_cart</span>
                </div>
                <div>
                   <h4 className="font-bold text-gray-500">Pesanan Dibuat</h4>
                   <p className="text-xs text-gray-600">Kemarin, 09:00</p>
                </div>
             </div>
         </div>

         {/* Courier Info */}
         <div className="mt-8 pt-6 border-t border-white/5">
             <h4 className="font-bold mb-3">Info Kurir</h4>
             <div className="flex items-center justify-between bg-surface-dark p-3 rounded-xl">
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-gray-300">person</span>
                   </div>
                   <div>
                      <p className="text-sm font-bold">Asep Kurir</p>
                      <p className="text-xs text-primary">J&T Express</p>
                   </div>
                </div>
                <div className="flex gap-2">
                   <button className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10"><span className="material-symbols-outlined">call</span></button>
                   <button className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10"><span className="material-symbols-outlined">chat</span></button>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};
