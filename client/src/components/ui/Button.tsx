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
}

const buttonVariants = cva(
  "w-full flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
  {
    variants: {
      fill: {
        deep_purple_A200: "bg-deep_purple-a200 text-white-a700",
        indigo_A400: "bg-indigo-a400 text-white-a700",
        white_A700: "bg-white-a700 text-black-900_b2",
        gray_100: "bg-gray-100 shadow-xs text-black-900",
        blue_gray_100: "bg-blue_gray-100 text-black-900",
      },
      size: {
        lg: "h-[38px] px-[34px] text-[16px]",
        "6xl": "h-[80px] px-[34px] text-[20px]",
        md: "h-[30px]",
        xl: "h-[44px] px-1",
        "3xl": "h-[60px] px-[18px] text-[20px]",
      },
      shape: {
        square: "rounded-[0px]",
        round: "rounded-[5px]",
        circle: "rounded-[50%]",
      },
    },
    defaultVariants: {},
  },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = "blue_gray_100",
      variant = "fill",
      shape,
      size = "3xl",
      children,
      leftIcon,
      rightIcon,
      className,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ [variant]: colorScheme, size, shape, className }))} ref={ref} {...props}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
