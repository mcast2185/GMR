import React from 'react';
import { FloatButton } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog, faContactCard, faNewspaper, faMoon} from "@fortawesome/free-solid-svg-icons"
import { useTheme } from 'next-themes';
import Link from 'next/link';

const FloatButtonComp: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
  <>
    <FloatButton.Group shape="circle" style={{ left: 24, top: 55 }}>
      <Link href={"/blogs"}>
      <FloatButton icon={<FontAwesomeIcon icon={faBlog}/>} className="mb-[16px]"/>
      </Link>

      <FloatButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} icon={<FontAwesomeIcon icon={faMoon}/>} className="mb-[16px]"/>

      <Link href={"/media"}>
      <FloatButton icon={<FontAwesomeIcon icon={faNewspaper}/>} className="mb-[16px]"/>
      </Link>
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
  );
}
export default FloatButtonComp;