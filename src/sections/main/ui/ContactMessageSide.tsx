"use client";
import { motion, Variants } from "framer-motion";
import { buttonVariants, containerVariants, messageVariants } from "../model/variants";


export function ContactMessageSide() {
  return (
    <motion.aside
      className="flex flex-col gap-5 w-[400px]"
      aria-label="Summary and contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        variants={messageVariants}
        className="text-lg font-medium max-w-[250px] leading-6"
      >
        Comprehensive support for medium and large companies
      </motion.p>

      <motion.p
        variants={messageVariants}
        className="text-lg font-medium self-end text-right max-w-[250px] leading-6"
      >
        We help businesses run more efficiently while enhancing support quality
      </motion.p>
      <motion.button
        variants={buttonVariants}
        className="bg-white/10 mt-4 border border-white/50 font-medium px-4 py-2 rounded-full"
      >
        Contact
      </motion.button>
    </motion.aside>
  );
}
