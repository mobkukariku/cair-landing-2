"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const navItems = [
    { label: "home", id: "home" },
    { label: "services", id: "services" },
    { label: "why-us", id: "why-us" },
    { label: "partners", id: "partners" },
    { label: "contact", id: "contact" },
];

export function Navbar() {
    const [active, setActive] = useState("home");
    const t = useTranslations("header.navbar");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { threshold: 0.6 }
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
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{
                bottom: active === "home" ? "unset" : "1.5rem",
                top: active === "home" ? "0 rem" : "unset",
                opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed left-1/2 -translate-x-1/2 z-50 w-fit rounded-full p-3 bg-white/10 border border-white/50 backdrop-blur-md flex gap-2"
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
                    <span className="relative z-10">{t(label)}</span>
                </button>
            ))}
        </motion.div>
    );
}
