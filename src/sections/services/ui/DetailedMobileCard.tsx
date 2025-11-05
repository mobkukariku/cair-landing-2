"use client";

import { DetailedCardProps } from "@/sections/services/model/types";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect} from "react";

export function DetailedMobileCard({
                                       iconSrc,
                                       title,
                                       onClick,
                                       stack,
                                       description,
                                   }: DetailedCardProps) {
    const t = useTranslations("services");

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[600]  flex items-center justify-center bg-black/60 backdrop-blur-sm"
                onClick={onClick}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative h-[70%] overflow-y-auto  w-[90vw] p-5 border border-white/30 bg-white/10 rounded-3xl shadow-2xl scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent"
                >
                    <div className="flex flex-col items-center text-center">
                        <Image src={iconSrc} alt={title} width={60} height={60} />
                        <h3 className="text-white text-2xl font-bold mt-5">{title}</h3>
                    </div>

                    <div className="mt-6 space-y-">
                        <div>
                            <h4 className="text-white font-medium mb-3">
                                {t("card-info.desc")}:
                            </h4>
                            <ul className="list-disc pl-5 space-y-2 text-white/90">
                                {description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-3">
                                {t("card-info.tech")}:
                            </h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {stack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                        className="bg-white/20 px-3 py-1.5 rounded text-sm text-white"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
