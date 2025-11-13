import React, { useState } from 'react';
import { Product } from '../types';
import { SOCIAL_LINKS } from '../constants';

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.imageUrls[0]);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Math.min(99, prev + 1));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const backHref = `#/category/${product.category.toLowerCase()}`;

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
       <div className="mb-8">
         <a 
            href={backHref}
            onClick={(e) => handleNavClick(e, backHref)}
            className="text-brand-tan hover:underline"
          >
            &larr; Back to {product.category}
          </a>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg mb-4">
            <img src={activeImage} alt={product.name} className="w-full h-auto object-cover aspect-square" />
          </div>
          <div className="flex gap-4">
            {product.imageUrls.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setActiveImage(img)}
                className={`rounded-lg overflow-hidden border-2 ${activeImage === img ? 'border-brand-tan' : 'border-transparent'} transition-all duration-200 hover:opacity-80`}
                aria-label={`View image ${index + 1} of ${product.name}`}
              >
                <img src={img} alt={`${product.name} preview ${index + 1}`} className="w-24 h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-brand-tan mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-white mb-6">{product.price}</p>
          <div className="prose prose-invert text-gray-300 mb-8">
            <p className="whitespace-pre-line">{product.description}</p>
          </div>

          <div className="flex items-center gap-4 mb-8">
             <span className="font-semibold">Quantity:</span>
             <div className="flex items-center border border-brand-tan rounded-full">
               <button onClick={handleDecrement} className="w-10 h-10 text-brand-tan font-bold rounded-l-full hover:bg-brand-tan hover:text-brand-dark transition-colors duration-300 focus:outline-none flex items-center justify-center" aria-label="Decrease quantity">-</button>
               <span className="w-12 text-center text-white font-semibold" aria-live="polite">{quantity}</span>
               <button onClick={handleIncrement} className="w-10 h-10 text-brand-tan font-bold rounded-r-full hover:bg-brand-tan hover:text-brand-dark transition-colors duration-300 focus:outline-none flex items-center justify-center" aria-label="Increase quantity">+</button>
             </div>
          </div>
          
          <div className="bg-black/20 p-6 rounded-lg">
            <h3 className="text-2xl font-cinzel text-brand-tan mb-3">Place Your Order</h3>
            <p className="text-gray-400 mb-4">
              To purchase this item, please reach out via email or on any of our social platforms. We're ready to assist you!
            </p>
            <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;