"use client";

import { Img } from "@/components/ui";
import React from "react";
import { Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  return (
    <Sidebar
      {...props}
      width="72pxpx !important"
      className={`${props.className} flex flex-col h-screen mt-2.5 top-0 !sticky overflow-auto`}
    >
      <Img src="img_line_32.svg" width={30} height={3} alt="Line 32" className="ml-2.5 h-[3px]" />
      <Img src="img_line_32.svg" width={30} height={3} alt="Line 33" className="ml-2.5 mt-1.5 h-[3px]" />
      <Img src="img_line_32.svg" width={30} height={3} alt="Line 34" className="ml-2.5 mt-1.5 h-[3px]" />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            borderRadius: "10px",
            margin: " ",
            border: "1px solid transparent",
            [`&:hover, &.ps-active`]: { borderColor: "#000000", backgroundColor: "#ffffff !important" },
          },
          label: { display: "none" },
        }}
        className="flex h-[0%] w-full flex-col items-center md:pb-5 md:pr-5"
      >
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="h-px w-px" />
        <div className="mb-[330px] h-px w-px" />
      </Menu>
    </Sidebar>
  );
}
