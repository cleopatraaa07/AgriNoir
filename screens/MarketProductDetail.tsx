import React from 'react';
import { ScreenName, MarketItem } from '../types';

interface MarketProductDetailProps {
  onNavigate: (screen: ScreenName) => void;
  product: MarketItem | null;
}

export const MarketProductDetail: React.FC<MarketProductDetailProps> = ({ onNavigate, product }) => {
  // Mock fallback if accessed directly
  const item = product || {
    id: '0',
    name: 'Produk Tidak Ditemukan',
    price: '0',
    unit: '',
    location: '-',
    rating: '0.0',
    image: '',
    description: 'Detail produk tidak tersedia.',
    seller: 'Unknown',
    soldCount: '0'
  };

  const handleAddToCart = () => {
    alert(`Berhasil menambahkan "${item.name}" ke keranjang!`);
  };

  const handleBuyNow = () => {
    alert(`Melanjutkan ke pembayaran untuk "${item.name}"...`);
  };

  const handleChat = () => {
    alert(`Membuka chat dengan penjual: ${item.seller || 'Penjual'}`);
  };

  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-28">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.MARKETPLACE)} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/20 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex gap-2">
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white">share</span>
          </button>
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors relative">
            <span className="material-symbols-outlined text-white">shopping_cart</span>
            <div className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="w-full aspect-square bg-surface-dark relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="px-4 py-5 flex flex-col gap-4">
        {/* Title & Price */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl font-bold leading-tight">{item.name}</h1>
          </div>
          <div className="flex items-end gap-1 mt-2">
            <h2 className="text-3xl font-bold text-primary">Rp {item.price}</h2>
            <span className="text-gray-400 text-sm mb-1">{item.unit}</span>
          </div>
          <div className="flex items-center gap-3 mt-3">
             <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-md">
                <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                <span className="text-yellow-500 text-xs font-bold">{item.rating}</span>
             </div>
             <div className="text-sm text-gray-400 border-l border-white/10 pl-3">
               {item.soldCount || '100+ terjual'}
             </div>
             <div className="text-sm text-gray-400 border-l border-white/10 pl-3 flex items-center gap-1">
               <span className="material-symbols-outlined text-xs">location_on</span>
               {item.location}
             </div>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full my-1"></div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">Deskripsi Produk</h3>
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {item.description || 'Tidak ada deskripsi untuk produk ini.'}
          </p>
        </div>

        <div className="h-px bg-white/10 w-full my-1"></div>

        {/* Seller Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">store</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">{item.seller || 'Penjual Terpercaya'}</h4>
              <p className="text-green-400 text-xs flex items-center gap-1"><span className="size-1.5 rounded-full bg-green-500"></span> Online</p>
            </div>
          </div>
          <button className="px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 transition-colors">
            Kunjungi
          </button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-dark border-t border-white/5 p-4 pb-6 flex items-center gap-3 z-50">
        <button onClick={handleChat} className="flex flex-col items-center justify-center min-w-[60px] text-gray-400 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="text-[10px] font-medium">Chat</span>
        </button>
        <div className="h-8 w-px bg-white/10"></div>
        <button onClick={handleAddToCart} className="flex-1 h-12 rounded-xl border border-primary text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
           <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
           Keranjang
        </button>
        <button onClick={handleBuyNow} className="flex-1 h-12 rounded-xl bg-primary text-background-dark font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(43,238,121,0.25)] hover:bg-green-400 transition-colors">
           Beli Sekarang
        </button>
      </div>
    </div>
  );
};
