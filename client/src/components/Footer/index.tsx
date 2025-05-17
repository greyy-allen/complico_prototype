import { Text, Separator, Heading } from "@/components/ui";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start`}>
      <div className="mx-auto flex w-full items-start justify-between gap-5 md:flex-col md:px-5">
        <div className="flex w-[28%] flex-col items-start gap-2 self-center md:w-full">
          <Heading size="heading4xl" as="h6" className="text-[20px] font-bold">
            Product
          </Heading>
          <ul className="flex flex-col items-center gap-1.5">
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Product 1
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Product 2
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Product 3
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Product 4
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Product 5
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[28%] flex-col items-start gap-2 md:w-full">
          <Heading size="heading4xl" as="h6" className="text-[20px] font-bold">
            Solution
          </Heading>
          <ul className="flex flex-col items-center gap-1.5">
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Solution 1
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Solution 2
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Solution 3
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[32%] flex-col items-start gap-2 md:w-full">
          <Heading size="heading4xl" as="h6" className="text-[20px] font-bold">
            Resources
          </Heading>
          <ul className="flex flex-col items-center gap-1.5">
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Resources 1
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Resources 2
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[133px] flex-col items-start gap-2">
          <Heading size="heading4xl" as="h6" className="text-[20px] font-bold">
            Company
          </Heading>
          <ul className="flex flex-col items-start gap-1.5">
            <li>
              <Link href="#" className="flex w-[133%] flex-row justify-start">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Company 1
                </Text>
              </Link>
            </li>
            <li>
              <Link href="#" className="w-[133px]">
                <Text size="text4xl" as="p" className="text-[20px] font-normal !text-indigo-a100">
                  Company 2
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator orientation="horizontal" className="mt-12 h-px w-full self-stretch bg-black-900_7f" />
      <div className="mt-2 flex items-center justify-between gap-5 self-stretch sm:flex-col">
        <Text as="p" className="text-[14px] font-normal">
          Copyright 2025 @ Cimplico. All rights reserved.
        </Text>
        <div className="flex w-[18%] flex-wrap justify-between gap-5 sm:w-full">
          <Link href="Status" target="_blank" rel="noreferrer">
            <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
              Status
            </Text>
          </Link>
          <Link href="Terms" target="_blank" rel="noreferrer">
            <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
              Terms
            </Text>
          </Link>
          <Link href="Privacy" target="_blank" rel="noreferrer">
            <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
              Privacy
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
