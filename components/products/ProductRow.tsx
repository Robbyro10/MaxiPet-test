import React, { FC } from 'react';
import { ProductCard } from './ProductCard';
import puppyFood from '../../public/puppyFood.png';

export const ProductRow: FC = () => {
  return (
    <div className="flex justify-between flex-wrap">
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
