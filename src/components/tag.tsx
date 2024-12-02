import * as React from "react";

import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
    ({ className, label, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex items-center justify-center rounded-xl bg-primary-foreground px-5 py-1"
            )}
            {...props}
        >
            <p className="text-sm font-medium text-center">{label}</p>
        </div>
    )
);

Tag.displayName = "Tag";

export default Tag;
