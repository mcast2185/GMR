import Image from "next/image";
import Link from "next/link";

import GMRS from "../public/GMRS.png";


const Header = () => {
  return (
    <header className="flex item-center justify-between space-x-2 font-bold px-8 py-2">
      <div className="flex items-center">
        <figure>
          <Link href="/">
            <Image className="rounded-full" priority
              width={150} height={150} src={GMRS} alt="logo"/>
          </Link>
        </figure>
      </div>
    </header>
  );
};


export default Header;