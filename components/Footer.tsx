import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <h3 className="text-3xl font-cinzel text-brand-tan mb-4">Connect With Us</h3>
        <p className="max-w-xl mx-auto mb-8">
          See something you like? Reach out via email or on any of our social platforms to place an order or ask a question. We're here to help!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-3 bg-gray-800/50 rounded-full group hover:bg-brand-brown transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} Moziq Wears. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
