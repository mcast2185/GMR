import Header from '../../components/header';
import Banner from '../../components/banner';
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='html-selector'>
      <body className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>
        <div className="max-w-5xl mx-auto flex flex-col justify-center" >
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div> 
      </body>
    </html>
  )
}
