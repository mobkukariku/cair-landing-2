"use client";
import Image from "next/image";
import { Container } from "@/components/landing/ui/Container";
import { MobileMenuItemsList } from "@/sections/header/ui/MobileMenuItemsList";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileHeader() {
    const [open, setOpen] = useState(false);

    return (
        <Container className="flex  mt-5 mb-20 justify-center">
            <header className="rounded-full z-50 fixed w-[85%] justify-between h-14 px-6 bg-white/10 border border-white/50 backdrop-blur-md flex gap-2 items-center">
                <Image src="/logo.svg" alt="logo" width={97} height={35} />
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpen(!open)}
                    className="p-2"
                >
                    <Image
                        src={open ? "/menu-close.svg" : "/menu-burger.svg"}
                        alt="menu-icon"
                        width={20}
                        height={20}
                    />
                </motion.button>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute z-40 top-25 w-full flex justify-center"
                    >
                        <MobileMenuItemsList  />
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
}
