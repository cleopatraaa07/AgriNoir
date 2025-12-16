import React, { useRef } from 'react';
import { ScreenName, MarketItem } from '../types';

interface MarketplaceProps {
  onNavigate: (screen: ScreenName) => void;
  onSelectProduct?: (product: MarketItem) => void;
}

const PRODUCTS: MarketItem[] = [
  {
    id: '1',
    name: 'Bibit Padi IR64 Super',
    price: '85.000',
    unit: '/ sak',
    location: 'Cianjur, Jabar',
    rating: '4.8',
    soldCount: '1.2rb terjual',
    description: 'Bibit padi IR64 kualitas super, tahan hama wereng dan potensi hasil panen melimpah. Cocok untuk lahan irigasi teknis maupun tadah hujan. Kemasan 5kg.',
    seller: 'Toko Tani Makmur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3I84ARQ3ePLRdqz4whUxgfr6X9slWyNbz2CvyONcL0TwxpOuQDXF6Uv7BQwZEgJbkltgpfU4GIZQ9_gcSyJW5JE89sNsOL-uM-4cRCS9YhiuHIek4sMBUBLg-cbtVv7FRLT8xKEuXs0VHBsevcudBz0DFtRSC2t8iNgGS76pRfGBrH1YEiiebhHY9WjiOGouqEHr9ZYKAqARmt36B14VLBdAj0nB3m0Sx_8BeG9quRl8OZHW47xE0ogdAFJgdXPrjVHpkerQtd0w'
  },
  {
    id: '2',
    name: 'Pupuk Cair Organik Bios',
    price: '45.000',
    unit: '/ liter',
    location: 'Banyumas, Jateng',
    rating: '4.9',
    soldCount: '850 terjual',
    description: 'Pupuk cair organik multifungsi untuk menyuburkan tanah dan mempercepat pertumbuhan akar. Aman untuk lingkungan.',
    seller: 'Green Earth Official',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcGEHknyXe2qSlsNE7MTbVaEaLfYWVIs4ocWSgeLlzEwJDw87HfmlPeL6VKEKZMx09uDusCnNjwQa0EwP8t_jX2FJt2GQMlyCJBu_fFf6Yc4BiTr3T1rY-lQ0aTZiBzF1gKpfQ5eW1QpEpATX2PsdYO02yLE7TYrIIuDPAvWw3UI9MLz6vNVFxwokvTAme7a2RMlQww8FKxoEWE52HizmqIadn8aPKljWxcsFbf5OUBafqzzlHHMR-tOJjnTAFV_HHNC5DcSOHfRM'
  },
  {
    id: '3',
    name: 'Cangkul Baja Asli',
    price: '120.000',
    unit: '/ pcs',
    location: 'Sleman, DIY',
    rating: '5.0',
    soldCount: '400 terjual',
    description: 'Cangkul buatan pandai besi lokal dengan bahan baja per asli. Sangat tajam, kuat, dan anti lengket. Gagang kayu jati.',
    seller: 'Pandai Besi Berkah',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18_iPYcUXmDsJf-eMjPdYjfQRwOcSxx6zperVs-WaYZD6o2SqQHkcBeozgbgpPAuKki2fGCMyTZjwXcNO_uyL4WAf19M0N77sJ91VCP93xgYP6kX6Od6yriOrids_gOh6NpUMb3dzKsue_RgGzjHw1H-F_DR8WghwZseBCrz0tgtv9ZeGkzKKJyaA0WgDxi_dD9tv-UE2BmhMtprE22M4TVcpd9NaZBUEmzKS94vjCXvVUcWi1R5fEHhndJT42H-ZRurYyCx2eDs'
  },
  {
    id: '4',
    name: 'Bibit Cabai Rawit Setan',
    price: '15.000',
    unit: '/ pack',
    location: 'Malang, Jatim',
    rating: '4.7',
    soldCount: '2.5rb terjual',
    description: 'Benih cabai rawit varietas unggul pedas nampol. Tahan virus gemini dan layu bakteri. Isi 100 biji per pack.',
    seller: 'Benih Unggul Nusantara',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxx12nCX0cK338HujOsLkJJH6pOr0rlsE6h_ZDJbjiDwPn-V9LB8_uRy4FxEPs-HbEAtzAgAOj6jMv0sdo14MudhPXe-HT0u7tc9tMPUPwjksIOsr5HBwZgSUSJCptefVtVZZEefGUQn4r59HhAvzYkpEJaHE8nKO0HwamvsRXFdF7xEa7Snrp3zL2IYbM1InENwbZBf1yHb1bvR1YZ3hAbbz9RL-Ak1MiHMFfwHQCN_5pNfmrcZfnwfa0e_dKtvywvtjCis4tZpw'
  }
];

