import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Link from "next/link";
import BrowsecontentGroup126 from "../../../components/Highlight/Highlight";
import FirmWorkpapers from "../FirmWorkpapers";
import { Heading } from "@/components/ui";
import React from "react";

export default function FirmSubscriptionPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="relative z-[8] flex flex-col items-center shadow-sm">
        <Header className="w-full px-6 md:px-10" />
      </div>
      <div className="overflow-x-scroll shadow-sm">
        <BrowsecontentGroup126 />
      </div>
      <div>
        <div className="mx-[60px] mt-[68px] flex items-start justify-between gap-5 md:mx-0 md:flex-col">
          {/* Updated sidebar to match the new screenshot layout */}
          <div className="w-[14%] md:w-full md:px-4 bg-white rounded-lg border border-gray-200 shadow-sm self-start">

            <section className="px-6 py-5">
              <Heading size="heading5xl" as="h2" className="text-[18px] font-bold text-gray-900 mb-4">
                Collections
              </Heading>

              <ul className="ml-3 space-y-2">
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Workpapers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Audit
                  </Link>
                </li>
              </ul>
            </section>

            <section className="px-6 py-5">
              <Heading size="heading5xl" as="h2" className="text-[18px] font-bold text-gray-900 mb-4">
                Offered
              </Heading>

              <ul className="ml-3 space-y-2">
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Limited-Time
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    On sale
                  </Link>
                </li>
              </ul>
            </section>

            <div className="px-6 py-5 pb-20">
              <Heading size="heading5xl" as="h2" className="text-[18px] font-bold text-gray-900 mb-4">
                Product Type
              </Heading>

              <ul className="ml-3 space-y-2">
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Accounting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Workpaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Audit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Statements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Superannuation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block text-[16px] text-blue-600 no-underline hover:font-bold">
                    Tax
                  </Link>
                </li>
              </ul>
            </div>

            {/* Notification badge at bottom */}
            <div className="fixed bottom-4 left-5 bg-red-600 text-white rounded-lg py-2 px-4 flex items-center justify-between shadow-md z-50">
              <div className="flex items-center">
                <span className="font-bold mr-2">N</span>
                <span className="mr-2">1 Issue</span>
              </div>
              <button className="ml-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <FirmWorkpapers />
        </div>
        <Footer className="mb-8 ml-[52px] mr-12 mt-9 md:mx-0" />
      </div>
    </div>
  );
}