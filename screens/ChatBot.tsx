import React, { useState, useRef, useEffect } from 'react';
import { ScreenName } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { GoogleGenAI } from "@google/genai";

interface ChatBotProps {
  onNavigate: (screen: ScreenName) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t.bot.welcome,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      // Note: In a real production build, ensure process.env.API_KEY is available.
      // For this demo, we assume the environment variable is set.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const systemInstruction = language === 'id' 
        ? "Anda adalah AgriBot, konsultan pertanian ahli untuk aplikasi AgriNoir. Jawablah pertanyaan petani dengan ramah, praktis, dan akurat. Topik meliputi: budidaya padi/jagung/cabai, penanganan hama, pemupukan, dan harga pasar. Jawab dalam Bahasa Indonesia."
        : "You are AgriBot, an expert agricultural consultant for the AgriNoir app. Answer farmers' questions in a friendly, practical, and accurate manner. Topics include: rice/corn/chili cultivation, pest management, fertilization, and market prices. Answer in English.";

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: inputText,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'id' ? "Maaf, terjadi kesalahan koneksi. Silakan coba lagi." : "Sorry, a connection error occurred. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-background-dark min-h-screen text-white font-display flex flex-col pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <button onClick={() => onNavigate(ScreenName.HOME)} className="p-1 rounded-full hover:bg-white/10 transition-colors mr-1">
               <span className="material-symbols-outlined text-gray-300">arrow_back</span>
            </button>
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
               <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
            </div>
            <div>
               <h2 className="text-lg font-bold leading-tight">{t.bot.title}</h2>
               <p className="text-xs text-primary flex items-center gap-1">
                 <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                 Online
               </p>
            </div>
         </div>
         <button onClick={() => setMessages([])} className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400">
            <span className="material-symbols-outlined">restart_alt</span>
         </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
             <div className={`max-w-[80%] rounded-2xl p-4 ${
               msg.sender === 'user' 
                 ? 'bg-primary text-background-dark rounded-tr-sm' 
                 : 'bg-surface-dark border border-white/10 rounded-tl-sm'
             }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                  {msg.text}
                </p>
                <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-black/60' : 'text-gray-500'}`}>
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
             </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-surface-dark border border-white/10 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="size-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="size-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="size-2 bg-primary rounded-full animate-bounce"></div>
                </div>
                <span className="text-xs text-gray-400">{t.bot.thinking}</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-background-dark/95 backdrop-blur-sm border-t border-white/5">
         <div className="flex gap-2 items-end max-w-md mx-auto">
            <div className="flex-1 bg-surface-dark border border-white/10 rounded-2xl flex items-center p-1 focus-within:border-primary/50 transition-colors">
               <textarea 
                 value={inputText}
                 onChange={(e) => setInputText(e.target.value)}
                 onKeyDown={handleKeyPress}
                 placeholder={t.bot.placeholder}
                 className="w-full bg-transparent border-none text-white text-sm focus:ring-0 resize-none max-h-24 py-3 px-3 placeholder:text-gray-500"
                 rows={1}
               />
               <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">add_photo_alternate</span>
               </button>
            </div>
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className={`size-12 rounded-full flex items-center justify-center shrink-0 transition-all ${
                inputText.trim() && !isLoading
                  ? 'bg-primary text-background-dark shadow-lg shadow-primary/20 hover:scale-105 active:scale-95' 
                  : 'bg-surface-dark text-gray-600 cursor-not-allowed'
              }`}
            >
               <span className="material-symbols-outlined">send</span>
            </button>
         </div>
      </div>
    </div>
  );
};