export const Marketplace: React.FC<MarketplaceProps> = ({ onNavigate, onSelectProduct }) => {
  const productsRef = useRef<HTMLDivElement>(null);

  const handleFeature = (feature: string) => {
    alert(`Membuka fitur: ${feature}`);
  };

  const handleSell = () => {
    onNavigate(ScreenName.SELL_PRODUCT);
  };

  const handleBuy = () => {
    // Scroll to products
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProductClick = (item: MarketItem) => {
    if (onSelectProduct) {
      onSelectProduct(item);
    }
    onNavigate(ScreenName.MARKET_DETAIL);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      alert(`Mencari: ${e.currentTarget.value}`);
    }
  };

  return (
    <div className="bg-background-dark text-white pb-24 font-work min-h-screen">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => handleFeature('Menu Sidebar')} className="text-white flex size-12 shrink-0 items-center justify-start"><span className="material-symbols-outlined text-2xl">menu</span></button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Pasar AgriNoir</h2>
        <div className="flex size-12 items-center justify-end relative" onClick={() => handleFeature('Notifikasi Pasar')}>
          <span className="material-symbols-outlined text-text-secondary">notifications</span>
          <div className="absolute top-3 right-0 size-2.5 bg-primary rounded-full border-2 border-background-dark"></div>
        </div>
      </div>

      <div className="px-4 py-3 bg-background-dark">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm group focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <div className="text-text-secondary flex border-none bg-surface-dark items-center justify-center pl-4 rounded-l-xl border-r-0"><span className="material-symbols-outlined">search</span></div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-surface-dark focus:border-none h-full placeholder:text-text-secondary px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" 
              placeholder="Cari bibit, pupuk, atau alat..."
              onKeyDown={handleSearch}
            />
          </div>
        </label>
      </div>

      <div className="px-4 py-2">
        <div className="grid grid-cols-2 gap-3">
          <div onClick={handleSell} className="relative overflow-hidden rounded-xl h-40 bg-surface-dark group cursor-pointer active:scale-[0.98] transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCeLOIMHV5rOewWvhNUVSWLeHuCVb3Ea_VBb_30OaGlpWhKRyR-8qIswUjVjvrdljT4kXjZtA9pfewazufLr6x8ZYTFAOmvRo6lWt35rfHbVtBFB30xP2bSKXyXdlRyqpAy-AsrbqMN4UR35MdAcj_-JBGIrGgO6graQK_HA278xVwDykXDs5ERjQzvpo2S3_Lf7MtlkzPINzrVmQpOo4DpliPk9Zz9V6axrZueZLYP1_il_JCN2SzdQCp0orvjNPNw9WZkeFztmA")'}}></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="size-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-2 text-primary"><span className="material-symbols-outlined">upload</span></div>
              <p className="text-white text-lg font-bold leading-tight">Jual Hasil Panen</p>
              <p className="text-gray-300 text-xs mt-1">Dapatkan harga terbaik</p>
            </div>
          </div>
          <div onClick={handleBuy} className="relative overflow-hidden rounded-xl h-40 bg-surface-dark group cursor-pointer active:scale-[0.98] transition-all">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp2MlzJRWCCw20GzcJLEuw_643SkuPDxPgKCLtWRgklwvoWv_GYVMlr4IeDqVo5M0LVqsG4a6BunfPUj1swqMjP552gGmNr0SbsKDHTpOSGRdl1opzEIflblO1uJDRiFnJmPuW4OgRrY8rIbaEUmOFrVtOM1bPDt2MuIUMj__o8LjWNNRGAnnn4nfur6gjQSZ1FmWn3ThCtn5WvBUUbXt20yR4fKo-Mr7BDHagqrxA9fFmS1OmEKLxhBIzh5QG0cG7u_C56HDmw8Q")'}}></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="size-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 text-white"><span className="material-symbols-outlined">shopping_bag</span></div>
              <p className="text-white text-lg font-bold leading-tight">Beli Input Tani</p>
              <p className="text-gray-300 text-xs mt-1">Pupuk, Bibit & Alat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 pb-2 px-4 flex justify-between items-end">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Transaksi Saya</h3>
        <button onClick={() => handleFeature('Semua Transaksi')} className="text-primary text-sm font-semibold hover:underline">Lihat Semua</button>
      </div>
      <div className="px-4 mb-4">
        <div onClick={() => onNavigate(ScreenName.ORDER_TRACKING)} className="flex items-center gap-4 bg-surface-dark p-3 rounded-xl shadow-sm border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUBNUg3V8f8bn2-tu8vl6Tt5t4j3IrAFP0sN05Lrj9TA7UNRlTI5ep5NYECvl-2BkzReD-x8W6JzUhTbyyVyCClaQxiPZ8CgDWqqES3ZQCAOTu37tKGg2y-FwfgrbDVUpyT5prfYImlhWhpmncVfj8SIKOSepm1HyUDi5qebsqAbx1YGx4v0p8jX-BN19wLwyWh2hjoRGVk_Zgkw1iGt4VtlgosvRySuEvuK6ehilKerOPxqL81ZQfQXE44eJneQgH9r1hLUX7fGo")'}}></div>
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <p className="text-white text-sm font-bold leading-normal truncate">Pesanan #2039 - Pupuk Urea</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-primary text-[16px]">local_shipping</span>
              <p className="text-gray-400 text-xs font-normal">Sedang dalam pengiriman</p>
            </div>
          </div>
          <div className="shrink-0">
            <button onClick={(e) => {e.stopPropagation(); onNavigate(ScreenName.ORDER_TRACKING);}} className="flex items-center justify-center rounded-lg h-8 px-3 bg-primary text-background-dark text-xs font-bold uppercase tracking-wide hover:bg-green-400 transition-colors">Lacak</button>
          </div>
        </div>
      </div>

      <div className="pt-2 pb-2 px-4">
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-3">Kategori</h3>
        <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2">
          <button onClick={() => handleFeature('Kategori: Semua')} className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-full shrink-0"><span className="material-symbols-outlined text-[18px]">grid_view</span><span className="text-sm font-bold">Semua</span></button>
          {['Bibit', 'Pupuk', 'Pestisida', 'Alat Tani'].map((c, i) => (
             <button key={i} onClick={() => handleFeature(`Kategori: ${c}`)} className="flex items-center gap-2 px-4 py-2 bg-surface-dark border border-white/10 text-gray-300 rounded-full shrink-0 whitespace-nowrap hover:bg-surface-highlight transition-colors">
                <span className="material-symbols-outlined text-[18px]">{['grass', 'compost', 'pest_control', 'agriculture'][i]}</span>
                <span className="text-sm font-medium">{c}</span>
             </button>
          ))}
        </div>
      </div>

      <div className="pt-4 px-4 pb-4" ref={productsRef}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Rekomendasi</h3>
          <div className="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-white" onClick={() => handleFeature('Filter Produk')}><span className="material-symbols-outlined text-[16px]">tune</span><span className="text-xs font-medium">Filter</span></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           {PRODUCTS.map((p, idx) => (
             <div key={idx} onClick={() => handleProductClick(p)} className="flex flex-col gap-2 group cursor-pointer active:opacity-90">
                <div className="bg-surface-dark rounded-xl overflow-hidden aspect-[4/5] relative">
                  <img alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={p.image} />
                  {p.rating && <div className="absolute top-2 right-2 bg-background-dark/80 backdrop-blur-sm text-primary px-2 py-1 rounded-md text-xs font-bold">★ {p.rating}</div>}
                </div>
                <div className="flex flex-col gap-1">
                   <h4 className="text-white font-bold leading-tight line-clamp-2">{p.name}</h4>
                   <p className="text-primary font-bold text-lg">Rp {p.price} <span className="text-gray-400 text-xs font-normal">{p.unit}</span></p>
                   <div className="flex items-center gap-1 text-gray-400 text-xs"><span className="material-symbols-outlined text-[14px]">location_on</span><span>{p.location}</span></div>
                </div>
             </div>
           ))}
        </div>
      </div>
      
      <button onClick={handleSell} className="fixed bottom-24 right-4 size-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-40 transition-transform active:scale-95 hover:scale-110">
        <span className="material-symbols-outlined text-background-dark text-3xl">add</span>
      </button>

    </div>
  );
};
