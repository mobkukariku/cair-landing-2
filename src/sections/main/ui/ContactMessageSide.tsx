"use client";
import { motion } from "framer-motion";
import { buttonVariants, containerVariants, messageVariants } from "../model/variants";
import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";


export function ContactMessageSide() {
    const locale = useLocale();

    const [key, setKey] = useState(locale);
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };
    const t = useTranslations("main");

    useEffect(() => {
        setKey(locale);
    }, [locale]);


    return (
    <motion.aside
        key={key}
        className="flex flex-col gap-5 w-full md:w-[400px]"
        aria-label="Summary and contact"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
    >
        <motion.p
            variants={messageVariants}
            className="md:text-lg md:hidden font-medium max-w-[250px] leading-6"
        >
            {t("sub-title")}
        </motion.p>

      <motion.p
        variants={messageVariants}
        className="md:text-lg font-medium max-md:text-right max-md:self-end max-w-[250px] leading-6"
      >
          {t("messages.message-1")}
      </motion.p>

      <motion.p
        variants={messageVariants}
        className="md:text-lg font-medium md:self-end  md:text-right max-w-[250px] leading-6"
      >
          {t("messages.message-2")}
      </motion.p>
      <motion.button
          onClick={() => handleScroll('contact')}
        variants={buttonVariants}
        className="bg-white/10 mt-4 border border-white/50 font-medium px-4 py-2 rounded-full"
      >
          {t("contact-btn")}
      </motion.button>
    </motion.aside>
  );
}
