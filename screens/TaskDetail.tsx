import React, { useState } from 'react';
import { ScreenName } from '../types';

interface TaskDetailProps {
  onNavigate: (screen: ScreenName) => void;
}

export const TaskDetail: React.FC<TaskDetailProps> = ({ onNavigate }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    // In a real app, update state here
    setTimeout(() => {
      onNavigate(ScreenName.HOME);
    }, 1500);
  };

  return (
    <div className="bg-background-dark min-h-screen text-white font-display pb-10">
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => onNavigate(ScreenName.HOME)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <h2 className="text-lg font-bold">Task Detail</h2>
        <div className="w-10"></div>
      </div>

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
           <div className="size-14 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
             <span className="material-symbols-outlined text-3xl">compost</span>
           </div>
           <div>
             <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">High Priority</span>
             <h1 className="text-2xl font-bold mt-1">NPK Fertilization</h1>
           </div>
        </div>

        <div className="bg-surface-dark rounded-xl p-5 border border-white/5 space-y-4 mb-6">
           <div className="flex justify-between items-center border-b border-white/5 pb-4">
             <span className="text-gray-400">Target Land</span>
             <span className="font-bold">Paddy Field A</span>
           </div>
           <div className="flex justify-between items-center border-b border-white/5 pb-4">
             <span className="text-gray-400">Scheduled</span>
             <span className="font-bold">Tomorrow, 08:00 AM</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-gray-400">Duration</span>
             <span className="font-bold">~2 Hours</span>
           </div>
        </div>

        <div className="mb-8">
           <h3 className="font-bold text-lg mb-3">Instructions</h3>
           <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
             <p>1. Prepare 50kg of NPK fertilizer (15-15-15).</p>
             <p>2. Ensure the soil is moist but not flooded (drain excess water if necessary).</p>
             <p>3. Broadcast fertilizer evenly across the field.</p>
             <p>4. Avoid applying if heavy rain is forecast within 4 hours.</p>
           </div>
        </div>

        <div className="mt-auto">
          {isCompleted ? (
            <button className="w-full h-14 rounded-xl bg-green-500 text-white font-bold text-lg flex items-center justify-center gap-2 cursor-default animate-pulse">
               <span className="material-symbols-outlined">check_circle</span>
               Completed!
            </button>
          ) : (
            <button onClick={handleComplete} className="w-full h-14 rounded-xl bg-primary text-background-dark font-bold text-lg shadow-[0_0_20px_rgba(43,238,121,0.3)] hover:bg-green-400 transition-all active:scale-[0.98]">
               Mark as Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
