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
import { BottomNav } from './components/BottomNav';

const App: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-background-dark text-white">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={navigate} />
    </div>
  );
};

export default App;
