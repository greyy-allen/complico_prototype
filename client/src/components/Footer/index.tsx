import { Text, Separator, Heading, Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start`}>
      {/* Call to Action Section */}
      <div className="flex flex-col items-center w-full justify-center gap-8 bg-gradient-to-br from-indigo-600 to-purple-700 px-14 py-16 rounded-t-xl shadow-lg md:p-5">
        <Heading
          size="heading7xl"
          as="h2"
          className="text-[36px] font-bold !text-white-a700 md:text-[30px] sm:text-[28px] text-center"
        >
          Call to Action Message
        </Heading>
        <Text
          size="text7xl"
          as="p"
          className="text-center text-[20px] font-normal leading-[1.6] !text-white-a700/90 max-w-3xl"
        >
          <>
            XXX XX X XXXXXXXXXXXX XX XXXXXXXXXXXXXX X X XXXXXXXXXXXXXXXXXXX XX
            <br />
            XXXXXXXXXXXXXXX X XXX X X XXXXXXXXXXXXXXXX
          </>
        </Text>
        <Button
          colorScheme="white_A700"
          className="mb-2 w-full min-w-[288px] max-w-[288px] rounded-full px-8 py-3 font-semibold text-indigo-600 hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
        >
          Get Started
        </Button>
      </div>

      {/* Links Section */}
      <div className="bg-gray-900 text-white w-full pt-16 pb-8 px-14 md:px-5">
        <div className="mx-auto flex w-full items-start justify-between gap-5 md:flex-col">
          {/* Product */}
          <div className="flex w-[28%] flex-col items-start gap-6 self-center md:w-full">
            <Heading size="heading4xl" as="h6" className="text-[20px] font-bold text-white">
              Product
            </Heading>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Product 1
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Product 2
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Product 3
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Product 4
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Product 5
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Solution */}
          <div className="flex w-[28%] flex-col items-start gap-6 md:w-full md:mt-8">
            <Heading size="heading4xl" as="h6" className="text-[20px] font-bold text-white">
              Solution
            </Heading>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Solution 1
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Solution 2
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Solution 3
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="flex w-[32%] flex-col items-start gap-6 md:w-full md:mt-8">
            <Heading size="heading4xl" as="h6" className="text-[20px] font-bold text-white">
              Resources
            </Heading>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Resources 1
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Resources 2
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="flex w-[133px] flex-col items-start gap-6 md:w-full md:mt-8">
            <Heading size="heading4xl" as="h6" className="text-[20px] font-bold text-white">
              Company
            </Heading>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <Link href="#" className="flex w-[133%] flex-row justify-start no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Company 1
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="#" className="w-[133px] no-underline">
                  <Text size="text4xl" as="p" className="text-[16px] font-normal text-gray-300 hover:font-bold transition-all">
                    Company 2
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter - New addition */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-4 max-w-xl mx-auto">
          <div className="flex-1 w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-all">
            Subscribe
          </Button>
        </div>
        
        {/* Footer Bottom */}
        <Separator orientation="horizontal" className="mt-16 h-px w-full self-stretch bg-gray-700" />
        <div className="mt-6 flex items-center justify-between gap-5 self-stretch sm:flex-col">
          <Text as="p" className="text-[14px] font-normal text-gray-400">
            Copyright 2025 @ Cimplico. All rights reserved.
          </Text>
          <div className="flex gap-8 sm:mt-4">
            <Link href="Status" target="_blank" rel="noreferrer" className="no-underline">
              <Text as="p" className="text-[14px] font-normal text-gray-400 hover:font-bold transition-all">
                Status
              </Text>
            </Link>
            <Link href="Terms" target="_blank" rel="noreferrer" className="no-underline">
              <Text as="p" className="text-[14px] font-normal text-gray-400 hover:font-bold transition-all">
                Terms
              </Text>
            </Link>
            <Link href="Privacy" target="_blank" rel="noreferrer" className="no-underline">
              <Text as="p" className="text-[14px] font-normal text-gray-400 hover:font-bold transition-all">
                Privacy
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}