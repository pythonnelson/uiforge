import * as React from "react";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="px-2 flex justify-between items-center w-full">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full outline-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <X className="w-4 h-4 flex-shrink-0" />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
