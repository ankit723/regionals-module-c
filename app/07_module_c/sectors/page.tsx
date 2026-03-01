'use client'
import { Button } from "@/components/ui/button"
import {data} from "@/data/data"
import { ComputerIcon } from "lucide-react"
import Link from "next/link"

const SectorsCard = ({data}:{data:string})=>{
    return(
        <div className="w-full border rounded-xl  bg-white dark:bg-blue-900 hover:shadow-2xl transition-all cursor-pointer">
            <div className="min-h-[140] border-b flex flex-col justify-center items-center bg-blue-100 rounded-t-xl">
                <h1 className="text-xl font-bold italic">{data}</h1>
            </div>
            <div className=" w-full py-4 min-h-[50] rounded-b-2xl flex flex-col gap-5 justify-center px-2">
                <Button variant={"default"} size={"lg"}><Link href={`/07_module_c/jobs/${data}`}>View Jobs</Link></Button>
            </div>
        </div>
    )
}

export default function SectorsPage(){
    console.log(data)
    const sectors = data["sectors"];

    return(
        <div className="">
            <div className="mb-7 -mt-5">
                <h1 className="text-2xl font-bold">Sectors</h1>
                <p className="text-slate-600 font-medium">Find all the sectors here</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                {sectors?.map(s=>(
                    <SectorsCard key={s} data={s}/>
                ))}
            </div>
        </div>
    )
}