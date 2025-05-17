import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import UsersettingsaccountGroup3226 from "./UsersettingsaccountGroup3226";
import React from "react";

export default function UserSettingsAccountPage() {
  return (
    <div className="flex w-full flex-col gap-9 bg-white-a700">
      <Header className="mt-2.5 gap-1.5" />
      <div className="mb-[30px] ml-[22px] mr-[30px] flex items-start md:mx-0">
        <Sidebar1 />
        <UsersettingsaccountGroup3226 />
      </div>
    </div>
  );
}
