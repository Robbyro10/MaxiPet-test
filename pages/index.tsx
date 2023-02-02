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
import { Footer } from '../components/ui';
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
      <div className="mx-48 mt-10 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          UNA GRAN VARIEDAD DE CATEGORÍAS
        </h1>
        <AnimalList />
      </div>

      {/* Destacados */}
      <div className="mx-48 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          PRODUCTOS DESTACADOS
        </h1>
        <div className="flex justify-around flex-wrap">
          <Image src={cat} alt={'Gato gris con comida de gato en frente'} />
          <ProductGrid />
        </div>
      </div>

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
      <div className="mx-48 mt-10 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          PRODUCTOS POPULARES
        </h1>
        <ProductRow />
      </div>

      <div className="flex justify-center mx-48 mb-24">
        <img
          src="dogWithBall.png"
          alt={'Perro juando con pelota naranja'}
          className="w-screen"
        />
      </div>

      {/* Ultimos */}
      <div className="mx-48 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          ÚLTIMOS PRODUCTOS
        </h1>
        <div className="flex justify-around flex-wrap">
          <ProductGrid />
          <Image src={cat} alt={'Gato gris con comida de gato en frente'} />
        </div>
      </div>

      {/* Servicios */}
      <div className="mx-48 mt-10 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          NUESTROS SERVICIOS
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </p>
        <ServiceList />
      </div>

      {/* Marcas */}
      <div className="mx-48 mt-10 mb-24">
        <p className="text-xs text-[#777777]">Lorem ipsum dolor sit amet.</p>
        <h1 className="text-[#E2081E] font-bold text-xl mb-5">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h1>
        <BrandRow />
      </div>
    </ShopLayout>
  );
}

export default HomePage;
