import React from 'react';
import { ScreenName } from '../types';

interface EducationProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Education: React.FC<EducationProps> = ({ onNavigate }) => {
  const handleFeature = (type: string, name: string) => {
    alert(`${type}: ${name}`);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      alert(`Mencari materi: ${e.currentTarget.value}`);
    }
  };

  return (
    <div className="bg-background-dark font-display antialiased text-white pb-24 min-h-screen">
      <div className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center px-4 py-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer" onClick={() => onNavigate(ScreenName.ACCOUNT)}>
              <div className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-primary/30" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASBAQGxr4qYMutqQnfv7iFFaJWMuHqMtyZGeRWXx9N1bEfSuVQHqGPfUAl3f9C-dBQhdN7ml67m6dYx6y_NryfA7q9E3IQuW8CO6C1zOMD_w7mcAX1wDqim6dM5wDCj0oZFltzT8SE526NQzZKvdcIWWj5y6-ZC374IGjeZNy27l1jfklDkhgczuKJDvDZHRCtjVIbSozBF23yMUZvrYfmJYTJpptQm_w9yT1UX6OX7xGlE2oKgFdam8RBZZI2UcEpw4-fAuEt280")'}}></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-primary rounded-full border-2 border-background-dark"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold leading-tight tracking-tight text-white">Pustaka AgriNoir</h2>
              <p className="text-xs text-gray-400">Selamat pagi, Budi</p>
            </div>
          </div>
          <button onClick={() => handleFeature('Menu', 'Bookmarks')} className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-surface-highlight text-primary transition-colors">
            <span className="material-symbols-outlined">bookmarks</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex w-full items-center rounded-xl bg-surface-dark border border-transparent overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-primary/50 transition-all">
          <div className="flex items-center justify-center pl-4 text-gray-400"><span className="material-symbols-outlined">search</span></div>
          <input 
            className="w-full bg-transparent border-none text-sm font-medium text-white placeholder:text-gray-400 h-12 px-3 focus:ring-0 focus:outline-none" 
            placeholder="Cari materi belajar..." 
            onKeyDown={handleSearch}
          />
          <button className="flex items-center justify-center h-12 w-12 text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">tune</span></button>
        </div>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pl-4 pb-2">
        <div className="flex gap-2 pr-4 min-w-max">
          <button onClick={() => handleFeature('Filter', 'Semua')} className="flex h-9 items-center justify-center px-4 rounded-full bg-primary text-background-dark font-semibold text-sm shadow-lg shadow-primary/20">Semua</button>
          {['Padi', 'Cabai', 'Pupuk', 'Hama', 'Hidroponik'].map((t) => (
            <button key={t} onClick={() => handleFeature('Filter', t)} className="flex h-9 items-center justify-center px-4 rounded-full bg-surface-dark border border-white/5 text-gray-300 font-medium text-sm hover:bg-surface-highlight transition-colors">{t}</button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="text-lg font-bold text-white">Video Tutorial</h3>
          <button onClick={() => handleFeature('Navigasi', 'Lihat Semua Video')} className="text-xs font-semibold text-primary hover:underline">Lihat Semua</button>
        </div>
        <div className="flex w-full overflow-x-auto no-scrollbar px-4 pb-4">
          <div className="flex gap-4">
            {[
              { title: 'Cara Mengatasi Hama Wereng dengan Efektif', views: '12k views', dur: '05:30', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASn4RHbafQBJ9i_01eJcADpnVS_pQlLMiGrFZHjBcEIoSOsNZtDNXIWR2p7pf8qxHCLOWjakUdXn2O3pOgN18l723q-XkGBWkld_WGTqz-SoDGPxWwSUpC8iUMlIVI5ftihcOAynqSBdZ_87X6jU9URwgnXJLDnOB0c_jE1ZxGen_leAGIbuUjlamnqSwXxvvA9XFbjABFBSk5_Biyf-_jPlt9ad4ML3tlO7tciufUQJk0YyRl2X-b7mVeJyhKrruzLjMWjjABRUk' },
              { title: 'Teknik Irigasi Tetes untuk Lahan Kering', views: '8.5k views', dur: '08:15', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuTLZFXtGIli90wgV2CylRTuQEo2k5SbmqzwMZmayzz7Mqv4Lb5lzettsHBzHy4HsUaQvhel1-ZRhHfiCz47N_H0_d0jRPn4WNC7J0fe7seV_B2kP3JNYNsY-7dXSFfs0s8079fMTWc66-ZkWIckJdi7azrjFWx3u0JiaebqjEo5lwPJwq0eqfyQKGL6DsknJc8oFU4-GofvPC6Ss_sX8AuiSDNJ28Bzdowoeu2yvHjRiuQiv3pP1Mu-uTgt3lo5gW_qhEfUu4zLw' },
              { title: 'Dasar Hidroponik untuk Pemula', views: '22k views', dur: '12:00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLc3_xz8dft308nFysKmvwIlrkKYQWEiRsHfBJFzz7UAXgS3jfV5c7dh1art-6Z9ikDPJ6mNKKYUSJrBVa2G1RO-OvvoacTxdvI_e-rPWrIQkKIg_OKfdF-VRndpeVQ4t5vzgYbWsHEx-Jsp0q1DD6oMcHnPZvdT-WJqZ1OZYWEgI_-GAaBhtHv99ymJioROCWj7jIs2QMzzJgtdsIj77eOwZ8iaqKpMksyB4y8FUOlk81kg3ISKNF_gWKi3n76aOWPJZOhwVoXl8' }
            ].map((v, idx) => (
              <div key={idx} onClick={() => handleFeature('Putar Video', v.title)} className="relative flex flex-col w-64 shrink-0 group cursor-pointer">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-surface-dark">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: `url("${v.img}")`}}></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/70 rounded text-[10px] font-bold text-white">{v.dur}</div>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-semibold text-white line-clamp-2 leading-snug">{v.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">Video • {v.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3"><h3 className="text-lg font-bold text-white">Artikel & Panduan</h3></div>
        <div className="flex flex-col gap-3">
          {[
            { tag: 'Bisnis', title: 'Panduan Ekspor Kopi 2024: Syarat & Dokumen', read: '5 menit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW3QrdW5BlXninGNJr5zlz7efr3mu8-vcbRYYerFTJbNVbqRt0Vpu2kFsfk8FPmBZbkMta8dhx_FimmuioRWeHj2GWL73WnQxdxK9OTSwR40AZwfjEGPO5WYB5NPGK8bMhsv1oAH8eZ4MZ6VzPs7gJNtk32yjU7SqeJ7zINYulk0n-UT9Ir9EcHRgsrZPKmndLMxo7UsiSLg1z6RC2iZG72q5TBkZtYWT2Jo_MCEwB2dHGeqYNkkUvzKLJg5HHPu-cDON8U9kmgpY', color: 'blue' },
            { tag: 'Budidaya', title: 'Cara Membuat Pupuk Organik Cair Sederhana', read: '8 menit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD43zbBlBoV9l3nG7NRbYfeC7btB2n7lLf5J239onPeutz5jpq_FoOCgjcJg6Tp_Z8POSTm2i_ZxoAVW5psLc7cc6xUOC0Ru2LeG6RIwNqj3AGz96iC8UoYlAJqclB_lThIxlB9QV_UeU9po2d9VrP4TtlXk0yrFUXGQ8qyDYYGuuGCn8Uj7-wJjETmx6smIlIgLWPYAulwP8dov_dvXxHMNinc2zBfsNi22bQC51iNnW9lkRbodZH8A28IDATkkiNpcSTdHRoJFPA', color: 'primary' },
            { tag: 'Harga Pasar', title: 'Prediksi Harga Cabai Merah Kuartal III', read: '3 menit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-aoGhbdPRJwLnVuHCpv_H1EvmwO_v_wrTEMmXI8rhKNsyg-8tp5aXeoNol6iY1uv1NPtjPmJ5LRZJgheaR7bbGbhccruwlxGzTpDxoWPPSJWqdgnhd-3ll5JKXuw7_m-pr3fu-IYiv-LZo_pZRmfdhdeKSdOZRONj85Z7JNtN4-moDW6nBgmKlqYpyfFlTlZjpB4iWv6EbNPfueWfXJJ08RJqmQC1CWlSwVeyGQsE7RcMU6Y0nA8-7QkRQOprFFTrmMczsnDx2nM', color: 'red' }
          ].map((a, idx) => (
             <div key={idx} onClick={() => handleFeature('Baca Artikel', a.title)} className="flex w-full bg-surface-dark rounded-xl p-3 shadow-sm border border-white/5 active:bg-surface-highlight transition-colors cursor-pointer">
                <div className="h-20 w-20 shrink-0 rounded-lg bg-cover bg-center" style={{backgroundImage: `url("${a.img}")`}}></div>
                <div className="ml-3 flex flex-col justify-between py-0.5 flex-1">
                   <div>
                      <div className="flex items-center gap-2 mb-1">
                         <span className={`px-1.5 py-0.5 rounded bg-${a.color === 'primary' ? 'primary' : a.color + '-500'}/10 text-${a.color === 'primary' ? 'primary' : a.color + '-400'} text-[10px] font-bold uppercase tracking-wider`}>{a.tag}</span>
                         {idx === 0 && <span className="flex items-center text-[10px] text-gray-400 gap-1"><span className="material-symbols-outlined text-[10px]">offline_pin</span> Offline</span>}
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight line-clamp-2">{a.title}</h4>
                   </div>
                   <div className="flex items-center justify-between mt-2">
                      <span className="text-[11px] text-gray-400">{a.read} baca</span>
                      <span className="material-symbols-outlined text-gray-400 text-lg">bookmark_border</span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>

      <div className="mt-8 px-4">
        <h3 className="text-lg font-bold text-white mb-3">Pertanyaan Umum</h3>
        <div className="bg-surface-dark rounded-xl border border-white/5 divide-y divide-white/5 overflow-hidden">
           {[
             {q: 'Bagaimana cara mengecek pH tanah?', a: 'Anda bisa menggunakan alat pH meter digital atau kertas lakmus. Ambil sampel tanah dari kedalaman 10-20 cm, campur dengan air netral, dan celupkan alat ukur.'},
             {q: 'Kapan waktu terbaik menyiram tanaman?', a: 'Waktu terbaik adalah pagi hari (sebelum pukul 09.00) atau sore hari (setelah pukul 16.00) untuk menghindari penguapan berlebih.'},
             {q: 'Apa ciri-ciri tanaman kekurangan Nitrogen?', a: 'Daun menguning (klorosis) terutama pada daun tua, pertumbuhan terhambat, dan tanaman tampak kurus.'}
           ].map((faq, idx) => (
             <details key={idx} className="group p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer bg-surface-dark open:bg-surface-highlight transition-colors">
               <summary className="flex items-center justify-between text-gray-200 font-medium list-none">
                 <span>{faq.q}</span>
                 <span className="transition group-open:rotate-180"><span className="material-symbols-outlined">expand_more</span></span>
               </summary>
               <div className="text-gray-400 mt-3 text-sm leading-relaxed">{faq.a}</div>
             </details>
           ))}
        </div>
      </div>
    </div>
  );
};
