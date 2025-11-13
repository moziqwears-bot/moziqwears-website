import React from 'react';
import { Product, SocialLink } from './types';

/*
  MANUAL CONTENT MANAGEMENT
  ===========================

 {
    id: 1,
    name: ' ABC',
    description: 'ABCDEF.',
    imageUrls: [
      'https://res.cloudinary.com/1',
    ],
    category: 'Gloves',
  },
  
*/

const optimizeUrl = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url.replace('https://images.weserv.nl/?url=', ''))}&w=800&q=75&output=webp`;
const optimizeCloudinaryUrl = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=800&q=75&output=webp`;


export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Black Leather Gloves',
    description: 'Premium black leather gloves with a sleek finish, offering warmth, comfort, and timeless style for everyday or formal wear.',
    imageUrls: [
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763044293/WhatsApp_Image_2025-11-13_at_12.45.55_PM_gas6lt.jpg',
    ],
    category: 'Gloves',
  },
  {
    id: 2,
    name: 'Black Leather Belt',
    description: 'Lehght: 42 Inches\n  Width: 40mm \n Thickness: 3.5/4mm \n\n Stylish black leather belt with a matte buckle — perfect for both casual and formal wear.',
    imageUrls: [
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1762879924/WhatsApp_Image_2025-11-10_at_3.33.59_PM_1_vn73u0.jpg',
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1762879925/WhatsApp_Image_2025-11-10_at_3.34.00_PM_zhlkdv.jpg',
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1762879757/WhatsApp_Image_2025-11-10_at_3.34.00_PM_2_od6wgj.jpg'
    ],
    category: 'Belts',
  },
{
    id: 3,
    name: 'Black Leather Driving Gloves',
    description: 'Sleek black leather gloves featuring perforated detailing and a secure strap closure — perfect for stylish and comfortable driving.',
    imageUrls: [
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763044292/WhatsApp_Image_2025-11-13_at_12.43.43_PM_hnb27e.jpg'
    ],
      category: 'Gloves',
  },

  {
    id: 4,
    name: 'Leather Belt',
    description: 'Classic leather belt with a polished buckle, designed for durability and timeless style — perfect for both casual and formal outfits.',
    imageUrls: [
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763049786/WhatsApp_Image_2025-11-13_at_8.49.23_PM_px3qoa.jpg',
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763050779/WhatsApp_Image_2025-11-13_at_8.49.23_PM_1_hthkcp.jpg'
    ],
      category: 'Belts',
  },
   {
    id: 5,
    name: 'Brown Leather Wallet',
    description: 'Classic brown leather wallet with a smooth finish and multiple compartments — combining timeless style with everyday practicality.',
    imageUrls: [
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763050779/WhatsApp_Image_2025-11-13_at_8.53.29_PM_xdcijl.jpg',
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763050779/WhatsApp_Image_2025-11-13_at_8.53.28_PM_xsux7a.jpg',
      'https://res.cloudinary.com/dvgrdwofp/image/upload/v1763050779/WhatsApp_Image_2025-11-13_at_8.53.28_PM_1_ha2shb.jpg'
    ],
      category: 'Wallets',
  },
  
];

const socialIconClasses = "h-6 w-6 text-brand-light group-hover:text-brand-tan transition-colors duration-300";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:moziqwears@gmail.com',
    icon: (
      <svg className={socialIconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+923241601181', // Replace with your WhatsApp number
    icon: (
      <svg className={socialIconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61583091034070', // Replace with your Facebook page
    icon: (
        <svg className={socialIconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/moziqwear.55', // Replace with your Instagram profile
    icon: (
        <svg className={socialIconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8C2 4.68629 4.68629 2 8 2ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM16.5 6C15.9477 6 15.5 6.44772 15.5 7C15.5 7.55228 15.9477 8 16.5 8C17.0523 8 17.5 7.55228 17.5 7C17.5 6.44772 17.0523 6 16.5 6Z"/>
        </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@moziq.wears', // Replace with your TikTok username
    icon: (
      <svg className={socialIconClasses} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.45a6.34 6.34 0 0 0-5.86 6.33 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V10.2a4.83 4.83 0 0 1 3.77-3.51v-3.45a8.25 8.25 0 0 0-3.45-.63Z"/>
      </svg>
    ),
  },
];
