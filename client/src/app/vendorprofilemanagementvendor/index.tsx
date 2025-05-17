import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import VendorprofilemanagementvendorGroup3401 from "./VendorprofilemanagementvendorGroup3401";
import React from "react";

export default function VendorProfileManagementVendorPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-7 mt-2.5 flex flex-col gap-9">
        <Header className="gap-1.5" />
        <div className="ml-5 mr-[30px] flex items-start md:mx-0">
          <Sidebar1 />
          <VendorprofilemanagementvendorGroup3401 />
        </div>
      </div>
    </div>
  );
}
