import Header from '../../components/header';
import Banner from '../../components/banner';
import "../../styles/layout.module.css"
import "../../styles/globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-5xl mx-auto bg-[url(${})]">
        <div className="container" >
          <Header/>
          <Banner/> 
        </div>
        {children}
      </body>
    </html>
  )
}
