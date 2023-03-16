import Header from '../../components/header';
import Banner from '../../components/banner';

import "../../styles/globals.css";
import Mouse from 'components/mouse';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='html-selector bg-[#515151] bg-opacity-10'>
      <body className="mx-auto max-w-full flex">
        <Mouse/>
        <div className="max-w-5xl mx-auto">
          <Header/>
          <Banner/>
          {children}
        </div> 
      </body>
    </html>
  );
};