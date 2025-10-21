"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Why us", id: "why-us" },
    { label: "Partners", id: "partners" },
];

export function Navbar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.6,
            }
        );

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {active === "home" ? (
                <motion.div
                    key="top-navbar"
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit rounded-full p-3 bg-white/10 border border-white/50 backdrop-blur-md flex gap-2"
                >
                    {navItems.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => handleScroll(id)}
                            className={`relative px-6 py-2 font-medium rounded-full transition-colors duration-300 ${
                                active === id ? "text-white" : "text-white/60 hover:text-white/80"
                            }`}
                        >
                            {active === id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/20 border border-white/30 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}
                </motion.div>
            ) : (
                <motion.div
                    key="bottom-navbar"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-fit rounded-full p-3 bg-white/10 border border-white/50 backdrop-blur-md flex gap-2"
                >
                    {navItems.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => handleScroll(id)}
                            className={`relative px-6 py-2 font-medium rounded-full transition-colors duration-300 ${
                                active === id ? "text-white" : "text-white/60 hover:text-white/80"
                            }`}
                        >
                            {active === id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white/20 border border-white/30 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
