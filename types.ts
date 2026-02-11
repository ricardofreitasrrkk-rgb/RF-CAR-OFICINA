
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background?: string;
}

export enum DiagnosticStatus {
  IDLE = 'idle',
  SCANNING = 'scanning',
  ANALYZING = 'analyzing',
  RESULT = 'result',
  REPORT = 'report'
}

export interface AppViewState {
  view: 'home' | 'diag' | 'store' | 'academy' | 'luck';
}

export interface MarketStats {
  label: string;
  value: string;
  trend: string;
}
