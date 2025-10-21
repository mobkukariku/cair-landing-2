"use client"
import { Container } from "@/components/landing/ui/Container";
import {ServiceCard} from "./ServiceCard";
import {services} from "@/sections/services/model/constants";
import {motion, Variants} from "framer-motion";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {DetailedCard} from "@/sections/services/ui/DetailedCard";

export const sectionsVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3 + i * 0.2
        },
    }),
}

export function ServiceSection() {
    const [openId, setOpenId] = useState<string | null>(null);


    return (
        <section id={"services"} className="text-white h-full flex flex-col snap-start">
            <Container className={"flex flex-grow flex-col items-center justify-center -mt-30"}>
                <h2 className="text-center font-bold  text-7xl">Services</h2>
                <div className="mt-30 flex flex-wrap gap-10 justify-center max-w-6xl mx-auto">
                    {services.map((item, i) => (
                        <motion.div
                            key={item.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={sectionsVariants}
                        >
                            <ServiceCard onClick={() => setOpenId(item.id)} {...item} />
                        </motion.div>
                    ))}
                </div>
                <AnimatePresence>
                    {openId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            key="overlay"
                            className="overlay"
                            onClick={() => setOpenId(null)}
                        />
                    )}

                    {openId && (
                        <DetailedCard
                            iconSrc={services.find(s => s.id === openId)?.iconSrc || ""}
                            title={services.find(s => s.id === openId)?.title || ""}
                            stack={services.find(s => s.id === openId)?.stack || []}
                            description={services.find(s => s.id === openId)?.description || []}
                            id={openId}
                            onClick={() => setOpenId(null)}
                        />
                    )}
                </AnimatePresence>
            </Container>
        </section>
    )
}