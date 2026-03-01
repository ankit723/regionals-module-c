'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const JobsCard = ({data, savePlan}:{data:any, savePlan:(data:any)=>void})=>{
    return(
        <div className="w-full border rounded-xl  bg-white dark:bg-blue-900 hover:shadow-2xl transition-all cursor-pointer">
            <div className="min-h-[140] border-b flex flex-col justify-center p-3 bg-blue-100 rounded-t-xl text-black">
                <h1 className="text-xl font-bold italic">{data["Job Name"]}</h1>
                <p className="text-md text-slate-600 font-medium">{data["Job Description"]}</p>
            </div>
            <div className=" w-full py-4 min-h-[50] rounded-b-2xl flex flex-col gap-3 justify-center px-2">
                <Button variant={"default"} size={"lg"} onClick={()=>savePlan(data)}>Remove Plan</Button>
                <Button variant={"outline"} size={"lg"}>View Job Details</Button>
            </div>
        </div>
    )
}

export default function PlansPage(){
    const [plans, setPlans] = useState<any[]>()
    useEffect(()=>{
        const pl = localStorage.getItem("plans")
        setPlans(JSON.parse(pl || ""));
    }, [])

    const removePlane =(jobDetail:any) =>{
        const s_plans = localStorage.getItem("plans")
        const plans:any[] = JSON.parse(s_plans);

        const newPlans =plans.filter((p)=>p["Job Name"]!==jobDetail["Job Name"])

        localStorage.setItem("plans", JSON.stringify(newPlans))
        setPlans(newPlans);

        

        toast("Plan updated successfully!")
    }
    return(
        <div className="">
            <div className="mb-7 -mt-5">
                <h1 className="text-2xl font-bold">My plans</h1>
                <p className="text-slate-600 font-medium">Get all your plans here</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                {
                    plans?.length === 0 ?"Please Go sectors and all some Jobs planning":
                    plans?.map((s:any, i:number)=>(
                        <JobsCard key={i} data={s} savePlan={removePlane}/>
                    ))
                }
            </div>
        </div>
    )
}