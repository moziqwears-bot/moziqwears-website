import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CategoryPageProps {
  categoryName: string;
  products: Product[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryName, products }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <a 
          href="#/"
          onClick={(e) => handleNavClick(e, '#/')}
          className="text-brand-tan hover:underline mb-4 inline-block"
        >
          &larr; Back to Collections
        </a>
        <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-brand-tan">{categoryName}</h1>
        <div className="w-24 h-1 bg-brand-tan mx-auto mt-4"></div>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-400">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;