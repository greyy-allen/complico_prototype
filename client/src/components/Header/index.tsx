"use client";

import { Button, Img, Text } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between w-full px-6 py-4 bg-white shadow-sm">
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/cimplico_logo.png"
          alt="Cimplico Logo"
          width={200}
          height={125}
        />
      </Link>

      {/* Center Navigation */}
      <nav className="flex items-center gap-4">
        <Link href="#">Features</Link>
        <Link href="#">Resources</Link>
        <Link href="#">Use&nbsp;cases</Link>
        <Link href="#">Pricing</Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search icon */}
        <Button
          size="md"
          shape="circle"
          className="w-[75px] h-[36px] border border-black"
        >
          <Img src="img_dashicons_search.svg" width={20} height={20} alt="Search" />
        </Button>

        <Link href="#">
          <Text className="text-sm font-medium">Start&nbsp;Trial</Text>
        </Link>

        <Link href="/choose-role">
          <Text className="text-sm font-medium">Login</Text>
        </Link>

        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Book demo
        </Button>
      </div>
    </header>
  );
}
