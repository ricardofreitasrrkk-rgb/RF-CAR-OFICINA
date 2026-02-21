
import React from 'react';

export enum DiagnosticStatus {
  IDLE = 'idle',
  SCANNING = 'scanning',
  ANALYZING = 'analyzing',
  RESULT = 'result',
  REPORT = 'report'
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  quantity: number;
}

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export interface AppContextType {
  user: {
    name: string;
    balance: number;
    points: number;
    vehicle: string;
  };
  cart: CartItem[];
  notifications: Notification[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  addNotification: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
  clearCart: () => void;
}

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background?: string;
}

export interface AppViewState {
  view: 'home' | 'diag' | 'store' | 'academy' | 'luck';
}

export interface MarketStats {
  label: string;
  value: string;
  trend: string;
}
