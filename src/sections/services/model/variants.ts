import {Variants} from "framer-motion";

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