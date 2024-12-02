"use client";

import { useEffect, useState } from "react";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <Button size="icon" variant="ghost">
                <Sun />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative"
        >
            <Sun className="absolute transition-transform duration-300 scale-0 -rotate-180 dark:rotate-0 dark:scale-100" />
            <MoonStar className="absolute transition-transform duration-300 scale-100 rotate-0 dark:rotate-180 dark:scale-0" />
        </Button>
    );
};

export default ThemeSwitcher;
