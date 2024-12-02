import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
    ({ className, children, ...props }: ContainerProps, ref) => {
        return (
            <section
                ref={ref}
                className={cn("w-full py-16 md:py-20 2xl:py-24", className)}
                {...props}
            >
                <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-12 px-4 md:px-8">
                    {children}
                </div>
            </section>
        );
    }
);

Container.displayName = "Container";

export default Container;
