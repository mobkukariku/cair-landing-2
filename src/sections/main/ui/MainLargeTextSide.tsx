"use client"
import {delay, motion, useInView} from "framer-motion";
import React from "react";
import { pullupVariant } from "../model/variants";

export function MainLargeTextSide() {

    const subText = "A reliable IT partner you’ll want by your side.".split(' ');
    const mainText = "Shaping your visions with a spark of innovation".split(' ');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <article className="flex flex-col mt-10 gap-20">
            <p className="text-xl font-medium max-w-[220px] flex flex-wrap gap-[4px] leading-6">
                {subText.map((current, i) => (
                    <motion.span
                        key={i}
                        ref={ref}
                        variants={pullupVariant}
                        initial="initial"
                        animate={isInView ? 'animate' : ''}
                        className="inline-block"
                        custom={i}
                    >
                    {current}
                    </motion.span>
                ))}
            
            </p>
            <h1 className="flex gap-3 flex-wrap max-w-3xl"> 
                {mainText.map((current, i) => (
                    <motion.div
                        key={i}
                        ref={ref}
                        variants={pullupVariant}
                        initial="initial"
                        animate={isInView ? 'animate' : ''}
                        className="text-8xl text-center font-bold tracking-tighter"
                        custom={i}
                    >
                    {current == '' ? <span>&nbsp;</span> : current}
                    </motion.div>
            ))}
            </h1>
        </article>
    )
}