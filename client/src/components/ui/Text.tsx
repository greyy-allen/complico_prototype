import React from "react";

const sizes = {
  textlg: "text-[12px] font-normal",
  textxl: "text-[14px] font-normal",
  text2xl: "text-[16px] font-normal",
  text4xl: "text-[20px] font-normal",
  text7xl: "text-[32px] font-normal md:text-[30px] sm:text-[28px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-roboto ${className} ${sizes[size as keyof typeof sizes]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
