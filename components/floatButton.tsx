"use client"

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FloatButton } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog, faNewspaper, faMoon, faSun} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const FloatButtonComp: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? 'systemTheme' : theme;


  return (
  <>
    <FloatButton.Group shape="circle" style={{ left: 24, top: 55 }} className="floatButton">
      <Link href={"/blogs"}>
        <FloatButton icon={<FontAwesomeIcon icon={faBlog}/>} className="mb-[16px]"/>
      </Link>
      {currentTheme === 'dark' ? (
        <FloatButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} icon={<FontAwesomeIcon icon={faSun}/>} className="mb-[16px]"/>
        ): (  
        <FloatButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} icon={<FontAwesomeIcon icon={faMoon}/>} className="mb-[16px]"/>
      )}  
      <Link href={"/media"}>
        <FloatButton icon={<FontAwesomeIcon icon={faNewspaper}/>} className="mb-[16px]"/>
      </Link>
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
  );
}
export default FloatButtonComp;