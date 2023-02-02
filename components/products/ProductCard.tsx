import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import smallDarkDogPaw from '../../public/smallDarkDogPaw.png';
import smallLightDogPaw from '../../public/smallLightDogPaw.png';
import Link from 'next/link';

interface Props {
  name: string;
  img: string | StaticImageData;
  price: number;
}

export const ProductCard: FC<Props> = ({ name, img, price }) => {
  return (
    <div className="p-3">
      <Link href="/">
        <Image src={img} alt={'Caja de copmida para cachorro'} />
        <h1 className="font-semibold">{name}</h1>
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
      <p className="text-[#5F5F5F] text-xs mb-2">${price}</p>

      <div className="flex justify-center">
        <button className="bg-[#E2081E] rounded-md px-5 py-1 flex text-white hover:bg-red-500">
          <FaShoppingCart className="mt-1" />
          &nbsp; Agregar
        </button>
      </div>
    </div>
  );
};
