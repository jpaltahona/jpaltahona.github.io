"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

import Tag from "@/components/tag";
import Container from "@/components/layout/container";
import ShineBorder from "@/components/magicui/shine-border";

import { SkillsData } from "@/lib/data";

const Skills = () => {
    const { theme } = useTheme();
    return (
        <Container id="skills">
            <div className="flex flex-col items-center gap-y-4">
                <Tag label="Skills" />
                <p className="max-w-xl text-center md:text-lg">
                Las herramientas, habilidades y tecnologías en las que soy bueno::
                </p>
            </div>

            <Marquee
                gradient={false}
                speed={80}
                pauseOnClick={true}
                pauseOnHover={true}
                direction="left"
                play={true}
            >
                {SkillsData.map((skill, i) => (
                    <Link
                        key={i}
                        href={skill.url}
                        target="_blank"
                        className="flex mx-4"
                    >
                        <ShineBorder
                            borderRadius={12}
                            duration={12}
                            className="min-h-36 min-w-36"
                            color={[
                                "rgb(67, 56, 202)",
                                "rgb(236, 72, 153)",
                                "rgb(107, 33, 168)",
                            ]}
                            borderWidth={1.5}
                        >
                            <div className="flex flex-col items-center w-full h-full gap-y-4">
                                <Image
                                    // Some logo colors doesn't match with the dark mode, so we need to use different logo for dark mode
                                    src={
                                        theme === "dark"
                                            ? skill.srcForDarkMode || skill.logo
                                            : skill.logo
                                    }
                                    alt={skill.label}
                                    className="rounded-md size-10"
                                />
                                <p className="text-sm font-medium">
                                    {skill.label}
                                </p>
                            </div>
                        </ShineBorder>
                    </Link>
                ))}
            </Marquee>
        </Container>
    );
};

export default Skills;
