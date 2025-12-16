import React, { useState } from 'react';
import { ScreenName, LandPlot } from '../types';

interface MyFarmProps {
  onNavigate: (screen: ScreenName) => void;
  onSelectLand?: (land: LandPlot) => void;
}

const ALL_PLOTS: LandPlot[] = [
  {
    id: '1',
    name: 'Kebun Jagung - Blok A',
    detail: 'Jagung Manis • 1.5 Ha',
    crop: 'Jagung Manis',
    size: '1.5 Ha',
    status: 'Perlu Air',
    statusColor: 'yellow',
    statusIcon: 'water_drop',
    moisture: '45%',
    temp: '30°C',
    ph: 6.8,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Blok A, Cianjur Selatan',
    plantingDate: '10 Agustus 2024',
    harvestEstimate: '20 November 2024',
    growthProgress: 65,
    chartData: [
      { name: 'W1', value: 20 }, { name: 'W2', value: 35 }, { name: 'W3', value: 45 }, { name: 'W4', value: 40 },
      { name: 'W5', value: 55 }, { name: 'W6', value: 60 }, { name: 'W7', value: 58 }, { name: 'W8', value: 65 }
    ],
    tasks: [
      { title: 'Penyiraman Sore', desc: 'Tanah mulai kering, durasi 45 menit.', date: 'Hari Ini, 16:00', status: 'warning', type: 'water' },
      { title: 'Pemupukan NPK', desc: 'Jadwal rutin mingguan.', date: 'Besok, 08:00', status: 'pending', type: 'fertilizer' }
    ]
  },
  {
    id: '2',
    name: 'Sawah Padi - Blok Utara',
    detail: 'Padi IR64 • 2 Ha',
    crop: 'Padi IR64',
    size: '2 Ha',
    status: 'Fase Vegetatif',
    statusColor: 'green',
    statusIcon: 'eco',
    moisture: '78%',
    temp: '28°C',
    ph: 6.5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWvlAYUXyyyQ1j7QgtPC0gjvr-j6XprNZFsQ_7URtki1AzFlf-ZP1eEUfBbwh0HBJTMFWDlAfIzGlfPaJefZe4rTreLuE1QFKAfROwuva3tbLHlwh2GY0e2CXFfKLBwF8UX2hxr1d7OTnqbtFbf-R1941eCfirK4TYO1zg9qQUBzeH2LMQYMNAqSqJuf9t8UeHWSncQqPrnAMgx0QfgPSKR1aaiAZdhKe7OWCp6hbeSHbdliOF8y_aLI-lCffmEywc15PdNKMp1g8',
    location: 'Blok Utara, Cianjur',
    plantingDate: '1 September 2024',
    harvestEstimate: 'Desember 2024',
    growthProgress: 40,
    chartData: [
      { name: 'W1', value: 10 }, { name: 'W2', value: 25 }, { name: 'W3', value: 40 }, { name: 'W4', value: 55 },
      { name: 'W5', value: 70 }, { name: 'W6', value: 85 }, { name: 'W7', value: 90 }, { name: 'W8', value: 95 }
    ],
    tasks: [
      { title: 'Pemberian Pupuk Urea', desc: 'Dosis: 50kg/ha, Disebar merata.', date: '2 Hari Lalu', status: 'done', type: 'fertilizer' },
      { title: 'Cek Hama Wereng', desc: 'Monitoring rutin sore hari.', date: 'Besok', status: 'pending', type: 'pest' }
    ]
  },
  {
    id: '3',
    name: 'Kebun Cabai - Blok Selatan',
    detail: 'Cabai Rawit • 1.9 Ha',
    crop: 'Cabai Rawit',
    size: '1.9 Ha',
    status: 'Siap Panen',
    statusColor: 'primary',
    statusIcon: 'inventory_2',
    moisture: 'Optimal',
    temp: '29°C',
    ph: 6.0,
    isHarvest: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQbLJlPXruM1qG9kMqAZ7A6ypysCwFPqiw2LVaqqLSWhNxMFk-blEiNun-fTvPvhrYj6PRU3JGT95YtC3_21eymC9WYCA5JDuao00cPrzjPDwmN_v-vuUjj2hVpe_pgoWzQfKQmxmc53JoqnhqVjlPb4kV-br8qkpf-vyQ1MFsAyD5kHUT3oNTQgPCZLX_EulgCXJX-toeHCtQOPB98unQOoGt27FEwqVGWgeUCw45U3NK_gcBfsdq7OkzH9AxxDmKTrb-NE7pNkM',
    location: 'Blok Selatan, Bukit',
    plantingDate: '15 Juli 2024',
    harvestEstimate: 'Siap Panen',
    growthProgress: 100,
    chartData: [
      { name: 'W1', value: 15 }, { name: 'W2', value: 30 }, { name: 'W3', value: 50 }, { name: 'W4', value: 70 },
      { name: 'W5', value: 85 }, { name: 'W6', value: 95 }, { name: 'W7', value: 98 }, { name: 'W8', value: 100 }
    ],
    tasks: [
      { title: 'Panen Tahap 1', desc: 'Siapkan karung dan tenaga kerja.', date: 'Besok Pagi', status: 'pending', type: 'harvest' }
    ]
  }
];

