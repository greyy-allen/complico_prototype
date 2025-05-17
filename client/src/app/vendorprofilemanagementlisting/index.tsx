import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import VendorprofilemanagementlistingGroup3243 from "./VendorprofilemanagementlistingGroup3243";
import { Heading } from "@/components/ui";
import React from "react";

export default function VendorProfileManagementListingPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-6 mt-2.5 flex flex-col gap-9">
        <Header className="gap-1.5" />
        <div className="ml-[22px] mr-[30px] flex items-start md:mx-0">
          <Sidebar1 />
          <div className="flex flex-1 flex-col items-center self-center">
            <div className="relative z-[4] mb-1.5 ml-[119px] flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
              <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
                Statistics
              </Heading>
            </div>
            <div className="relative ml-[18px] mt-[-80px] flex flex-col items-start self-stretch md:ml-0">
              <div className="relative z-[3] mb-2 ml-[453px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                <Heading size="heading4xl" as="h2" className="self-end text-[20px] font-bold">
                  History
                </Heading>
              </div>
              <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                <div className="relative z-[2] mb-2 ml-[135px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                  <Heading size="heading4xl" as="h3" className="self-end text-[20px] font-bold">
                    Listing
                  </Heading>
                </div>
                <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                  <div className="relative z-[1] mb-[11px] ml-[294px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                    <Heading size="heading4xl" as="h4" className="self-end text-[20px] font-bold">
                      Library
                    </Heading>
                  </div>
                  <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                    <div className="flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
                      <Heading size="heading4xl" as="h5" className="text-[20px] font-bold">
                        Account
                      </Heading>
                    </div>
                    <div className="relative mt-[-12px] self-stretch rounded-[10px] bg-gray-100 py-5 shadow-sm">
                      <VendorprofilemanagementlistingGroup3243 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
