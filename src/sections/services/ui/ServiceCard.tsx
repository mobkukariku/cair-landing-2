"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {ServiceCardProps} from "@/sections/services/model/types";





export function ServiceCard({id, iconSrc, title,  onClick}: ServiceCardProps) {
    return (
        <motion.div
            layoutId={id}
            onClick={onClick}
            className={"border shadow-2xl flex flex-col justify-between border-white/30 h-[200px] w-[313px] bg-white/10 rounded-3xl p-8"}
        >
            <Image src={iconSrc} alt={title} width={45} height={45} />
            <div className={"flex justify-between items-end gap-3 w-full"}>
                <h3 className="text-white text-2xl font-medium leading-7 mt-5">{title}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="bg-white p-1 w-[28px] h-fit text-black/100 rounded-full"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </motion.div>
    )
}

