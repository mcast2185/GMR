"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import GMRLight from "../public/GMRS.png";
import GMRDark from "../public/GMRSdm.png";


const Header = () => {
 const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme("light");
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'systemTheme' : theme;

  return (
    <header className="flex item-center justify-between space-x-2 font-bold sm:pr-8 sm:pl-0 md:px-8 sm:py-0 md:py-2">
      <div className="flex items-center">
        <figure>
          <Link href="/">
            {currentTheme === 'dark' ? (
              <Image className="rounded-full" priority
                width={150} height={150} src={GMRDark} alt="logo"/>
                ): 
              <Image className="rounded-full"
                width={150} height={150} src={GMRLight} alt="logo"/>
            }
          </Link>
        </figure>
      </div>
    </header>
  );
};


export default Header;