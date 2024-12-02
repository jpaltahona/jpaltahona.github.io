import Link from "next/link";
import { Copyright } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-primary-foreground">
            <div className="flex items-center justify-center">
                <p className="text-sm flex items-center gap-2 text-center font-normal">
                    <Copyright className="size-4" /> {new Date().getFullYear()}{" "}
                    <Link
                        href="https://coderredoy.com"
                        target="_blank"
                        className="underline underline-offset-4 text-foreground/80 hover:text-foreground transition-colors"
                    >
                        jpaltahona
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
