import Image from "next/image";

import GMRSdm from "../public/GMRSdm.png";


function Logo(props: any) {
  const {renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <figure>
        <Image
          className="rounded-full object-cover text-white"
          height={120}
          width={120}
          src={GMRSdm}
          alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
      </figure>
    </div>
  );
};

export default Logo;