
import * as React from "react";
import { Plus as LucidePlus } from "lucide-react";

export const Plus = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={className}
      {...props}
    >
      <LucidePlus className="h-4 w-4" />
    </div>
  );
});

Plus.displayName = "Plus";
