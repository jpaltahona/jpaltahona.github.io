"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/layout/container";
import Tag from "@/components/tag";
import { Experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
};

const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState("Spotify");
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <Container id="experience">
            <div className="flex flex-col items-center gap-y-4">
                <Tag label="Experience" />
                <p className="max-w-xl text-center md:text-lg">
                    Here's a quick summary of my work experiences.
                </p>
            </div>

            <div className="flex flex-col w-full max-w-2xl gap-6 mx-auto md:flex-row">
                <div className="relative flex flex-row items-center gap-2 overflow-x-auto md:flex-col md:items-start md:gap-4 company-btn-wrapper">
                    {Experiences.map((experience, i) => (
                        <motion.button
                            key={i}
                            className={cn(
                                "min-w-[120px] flex items-center relative gap-x-2 py-2 px-3 rounded-md h-10 font-normal text-sm md:hover:bg-muted",

                                experience.company === selectedCompany &&
                                    "bg-muted"
                            )}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            onClick={() =>
                                setSelectedCompany(experience.company)
                            }
                        >
                            <Image
                                src={experience.logo}
                                width={16}
                                height={16}
                                alt={experience.company}
                            />{" "}
                            {experience.company}
                            <AnimatePresence>
                                {hoveredIdx === i && (
                                    <motion.span
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: {
                                                duration: 0.15,
                                                delay: 0.2,
                                            },
                                        }}
                                        className="absolute -z-[1] inset-0 h-full w-full bg-muted rounded-md"
                                    />
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </div>
                <div className="relative flex-1 w-full md:pl-10">
                    <AnimatePresence mode="wait">
                        {Experiences.map(
                            (experience) =>
                                experience.company === selectedCompany && (
                                    <motion.div
                                        key={experience.company}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.25 }}
                                        className="w-full h-full"
                                    >
                                        <div className="flex flex-col text-muted-foreground gap-y-2">
                                            <h1 className="text-2xl font-bold text-foreground">
                                                {experience.position}
                                            </h1>
                                            <div className="text-sm tracking-wider">
                                                {new Intl.DateTimeFormat(
                                                    "en-US",
                                                    dateFormatOptions
                                                ).format(experience.startDate)}
                                                -{" "}
                                                {experience.endDate
                                                    ? new Intl.DateTimeFormat(
                                                          "en-US",
                                                          dateFormatOptions
                                                      ).format(
                                                          experience.endDate
                                                      )
                                                    : "Present"}
                                            </div>
                                            <p className="text-sm">
                                                {experience.location}
                                            </p>
                                            <ul className="flex flex-col p-2 gap-y-2">
                                                {experience.description.map(
                                                    (desc, j) => (
                                                        <li
                                                            key={j}
                                                            className="flex items-start text-sm gap-x-2"
                                                        >
                                                            <Check className="size-4 shrink-0 text-cyan-600" />{" "}
                                                            {desc}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </Container>
    );
};

export default Experience;
