'use client'

import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    setTimeout(()=>{
      return redirect("/07_module_c");
    }, 3000)
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden h-[85vh]">
        <Image src={"/media-files/skillconnect-logo.png"} width={450} height={450} alt="Logo Image" className="transition-all"/>
        <Spinner className="size-10"/>
      </div>
    </>
  )
  
}
