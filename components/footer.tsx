import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-[#3a3a3a6c] justify-center h-36 flex absolute sm:w-[390px] md:w-full left-0">
      <div className="container md:px-6 py-4 flex flex-col justify-center">
        <div className="flex justify-center group group-[text-white]">
          <div className='flex flex-row justify-center m-0 p-0 h-8 items-center text-white relative '>
            <Link href="https://www.youtube.com/channel/UC1icCCZS95xCvRI3RHRUgyQ" 
              aria-details="youtube channel" target="_blank" >
              <FontAwesomeIcon icon={faYoutube} className="h-10 w-10 pr-3 
                hover:text-red-500 hover:scale-125 transition-transform duration-200 ease-out "/>
            </Link>
            <Link href="https://www.instagram.com/gmr.seat" 
              aria-details="instagram page" className='flex justify-center items-center' target="_blank" >
              <FontAwesomeIcon icon={faInstagram} className="h-10 w-10 pr-3 
                relative text-violet-500 stroke-[10px] stroke-yellow-400 hover:scale-125 transition-transform duration-200 ease-out "/>
              <FontAwesomeIcon icon={faInstagram} className="h-10 w-10 pr-3 
                absolute stroke-[15px] stroke-white hover:stroke-none  hover:scale-125 transition-transform duration-200 ease-out "/>
            </Link>
            <Link href="https://twitter.com/GMRxSeat" 
              aria-details="Twitter page" target="_blank" >
              <FontAwesomeIcon icon={faTwitter}className="h-10 w-10 pr-3 
                hover:text-blue-500 hover:scale-125 transition-transform duration-200 ease-out "/>
            </Link>
            <Link href="https://www.tiktok.com/@gmrseat" 
              aria-details="tiktok channel" className='flex justify-center items-center' target="_blank" >
              <FontAwesomeIcon icon={faTiktok} className="h-9 w-9 pr-3 stroke-[10px] 
                relative text-teal-200 stroke-white hover:stroke-teal-200 hover:scale-125 transition-transform duration-200 ease-out "/>
              <FontAwesomeIcon icon={faTiktok} className="h-10 w-10 pr-3 stroke-[15px] 
                absolute text-white stroke-white hover:ml-[1.5px] hover:stroke-red-500 hover:scale-125 transition-transform duration-200 ease-out "/>
            </Link>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700">
          <p className="py-4 text-gray-400 text-sm text-center">
            &copy; GMRseat.com {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
