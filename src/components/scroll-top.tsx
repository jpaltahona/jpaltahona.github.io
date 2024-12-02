"use client";

import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const ScrollTopButton = () => {
    const scrolled = useScroll(50);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <Button
            onClick={handleScrollTop}
            variant="gradient"
            size="icon"
            className={cn(
                "hover:scale-105 z-50 text-white fixed bottom-5 right-5 transition-all duration-300 size-10 rounded-full",
                scrolled
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            )}
        >
            <ArrowUp className="size-5" />
        </Button>
    );
};

export default ScrollTopButton;
