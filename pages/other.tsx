import Link from 'next/link';

import Header from '../components/header';
import Banner from '../components/banner';
import Image from 'next/image';
import MANDO from '../public/mando.png';
import LAST from '../public/lastofus.png';
import DCU from '../public/dcu.png';
import CAPCOM from '../public/capcom.png';

export default function Podcasts () {
  
  return (
    <div className="other">
      <div className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>

        <div className="flex justify-center items-baseline">
          <Image className="mando" src={MANDO} alt="mandalorian"/>
          <h1 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:scale-105 hover:bg-transparent transition-transform 
            duration-200 ease-in-out bg-opacity-10 text-stone-50 mr-2 text-4xl font-Quicksand absolute">
            <Link href="https://www.youtube.com/watch?v=PgtUa2G7LvI">
            Mandalorian Season 3
            </Link>
          </h1>
        </div>

        <div className="flex flex-col mt-10 " >
          <div className="flex flex-row justify-center items-center mb-10">
            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="https://podcasts.apple.com/us/podcast/episode-9-look-for-the-light/id1660320068?i=1000603849713">
                <Image src={LAST} alt="The last of Us" 
                  className="h-64 w-52 object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                The Last of Us Finale
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/podcasts">
                <Image src={DCU} alt="DCU" width={200} 
                  className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                James Gunns DCU
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="https://www.youtube.com/watch?v=GsTU5tTCSkQ">
                <Image src={CAPCOM} alt="Capcom Spotlight" width={200} 
                  className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                Capcom Spotlight
              </h1>
            </div>
          </div>
          
          <hr className="border-[#992715de] mb-5"/>

          <div className="flex flex-row justify-center items-center m-10" >
            <iframe src="https://embed.podcasts.apple.com/us/podcast/resident-evil-4-gameplay-preview/id1239568910?i=1000602655277"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
            </iframe>
            <iframe src="https://embed.podcasts.apple.com/us/podcast/giant-bombcast-778-young-elmo/id274450056?i=1000602210211"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
            </iframe>
          </div>

          <div className="flex flex-row justify-between items-center mt-5">
            <div className="flex justify-center px-2" >
              <iframe width="525" height="300" src="https://www.youtube.com/embed/Fb8qjYKk4Mc" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
              </iframe>
            </div>
            <div className="flex justify-center px-2" >
              <iframe width="400" height="300" src="https://www.youtube.com/embed/xztMz0MPJdA" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
              </iframe>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
};

