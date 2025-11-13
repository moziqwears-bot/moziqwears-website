// FIX: Import `ReactElement` to resolve type error for JSX elements in a .ts file.
import type { ReactElement } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrls: string[];
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  // FIX: Use `ReactElement` instead of `JSX.Element` which was causing a namespace error.
  icon: ReactElement;
}