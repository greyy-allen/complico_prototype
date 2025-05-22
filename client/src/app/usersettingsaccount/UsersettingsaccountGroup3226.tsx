import UserProfile from "../../components/UserProfile";
import { Heading } from "@/components/ui";
import React from "react";

export default function UsersettingsaccountGroup3226() {
  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-start">
        {/* Modern tab navigation replacing the old tab structure */}
        <div className="flex w-full justify-start mb-4 overflow-x-auto">
          <div className="flex space-x-2">
            <div className="flex rounded-md bg-indigo-600 p-3 shadow-md border border-indigo-700 cursor-pointer">
              <Heading size="heading4xl" as="h4" className="text-[16px] font-bold text-white flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Account
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h3" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </span>
                Library
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h2" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18.4 9l-5.1 5.1-2.8-2.8L7 14.8"></path>
                  </svg>
                </span>
                History
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h1" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-6M6 20V10M18 20V4"></path>
                  </svg>
                </span>
                Statistics
              </Heading>
            </div>
          </div>
        </div>
        
        {/* Content area remains unchanged */}
        <div className="relative mt-2 flex flex-col gap-4 self-stretch rounded-[10px] bg-white px-3.5 py-6 shadow-md sm:py-5 border border-gray-200">
          <UserProfile />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}