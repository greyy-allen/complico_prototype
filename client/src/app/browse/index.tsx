import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";
import BrowsecontentGroup126 from "./BrowsecontentGroup126";
import BrowseProducts from "./BrowseProducts";
import { Heading } from "@/components/ui";
import React from "react";

export default function BrowseContentPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="relative z-[8] flex flex-col items-center">
        <Header className="w-full px-6 md:px-10" />
      </div>
      <div className="overflow-x-scroll">
        <BrowsecontentGroup126 />
      </div>
      <div>
        <div className="mx-[60px] mt-[68px] flex items-start justify-between gap-5 md:mx-0 md:flex-col">
          <div className="w-[14%] md:w-full md:px-4 flex flex-col gap-10">

            <section>
              <Heading size="heading5xl" as="h2" className="text-[24px] font-bold">
                Collections
              </Heading>

              <ul className="mt-2 space-y-1 text-[16px] font-medium">
                <li><Link href="#">Workpapers</Link></li>
                <li><Link href="#">Accounting</Link></li>
                <li><Link href="#">Audit</Link></li>
              </ul>
            </section>

            <section>
              <Heading size="heading5xl" as="h2" className="text-[24px] font-bold">
                Offered
              </Heading>

              <ul className="mt-2 space-y-1 text-[16px] font-medium">
                <li><Link href="#">Limited-Time</Link></li>
                <li><Link href="#">On sale</Link></li>
              </ul>
            </section>

            <section>
              <Heading size="heading5xl" as="h2" className="text-[24px] font-bold">
                Product Type
              </Heading>

              <ul className="mt-2 space-y-1 text-[16px] font-medium">
                <li><Link href="#">Accounting</Link></li>
                <li><Link href="#">Workpaper</Link></li>
                <li><Link href="#">Audit</Link></li>
                <li><Link href="#">Statements</Link></li>
                <li><Link href="#">Superannuation</Link></li>
                <li><Link href="#">Tax</Link></li>
                <li><Link href="#">Templates</Link></li>
              </ul>
            </section>

          </div>
          <BrowseProducts />
        </div>
        <Footer className="mb-8 ml-[52px] mr-12 mt-9 md:mx-0" />
      </div>
    </div>
  );
}
