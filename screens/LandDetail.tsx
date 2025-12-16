import React, { useState, useEffect } from 'react';
import { ScreenName, LandPlot, Task } from '../types';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

interface LandDetailProps {
  onNavigate: (screen: ScreenName) => void;
  land: LandPlot | null;
}

const DEFAULT_DATA = [
  { name: 'W1', value: 30 }, { name: 'W2', value: 45 }, { name: 'W3', value: 35 }, { name: 'W4', value: 55 },
  { name: 'W5', value: 50 }, { name: 'W6', value: 70 }, { name: 'W7', value: 65 }, { name: 'W8', value: 90 },
];

export const LandDetail: React.FC<LandDetailProps> = ({ onNavigate, land }) => {
  // Local state for tasks to allow toggling completion
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fallback if accessed directly without state
  const currentLand = land || {
    id: '0',
    name: 'Lahan Padi Blok A',
    crop: 'Padi',
    size: '1 Ha',
    status: 'Fase Vegetatif',
    statusColor: 'green',
    statusIcon: 'eco',
    moisture: '65%',
    temp: '28°C',
    ph: 6.2,
    image: '',
    location: 'Unknown',
    growthProgress: 50,
    chartData: DEFAULT_DATA
  };

  useEffect(() => {
    if (land && land.tasks) {
      setTasks(land.tasks);
    } else if (currentLand.tasks) {
      setTasks(currentLand.tasks);
    }
  }, [land]);

  const handleMarkDone = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], status: 'done' };
    setTasks(newTasks);
  };

  const handleFabClick = () => {
    alert('Membuka form pencatatan aktivitas...');
  };

  const handleMenuClick = () => {
    alert('Opsi Lahan: Ubah, Hapus, atau Bagikan laporan.');
  };

  const chartData = currentLand.chartData || DEFAULT_DATA;

  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-background-dark p-4 pb-2 justify-between border-b border-white/10">
        <button onClick={() => onNavigate(ScreenName.MY_FARM)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col flex-1 items-center justify-center text-center">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] line-clamp-1 px-2">{currentLand.name}</h2>
          <div className="flex items-center gap-1 justify-center">
            <div className={`size-2 rounded-full bg-${currentLand.statusColor === 'primary' ? 'primary' : currentLand.statusColor + '-500'} animate-pulse`}></div>
            <span className={`text-xs font-medium text-${currentLand.statusColor === 'primary' ? 'primary' : currentLand.statusColor + '-400'}`}>
              Aktif • {currentLand.status}
            </span>
          </div>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button onClick={handleMenuClick} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </div>

      <main className="flex-1 flex flex-col gap-6 p-4">
        {/* Growth Chart */}
        <div className="flex flex-col gap-4 rounded-xl bg-surface-dark p-5 shadow-sm border border-surface-border/50">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-secondary text-sm font-medium">Grafik Pertumbuhan</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-white text-3xl font-bold">{currentLand.isHarvest ? 'Siap' : 'Sehat'}</h3>
                <span className="inline-flex items-center text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> 
                  {currentLand.growthProgress ? `+${Math.round(currentLand.growthProgress / 10)}%` : '+5%'}
                </span>
              </div>
            </div>
            <select className="bg-transparent text-sm font-medium text-text-secondary border-none focus:ring-0 cursor-pointer text-right pr-6" onChange={(e) => alert(`Mengubah periode grafik ke: ${e.target.value}`)}>
              <option>4 Minggu</option>
              <option>3 Bulan</option>
            </select>
          </div>
          <div className="relative w-full h-40 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2bee79" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2bee79" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1c2e24', borderColor: '#3b5445', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff', fontSize: '12px' }}
                  labelStyle={{ display: 'none' }}
                />
                <Area type="monotone" dataKey="value" stroke="#2bee79" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between text-xs text-text-secondary font-medium px-1">
            {chartData.filter((_, i) => i % 2 === 0).map((d, i) => (
               <span key={i}>{d.name}</span>
            ))}
          </div>
        </div>

        {/* Soil Stats */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3 px-1">Kualitas Tanah</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-dark p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-3 opacity-10"><span className="material-symbols-outlined text-4xl">science</span></div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center size-8 rounded-full bg-blue-500/20 text-blue-400"><span className="material-symbols-outlined text-lg">science</span></span>
                <span className="text-sm text-text-secondary">pH Tanah</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">{currentLand.ph}</span>
                <span className={`text-xs ${currentLand.ph >= 6 && currentLand.ph <= 7 ? 'text-primary' : 'text-yellow-500'} ml-1`}>
                   {currentLand.ph >= 6 && currentLand.ph <= 7 ? 'Optimal' : 'Perlu Kapur'}
                </span>
              </div>
              <div className="w-full bg-black/30 rounded-full h-1.5 mt-2"><div className="bg-blue-400 h-1.5 rounded-full" style={{width: `${(currentLand.ph / 14) * 100}%`}}></div></div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden">
               <div className="absolute right-0 top-0 p-3 opacity-10"><span className="material-symbols-outlined text-4xl">water_drop</span></div>
               <div className="flex items-center gap-2">
                 <span className="flex items-center justify-center size-8 rounded-full bg-cyan-500/20 text-cyan-400"><span className="material-symbols-outlined text-lg">water_drop</span></span>
                 <span className="text-sm text-text-secondary">Kelembaban</span>
               </div>
               <div>
                 <span className="text-2xl font-bold text-white">{currentLand.moisture}</span>
                 <span className={`text-xs ml-1 ${parseInt(currentLand.moisture) < 50 ? 'text-yellow-500' : 'text-primary'}`}>
                    {parseInt(currentLand.moisture) < 50 ? 'Agak Kering' : 'Cukup'}
                 </span>
               </div>
               <div className="w-full bg-black/30 rounded-full h-1.5 mt-2"><div className="bg-cyan-400 h-1.5 rounded-full" style={{width: currentLand.moisture.includes('%') ? currentLand.moisture : '50%'}}></div></div>
            </div>
            <div className="bg-surface-dark p-4 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden col-span-2">
               <div className="absolute right-0 top-0 p-3 opacity-10"><span className="material-symbols-outlined text-5xl">compost</span></div>
               <div className="flex justify-between items-start">
                 <div className="flex items-center gap-2 mb-2">
                   <span className="flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary"><span className="material-symbols-outlined text-lg">compost</span></span>
                   <span className="text-sm text-text-secondary">Nutrisi (NPK)</span>
                 </div>
                 <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-md">Sensor Aktif</span>
               </div>
               <div className="flex justify-between gap-4 mt-2">
                 <div className="flex flex-col flex-1">
                   <div className="flex justify-between text-xs mb-1 text-text-secondary"><span>N</span><span>Baik</span></div>
                   <div className="w-full bg-black/30 rounded-full h-1.5"><div className="bg-primary h-1.5 rounded-full" style={{width: '80%'}}></div></div>
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="flex justify-between text-xs mb-1 text-text-secondary"><span>P</span><span>Sedang</span></div>
                   <div className="w-full bg-black/30 rounded-full h-1.5"><div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '50%'}}></div></div>
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="flex justify-between text-xs mb-1 text-text-secondary"><span>K</span><span>Baik</span></div>
                   <div className="w-full bg-black/30 rounded-full h-1.5"><div className="bg-primary h-1.5 rounded-full" style={{width: '70%'}}></div></div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Local Weather Card */}
        <div onClick={() => onNavigate(ScreenName.WEATHER)} className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white shadow-lg relative overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 size-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Cuaca Lokal</h3>
                <p className="text-blue-100 text-xs mt-1">{currentLand.location ? currentLand.location : 'Lokasi Lahan'}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{currentLand.temp}</p>
                <p className="text-sm text-blue-100">Berawan</p>
              </div>
            </div>
            <div className="flex justify-between items-end border-t border-white/20 pt-4">
              {['Sekarang', '15:00', '18:00', 'Besok'].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <p className="text-xs text-blue-200 mb-1">{t}</p>
                  <span className="material-symbols-outlined mb-1 text-sm">{i===1 ? 'rainy' : i===2 ? 'thunderstorm' : i===3 ? 'partly_cloudy_day' : 'cloud'}</span>
                  <p className="text-sm font-bold">{[parseInt(currentLand.temp), parseInt(currentLand.temp)-2, parseInt(currentLand.temp)-4, parseInt(currentLand.temp)+1][i]}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div>
           <div className="flex justify-between items-center mb-3 px-1">
             <h3 className="text-white text-lg font-bold">Jadwal Tanam</h3>
             <button onClick={() => alert('Membuka kalender jadwal lengkap...')} className="text-primary text-sm font-bold hover:underline">Lihat Semua</button>
           </div>
           
           {tasks && tasks.length > 0 ? (
             <div className="flex flex-col gap-0 relative">
               <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/10 z-0"></div>
               {tasks.map((task, idx) => (
                 <div key={idx} className="flex gap-4 relative z-10 mb-6 group">
                    <div className={`flex-shrink-0 size-14 rounded-xl ${task.status === 'done' ? 'bg-primary/20 text-primary' : task.status === 'warning' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-surface-highlight text-gray-300'} flex items-center justify-center border-4 border-background-dark transition-all duration-300`}>
                      <span className="material-symbols-outlined">{task.status === 'done' ? 'check' : task.type === 'water' ? 'water_drop' : task.type === 'pest' ? 'pest_control' : task.type === 'harvest' ? 'agriculture' : 'event'}</span>
                    </div>
                    <div className={`flex-1 bg-surface-dark p-4 rounded-xl border-l-4 ${task.status === 'done' ? 'border-primary' : task.status === 'warning' ? 'border-orange-500' : 'border-gray-600'} shadow-sm transition-all duration-300`}>
                       <div className="flex justify-between items-start mb-1">
                         <p className={`text-xs ${task.status === 'warning' ? 'text-orange-400' : 'text-text-secondary'} font-bold uppercase`}>{task.date}</p>
                         {task.status !== 'done' && <button onClick={() => handleMarkDone(idx)} className="text-xs bg-white/10 px-2 py-1 rounded text-white font-medium hover:bg-primary hover:text-background-dark transition-colors">Tandai</button>}
                       </div>
                       <h4 className={`text-white font-bold text-base mb-1 ${task.status === 'done' ? 'line-through text-gray-400' : ''}`}>{task.title}</h4>
                       <p className="text-text-secondary text-sm">{task.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="bg-surface-dark p-6 rounded-xl text-center border border-white/5">
                <span className="material-symbols-outlined text-gray-500 text-4xl mb-2">event_busy</span>
                <p className="text-gray-400 text-sm">Tidak ada jadwal aktif.</p>
             </div>
           )}

        </div>
      </main>

      {/* FAB */}
      <div className="fixed bottom-6 right-6 z-40 max-w-md mx-auto w-full flex justify-end px-6 pointer-events-none">
        <button onClick={handleFabClick} className="pointer-events-auto flex items-center gap-2 bg-primary hover:bg-[#1fd465] text-background-dark px-5 py-4 rounded-full shadow-xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95 font-bold">
          <span className="material-symbols-outlined">edit_note</span>
          <span>Catat Aktivitas</span>
        </button>
      </div>

    </div>
  );
};
