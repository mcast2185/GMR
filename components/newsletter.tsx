"use client";

import React, { useState} from 'react';
import emailjs from "@emailjs/browser";


const Result = () => {
  return (
    <p>
      Your message was sent. Thanks.
    </p>
  );
};

const Newsletter: React.FC = () => {
  const [result, showResult] = useState<boolean>(false);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_2d3975n', 'template_kfhlp09', e!.target, 'OZTTUDEJQcLGrsGa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e!.target.reset();
    showResult(true);
  };

  return (
    <div className="bg-gray-800 dark:bg-[#3a3a3a6c] text-[#d9d9d9] flex mb-10 mt-10
      justify-center items-center mr-2 text-xs md:text-base font-Quicksand rounded-md shadow-lg overflow-hidden">
      <div className="p-4 md:p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-MontserratAlternates md:text-2xl font-bold mb-4">
          [GMR] Newsletter
        </h2>
        <p className="mb-4">
          Stay up to date with the latest game related news by subscribing to our newsletter.
        </p>
        <form method='POST' onSubmit={sendEmail}
          className="mb-4 text-black flex flex-col justify-center items-center">
          <input
            className="border rounded-md mb-4 h-10 w-60"
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
          />
          <input
            className="border rounded-md py-2 w-72"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <button
            className="shadow bg-[#e5e7eb]
              border-[#992715de]
              border-2
              hover:border-amber-300
              hover:text-amber-300
              focus:shadow-outline
              focus:outline-none
              text-[#992715de] 
              rounded-md px-4 py-2 mt-4"
            type="submit"
          >
            Subscribe
          </button>
          {result ? <Result/> : null}
        </form>
        <p className="text-xs md:text-sm text-[#868686]">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  );
};


export default Newsletter;