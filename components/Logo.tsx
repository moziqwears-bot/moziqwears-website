import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="h-12 w-12 bg-brand-tan rounded-full flex items-center justify-center">
        <span className="font-cinzel text-xl font-bold text-brand-dark">MW</span>
      </div>
      <span className="font-cinzel text-2xl font-bold text-brand-tan tracking-wider">
        Moziq Wears
      </span>
    </div>
  );
};

export default Logo;
