'use client'
import { Button } from "@/components/ui/button"
import {data} from "@/data/data"
import { ComputerIcon } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { toast } from "sonner"

const JobsCard = ({data, savePlan}:{data:any, savePlan:(data:any)=>void})=>{
    return(
        <div className="w-full border rounded-xl  bg-white dark:bg-blue-900 hover:shadow-2xl transition-all cursor-pointer">
            <div className="min-h-[140] border-b flex flex-col justify-center p-3 bg-blue-100 rounded-t-xl text-black">
                <h1 className="text-xl font-bold italic">{data["Job Name"]}</h1>
                <p className="text-md text-slate-600 font-medium">{data["Job Description"]}</p>
            </div>
            <div className=" w-full py-4 min-h-[50] rounded-b-2xl flex flex-col gap-3 justify-center px-2">
                <Button variant={"default"} size={"lg"} onClick={()=>savePlan(data)}>Save to my plan</Button>
                <Button variant={"outline"} size={"lg"}>View Job Details</Button>
            </div>
        </div>
    )
}

export default function SectorsPage(){
    let {sector}:{sector: "Information and Technology"| "Contruction"| "Tourism and Hospitality"| "Media and Entertainment"| "Apparel & Fashion"| "Health Care"} = useParams()
    const mod_sector=sector.replaceAll("%20", " ")
    const jobs = data[mod_sector];
    console.log("Sector jobs",mod_sector, jobs)

    const savePlan = (jobDetail:any)=>{
        const s_plans = localStorage.getItem("plans")
        const plans:any[] = JSON.parse(s_plans);
        if(!plans){
            const p = [jobDetail]
            localStorage.setItem("plans", JSON.stringify(p))
        }else{

            plans.push(jobDetail)
            
            localStorage.setItem("plans", JSON.stringify(plans))
        }

        toast("Plan updated successfully!")

    }


    return(
        <div className="">
            <div className="mb-7 -mt-5">
                <h1 className="text-2xl font-bold">All jobs</h1>
                <p className="text-slate-600 font-medium">Find all the <span className="border px-1 text-sm text-black rounded-lg">{mod_sector}</span> jobs here</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                {jobs?.map((s:any, i:number)=>(
                    <JobsCard key={i} data={s} savePlan={savePlan}/>
                ))}
            </div>
        </div>
    )
}