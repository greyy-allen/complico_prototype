import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import VendorprofilemanagementaccountGroup3326 from "./VendorprofilemanagementaccountGroup3326";
import React from "react";

export default function VendorProfileManagementAccountPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-[34px] mt-2.5 flex flex-col gap-9">
        <Header className="gap-1.5" />
        <div className="ml-[22px] mr-[30px] flex items-start md:mx-0">
          <Sidebar1 />
          <VendorprofilemanagementaccountGroup3326 />
        </div>
      </div>
    </div>
  );
}