type FilterType = 'Semua' | 'Siap Panen' | 'Perlu Air' | 'Fase Vegetatif';

export const MyFarm: React.FC<MyFarmProps> = ({ onNavigate, onSelectLand }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Semua');

  const handleLandClick = (plot: LandPlot) => {
    if (onSelectLand) {
      onSelectLand(plot);
    }
    onNavigate(ScreenName.LAND_DETAIL);
  };

  const handleAddLand = () => {
    alert("Fitur Tambah Lahan: Anda dapat mendaftarkan lahan baru dengan memetakan lokasi via GPS.");
  };

  const handleSettings = () => {
    alert("Pengaturan Lahan: Ubah nama lahan, jenis tanaman, atau hapus lahan.");
  };

  const handleQuickAction = (e: React.MouseEvent, type: string, plot: LandPlot) => {
    e.stopPropagation();
    if (type === 'Grafik Mingguan') {
      if (onSelectLand) onSelectLand(plot);
      onNavigate(ScreenName.LAND_DETAIL);
    } else {
      alert(`Membuka ${type} untuk lahan ini...`);
    }
  };

  const filteredPlots = activeFilter === 'Semua' 
    ? ALL_PLOTS 
    : ALL_PLOTS.filter(p => p.status === activeFilter);

  return (
    <div className="bg-background-dark font-display antialiased text-white overflow-x-hidden min-h-screen pb-24">
      {/* Header */}
      <div className="flex flex-col px-4 pt-6 pb-2 sticky top-0 z-20 bg-background-dark/95 backdrop-blur-sm border-b border-surface-border/30">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Lahan Saya</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] animate-pulse text-primary">cloud_sync</span>
              Updated 10m ago
            </span>
            <button onClick={handleSettings} className="flex items-center justify-center rounded-full bg-surface-dark p-2 hover:bg-surface-border transition-colors text-white">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-5 pt-4">
        {/* Stats */}
        <div className="flex flex-wrap gap-3 px-4">
          <div className="flex min-w-[140px] flex-1 flex-col justify-between gap-2 rounded-xl p-4 bg-surface-dark border border-surface-border shadow-sm group">
            <div className="flex items-start justify-between">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">landscape</span>
            </div>
            <div>
              <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Total Luas</p>
              <p className="text-white tracking-tight text-2xl font-bold leading-tight group-hover:text-primary transition-colors">5.4 Ha</p>
            </div>
          </div>
          <div className="flex min-w-[140px] flex-1 flex-col justify-between gap-2 rounded-xl p-4 bg-surface-dark border border-surface-border shadow-sm group">
            <div className="flex items-start justify-between">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">calendar_month</span>
            </div>
            <div>
              <p className="text-text-secondary text-xs font-medium uppercase tracking-wider">Panen Raya</p>
              <p className="text-white tracking-tight text-2xl font-bold leading-tight group-hover:text-primary transition-colors">12 Okt</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="w-full overflow-x-auto no-scrollbar pl-4 pb-2">
          <div className="flex gap-2 pr-4">
            {['Semua', 'Siap Panen', 'Perlu Air', 'Fase Vegetatif'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter as FilterType)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all ${
                  activeFilter === filter 
                    ? 'bg-primary shadow-lg shadow-primary/20 text-background-dark font-bold' 
                    : 'bg-surface-dark border border-surface-border text-text-secondary text-sm font-medium hover:border-primary/50'
                }`}
              >
                <span className="text-sm">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plot List */}
        <div className="flex flex-col gap-4 px-4 pb-4">
          {filteredPlots.length > 0 ? (
            filteredPlots.map((plot, idx) => (
             <div key={idx} className="flex flex-col gap-0 rounded-2xl bg-surface-dark shadow-md overflow-hidden border border-surface-border group">
                <div className="relative h-40 w-full bg-gray-800 cursor-pointer" onClick={() => handleLandClick(plot)}>
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${plot.image})`, backgroundColor: '#2a4a3a' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1 rounded-md bg-${plot.statusColor === 'primary' ? 'primary' : plot.statusColor + '-500'}/20 px-2.5 py-1 text-xs font-bold text-${plot.statusColor === 'primary' ? 'primary' : plot.statusColor + '-400'} backdrop-blur-md border border-${plot.statusColor === 'primary' ? 'primary' : plot.statusColor + '-500'}/30`}>
                      <span className="material-symbols-outlined text-[14px]">{plot.statusIcon}</span>
                      {plot.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 h-12 w-12 rounded-lg border-2 border-white/20 bg-gray-600 bg-cover bg-center shadow-lg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80")', backgroundColor: '#555' }}></div>
                </div>

                <div className="p-5 pt-2 flex flex-col gap-4 relative">
                  <div className="-mt-8 z-10 cursor-pointer" onClick={() => handleLandClick(plot)}>
                    <p className="text-text-secondary text-xs font-medium mb-1">{plot.detail}</p>
                    <h3 className="text-white text-lg font-bold leading-tight">{plot.name}</h3>
                  </div>

                  {!plot.isHarvest ? (
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5">
                      <div className="flex flex-col items-center gap-1 p-2 rounded bg-background-dark/50">
                        <div className="flex items-center gap-1 text-text-secondary">
                          <span className="material-symbols-outlined text-[16px] text-blue-400">humidity_percentage</span>
                          <span className="text-[10px] uppercase font-bold">Moisture</span>
                        </div>
                        <span className="text-white font-bold text-sm">{plot.moisture}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 p-2 rounded bg-background-dark/50">
                        <div className="flex items-center gap-1 text-text-secondary">
                          <span className="material-symbols-outlined text-[16px] text-orange-400">thermostat</span>
                          <span className="text-[10px] uppercase font-bold">Temp</span>
                        </div>
                        <span className="text-white font-bold text-sm">{plot.temp}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 p-2 rounded bg-background-dark/50">
                        <div className="flex items-center gap-1 text-text-secondary">
                          <span className="material-symbols-outlined text-[16px] text-green-400">science</span>
                          <span className="text-[10px] uppercase font-bold">pH</span>
                        </div>
                        <span className="text-white font-bold text-sm">{plot.ph}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">event</span>
                          Tanam: 15 Jul
                        </span>
                        <span className="w-1 h-1 rounded-full bg-surface-border"></span>
                        <span className="flex items-center gap-1 text-primary">
                          <span className="material-symbols-outlined text-[18px]">trending_up</span>
                          Yield Est: High
                        </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button onClick={(e) => handleQuickAction(e, plot.isHarvest ? 'Jadwal Panen' : 'Grafik Mingguan', plot)} className="flex-1 rounded-lg bg-surface-border/30 hover:bg-surface-border/50 h-10 text-white text-sm font-medium transition-colors">
                      {plot.isHarvest ? 'Jadwal Panen' : 'Grafik'}
                    </button>
                    <button onClick={() => handleLandClick(plot)} className="flex-1 rounded-lg bg-primary hover:bg-green-400 h-10 text-background-dark text-sm font-bold transition-colors shadow-[0_0_15px_rgba(43,238,121,0.2)]">
                      Lihat Detail
                    </button>
                  </div>
                </div>
             </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-10 text-text-secondary bg-surface-dark rounded-2xl border border-dashed border-surface-border">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">landscape</span>
              <p>Tidak ada lahan dengan status ini.</p>
              <button onClick={() => setActiveFilter('Semua')} className="text-primary font-bold text-sm mt-2">Lihat Semua</button>
            </div>
          )}
        </div>
        
        <div className="h-10"></div>
      </div>

       {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 px-6 z-30 flex justify-center pointer-events-none">
        <button onClick={handleAddLand} className="pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-primary py-4 px-8 text-background-dark font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 w-full max-w-sm active:scale-95">
          <span className="material-symbols-outlined text-[24px]">add</span>
          <span className="text-base tracking-wide">Tambah Lahan Baru</span>
        </button>
      </div>

    </div>
  );
};
