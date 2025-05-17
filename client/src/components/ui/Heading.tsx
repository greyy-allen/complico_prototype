import React from "react";

const sizes = {
  headingxl: "text-[14px] font-bold",
  heading2xl: "text-[16px] font-bold",
  heading4xl: "text-[20px] font-bold",
  heading5xl: "text-[24px] font-bold md:text-[22px]",
  heading7xl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "heading2xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-roboto ${className} ${sizes[size] as keyof typeof sizes}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
