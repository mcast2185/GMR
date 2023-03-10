import Image from "next/image";
import Link from "next/link";

import GMRS from "../public/GMRS.png";


const Header = () => {
  return (
    <header className="flex item-center justify-between space-x-2 font-bold px-10 py-2">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image className="rounded-full" priority
            width={150} height={150} src={GMRS} alt="logo"/>
        </Link>
      </div>
      <div>
        {/* <Link
          href="https://twitter.com/JamesP_mcAdams"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
          <p>Click {" "}<i>here</i>{" "} to follow on Twitter</p>
        </Link> */}
      </div>
    </header>
  )
}


export default Header;