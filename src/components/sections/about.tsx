import Image from "next/image";

import Container from "@/components/layout/container";
import Tag from "@/components/tag";

const About = () => {
    return (
        <Container id="about">
            <div className="self-center">
                <Tag label="About" />
            </div>

            <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2">
                <div className="flex items-center justify-center w-full h-full">
                    <Image
                        src="/images/coder.png"
                        alt="coder"
                        width={320}
                        height={280}
                    />
                </div>

                <div className="flex flex-col max-w-xl text-center md:text-left gap-y-4">
                    <p className="text-sm text-muted-foreground lg:text-base">
                    Soy un desarrollador full-stack apasionado por la tecnología y el diseño centrado en la experiencia del usuario (UI/UX). Me especializo en la creación de aplicaciones web innovadoras utilizando tecnologías modernas como React, Next.js, Node.js, MongoDB, TypeScript, entre otras.
                    </p>
                    <p className="text-sm text-muted-foreground lg:text-base ">
                    Para mí, lo más importante es lograr un diseño perfectamente alineado en píxeles, garantizar una experiencia de usuario excepcional y escribir código claro y mantenible. Me esfuerzo constantemente por dar vida a los aspectos técnicos y visuales del mundo digital con excelencia y atención al detalle.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
