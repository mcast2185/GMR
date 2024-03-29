import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTentArrowTurnLeft} from "@fortawesome/free-solid-svg-icons";


function StudioNavbar(props: any)  {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-white flex items-center">
          <FontAwesomeIcon icon={faTentArrowTurnLeft} className="h-6 w-6 text-white mr-2"/>
          Return Home
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#992715de]">
          <h1 className="font-bold text-white">
            [GMR]: Content Editor
          </h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};


export default StudioNavbar;