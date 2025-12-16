import React, { useEffect, useState } from 'react';
import { ScreenName } from '../types';

interface WeatherProps {
  onNavigate: (screen: ScreenName) => void;
}

// Helper untuk mapping kode cuaca WMO dari Open-Meteo ke Icon & Label
const getWeatherInfo = (code: number) => {
  if (code === 0) return { label: 'Cerah', icon: 'wb_sunny', color: 'text-yellow-400', bg: 'bg-yellow-400' };
  if (code === 1 || code === 2 || code === 3) return { label: 'Berawan', icon: 'partly_cloudy_day', color: 'text-blue-200', bg: 'bg-blue-400' };
  if (code === 45 || code === 48) return { label: 'Berkabut', icon: 'foggy', color: 'text-gray-400', bg: 'bg-gray-400' };
  if (code >= 51 && code <= 67) return { label: 'Hujan Ringan', icon: 'rainy', color: 'text-blue-400', bg: 'bg-blue-500' };
  if (code >= 71 && code <= 77) return { label: 'Salju', icon: 'weather_snowy', color: 'text-white', bg: 'bg-white' };
  if (code >= 80 && code <= 82) return { label: 'Hujan Deras', icon: 'rainy', color: 'text-blue-600', bg: 'bg-blue-700' };
  if (code >= 95) return { label: 'Badai Petir', icon: 'thunderstorm', color: 'text-yellow-500', bg: 'bg-yellow-600' };
  return { label: 'Mendung', icon: 'cloud', color: 'text-gray-300', bg: 'bg-gray-500' };
};

// Helper format hari
const formatDay = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth();
  
  if (isToday) return 'Hari Ini';
  return date.toLocaleDateString('id-ID', { weekday: 'long' }); // Senin, Selasa, dst.
};

