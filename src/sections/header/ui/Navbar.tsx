"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "Services", "Why us", "Partners"];





export function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <div className="w-fit rounded-full p-3 bg-white/10 border border-white/50 backdrop-blur-md flex gap-2 relative">
            {navItems.map((item) => (
                <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`relative px-6 py-2  font-medium rounded-full transition-colors duration-300
            ${
                        active === item
                            ? "text-white"
                            : "text-white/60 hover:text-white/80"
                    }`}
                >
                    {active === item && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white/20 border border-white/30 rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}
                    <span className="relative z-10">{item}</span>
                </button>
            ))}
        </div>
    );
}
