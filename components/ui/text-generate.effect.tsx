"use client";

import {useEffect} from "react";
import { motion, stagger, useAnimate } from "motion/react";
import {cn} from "@/lib/utils";

export const TextGenerateEffect = ({words, className, filter = true, duration = 1,}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {

    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [animate, duration, filter]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="">
                <div className="text-7xl text-center pb-20 font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
