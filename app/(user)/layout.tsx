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
    <html className='html-selector w-full h-fit bg-[#515151] bg-opacity-10'>
      <body className="mx-auto min-w-full flex min-h-full">
        <Mouse/>
        <div className="max-w-5xl mx-auto h-fit flex flex-col">
          <Header/>
          <Banner/>
          {children}
        </div> 
      </body>
    </html>
  );
};