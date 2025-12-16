export enum ScreenName {
  LANDING = 'LANDING',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  HOME = 'HOME',
  MY_FARM = 'MY_FARM',
  LAND_DETAIL = 'LAND_DETAIL',
  WEATHER = 'WEATHER',
  EDUCATION = 'EDUCATION',
  MARKETPLACE = 'MARKETPLACE',
  MARKET_DETAIL = 'MARKET_DETAIL',
  ACCOUNT = 'ACCOUNT',
  SELL_PRODUCT = 'SELL_PRODUCT',
  SUBSCRIPTION = 'SUBSCRIPTION',
  FARMER_CARD = 'FARMER_CARD',
  PLANTING_GUIDE = 'PLANTING_GUIDE',
  PEST_DETAIL = 'PEST_DETAIL',
  TASK_DETAIL = 'TASK_DETAIL',
  EDIT_PROFILE = 'EDIT_PROFILE',
  ORDER_TRACKING = 'ORDER_TRACKING',
}

export interface Task {
  title: string;
  desc: string;
  date: string;
  status: 'done' | 'pending' | 'warning';
  type: 'fertilizer' | 'water' | 'pest' | 'harvest' | 'general';
}

export interface LandPlot {
  id: string;
  name: string;
  crop: string;
  size: string;
  status: string;
  statusColor: string;
  statusIcon: string;
  moisture: string;
  temp: string;
  ph: number;
  image: string;
  location?: string;
  plantingDate?: string;
  harvestEstimate?: string;
  isHarvest?: boolean;
  growthProgress?: number; // 0-100
  tasks?: Task[];
  chartData?: Array<{ name: string; value: number }>;
  detail?: string; // Short description
}

export interface MarketItem {
  id: string;
  name: string;
  price: string;
  unit: string;
  location: string;
  rating?: string | number;
  image: string;
  type?: 'sell' | 'buy';
  description?: string;
  seller?: string;
  soldCount?: string;
}

export interface VideoTutorial {
  id: string;
  title: string;
  category: string;
  views: string;
  duration: string;
  thumbnail: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  isOffline?: boolean;
  image: string;
}
