import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import ProductDetailPage from './components/ProductDetailPage';
import { INITIAL_PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const products: Product[] = INITIAL_PRODUCTS;

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = window.location.hash || '#/';
      setRoute(newRoute);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    if (route.startsWith('#/product/')) {
      const productId = parseInt(route.replace('#/product/', ''), 10);
      const product = products.find(p => p.id === productId);
      if (product) {
        return <ProductDetailPage product={product} />;
      }
    }

    if (route.startsWith('#/category/')) {
      const categorySlug = route.replace('#/category/', '');
      const decodedSlug = decodeURIComponent(categorySlug);
      
      const categoryProducts = products.filter(p => p.category.toLowerCase() === decodedSlug);
      
      // Get original category name from the first product to preserve casing
      const categoryName = categoryProducts.length > 0 
        ? categoryProducts[0].category 
        : (decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1));
      return <CategoryPage categoryName={categoryName} products={categoryProducts} />;
    }

    return <HomePage />;
  };

  return (
    <div className="bg-brand-dark text-brand-light font-lato flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
