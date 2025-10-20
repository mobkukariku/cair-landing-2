"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface NumberCardProps {
    hasBorder: boolean;
    num: number;
    text: string;
}

export function NumberCard({ hasBorder, num, text }: NumberCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, num, {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
            });
            return controls.stop;
        }
    }, [isInView, num, count]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col text-center justify-center p-10 w-md rounded-3xl items-center ${
                hasBorder
                    ? "border-2 bg-white/10 backdrop-blur-2xl shadow-2xl border-white/20"
                    : ""
            }`}
        >
            <motion.h1
                className="text-9xl font-bold"
                style={{
                    y: useTransform(count, latest => 20 - latest * 0.2), // легкий эффект “подъёма” цифр
                }}
            >
                {rounded}
            </motion.h1>
            <h3 className="text-3xl uppercase font-medium">{text}</h3>
        </motion.div>
    );
}
