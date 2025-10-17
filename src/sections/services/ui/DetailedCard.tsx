import {motion} from "framer-motion";
import Image from "next/image";
import {DetailedCardProps} from "@/sections/services/model/types";

export function DetailedCard({id, iconSrc, title, onClick, stack, description}: DetailedCardProps){
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(24px)"
                }}
                exit={{
                    opacity: 0
                }}
                className={"fixed z-10 inset-0"}


                transition={{ delay: 0.1 }}

                onClick={onClick}
            ></motion.div>

            <div className={"fixed z-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px]"} onClick={onClick}>
                <motion.div
                    layoutId={id}
                    animate={{
                        backdropFilter: "blur(4px)",
                    }}

                    className={"border relative border-white/30 bg-white/10 rounded-3xl p-8 after:content-[''] after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:shadow-2xl after:shadow-white/30 after:-m-2 after:blur-xl"}
                >
                    <Image src={iconSrc} alt={title} width={50} height={50} />
                    <h3 className="text-white text-xl font-bold mt-5">{title}</h3>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6"
                    >
                        <div className="mb-5">
                            <h4 className="text-white font-medium mb-3">Описание:</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                {description.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="text-white/90"
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium mb-3">Технологии:</h4>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 + index * 0.05 }}
                                        className="bg-white/20 px-3 py-1.5 rounded text-sm text-white"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <div className={"flex items-end justify-end gap-3 w-full mt-8"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="bg-white p-1 w-[28px] h-fit text-black/100 rounded-full"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 15 12 9 18 15" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}