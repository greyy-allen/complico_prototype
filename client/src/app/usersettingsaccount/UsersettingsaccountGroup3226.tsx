import UserProfile from "../../components/UserProfile";
import { Heading } from "@/components/ui";
import React from "react";

export default function UsersettingsaccountGroup3226() {
  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-start">
        <div className="relative z-[3] ml-[482px] flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs md:ml-0 sm:p-5">
          <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
            Statistics
          </Heading>
        </div>
        <div className="relative ml-[18px] mt-[-80px] flex flex-col items-start self-stretch md:ml-0">
          <div className="relative z-[2] ml-[310px] flex w-[14%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
            <Heading size="heading4xl" as="h2" className="self-end text-[20px] font-bold">
              History
            </Heading>
          </div>
          <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
            <div className="relative z-[1] ml-[154px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
              <Heading size="heading4xl" as="h3" className="self-end text-[20px] font-bold">
                Library
              </Heading>
            </div>
            <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
              <div className="flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
                <Heading size="heading4xl" as="h4" className="text-[20px] font-bold">
                  Account
                </Heading>
              </div>
              <div className="relative mt-[-12px] flex flex-col gap-4 self-stretch rounded-[10px] bg-gray-100 px-3.5 py-6 shadow-sm sm:py-5">
                <UserProfile />
                <UserProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
