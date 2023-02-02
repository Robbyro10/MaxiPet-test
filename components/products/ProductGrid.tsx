import React, { FC } from 'react';
import { ProductCard } from './ProductCard';
import puppyFood from '../../public/puppyFood.png';

export const ProductGrid: FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
      <ProductCard
        name={'1st Choice Puppy Chiot'}
        img={puppyFood}
        price={9.99}
      />
    </div>
  );
};
