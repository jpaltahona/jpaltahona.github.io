import { useCallback, useEffect, useState } from "react";

export const useScroll = (threshold: number) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return scrolled;
};
