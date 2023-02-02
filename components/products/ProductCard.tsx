import Image from 'next/image';
import React from 'react';
import puppyFood from '../../public/puppyFood.png';
import { FaShoppingCart } from 'react-icons/fa';
import smallDarkDogPaw from '../../public/smallDarkDogPaw.png';
import smallLightDogPaw from '../../public/smallLightDogPaw.png';
import Link from 'next/link';

export const ProductCard = () => {
  return (
    <div className="p-3">
      <Link href="/">
        <Image src={puppyFood} alt={'Caja de copmida para cachorro'} />
        <h1 className="font-semibold">1st Choice Puppy Chiot</h1>
      </Link>
      <div className="flex mb-1">
        <Image
          src={smallDarkDogPaw}
          alt="huella pequeña para simular una estrella encendida"
        />
        <Image
          src={smallDarkDogPaw}
          alt="huella pequeña para simular una estrella encendida"
        />
        <Image
          src={smallDarkDogPaw}
          alt="huella pequeña para simular una estrella encendida"
        />
        <Image
          src={smallLightDogPaw}
          alt="huella pequeña para simular una estrella apagada"
        />
        <Image
          src={smallLightDogPaw}
          alt="huella pequeña para simular una estrella apagada"
        />
      </div>
      <p className="text-[#5F5F5F] text-xs mb-2">$9.99</p>

      <div className="flex justify-center">
        <button className="bg-[#E2081E] rounded-md px-4 flex text-white hover:bg-red-500">
          <FaShoppingCart className="mt-1" />
          &nbsp; Agregar
        </button>
      </div>
    </div>
  );
};
