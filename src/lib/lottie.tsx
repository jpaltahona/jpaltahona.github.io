"use client";
import LottieAnimation from "lottie-react";

const Lottie = ({
    animationData,
    width,
}: {
    animationData: any;
    width?: string;
}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        style: {
            width: width || "95%",
        },
    };

    return <LottieAnimation {...defaultOptions} />;
};

export default Lottie;
