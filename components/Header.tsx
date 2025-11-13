import React, { useState } from 'react';
import Logo from './Logo';
import { INITIAL_PRODUCTS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [...new Set(INITIAL_PRODUCTS.map(p => p.category))];
  const navLinks = categories.map(category => ({
    name: category,
    href: `#/category/${category.toLowerCase()}`
  }));

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a 
          href="#/" 
          onClick={(e) => handleNavClick(e, '#/')}
          aria-label="Go to homepage"
        >
          <Logo />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-light font-semibold hover:text-brand-tan transition-colors duration-300 tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-light focus:outline-none"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-brand-dark z-50 flex flex-col items-center justify-center md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-brand-light focus:outline-none"
            aria-label="Close navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-light text-2xl font-semibold hover:text-brand-tan transition-colors duration-300 tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;