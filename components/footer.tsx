import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 absolute w-full left-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="mx-4 text-white cursor-pointer hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </div>
          <div className="mx-4 text-white cursor-pointer hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
          <div className="mx-4 text-white cursor-pointer hover:text-gray-300">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
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
