import React, { useState } from 'react';
import { ScreenName, LandPlot, MarketItem } from './types';
import { Landing } from './screens/Landing';
import { Auth } from './screens/Login';
import { Home } from './screens/Home';
import { MyFarm } from './screens/MyFarm';
import { LandDetail } from './screens/LandDetail';
import { Weather } from './screens/Weather';
import { Education } from './screens/Education';
import { Marketplace } from './screens/Marketplace';
import { MarketProductDetail } from './screens/MarketProductDetail';
import { Account } from './screens/Account';
import { SellProduct } from './screens/SellProduct';
import { Subscription } from './screens/Subscription';
import { FarmerCard } from './screens/FarmerCard';
import { PlantingGuide } from './screens/PlantingGuide';
import { PestDetail } from './screens/PestDetail';
import { TaskDetail } from './screens/TaskDetail';
import { EditProfile } from './screens/EditProfile';
import { OrderTracking } from './screens/OrderTracking';
import { ChatBot } from './screens/ChatBot';
import { BottomNav } from './components/BottomNav';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.LANDING);
  const [selectedLand, setSelectedLand] = useState<LandPlot | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MarketItem | null>(null);

  const navigate = (screen: ScreenName) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenName.LANDING:
        return <Landing onNavigate={navigate} />;
      case ScreenName.LOGIN:
      case ScreenName.SIGNUP:
      case ScreenName.FORGOT_PASSWORD:
        return <Auth initialView={currentScreen} onNavigate={navigate} />;
      case ScreenName.HOME:
        return <Home onNavigate={navigate} />;
      case ScreenName.MY_FARM:
        return <MyFarm onNavigate={navigate} onSelectLand={setSelectedLand} />;
      case ScreenName.LAND_DETAIL:
        return <LandDetail onNavigate={navigate} land={selectedLand} />;
      case ScreenName.WEATHER:
        return <Weather onNavigate={navigate} />;
      case ScreenName.EDUCATION:
        return <Education onNavigate={navigate} />;
      case ScreenName.CHAT_BOT:
        return <ChatBot onNavigate={navigate} />;
      case ScreenName.MARKETPLACE:
        return <Marketplace onNavigate={navigate} onSelectProduct={setSelectedProduct} />;
      case ScreenName.MARKET_DETAIL:
        return <MarketProductDetail onNavigate={navigate} product={selectedProduct} />;
      case ScreenName.ACCOUNT:
        return <Account onNavigate={navigate} />;
      case ScreenName.SELL_PRODUCT:
        return <SellProduct onNavigate={navigate} />;
      case ScreenName.SUBSCRIPTION:
        return <Subscription onNavigate={navigate} />;
      case ScreenName.FARMER_CARD:
        return <FarmerCard onNavigate={navigate} />;
      case ScreenName.PLANTING_GUIDE:
        return <PlantingGuide onNavigate={navigate} />;
      case ScreenName.PEST_DETAIL:
        return <PestDetail onNavigate={navigate} />;
      case ScreenName.TASK_DETAIL:
        return <TaskDetail onNavigate={navigate} />;
      case ScreenName.EDIT_PROFILE:
        return <EditProfile onNavigate={navigate} />;
      case ScreenName.ORDER_TRACKING:
        return <OrderTracking onNavigate={navigate} />;
      default:
        return <Landing onNavigate={navigate} />;
    }
  };

  // Conditions to show the AgriBot Floating Button
  const showBotFab = [
    ScreenName.HOME,
    ScreenName.MY_FARM,
    ScreenName.MARKETPLACE,
    ScreenName.EDUCATION,
    ScreenName.ACCOUNT,
    ScreenName.LAND_DETAIL
  ].includes(currentScreen);

  return (
    <div className="min-h-screen bg-background-dark text-white relative">
      {renderScreen()}
      
      {/* Floating Action Button for AgriBot */}
      {showBotFab && currentScreen !== ScreenName.CHAT_BOT && (
        <button
          onClick={() => navigate(ScreenName.CHAT_BOT)}
          className="fixed bottom-24 right-4 z-50 flex items-center justify-center size-14 rounded-full bg-surface-highlight border border-primary/50 text-primary shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all animate-in fade-in zoom-in duration-300"
        >
          <span className="material-symbols-outlined text-3xl">smart_toy</span>
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3 bg-primary"></span>
          </span>
        </button>
      )}

      <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;