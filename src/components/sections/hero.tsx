import Image from "next/image";
import Link from "next/link";
import { Download, SendHorizonal } from "lucide-react";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <Container id="hero">
            <div className="flex flex-col items-center w-full gap-y-10">
                {/* Image */}
                <div className="relative size-36 ">
                    <Image
                        src="/images/profile.png"
                        alt="profile"
                        fill
                        className="rounded-full"
                    />
                </div>

                {/* Content */}
                <div className="space-y-2.5 text-center">
                    <h2 className="text-xl font-bold md:text-2xl">
                        Hello, I am Jean altahona 👋
                    </h2>
                    <h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text md:text-5xl lg:text-6xl">
                        FULL STACK <br /> WEB DEVELOPER
                    </h1>
                    <p className="max-w-md mx-auto text-sm md:text-base text-muted-foreground">
                    Soy un apasionado desarrollador web full stack (MERN) cuyo
                    enfoque es crear sitios web interactivos impresionantes con píxeles perfectos.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <Button
                        asChild
                        className="gap-x-2 text-white w-full max-w-[180px]"
                        size="lg"
                        variant="gradient"
                    >
                        <Link href="#contact">
                            Contact <SendHorizonal className="size-4" />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="gap-x-2 w-full max-w-[180px]"
                    >
                        {/* Add the url of your cv */}
                        <Link href="/" target="_blank">
                            Download CV <Download className="size-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
