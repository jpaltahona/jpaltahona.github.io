"use client";

import { useState } from "react";
import { Copy, Mail } from "lucide-react";

import Container from "@/components/layout/container";
import Tag from "@/components/tag";
import { cn, copyToClipboard } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/lib/data";

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = "jpaltahonacc@gmail.com";

    const handleCopyEmail = async () => {
        try {
            await copyToClipboard(email);
            setIsCopied(true);

            const timeoutId = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
            return () => clearTimeout(timeoutId);
        } catch (err) {
            setIsCopied(false);
            alert("Failed to copy email!");
        }
    };
    return (
        <Container id="contact">
            <div className="self-center">
                <Tag label="Contacto" />
            </div>
            <div className="flex flex-col items-center gap-y-6 md:gap-y-12">
                <p className="text-center max-w-xl mx-auto md:text-lg">
                Estoy siempre abierto a conversar sobre oportunidades laborales o colaboraciones estratégicas. 
                ¿Tienes algún proyecto en mente? No dudes en contactarme; estaré encantado de ayudarte a hacerlo realidad y te responderé a la brevedad
                </p>

                <div className="flex flex-col gap-y-6 items-center md:gap-y-12">
                    <div className="flex items-center gap-4">
                        <Mail className="md:size-7" />
                        <h2 className="font-semibold text-lg md:text-3xl">
                            {email}
                        </h2>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={handleCopyEmail}
                            className="relative"
                        >
                            {isCopied && (
                                <span
                                    className={cn(
                                        "absolute opacity-0 -top-8 md:-top-10 py-1 px-3 bg-muted rounded-md text-sm font-normal",
                                        isCopied &&
                                            "opacity-100 duration-300 transition-opacity"
                                    )}
                                >
                                    Copied!
                                </span>
                            )}
                            <Copy className="md:size-7" />
                        </Button>
                    </div>
                    
                    <div className="flex flex-col gap-y-2 items-center">
                        <p className="md:text-lg">Or, find me on</p>
                        <div className="flex items-center gap-x-1.5">
                            {SocialLinks.map((link, i) => (
                                <Button
                                    key={i}
                                    size="icon"
                                    variant="ghost"
                                    onClick={() =>
                                        window.open(link.href, "_blank")
                                    }
                                >
                                    <link.icon />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </Container>
    );
};

export default Contact;
