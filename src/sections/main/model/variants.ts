import { animate, Variants } from "framer-motion";

export const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.3,
      },
    },
  };
  
export const messageVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
export const buttonVariants: Variants = {
    hidden: { opacity: 0,  },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1.1 },
    },
  };
  

export const textPullUpVariant: Variants = {
    hidden: {opacity: 0},
    animate: (i: number) => ({
        opacity: 1,
        transition: {
          delay: i * 0.1,
        },
    }),
}

export const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
                delay: i * 0.1,
            },
        }),
    };