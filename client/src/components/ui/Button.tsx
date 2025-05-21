"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: string;
  asChild?: boolean;
  colorScheme?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap transition-all duration-200 relative font-medium",
  {
    variants: {
      fill: {
        deep_purple_A200: "bg-deep_purple-a200 text-white-a700 hover:bg-deep_purple-800 shadow-sm",
        indigo_A400: "bg-indigo-a400 text-white-a700 hover:bg-indigo-600 shadow-sm",
        white_A700: "bg-white-a700 text-black-900_b2 hover:bg-gray-50 border border-gray-200",
        gray_100: "bg-gray-100 shadow-sm text-black-900 hover:bg-gray-200",
        blue_gray_100: "bg-blue_gray-100 text-black-900 hover:bg-blue_gray-200",
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
        outline: "bg-transparent border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
        subtle: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
        success: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
      },
      size: {
        xs: "h-[30px] text-xs px-2.5 py-1",
        sm: "h-[34px] text-sm px-3 py-1.5",
        lg: "h-[38px] px-[34px] text-[16px] py-2",
        "6xl": "h-[80px] px-[34px] text-[20px]",
        md: "h-[36px] px-4 py-2 text-sm",
        xl: "h-[44px] px-5 py-2.5 text-base",
        "2xl": "h-[52px] px-6 py-3 text-lg",
        "3xl": "h-[60px] px-[18px] text-[20px]",
      },
      shape: {
        square: "rounded-[0px]",
        round: "rounded-[5px]",
        pill: "rounded-full",
        circle: "rounded-[50%] aspect-square p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      fill: "primary",
      size: "md",
      shape: "round",
    },
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "primary",
      variant = "fill",
      shape = "round",
      size = "md",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      isLoading = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = isLoading || disabled;

    return (
      <Comp 
        className={cn(
          buttonVariants({ [variant]: colorScheme, size, shape }), 
          isDisabled && "opacity-70 cursor-not-allowed pointer-events-none",
          className
        )} 
        ref={ref} 
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        <span className={isLoading ? "invisible" : ""}>
          {!!leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
          {children}
          {!!rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };