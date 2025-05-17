import { Heading, Text } from "@/components/ui";
import Link from "next/link";
import React from "react";

export default function DocumentinformationGroup3343() {
  return (
    <div className="flex w-[34%] flex-col items-end md:w-full md:px-5">
      <div className="flex w-[84%] flex-col gap-2.5 md:w-full">
        <div className="mr-3 flex flex-wrap justify-between gap-5 md:mr-0">
          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold md:text-[22px]">
            Details
          </Heading>
          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold md:text-[22px]">
            Resources
          </Heading>
        </div>
        <div className="flex items-start justify-center sm:flex-col">
          <Text as="p" className="relative z-[1] w-[68%] self-center text-[14px] font-normal leading-4 sm:w-full">
            <span className="font-bold">Technical Specifications</span>
            <span>
              <>
                <br />
                XXX XXX X XXX
                <br />
                XXXXXX XX XXXXXX
                <br />
                XXX XXXX
                <br />
                XX
                <br />
                XXXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                Site
                <br />
              </>
            </span>
            <span>
              <>
                XXXXXXXXXXXXXX.com
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                Compatibility
                <br />
              </>
            </span>
            <span>
              <>
                XXXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                Versions
                <br />
              </>
            </span>
            <span>
              <>
                XXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                License Terms:
                <br />
              </>
            </span>
            <span>
              <>
                XXXXXXXXXXXXXXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                Published Date
                <br />
              </>
            </span>
            <span>
              <>
                XX/XX/XXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">Last Updated</span>
            <span>
              <>
                <br />
                XXXXXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">XXXXXXXXX</span>
            <span>
              <>
                <br />
                XXXXXXXXXXXXXXXXXXXX
                <br />
                <br />
              </>
            </span>
            <span className="font-bold">
              <>
                XXXXX
                <br />
                XXXXXXXXXXXX
              </>
            </span>
          </Text>
          <div className="mt-1.5 flex flex-col items-start gap-4">
            <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
              Author
            </Heading>
            <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
              Website
            </Heading>
            <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
              Contact
            </Heading>
            <Link href="#">
              <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
                Terms of Service
              </Heading>
            </Link>
            <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
              Privacy Notice
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
