import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faTiktok, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import Link from 'next/link';



const SocialMediaIcons = () => {
  return (
    <div className='flex flex-row justify-center m-0 p-0 h-8 items-center text-black '>
      <Link target="_blank" href="https://www.youtube.com/channel/UC1icCCZS95xCvRI3RHRUgyQ" aria-details="youtube channel">
        <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 pr-3 hover:text-red-500 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
      <Link target="_blank" href="https://www.instagram.com/gmr.seat" aria-details="instagram page" className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 pr-3 relative text-orange-300 hover:scale-125 transition-transform duration-200 ease-out "/>
        <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 pr-3 absolute stroke-[18px] hover:stroke-violet-500 hover:text-yellow-400  hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
      <Link target="_blank" href="https://twitter.com/GMRxSeat" aria-details="Twitter page">
        <FontAwesomeIcon icon={faTwitter}className="h-4 w-4 pr-3 hover:text-blue-500 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
      <Link target="_blank" href="https://www.tiktok.com/@gmrseat" aria-details="tiktok channel" className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faTiktok} className="h-4 w-4 pr-3 stroke-[10px] relative text-teal-200 stroke-white hover:stroke-teal-300 hover:scale-125 transition-transform duration-200 ease-out "/>
        <FontAwesomeIcon icon={faTiktok} className="h-4 w-4 pr-3 stroke-[18px] absolute text-black stroke-black hover:text-white hover:stroke-red-500 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
    </div>
  )
}

export default SocialMediaIcons