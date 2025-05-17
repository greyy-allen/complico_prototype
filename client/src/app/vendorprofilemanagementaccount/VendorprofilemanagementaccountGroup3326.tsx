import UserProfile1 from "../../components/UserProfile1";
import { Button } from "@/components/ui";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "img_dashicons_desktop.svg",
    accountInformationText: "Account Information",
    editText: "Edit",
    displayNameLabel: "Display name",
    displayNameValue: "XX XXXX XXXXXXX",
    displayNameDescription: "This is the name that is shown or displayed to others",
    displayOptionsLabel: "Display Options",
    emailAddressLabel: "Email address",
    emailAddressValue: "XXXXXXXXXXXXXX@gmail.com",
    emailAddressDescription: "The email address you use to sign in to your Marketplace account",
    communicationPreferencesLabel: "Communication Preferences",
    userName: "XXXXXX  XXXX",
    userDetail1: "XXXX XXXXXX XX ",
    userDetail2: "XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  XXXX",
    additionalInfoLabel: "XX X X XXXXXXXX",
    additionalInfoValue: "XX XXX XXX XXX",
    additionalInfoDescription: (
      <>
        XXXX XX XXXXXXXXXXXXX XX X XXXXXXXXXXXXXX XXX X XXX X<br />
        XXXXXX XXXXXXXXXXXX
      </>
    ),
  },
  {
    userImage: "img_dashicons_desktop.svg",
    accountInformationText: "Account Information",
    editText: "Edit",
    displayNameLabel: "Display name",
    displayNameValue: "XX XXXX XXXXXXX",
    displayNameDescription: "This is the name that is shown or displayed to others",
    displayOptionsLabel: "Display Options",
    emailAddressLabel: "Email address",
    emailAddressValue: "XXXXXXXXXXXXXX@gmail.com",
    emailAddressDescription: "The email address you use to sign in to your Marketplace account",
    communicationPreferencesLabel: "Communication Preferences",
    userName: "XXXXXX  XXXX",
    userDetail1: "XXXX XXXXXX XX ",
    userDetail2: "XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  XXXX",
    additionalInfoLabel: "XX X X XXXXXXXX",
    additionalInfoValue: "XX XXX XXX XXX",
    additionalInfoDescription: (
      <>
        XXXX XX XXXXXXXXXXXXX XX X XXXXXXXXXXXXXX XXX X XXX X<br />
        XXXXXX XXXXXXXXXXXX
      </>
    ),
  },
  {
    userImage: "img_dashicons_desktop.svg",
    accountInformationText: "Account Information",
    editText: "Edit",
    displayNameLabel: "Display name",
    displayNameValue: "XX XXXX XXXXXXX",
    displayNameDescription: "This is the name that is shown or displayed to others",
    displayOptionsLabel: "Display Options",
    emailAddressLabel: "Email address",
    emailAddressValue: "XXXXXXXXXXXXXX@gmail.com",
    emailAddressDescription: "The email address you use to sign in to your Marketplace account",
    communicationPreferencesLabel: "Communication Preferences",
    userName: "XXXXXX  XXXX",
    userDetail1: "XXXX XXXXXX XX ",
    userDetail2: "XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  XXXX",
    additionalInfoLabel: "XX X X XXXXXXXX",
    additionalInfoValue: "XX XXX XXX XXX",
    additionalInfoDescription: (
      <>
        XXXX XX XXXXXXXXXXXXX XX X XXXXXXXXXXXXXX XXX X XXX X<br />
        XXXXXX XXXXXXXXXXXX
      </>
    ),
  },
];

export default function VendorprofilemanagementaccountGroup3326() {
  return (
    <div className="flex-1 self-center">
      <div className="ml-[18px] md:ml-0">
        <div className="flex md:flex-col">
          <Button
            size="6xl"
            shape="round"
            colorScheme="gray_100"
            className="w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:px-5"
          >
            Account
          </Button>
          <Button
            size="6xl"
            shape="round"
            colorScheme="gray_100"
            className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
          >
            Listing
          </Button>
          <Button
            size="6xl"
            shape="round"
            colorScheme="gray_100"
            className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
          >
            Library
          </Button>
          <Button
            size="6xl"
            shape="round"
            colorScheme="gray_100"
            className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
          >
            History
          </Button>
          <Button
            size="6xl"
            shape="round"
            colorScheme="gray_100"
            className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-8 font-bold md:ml-0 md:px-5"
          >
            Statistics
          </Button>
        </div>
        <div className="relative mt-[-12px] rounded-[10px] bg-gray-100 px-3.5 py-[22px] shadow-sm sm:py-5">
          <div className="mt-2 flex flex-col gap-4">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1 {...d} key={"group3998" + index} className="mr-1 md:mr-0" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
