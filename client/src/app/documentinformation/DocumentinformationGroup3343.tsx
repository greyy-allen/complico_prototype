import { Heading, Text } from "@/components/ui";
import Link from "next/link";
import React from "react";

export default function DocumentinformationGroup3343() {
  return (
    <div className="flex w-[34%] flex-col items-end md:w-full md:px-5">
      <div className="flex w-[84%] flex-col gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:w-full">
        <div className="mr-3 flex flex-wrap justify-between gap-5 border-b border-gray-200 pb-3 md:mr-0">
          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold text-gray-800 md:text-[22px]">
            Details
          </Heading>
          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold text-indigo-600 md:text-[22px]">
            Resources
          </Heading>
        </div>
        <div className="flex items-start justify-center gap-6 sm:flex-col">
          {/* Left side - Details */}
          <Text as="p" className="relative z-[1] w-[68%] self-center text-[14px] font-normal leading-5 sm:w-full">
            <div className="flex flex-col gap-3">
              <div>
                <span className="font-bold text-gray-800 block mb-1">Technical Specifications</span>
                <span className="text-gray-600">
                  <>
                    XXX XXX X XXX
                    <br />
                    XXXXXX XX XXXXXX
                    <br />
                    XXX XXXX
                    <br />
                    XX
                    <br />
                    XXXXX
                  </>
                </span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">Site</span>
                <span className="text-blue-600 hover:underline">XXXXXXXXXXXXXX.com</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">Compatibility</span>
                <span className="text-gray-600">XXXXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">Versions</span>
                <span className="text-gray-600">XXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">License Terms:</span>
                <span className="text-gray-600">XXXXXXXXXXXXXXXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">Published Date</span>
                <span className="text-gray-600">XX/XX/XXXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">Last Updated</span>
                <span className="text-gray-600">XXXXXXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block mb-1">XXXXXXXXX</span>
                <span className="text-gray-600">XXXXXXXXXXXXXXXXXXXX</span>
              </div>
              
              <div>
                <span className="font-bold text-gray-800 block">XXXXX</span>
                <span className="font-bold text-gray-800 block">XXXXXXXXXXXX</span>
              </div>
            </div>
          </Text>
          
          {/* Right side - Resources */}
          <div className="mt-1.5 flex flex-col items-start gap-5">
            <Link href="#" className="group no-underline">
              <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:font-bold transition-all flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Author
              </Heading>
            </Link>
            
            <Link href="#" className="group no-underline">
              <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:font-bold transition-all flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </span>
                Website
              </Heading>
            </Link>
            
            <Link href="#" className="group no-underline">
              <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:font-bold transition-all flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Contact
              </Heading>
            </Link>
            
            <Link href="#" className="group no-underline">
              <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:font-bold transition-all flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </span>
                Terms of Service
              </Heading>
            </Link>
            
            <Link href="#" className="group no-underline">
              <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:font-bold transition-all flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                Privacy Notice
              </Heading>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}