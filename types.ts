// Add React import to provide the namespace for React.ReactNode type
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background?: string;
}

export enum DiagnosticStatus {
  IDLE = 'IDLE',
  SCANNING = 'SCANNING',
  ANALYZING = 'ANALYZING',
  COMPLETED = 'COMPLETED'
}

export interface MarketStats {
  label: string;
  value: number;
  year: string;
}