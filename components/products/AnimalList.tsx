import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import dalmata from '../../public/dalmata.svg';
import DogPaw from '../../public/DogPaw.png';

const animales = [
  'Perros',
  'Gatos',
  'Peces',
  'Roedores',
  'Reptiles',
  'Placeholder',
];

export const AnimalList: FC = () => {
  return (
    <div className="flex justify-between flex-wrap">
      {animales.map((animal) => (
        <div className="flex-initial" key={animal}>
          <Link href="/">
            <Image
              className="absolute ml-10 mt-5"
              src={dalmata}
              alt={'Dalmata placeholder'}
            />
            <Image src={DogPaw} alt={'Huella de perro'} />
            <h1 className="font-bold text-center">{animal}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
