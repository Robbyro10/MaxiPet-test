import Image from 'next/image';
import { FC } from 'react';
import brand from '../../public/brand.png';

export const BrandRow: FC = () => {
  return (
    <div className="grid grid-cols-5 gap-10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </p>
      <div>
        <Image src={brand} alt="Logo de 1st Choice Nutrition" />
      </div>
      <div>
        <Image src={brand} alt="Logo de 1st Choice Nutrition" />
      </div>
      <div>
        <Image src={brand} alt="Logo de 1st Choice Nutrition" />
      </div>
      <div>
        <Image src={brand} alt="Logo de 1st Choice Nutrition" />
      </div>
    </div>
  );
};
