import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UsercontentmanagementlibraryGroup3371 from "./UsercontentmanagementlibraryGroup3371";
import React from "react";

export default function UserContentManagementLibraryPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-[30px] mt-2.5 flex flex-col gap-9">
        <Header className="gap-1.5" />
        <div className="ml-[22px] mr-[30px] flex items-start md:mx-0">
          <Sidebar1 />
          <UsercontentmanagementlibraryGroup3371 />
        </div>
      </div>
    </div>
  );
}
