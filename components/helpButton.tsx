"use client"

import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Helper: React.FC = () => (
  <>
  <Link href="/contact">
    <FloatButton icon={<QuestionCircleOutlined />} className="floatButton mb-[16px]" style={{ right: 24, bottom: 30, }} />
  </Link>
  </>
);

export default Helper;