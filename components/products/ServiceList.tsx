import Image from 'next/image';
import { FC } from 'react';
import dalmata from '../../public/dalmata.svg';

const servicios = [
  'Peluquería',
  'Odontología',
  'Veterinario',
  'Entrenamiento',
  'Psicología canina',
  'Fiestas de cumpleaños',
];

export const ServiceList: FC = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-14 mt-12">
      {servicios.map((servicio) => (
        <div className="flex-initial" key={servicio}>
          <Image src={dalmata} alt={'Dalmata placeholder'} height={100} />
          <h1 className="font-bold my-3">{servicio}</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>
        </div>
      ))}
    </div>
  );
};
