import Image from 'next/image';
import React from 'react';
import smallHouse from '../../public/smallHouse.png';
import tree from '../../public/tree.png';
import avilaTekWhite from '../../public/avilaTekWhite.png';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#FCFCFC]">
      <div className="flex justify-center pt-8 pb-24 mx-20">
        <ul className="grid grid-cols-4 gap-10">
          <li className="">
            <h1 className="text-[#E2081E] font-bold mb-2 text-xl">
              Sobre nosotros
            </h1>
            <p className="text-[#867D77] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </li>
          <li>
            <h1 className="text-[#E2081E] font-bold mb-2 text-xl">Mi Cuenta</h1>
            <ul className="text-[#867D77] leading-loose text-sm">
              <li className="hover:text-[#E2081E]">
                <Link href="/">Información Personal</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Direccione</Link>s
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Mascotas</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Órdenes</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Agenda</Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="text-[#E2081E] font-bold mb-2 text-xl">
              Información
            </h1>
            <ul className="text-[#867D77] leading-loose text-sm">
              <li className="hover:text-[#E2081E]">
                <Link href="/">Formulario de contacto</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Preguntas frecuentes</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Términos y condiciones</Link>
              </li>
              <li className="hover:text-[#E2081E]">
                <Link href="/">Política de privacidad</Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="text-[#E2081E] font-bold mb-2 text-xl">
              Atención al cliente
            </h1>
            <ul className="text-[#867D77] leading-loose text-sm">
              <li>Bello Monte, calle XXXX, local 1</li>
              <li>(0212) 575 54 12</li>
              <li>soporte@maxipet.com</li>
              <li>Lunes a Viernes</li>
              <li>9:00 a.m. - 5:00 p.m.</li>
              <li className="flex gap-3">
                <Link href="/">
                  <FaInstagram className="hover:text-[#E2081E]" />
                </Link>
                <Link href="/">
                  <FaTwitter className="hover:text-[#E2081E]" />
                </Link>
                <Link href="/">
                  <FaFacebookF className="hover:text-[#E2081E]" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="relative">
        <Image
          src={tree}
          alt="Icono de arbol rojo"
          className="absolute bottom-0 right-20"
        />
        <Image
          src={smallHouse}
          alt="Icono de casita de perro roja"
          className="absolute bottom-0 left-40"
        />
      </div>
      <div className="bg-[#E2081E] text-white text-xs justify-center py-2 flex gap-2">
        <p>
          Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
          por Avila Tek
        </p>
        <span>
          <Image src={avilaTekWhite} alt="logo blanco de Avilatek" />
        </span>
      </div>
    </footer>
  );
};
