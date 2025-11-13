import React from 'react';
import Hero from './Hero';
import { INITIAL_PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  const uniqueCategories = [...new Set(INITIAL_PRODUCTS.map(p => p.category))];
  const categories = uniqueCategories.map(categoryName => {
    const productInCategory = INITIAL_PRODUCTS.find(p => p.category === categoryName);
    return {
      name: categoryName,
      href: `#/category/${categoryName.toLowerCase()}`,
      imageUrl: productInCategory ? productInCategory.imageUrls[0] : 'https://picsum.photos/seed/placeholder/600/800', // Fallback image
    };
  });

  return (
    <>
      <Hero />
      <section id="categories" className="py-16 sm:py-24 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-brand-tan">Our Collections</h2>
            <div className="w-24 h-1 bg-brand-tan mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => (
              <a 
                key={category.name} 
                href={category.href} 
                onClick={(e) => handleNavClick(e, category.href)}
                className="group block relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-brand-tan/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img src={category.imageUrl} alt={category.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-3xl font-cinzel text-white font-bold tracking-wider">{category.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;