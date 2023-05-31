"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

const ScrollingBanner: React.FC = () => {
  // State to hold the banner text
  const [text, setText] = useState("Sample Text");

  // Function to scroll the text
  const scrollText = () => {
    let element = document.getElementById("banner");
    if(element) {
      if(element.scrollWidth - element.scrollLeft <= element.clientWidth) {
        // Reset scroll position to 0
        element.scrollLeft = 0;
      } else {
        // Scroll the text
        element.scrollLeft += 1;
      }
    }
  }

  useEffect(() => {
    // Start scrolling when component is mounted
    let scrollInterval = setInterval(scrollText, 50);
    
    // Clear interval when component is unmounted
    return () => {
      clearInterval(scrollInterval);
    }
  }, [])

  useEffect(() => {
    setText("This is a sample text we are using.")
  }, [])


  return (
    <div className="flex justify-center relative">
      <Head>
        <title>Scrolling Banner</title>
        <meta name="description" content="Infinite Scrolling Banner Component" />
        <meta name="keywords" content="NextJS, TailwindCSS, React, TypeScript, Scrolling Banner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="banner" className="overflow-hidden whitespace-nowrap absolute top-0 w-full h-16">
        {text} "This is the secondpart of the test, cheers!"
      </div>
    </div>
  );
}

export default ScrollingBanner;