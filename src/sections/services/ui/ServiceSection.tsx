"use client"
import { Container } from "@/components/landing/ui/Container";
import {ServiceCard} from "./ServiceCard";
import {services} from "@/sections/services/model/constants";
import {motion} from "framer-motion";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {DetailedCard} from "@/sections/services/ui/DetailedCard";
import {useTranslations} from "next-intl";
import {sectionsVariants} from "@/sections/services/model/variants";


export function ServiceSection() {
    const [openId, setOpenId] = useState<string | null>(null);

    const t = useTranslations("services");


    return (
        <section id={"services"} className="text-white my-20 h-fit w-full flex flex-col snap-start">
            <Container className={"flex flex-grow flex-col w-full items-center justify-center "}>
                <h2 className="text-center font-bold w-full  md:text-7xl text-4xl">{t("title")}</h2>
                <div className="md:mt-30 mt-10 flex flex-wrap gap-10 justify-center w-full md:max-w-6xl mx-auto">
                    {services.map((item, i) => (
                        <motion.div
                            key={item.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            className={"max-md:w-full "}
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