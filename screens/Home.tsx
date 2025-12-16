import React from 'react';
import { ScreenName } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (screen: ScreenName) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNotification = () => {
    alert("Anda tidak memiliki notifikasi baru saat ini.");
  };

  return (
    <div className="bg-background-dark font-display text-white transition-colors duration-200 min-h-screen pb-24">
      {/* TopAppBar */}
      <div className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3" onClick={() => onNavigate(ScreenName.ACCOUNT)}>
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOv1fqINZkaf2AenWurRtOkDN55iyXMYks8oxjBZ8Gmrioi2B8UOvpxLTePcTHQ1YCPeUsK_oamsfLvv070Xj-0ZflLbh1oGfjqsvYLYLffEExZAbtvqe07lzBTYO1TlLyRlCfH7COaTDI7KPzjcWXLFvthvG-QYXcmGL45ffrmLJkWnwY8B1Pp5NeFEqHtGqHPvBIScfJj0j13oUQMFg7aY1y6PiyNqEwAKaTQ0GBAlEX0Ml_116jjRw91FOCqT7KNxNnXWpehUc")' }}></div>
          <div className="flex flex-col cursor-pointer">
            <p className="text-xs text-gray-400 font-normal">{t.home.welcome}</p>
            <h2 className="text-white text-lg font-bold leading-tight">Pak Budi</h2>
          </div>
        </div>
        <button onClick={handleNotification} className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors relative">
          <span className="material-symbols-outlined text-white">notifications</span>
          <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-background-dark"></span>
        </button>
      </div>

      {/* Weather Card */}
      <div className="px-4 pt-6 pb-2" onClick={() => onNavigate(ScreenName.WEATHER)}>
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-surface-dark group cursor-pointer hover:shadow-xl transition-all">
          <div className="absolute inset-0 bg-center bg-cover z-0 opacity-30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQE4BGB9qlyMcXayyG82-071Skf4Hi0ioLz43cB46Ps7_o43VyeNd9crokvc4_byhqMfgs4Up2rH8AWaQ-FFdh2uvvu3f48r1RUIzmyryMrbO7Z-luEnxbf_Uwa5mXWnxrUd-zxznXEDvls5kxiGyQQRLjf-cLZl4k_R_y2uGZHcYF78XnFxMAf2H5fMWV-mD956ihec-iKUoeQ_wC5KCEFQ6BAapj8XOz-NZXhBEJqBD3DKMTJz69rfHFk5W5GlS03N3ODAlDCCs")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 to-background-dark/20 z-0"></div>
          <div className="relative z-10 p-5 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-primary font-medium text-sm mb-1">
                <span className="material-symbols-outlined text-lg">location_on</span>
                <span>Lembang, Jawa Barat</span>
              </div>
              <h3 className="text-4xl font-bold text-white">28°C</h3>
              <p className="text-gray-300 font-medium">Berawan</p>
              <p className="text-xs text-gray-400 mt-2">Hujan diprediksi pukul 15:00</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <span className="material-symbols-outlined text-5xl text-yellow-500 drop-shadow-sm">partly_cloudy_day</span>
              <div className="flex flex-col items-end text-xs font-medium text-gray-300">
                <span>Kelembaban: 65%</span>
                <span>Angin: 12km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header: Land Status */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2">
        <h3 className="text-white text-lg font-bold tracking-tight">{t.home.landStatus}</h3>
        <button onClick={() => onNavigate(ScreenName.MY_FARM)} className="text-primary text-sm font-semibold hover:underline">{t.home.viewAll}</button>
      </div>

      {/* Carousel: Land Status */}
      <div className="flex overflow-x-auto pb-4 px-4 gap-4 scrollbar-hide snap-x snap-mandatory no-scrollbar">
        {/* Card 1 */}
        <div onClick={() => onNavigate(ScreenName.LAND_DETAIL)} className="snap-center shrink-0 w-[280px] bg-surface-dark rounded-xl p-3 shadow-sm border border-gray-800 cursor-pointer active:scale-[0.98] transition-transform">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
            <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWvlAYUXyyyQ1j7QgtPC0gjvr-j6XprNZFsQ_7URtki1AzFlf-ZP1eEUfBbwh0HBJTMFWDlAfIzGlfPaJefZe4rTreLuE1QFKAfROwuva3tbLHlwh2GY0e2CXFfKLBwF8UX2hxr1d7OTnqbtFbf-R1941eCfirK4TYO1zg9qQUBzeH2LMQYMNAqSqJuf9t8UeHWSncQqPrnAMgx0QfgPSKR1aaiAZdhKe7OWCp6hbeSHbdliOF8y_aLI-lCffmEywc15PdNKMp1g8")' }}></div>
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-primary text-xs font-bold px-2 py-1 rounded">Optimal</div>
          </div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-white font-bold text-base">Sawah Padi A</h4>
              <p className="text-gray-400 text-xs">Padi IR64</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-background-dark/50 p-2 rounded-lg">
              <p className="text-[10px] text-gray-500 uppercase font-bold">Kelembaban</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-blue-400 text-sm">water_drop</span>
                <span className="text-sm font-bold text-white">65%</span>
              </div>
            </div>
            <div className="bg-background-dark/50 p-2 rounded-lg">
              <p className="text-[10px] text-gray-500 uppercase font-bold">pH Tanah</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-400 text-sm">science</span>
                <span className="text-sm font-bold text-white">6.2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={() => onNavigate(ScreenName.LAND_DETAIL)} className="snap-center shrink-0 w-[280px] bg-surface-dark rounded-xl p-3 shadow-sm border border-gray-800 cursor-pointer active:scale-[0.98] transition-transform">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
            <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-500" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQbLJlPXruM1qG9kMqAZ7A6ypysCwFPqiw2LVaqqLSWhNxMFk-blEiNun-fTvPvhrYj6PRU3JGT95YtC3_21eymC9WYCA5JDuao00cPrzjPDwmN_v-vuUjj2hVpe_pgoWzQfKQmxmc53JoqnhqVjlPb4kV-br8qkpf-vyQ1MFsAyD5kHUT3oNTQgPCZLX_EulgCXJX-toeHCtQOPB98unQOoGt27FEwqVGWgeUCw45U3NK_gcBfsdq7OkzH9AxxDmKTrb-NE7pNkM")' }}></div>
            <div className="absolute top-2 right-2 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded">Perlu Air</div>
          </div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-white font-bold text-base">Kebun Cabai B</h4>
              <p className="text-gray-400 text-xs">Cabai Merah Keriting</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-red-900/20 p-2 rounded-lg border border-red-900/30">
              <p className="text-[10px] text-red-400 uppercase font-bold">Kelembaban</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-red-500 text-sm">warning</span>
                <span className="text-sm font-bold text-red-200">40%</span>
              </div>
            </div>
            <div className="bg-background-dark/50 p-2 rounded-lg">
              <p className="text-[10px] text-gray-500 uppercase font-bold">pH Tanah</p>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-green-400 text-sm">science</span>
                <span className="text-sm font-bold text-white">6.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header: Action Required */}
      <h3 className="text-white text-lg font-bold tracking-tight px-4 pt-4 pb-2">{t.home.actionRequired}</h3>
      <div className="flex flex-col gap-3 px-4">
        {/* High Priority Alert */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-900/10 border-l-4 border-red-500 shadow-sm">
          <div className="shrink-0 bg-red-900/40 p-2 rounded-full text-red-400">
            <span className="material-symbols-outlined">pest_control</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-white">Hama Terdeteksi</h4>
            <p className="text-xs text-gray-300 mt-1 mb-3">Ulat Grayak terdeteksi di Blok B. Disarankan tindakan segera.</p>
            <button onClick={() => onNavigate(ScreenName.PEST_DETAIL)} className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded-lg w-full sm:w-auto transition-colors">Lihat Detail</button>
          </div>
        </div>
        {/* Task Alert */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-dark border border-gray-800 shadow-sm">
          <div className="shrink-0 bg-primary/20 p-2 rounded-full text-green-400">
            <span className="material-symbols-outlined">calendar_month</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-bold text-white">Jadwal Pemupukan</h4>
              <span className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded">Besok</span>
            </div>
            <p className="text-xs text-gray-300 mt-1 mb-3">Jadwalkan pemupukan NPK untuk Sawah Padi A.</p>
            <button onClick={() => onNavigate(ScreenName.TASK_DETAIL)} className="bg-primary hover:bg-green-400 text-black text-xs font-bold py-2 px-4 rounded-lg w-full sm:w-auto transition-colors">Tandai Selesai</button>
          </div>
        </div>
      </div>

      {/* Section Header: Market Prices */}
      <div className="flex items-center justify-between px-4 pt-6 pb-2 cursor-pointer" onClick={() => onNavigate(ScreenName.MARKETPLACE)}>
        <h3 className="text-white text-lg font-bold tracking-tight">{t.home.marketPrices}</h3>
        <span className="text-xs text-gray-500 hover:text-primary transition-colors">{t.home.updated} 10m ago</span>
      </div>
      <div className="flex overflow-x-auto pb-4 px-4 gap-3 scrollbar-hide no-scrollbar">
        {[
          { name: 'Padi / kg', price: 'Rp 12,000', change: '+2.5%', trend: 'up', color: 'green' },
          { name: 'Cabai / kg', price: 'Rp 45,000', change: '-5.1%', trend: 'down', color: 'red' },
          { name: 'Jagung / kg', price: 'Rp 8,500', change: '0.0%', trend: 'flat', color: 'gray' }
        ].map((item, idx) => (
          <div key={idx} onClick={() => onNavigate(ScreenName.MARKETPLACE)} className="flex flex-col min-w-[140px] p-3 rounded-lg bg-surface-dark border border-gray-800 cursor-pointer hover:border-white/20 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">{item.name}</span>
              <span className={`material-symbols-outlined text-${item.color}-500 text-base`}>
                {item.trend === 'up' ? 'trending_up' : item.trend === 'down' ? 'trending_down' : 'trending_flat'}
              </span>
            </div>
            <p className="text-white font-bold text-lg">{item.price}</p>
            <p className={`text-xs text-${item.color}-500 font-medium`}>{item.change}</p>
          </div>
        ))}
      </div>

      {/* Latest Insights */}
      <h3 className="text-white text-lg font-bold tracking-tight px-4 pt-2 pb-3">{t.home.insights}</h3>
      <div className="px-4 pb-6 flex flex-col gap-4">
        <div onClick={() => onNavigate(ScreenName.EDUCATION)} className="flex gap-3 bg-surface-dark rounded-lg p-3 shadow-sm border border-gray-800 cursor-pointer hover:bg-surface-highlight transition-colors">
          <div className="shrink-0 w-24 h-24 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpH8eZ3t5VwA7O-gqxOlsZ-5ZLHOcAVxqRPpmA0d45WdB0nR-nl1pAdL3rR5jjWS8hyQTLnScN8qIopW39kTqc-zoWs5oChmA6kkIe0smEQWGXoNfys6tOQXtDUe8NcLtQyhxCqiiLbMVPkRkoQ5Gsml9dWt0hDxjVQP5u5Tne5Yp4XecAX0Gis4ZlkXP1nI5KcUe8joPu3fLoum0pIS9KGVhR6JOTsMcOkZzzVyS_76W71p4qxA2B7QG_msw-TAbnEHZ2yB3Mpdo")' }}></div>
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Pemerintah</span>
              <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">Distribusi pupuk subsidi baru dimulai minggu depan</h4>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span className="material-symbols-outlined text-base">schedule</span>
              <span>2 jam lalu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};