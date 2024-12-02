import { useState, useLayoutEffect } from "react";

type WindowSize = {
    width: number | null;
    height: number | null;
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: null,
        height: null,
    });

    useLayoutEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