export const Weather: React.FC<WeatherProps> = ({ onNavigate }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [locationName, setLocationName] = useState('Mencari Lokasi...');
  const [dateTime, setDateTime] = useState({ date: '', time: '' });
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // 1. Set Waktu & Tanggal Real-time
    const updateTime = () => {
      const now = new Date();
      setDateTime({
        date: now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
        time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update setiap menit

    // Fungsi Fetch Data Cuaca
    const fetchWeather = async (lat: number, long: number) => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&timezone=auto`;
        
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
        setErrorMsg("Gagal memuat data cuaca.");
      } finally {
        setLoading(false);
      }
    };

    // Fungsi Fetch Nama Lokasi (Reverse Geocoding gratis)
    const fetchLocationName = async (lat: number, long: number) => {
      try {
        // Menggunakan API BigDataCloud untuk reverse geocoding gratis (client-side friendly)
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=id`);
        const data = await response.json();
        
        // Prioritas nama: Locality -> City -> PrincipalSubdivision
        const city = data.locality || data.city || data.principalSubdivision || "Lokasi Anda";
        const region = data.principalSubdivision || "";
        
        setLocationName(region ? `${city}, ${region}` : city);
      } catch (error) {
        console.error("Gagal mengambil nama lokasi", error);
        setLocationName(`${lat.toFixed(2)}, ${long.toFixed(2)}`);
      }
    };

    // 2. Get Geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error Geolocation:", error);
          setErrorMsg("Akses lokasi ditolak. Menampilkan lokasi default.");
          setLocationName("Lembang, Jawa Barat (Default)");
          fetchWeather(-6.8156, 107.6180); // Default fallback
        }
      );
    } else {
      setErrorMsg("Browser tidak mendukung geolokasi.");
      setLocationName("Lembang, Jawa Barat (Default)");
      fetchWeather(-6.8156, 107.6180);
    }

    return () => clearInterval(interval);
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="bg-background-dark min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <span className="material-symbols-outlined text-4xl animate-spin text-primary">progress_activity</span>
          <p className="text-sm font-medium text-gray-400">Memuat data cuaca lokasi Anda...</p>
        </div>
      </div>
    );
  }

  // Data Processing
  const current = weatherData?.current;
  const currentWeather = getWeatherInfo(current?.weather_code || 0);
  const hourly = weatherData?.hourly;
  const daily = weatherData?.daily;

  // Get next 5 hours
  const currentHourIndex = new Date().getHours();
  const nextHours = hourly?.time.slice(currentHourIndex, currentHourIndex + 6).map((t: string, i: number) => ({
    time: i === 0 ? 'Sekarang' : new Date(t).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    temp: hourly.temperature_2m[currentHourIndex + i],
    code: hourly.weather_code[currentHourIndex + i],
    precip: hourly.precipitation_probability[currentHourIndex + i]
  })) || [];

  return (
    <div className="bg-background-dark font-display text-white antialiased overflow-x-hidden min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sticky top-0 z-50 bg-background-dark/95 backdrop-blur-sm">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center max-w-[70%]">
          <div className="flex items-center gap-1 justify-center text-center">
            {errorMsg ? <span className="size-2 rounded-full bg-yellow-500"></span> : <span className="material-symbols-outlined text-primary text-sm">my_location</span>}
            <h2 className="text-lg font-bold leading-tight tracking-tight text-white truncate">{locationName}</h2>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span>
            <span className="text-xs font-medium text-text-secondary">{dateTime.date}</span>
          </div>
        </div>
        <button onClick={() => alert('Tidak ada peringatan cuaca baru.')} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl text-white">notifications</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-6 space-y-6">
        {/* Error Toast if generic */}
        {errorMsg && (
           <div className="px-4">
             <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 text-xs p-2 rounded-lg text-center">
               {errorMsg}
             </div>
           </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center px-4 pt-2">
          <div className="text-xs font-medium bg-surface-dark/50 text-text-secondary px-3 py-1 rounded-full mb-4 border border-white/5">
            Diperbarui: {dateTime.time}
          </div>
          <div className="flex flex-col items-center justify-center relative w-full py-2">
             <div className="flex items-center justify-center gap-4">
                <span className={`material-symbols-outlined text-8xl ${currentWeather.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                  {currentWeather.icon}
                </span>
                <div className="flex flex-col">
                  <h1 className="text-7xl font-bold tracking-tighter text-white">{Math.round(current.temperature_2m)}°</h1>
                  <span className="text-xl font-medium text-text-secondary">{currentWeather.label}</span>
                </div>
             </div>
             <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg text-text-secondary">thermostat</span>
                  <span className="text-sm font-medium text-white">Terasa {Math.round(current.apparent_temperature)}°</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg text-text-secondary">water_drop</span>
                  <span className="text-sm font-medium text-white">Hujan {current.precipitation}mm</span>
                </div>
             </div>
          </div>
        </div>

        {/* Insight Card */}
        <div className="px-4">
          <div className="group relative overflow-hidden rounded-xl bg-surface-dark border border-white/5 shadow-lg cursor-pointer hover:border-primary/50 transition-colors" onClick={() => onNavigate(ScreenName.PLANTING_GUIDE)}>
             <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
             <div className="flex flex-col sm:flex-row p-5 gap-5">
                <div className="flex-1 flex flex-col gap-2">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-primary text-xl">psychiatry</span>
                      <h3 className="text-white text-base font-bold leading-tight">Panduan Tanam Optimal</h3>
                   </div>
                   <p className="text-text-secondary text-sm leading-relaxed">
                     Kondisi tanah saat ini ideal. Hujan ringan diprediksi nanti sore. Waktu yang tepat untuk pemupukan susulan.
                   </p>
                   <div className="mt-2 pt-2">
                      <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 text-sm font-bold transition-all">
                        <span>Lihat Panduan</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                   </div>
                </div>
                <div className="w-full sm:w-24 h-24 sm:h-auto shrink-0 rounded-lg bg-center bg-cover relative overflow-hidden" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNwOvUdbzXBXzqv_yD6qLtHrpPj4iy_N0oBD4QX9Wedrhft6dFsEbcBFQe8DYEHE10QXdTzRsCLMh4INxT_apcvIQw-qUBujzI6yOxCdXtFUZwoFtaV1jzooK0X9Ss1Qoqa62edOPoFT82M_DGyGWRPz72dHljJKnY2nFc-5FWdE_CcvAVp4cCsfR_Egu7WM8I1LwB9HDZDf_eMNBcwUSj7gpgdaIOLREaMDTJOzL9CA7czlKwgQL_QUlGMiGiP0zGmwiRXEnc2xY")'}}>
                   <div className="absolute inset-0 bg-black/20"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Grid Stats */}
        <div className="px-4 grid grid-cols-2 gap-3">
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">humidity_percentage</span><span className="text-sm font-medium">Kelembaban</span></div>
              <div><p className="text-2xl font-bold text-white">{current.relative_humidity_2m}%</p><p className="text-xs text-text-secondary mt-1">Normal untuk tanaman</p></div>
           </div>
           <div className="bg-surface-dark p-4 rounded-xl border border-white/5 flex flex-col justify-between h-32">
              <div className="flex items-center gap-2 text-text-secondary"><span className="material-symbols-outlined text-xl">air</span><span className="text-sm font-medium">Angin</span></div>
              <div><p className="text-2xl font-bold text-white">{current.wind_speed_10m} <span className="text-sm font-normal text-text-secondary">km/j</span></p><p className="text-xs text-text-secondary mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs rotate-45">navigation</span> Arah Barat Laut</p></div>
           </div>
        </div>

        {/* Hourly Forecast */}
        <div className="flex flex-col gap-3">
           <div className="px-4 flex justify-between items-end"><h3 className="text-white text-lg font-bold">Prakiraan Per Jam</h3><button className="text-primary text-sm font-medium">Lihat Semua</button></div>
           <div className="overflow-x-auto pb-4 px-4 no-scrollbar">
              <div className="flex gap-3 w-max">
                 {nextHours.map((h: any, i: number) => {
                    const info = getWeatherInfo(h.code);
                    return (
                      <div key={i} className={`flex flex-col items-center justify-between min-w-[72px] p-3 rounded-xl border ${i === 0 ? 'bg-primary text-background-dark border-primary' : 'bg-surface-dark text-white border-white/5'}`}>
                         <span className={`text-sm ${i === 0 ? 'font-bold' : 'text-text-secondary'}`}>{h.time}</span>
                         <span className="material-symbols-outlined text-2xl my-2">{info.icon}</span>
                         <span className="text-lg font-bold">{Math.round(h.temp)}°</span>
                         {h.precip > 0 && <span className="text-[10px] font-medium flex items-center"><span className="material-symbols-outlined text-[10px] mr-0.5">water_drop</span>{h.precip}%</span>}
                      </div>
                    );
                 })}
              </div>
           </div>
        </div>

        {/* Weekly Forecast */}
        <div className="px-4 pb-20">
           <h3 className="text-white text-lg font-bold mb-3">7 Hari Kedepan</h3>
           <div className="flex flex-col gap-1 bg-surface-dark rounded-xl p-2 border border-white/5">
              {daily?.time.map((t: string, idx: number) => {
                 const info = getWeatherInfo(daily.weather_code[idx]);
                 const precipProb = daily.precipitation_probability_max[idx];
                 return (
                   <div key={idx} className="flex items-center justify-between p-3 border-b border-white/5 last:border-0">
                      <span className="text-white font-medium w-24">{formatDay(t)}</span>
                      <div className="flex flex-1 items-center gap-3">
                         <span className={`material-symbols-outlined text-xs ${precipProb > 50 ? 'text-blue-400' : 'text-text-secondary'}`}>water_drop</span>
                         <span className={`text-xs ${precipProb > 50 ? 'text-blue-400' : 'text-text-secondary'} font-medium w-8`}>{precipProb}%</span>
                         <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                           <div className={`${precipProb > 50 ? 'bg-blue-400' : 'bg-primary'} h-full rounded-full`} style={{width: `${precipProb}%`}}></div>
                         </div>
                      </div>
                      <div className="flex items-center justify-end w-24 gap-3">
                         <span className={`material-symbols-outlined ${info.color}`}>{info.icon}</span>
                         <div className="text-right w-12"><span className="text-white font-bold">{Math.round(daily.temperature_2m_max[idx])}°</span><span className="text-text-secondary text-sm ml-1">{Math.round(daily.temperature_2m_min[idx])}°</span></div>
                      </div>
                   </div>
                 );
              })}
           </div>
        </div>

      </div>
    </div>
  );
};