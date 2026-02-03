import React from 'react';
import { cn } from '../utils/cn';
import { Loader2 } from 'lucide-react';

const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};

const Button = React.forwardRef(({ className, variant = "default", size = "default", isLoading, children, disabled, ...props }, ref) => {
  const variantStyles = buttonVariants[variant] || buttonVariants.default;
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "h-10 px-4 py-2", // Default size hardcoded for now
        variantStyles,
        className
      )}
      ref={ref}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});
Button.displayName = "Button";

export default Button;
