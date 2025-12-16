import React from 'react';
import { ScreenName } from '../types';

interface SellProductProps {
  onNavigate: (screen: ScreenName) => void;
}

export const SellProduct: React.FC<SellProductProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.MARKETPLACE)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <h2 className="text-lg font-bold leading-tight">Jual Hasil Panen</h2>
        <button className="text-primary font-bold text-sm">Simpan</button>
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-300">Foto Produk</label>
          <div className="w-full h-40 border-2 border-dashed border-white/10 rounded-xl bg-surface-dark flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-3xl text-gray-500">add_a_photo</span>
            <p className="text-xs text-gray-500">Tambah Foto (Max 5)</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-300">Nama Produk</label>
            <input className="w-full bg-surface-dark border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="Contoh: Beras Organik 5kg" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-300">Kategori</label>
            <select className="w-full bg-surface-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
              <option>Pilih Kategori</option>
              <option>Hasil Panen (Padi/Jagung)</option>
              <option>Sayuran & Buah</option>
              <option>Bibit Tanaman</option>
              <option>Pupuk & Nutrisi</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300">Harga (Rp)</label>
              <input type="number" className="w-full bg-surface-dark border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="0" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-300">Stok</label>
              <input type="number" className="w-full bg-surface-dark border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="0" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-300">Deskripsi</label>
            <textarea className="w-full h-32 bg-surface-dark border border-white/10 rounded-lg p-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Jelaskan detail produk Anda..." />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-white/5">
        <button onClick={() => alert('Produk berhasil ditayangkan!')} className="w-full h-12 bg-primary text-background-dark font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-green-400 transition-colors">
          Tayangkan Produk
        </button>
      </div>
    </div>
  );
};
