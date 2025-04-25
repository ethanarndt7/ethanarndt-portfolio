import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
