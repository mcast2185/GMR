import Link from "next/link";
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";


function StudioNavbar(props: any)  {

  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#F7AB0A] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2"/>
          Return Home
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white">
            Your HUB for everything games and reviews
          </h1>
          <Link href=""></Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;