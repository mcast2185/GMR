import Image from "next/image";

import GMRSdm from "../public/GMRSdm.png";

function Logo(props: any) {
  const {renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover text-white"
        height={120}
        width={120}
        src={GMRSdm}
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;