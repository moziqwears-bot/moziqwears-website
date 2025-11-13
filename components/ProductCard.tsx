import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const href = `#/product/${product.id}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    e.preventDefault();
    window.location.hash = targetHref;
  };
  
  return (
    <a 
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className="bg-gray-800/50 rounded-lg overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-brand-tan/20 transform hover:-translate-y-2 flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-brand-tan text-brand-dark font-bold px-3 py-1 m-4 rounded-full text-sm">
          {product.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold font-cinzel text-brand-tan mb-2">{product.name}</h3>
        <p className="text-gray-300 mb-4 h-24 overflow-hidden whitespace-pre-line">{product.description}</p>
        <div className="mt-auto pt-4">
          <span className="text-2xl font-bold text-white">{product.price}</span>
          <p className="text-brand-tan mt-2 font-semibold">View Details &rarr;</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;