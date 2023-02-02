import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
