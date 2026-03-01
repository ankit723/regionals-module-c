import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen sticky bottom-0 mt-6 bg-white dark:bg-blue-900 shadow-2xl py-3.5 rounded-t-3xl">
      <div className="flex justify-between items-center mx-5 my-3">
        <Link href={"/07_module_c"} className="flex items-center gap-2">
          {" "}
          <Image
            src={"/media-files/icon_home.svg"}
            width={30}
            height={100}
            alt="Logo Image"
            className="transition-all text-white h-7 w-7"
          />
          Home
        </Link>
        <Link href={"/07_module_c/sectors"} className="flex items-center gap-2">
          {" "}
          <Image
            src={"/media-files/icon_sectors.png"}
            width={30}
            height={100}
            alt="Logo Image"
            className="transition-all text-white h-7 w-7"
          />
          Sectors
        </Link>
        <Link href={"/07_module_c/settings"} className="flex items-center gap-2">
          {" "}
          <Image
            src={"/media-files/icon_settings.png"}
            width={30}
            height={100}
            alt="Logo Image"
            className="transition-all text-white h-7 w-7"
          />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
