"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  variant?: string;
  colorScheme?: string;
}

interface IconProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const inputVariants = cva("w-full flex items-center justify-center cursor-text text-black-900 border-solid", {
  variants: {
    fill: {
      white_A700: "bg-white-a700",
      blue_gray_100: "bg-blue_gray-100 text-black-900",
    },
    size: {
      "5xl": "h-[70px] px-3 text-[14px]",
      xl: "h-[44px] px-3 text-[16px]",
      lg: "h-[34px] px-3.5 text-[14px]",
    },
    shape: {
      square: "rounded-[0px]",
      round: "rounded-[10px]",
    },
  },
  defaultVariants: {},
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "fill", colorScheme = "blue_gray_100", shape, size = "lg", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ [variant]: colorScheme, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full", className)} {...props} ref={ref}>
        {children}
      </div>
    );
  },
);
InputGroup.displayName = "InputGroup";

const InputLeftElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("absolute aspect-square h-full left-0 justify-center flex items-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
InputLeftElement.displayName = "InputLeftElement";

const InputRightElement = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("absolute aspect-square h-full right-0 justify-center flex items-center", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
InputRightElement.displayName = "InputRightElement";

export { Input, InputGroup, InputLeftElement, InputRightElement };
