'use client';

import { Hamburger, HamburgerIcon, LucideHamburger } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header=()=>{
    return(

        <nav className="w-screen sticky top-0 bg-white dark:bg-blue-900 shadow-2xl py-1">
            <div className="flex justify-between items-center m-5">
                <div className="">
                    <Link href={"/07_module_c"}>
                        <Image src={"/media-files/skillconnect-logo.png"} width={180} height={180} alt="Logo Image" className="transition-all"/>
                    </Link>
                </div>

                <Link href={"/07_module_c/my-plans"} className=" flex items-center gap-5">
                    <Image src={"/media-files/icon_plan.png"} width={30} height={100} alt="Logo Image" className="transition-all text-white h-7 w-7"/>
                </Link>
            </div>
        </nav>
    )
}

export default Header