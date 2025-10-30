"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import {ServiceCardProps} from "@/sections/services/model/types";





export function ServiceCard({id, iconSrc, title,  onClick}: ServiceCardProps) {
    return (
        <motion.div
            layoutId={id}
            onClick={onClick}
            className={"border shadow-2xl flex md:flex-col md:items-start md:justify-between border-white/30 md:h-[200px] h-[100px] w-full md:w-[313px] bg-white/10 rounded-3xl items-center justify-center md:p-8 p-5 max-md:gap-10"}
        >
            <Image src={iconSrc} className={"w-7 h-7 md:w-[45px] md:h-[45px] "} alt={title} width={45} height={45} />
            <div className={"flex   md:justify-between md:items-end items-center md:gap-3 gap-10 w-full"}>
                <h3 className="text-white md:text-2xl text-xl font-medium leading-7 md:mt-5">{title}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="bg-white p-1 w-[20px] h-[20px] md:w-[28px]  text-black/100 rounded-full"
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

