import React from 'react';
import { FloatButton } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBlog, faContactCard, faNewspaper} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';

const FloatButtonComp: React.FC = () => (
  <>
    <FloatButton.Group shape="circle" style={{ left: 24, top: 55 }}>
      <Link href={"/blogs"}>
      <FloatButton icon={<FontAwesomeIcon icon={faBlog}/>} className="mb-[16px]"/>
      </Link>
      <Link href={"/contact"}>
      <FloatButton icon={<FontAwesomeIcon icon={faContactCard}/>} className="mb-[16px]"/>
      </Link>
      <Link href={"/media"}>
      <FloatButton icon={<FontAwesomeIcon icon={faNewspaper}/>} className="mb-[16px]"/>
      </Link>
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

export default FloatButtonComp;