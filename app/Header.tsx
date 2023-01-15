import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Image1 from '../public/logo-mdev.png';
import Image from 'next/image';

import Link from 'next/link';
import NavLinks from './NavLinks';
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center shadow-lg">
        {/* <Bars3Icon className="h-8 w-8 cursor-pointer" /> */}
        <Image src={Image1} alt="Logo" width={100} height={100} />
        {/* <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{' '}
            <span className="underline decoration-6 decoration-[#899195]">
              MDev
            </span>{' '}
            Movies
          </h1>
        </Link> */}
        <div className="flex space-x-10 justify-center">
          <Link href="/" prefetch={false}>
            <h4 className="font-bold text-gray-400">Home</h4>
          </Link>

          <h4 className="font-bold underline underline-offset-2">
            Movies
          </h4>
          <h4 className="font-bold text-gray-400">Recently added</h4>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <button
            className="hidden md:inline bg-slate-900 text-white
           px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800"
          >
            Subscribe Now
          </button>
        </div>

        {/* <NavLinks /> */}
      </div>
    </header>
  );
};

export default Header;
