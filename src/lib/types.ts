import { StaticImageData } from "next/image";
import { TablerIcon } from "@tabler/icons-react";

export type SkillsDetails = {
    label: string;
    logo: string;
    srcForDarkMode?: string;
    url: string;
};

export type IconMapType = {
    [key: string]: TablerIcon;
};

export type ProjectDetails = {
    title: string;
    description: string;
    image: string | StaticImageData;
    link: string;
    codeLink: string;
    technologies: string[];
};

export type WorkExperienceDetails = {
    position: string;
    company: string;
    logo: string;
    description: string[];
    location: string;
    startDate: Date;
    endDate?: Date;
};
