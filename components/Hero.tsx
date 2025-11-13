import React from 'react';

const Hero: React.FC = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.weserv.nl/?url=images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&w=1920&q=75&output=webp')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-brand-tan drop-shadow-lg mb-4">Timeless Craftsmanship</h2>
        <p className="text-lg md:text-2xl font-light max-w-2xl mb-8 drop-shadow-md">
          Discover our collection of premium leather goods, designed to last a lifetime.
        </p>
        <button
          onClick={scrollToCategories}
          className="bg-brand-tan text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;