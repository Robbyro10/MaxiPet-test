import Image from 'next/image';
import React from 'react';
import { ShopLayout } from '../components/layouts/ShopLayout';
import {
  AnimalList,
  BrandRow,
  ProductGrid,
  ProductRow,
  ServiceList,
} from '../components/products';
import { Container, Footer } from '../components/ui';
import cat from '../public/cat.png';

function HomePage() {
  return (
    <ShopLayout
      title={'MaxiPet - Inicio'}
      pageDescription={'Encuentre los mejores productos para mascotas aqui'}
    >
      <img
        src="bigDog.png"
        alt={'perro lindo con lengua afuera'}
        className="w-screen"
      />

      <div className="flex relative bottom-8 justify-center">
        <div className="h-2 w-14 bg-[#DAD6D3] hover:bg-red-500 mx-2 rounded-md"></div>
        <div className="h-2 w-14 bg-red-500 mx-2 rounded-md"></div>
        <div className="h-2 w-14 bg-[#DAD6D3] hover:bg-red-500 mx-2 rounded-md"></div>
        <div className="h-2 w-14 bg-[#DAD6D3] hover:bg-red-500 mx-2 rounded-md"></div>
      </div>

      {/* categorias */}
      <Container
        title="Una gran variedad de categorías"
        desc="Lorem ipsum dolor sit amet."
      >
        <AnimalList />
      </Container>

      {/* Destacados */}
      <Container
        title="Productos Destacados"
        desc="Lorem ipsum dolor sit amet."
      >
        <div className="flex justify-around flex-wrap">
          <Image src={cat} alt={'Gato gris con comida de gato en frente'} />
          <ProductGrid />
        </div>
      </Container>

      <div className="flex justify-center mx-48 mb-24">
        <img
          src="dogEats.png"
          alt={'Perro comiendo comida de perro'}
          className="w-1/2"
        />
        <img
          src="dogFood.png"
          alt={'Cucharon con comida de perro'}
          className="w-1/2"
        />
      </div>

      {/* Populares */}
      <Container title="productos populares" desc="Lorem ipsum dolor sit amet.">
        <ProductRow />
      </Container>

      <div className="flex justify-center mx-48 mb-24">
        <img
          src="dogWithBall.png"
          alt={'Perro juando con pelota naranja'}
          className="w-screen"
        />
      </div>

      {/* Ultimos */}
      <Container title="últimos productos" desc="Lorem ipsum dolor sit amet.">
        <div className="flex justify-around flex-wrap">
          <ProductGrid />
          <Image src={cat} alt={'Gato gris con comida de gato en frente'} />
        </div>
      </Container>

      {/* Servicios */}
      <Container title="nuestros servicios" desc="Lorem ipsum dolor sit amet.">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </p>
        <ServiceList />
      </Container>

      {/* Marcas */}
      <Container
        title="trabajamos con las mejores marcas"
        desc="Lorem ipsum dolor sit amet."
      >
        <BrandRow />
      </Container>
    </ShopLayout>
  );
}

export default HomePage;
