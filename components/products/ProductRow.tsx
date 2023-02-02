import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductRow = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
