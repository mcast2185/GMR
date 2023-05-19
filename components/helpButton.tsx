import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Helper: React.FC = () => (
  <>
  <Link href="/help">
    <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
  </Link>
  </>
);

export default Helper;