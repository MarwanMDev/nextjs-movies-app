'use client';

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import LightThemeLogo from '../public/light-theme-logo.png';
import DarkThemeLogo from '../public/dark-theme-logo.png';
import Image from 'next/image';

import Link from 'next/link';
import NavLinks from './NavLinks';
import DarkModeButton from './DarkModeButton';
import { useTheme } from 'next-themes';
const Header = () => {
  const { theme } = useTheme();

  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center shadow-lg">
        {theme === 'dark' && (
          <Image
            src={DarkThemeLogo}
            alt="Logo"
            width={100}
            height={100}
          />
        )}
        {theme === 'light' && (
          <Image
            src={LightThemeLogo}
            alt="Logo"
            width={100}
            height={100}
          />
        )}
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
          <DarkModeButton />

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
