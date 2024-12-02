import { GithubIcon, Twitter, Instagram } from "lucide-react";

import JavascriptLogo from "/public/images/logos/javascript.svg";
import TypescriptLogo from "/public/images/logos/typescript.svg";
import ReactLogo from "/public/images/logos/react.svg";
import NextjsLogo from "/public/images/logos/next-js.svg";
import NodejsLogo from "/public/images/logos/node.svg";
import ExpressLogo from "/public/images/logos/express.svg";
import ExpressLightLogo from "/public/images/logos/express-light.svg";
import MongoDBLogo from "/public/images/logos/mongodb.svg";
import TailwindcssLogo from "/public/images/logos/tailwind-css.svg";
import SassLogo from "/public/images/logos/sass.svg";
import GitLogo from "/public/images/logos/git.svg";
import WordpressLogo from "/public/images/logos/wordpress.svg";
import WordpressLightLogo from "/public/images/logos/wordpress-light.svg";
import FigmaLogo from "/public/images/logos/figma.svg";

import SizzlerImage from "/public/images/project-images/sizzler-food.png";
import RentWheelImage from "/public/images/project-images/rentwheel.png";
import NexusCoinImage from "/public/images/project-images/nexuscoin.png";

import FiverrLogo from "/public/images/logos/fiverr.svg";
import MicrosoftLogo from "/public/images/logos/microsoft.svg";
import GoogleLogo from "/public/images/logos/google.svg";
import SpotifyLogo from "/public/images/logos/spotify.svg";

import { SkillsDetails, ProjectDetails, WorkExperienceDetails } from "./types";

export const NavLinks = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export const SkillsData: SkillsDetails[] = [
    {
        label: "JavaScript",
        logo: JavascriptLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        label: "TypeScript",
        logo: TypescriptLogo,
        url: "https://www.typescriptlang.org",
    },
    {
        label: "React",
        logo: ReactLogo,
        url: "https://reactjs.dev",
    },
    {
        label: "Next.js",
        logo: NextjsLogo,
        url: "https://nextjs.org",
    },
    {
        label: "Node.js",
        logo: NodejsLogo,
        url: "https://nodejs.org/en",
    },
    {
        label: "Express.js",
        logo: ExpressLogo,
        srcForDarkMode: ExpressLightLogo,
        url: "https://expressjs.com",
    },
    {
        label: "MongoDB",
        logo: MongoDBLogo,
        url: "https://www.mongodb.com",
    },
    {
        label: "Tailwind CSS",
        logo: TailwindcssLogo,
        url: "https://tailwindcss.com",
    },
    {
        label: "Sass/Scss",
        logo: SassLogo,
        url: "https://sass-lang.com",
    },
    {
        label: "Git",
        logo: GitLogo,
        url: "https://git-scm.com",
    },
    {
        label: "WordPress",
        logo: WordpressLogo,
        srcForDarkMode: WordpressLightLogo,
        url: "https://wordpress.org",
    },
    {
        label: "Figma",
        logo: FigmaLogo,
        url: "https://www.figma.com",
    },
];

export const ProjectsData: ProjectDetails[] = [
    {
        title: "Sizzler",
        description:
            "Sizzler is a full-stack food ordering application built using React, Next.js, TailwindCSS, MongoDB and Stripe.",
        image: SizzlerImage,
        link: "https://sizzler-food-website.vercel.app/",
        codeLink: "#",
        technologies: [
            "IconBrandReact",
            "IconBrandNextjs",
            "IconBrandMongodb",
            "IconBrandTailwind",
            "IconBrandStripe",
        ],
    },
    {
        title: "RentWheel",
        description: "A car rental application built using React, TailwindCSS",
        image: RentWheelImage,
        link: "https://rent-wheel.vercel.app/",
        codeLink: "#",
        technologies: ["IconBrandReact", "IconBrandTailwind"],
    },
    {
        title: "NexusCoin",
        description:
            "NexusCoin is a cryptocurrency buying and tracking website built with React.js and Tailwind CSS, CoinGecko API & FramerMotion.",
        image: NexusCoinImage,
        link: "https://nexuscoin.vercel.app",
        codeLink: "#",
        technologies: [
            "IconBrandReact",
            "IconBrandTailwind",
            "IconBrandFramerMotion",
        ],
    },
];

export const SocialLinks = [
    {
        label: "Github",
        icon: GithubIcon,
        href: "https://github.com/imredoyyy",
    },
    {
        label: "Twitter",
        icon: Twitter,
        href: "/",
    },
    {
        label: "Instagram",
        icon: Instagram,
        href: "/",
    },
];

export const Experiences: WorkExperienceDetails[] = [
    {
        position: "Independent Freelancer",
        company: "Freelancer",
        logo: FiverrLogo,
        description: [
            "Worked for various client.",
            "Worked for some of the Silicon Valley startups",
            "Worked with variety of technologies, including React, Next.js, TailwindCSS, Express.js, MongoDB, TypeScript, Node.js.",
        ],
        location: "Work from Home",
        startDate: new Date(2023, 8),
    },
    {
        position: "Sr. Software Engineer",
        company: "Spotify",
        logo: SpotifyLogo,
        description: [
            "Worked on the Spotify team.",
            "Introduced a feature that allows users to listen to music while sleeping.",
            "Screwed up the user experience of the app.",
        ],
        location: "San Francisco, CA",
        startDate: new Date(2023, 1),
        endDate: new Date(2023, 6),
    },
    {
        position: "Jr. Software Engineer",
        company: "Microsoft",
        logo: MicrosoftLogo,
        description: [
            "Worked on the Windows team.",
            "Carefully crafted the famous Windows 'Blue Screen of Death'.",
            "Added tons of bugs 🐛.",
        ],
        location: "Redmond, WA",
        startDate: new Date(2022, 11),
        endDate: new Date(2022, 12),
    },
    {
        position: "Intern Software Engineer",
        company: "Google",
        logo: GoogleLogo,
        description: [
            "Worked on the Google Ads team.",
            "Introduced some clever ways to steal users data when they click on an ad.",
            "Deleted a database of millions of users and got fired the same day.",
        ],
        location: "Mountain View, CA",
        startDate: new Date(2022, 8),
        endDate: new Date(2022, 10),
    },
];
