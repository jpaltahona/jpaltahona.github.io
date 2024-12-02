"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import {
    IconBrandFramerMotion,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandStripe,
    IconBrandTailwind,
    IconBrandMongodb,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconMapType, ProjectDetails } from "@/lib/types";

const iconMap: IconMapType = {
    //Note: These icons name must match the strings in the `technologies` array.
    //Note: Otherwise, the icon will not be rendered and will throw an error.
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandStripe,
    IconBrandMongodb,
    IconBrandFramerMotion,
};

const ProjectCard = ({ projects }: { projects: ProjectDetails[] }) => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <div className="grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
                <div
                    key={idx}
                    className="relative block w-full h-full p-2 rounded-3xl group"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                >
                    <AnimatePresence>
                        {hoveredIdx === idx && (
                            <motion.span
                                className="absolute inset-0 block w-full h-full bg-muted rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="relative z-20 flex flex-col w-full h-full p-4 overflow-hidden transition duration-200 border shadow-2xl border-border/30 dark:shadow-md rounded-2xl bg-primary-foreground group-hover:border-muted-foreground/40 gap-y-4 shadow-primary/15 dark:shadow-muted/40">
                        <Link
                            href={project.link}
                            target="_blank"
                            className="relative h-44 sm:h-60 md:h-44"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover shadow-md shadow-muted-foreground/10 object-top transition-transform duration-500 rounded-xl md:hover:scale-105"
                            />
                        </Link>
                        <div className="flex flex-col gap-y-4">
                            <h2 className="text-lg font-semibold tracking-wide md:text-xl">
                                {project.title}
                            </h2>
                            <p className="text-sm leading-relaxed tracking-wide text-muted-foreground">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-2.5">
                                {project.technologies.map((iconName, i) => {
                                    const TechIcon = iconMap[iconName];
                                    return (
                                        <TooltipProvider key={i}>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <TechIcon
                                                        strokeWidth={1.5}
                                                        className="transition-colors size-5 text-muted-foreground hover:text-foreground"
                                                    />
                                                </TooltipTrigger>
                                                <TooltipContent className="text-xs">
                                                    {iconName.replace(
                                                        "IconBrand",
                                                        ""
                                                    )}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    );
                                })}
                            </div>
                            <div className="flex items-center gap-x-2.5">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        window.open(project.link, "_blank")
                                    }
                                    className="size-9 text-muted-foreground hover:text-foreground"
                                >
                                    <ExternalLink
                                        strokeWidth={1.5}
                                        className="size-5"
                                    />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        window.open(project.codeLink, "_blank")
                                    }
                                    className="size-9 text-muted-foreground hover:text-foreground"
                                >
                                    <Github
                                        strokeWidth={1.5}
                                        className="size-5"
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
