"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import ThemeSwitcher from "../theme-switcher";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { NavLinks } from "@/lib/data";
import { useWindowSize } from "@/hooks/use-window-size";
import { useScroll } from "@/hooks/use-scroll";

const Header = () => {
    const size = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    const scrolled = useScroll(40);

    useEffect(() => {
        if (size?.width && size?.width > 767 && isOpen) {
            setIsOpen(false);
        }
    }, [size, isOpen]);
    return (
        <header
            className={cn(
                "sticky z-30 top-0 w-full border-b border-transparent",
                scrolled ? "bg-muted/10 border-muted backdrop-blur-xl" : ""
            )}
        >
            <div className="flex items-center justify-between p-4 mx-auto max-w-7xl md:px-8">
                <Link href="/">
                    <h3 className="text-2xl font-bold md:text-3xl">Jpaltahona</h3>
                </Link>

                <div className="items-center hidden gap-6 md:flex">
                    <ul className="flex items-center gap-x-6">
                        {NavLinks.map((link, i) => (
                            <li key={i}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="h-6 w-[1px] bg-muted"></div>
                    <ThemeSwitcher />
                </div>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="flex md:hidden">
                        <Button size="icon" variant="ghost">
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <ul className="flex flex-col justify-start p-4 border-b gap-y-4 border-input">
                            {NavLinks.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between p-4">
                            <p>Switch Theme</p>
                            <ThemeSwitcher />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Header;
