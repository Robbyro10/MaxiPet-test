import Image from 'next/image';
import Link from 'next/link';
import MaxiPetLogo from '../../public/MaxiPetLogo.png';
import {
  FaInstagram,
  FaShoppingCart,
  FaRegUser,
  FaTwitter,
  FaFacebookF,
  FaMapMarkerAlt,
  FaSistrix,
} from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiDogHouse } from 'react-icons/gi';

export const Navbar = () => {
  return (
    <nav className="flex-row pb-1">
      <div className="flex justify-end bg-[#E2081E] mb-1 h-7 items-center text-white ">
        <div className="flex mr-6">
          <FaMapMarkerAlt />
          <button className="flex text-sm ml-1">
            Bello Monte
            <span className="mt-1">
              <RiArrowDropDownLine />
            </span>
          </button>
        </div>
        <div className="flex justify-center gap-3 mr-6">
          <Link href="/">
            <FaInstagram />
          </Link>
          <Link href="/">
            <FaTwitter />
          </Link>
          <Link href="/">
            <FaFacebookF />
          </Link>
        </div>
      </div>
      <div className="flex justify-around h-20 items-center">
        <Link href="/">
          <Image src={MaxiPetLogo} alt="MaxiPet Logo" />
        </Link>
        <div className="">
          <div className="absolute mt-2 ml-48">
            <FaSistrix />
          </div>
          <form>
            <input
              className="rounded-md h-8 focus:border-[#E2081E] focus:ring-[#E2081E]"
              type="text"
              placeholder="Buscador"
            />
          </form>
        </div>
        <p className="flex gap-3 text-[#333333]">
          <Link href="/">
            <FaMapMarkerAlt className="hover:text-[#E2081E]" />
          </Link>
          <Link href="/">
            <GiDogHouse className="hover:text-[#E2081E]" />
          </Link>
          <Link href="/">
            <FaRegUser className="hover:text-[#E2081E]" />
          </Link>
          <Link href="/">
            <FaShoppingCart className="hover:text-[#E2081E]" />
          </Link>
        </p>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-14 font-semibold  text-gray-500">
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Inicio
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Comprar por marca
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Comprar por mascota
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Nuestros Servicios
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Promociones
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#E2081E] text-sm" href={'/'}>
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
