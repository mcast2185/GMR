import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faTiktok, faYoutube} from "@fortawesome/free-brands-svg-icons"
import React from 'react'
import Link from 'next/link';



const SocialMediaIcons = () => {
  return (
    <div className='flex flex-row justify-center m-0 p-0 h-8 items-center text-black '>
      <Link href="https://www.youtube.com/channel/UC1icCCZS95xCvRI3RHRUgyQ" aria-details="youtube channel">
        <FontAwesomeIcon icon={faYoutube} className="h-4 w-4 pr-3 hover:text-gray-800 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
      <Link href="https://twitter.com/GMRxSeat" aria-details="Twitter page">
        <FontAwesomeIcon icon={faTwitter}className="h-4 w-4 pr-3 hover:text-gray-800 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
      <Link href="https://www.tiktok.com/@gmrseat" aria-details="tiktok channel">
        <FontAwesomeIcon icon={faTiktok} className="h-4 w-4 pr-3 hover:text-gray-800 hover:scale-125 transition-transform duration-200 ease-out "/>
      </Link>
    </div>
  )
}

export default SocialMediaIcons