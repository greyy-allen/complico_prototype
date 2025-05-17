import { Text, Separator, Heading, Img } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  accountInformationText?: React.ReactNode;
  editText?: React.ReactNode;
  line31?: boolean;
  displayNameText?: React.ReactNode;
  userName?: React.ReactNode;
  displayNameDescription?: React.ReactNode;
  displayOptionsText?: React.ReactNode;
  line36?: boolean;
  emailAddressText?: React.ReactNode;
  userEmail?: React.ReactNode;
  emailDescription?: React.ReactNode;
  communicationPreferencesText?: React.ReactNode;
  line37?: boolean;
  userFullName?: React.ReactNode;
  userAddress?: React.ReactNode;
  addressDescription?: React.ReactNode;
  line38?: boolean;
  userPhoneNumber?: React.ReactNode;
  phoneNumberDescription?: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

export default function UserProfile({
  userImage,
  accountInformationText,
  editText,
  line31,
  displayNameText,
  userName,
  displayNameDescription,
  displayOptionsText,
  line36,
  emailAddressText,
  userEmail,
  emailDescription,
  communicationPreferencesText,
  line37,
  userFullName,
  userAddress,
  addressDescription,
  line38,
  userPhoneNumber,
  phoneNumberDescription,
  additionalInfo,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch py-1.5 md:px-5 bg-white-a700 flex-1 rounded-[10px]`}
    >
      <div className="w-full">
        <div>
          <div className="flex flex-col gap-2.5">
            <div className="ml-[22px] mr-[18px] flex items-center justify-center md:mx-0">
              <div className="flex flex-1 items-center gap-6">
                {!!userImage ? (
                  <Img src={userImage} width={30} height={30} alt="Dashicons Desktop" className="h-[30px] w-[30px]" />
                ) : null}
                {!!accountInformationText ? (
                  <Heading size="headingxl" as="p" className="text-[14px] font-bold">
                    {accountInformationText}
                  </Heading>
                ) : null}
              </div>
              {!!editText ? (
                <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                  {editText}
                </Text>
              ) : null}
            </div>
            {!!line31 ? <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" /> : null}
          </div>
        </div>
        <div className="ml-[26px] mr-[18px] mt-3 flex items-center justify-center md:mx-0 md:flex-col">
          {!!displayNameText ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {displayNameText}
            </Text>
          ) : null}
          <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
            {!!userName ? (
              <Text as="p" className="ml-[122px] text-[14px] font-normal">
                {userName}
              </Text>
            ) : null}
            {!!displayNameDescription ? (
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                {displayNameDescription}
              </Text>
            ) : null}
            {!!displayOptionsText ? (
              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                {displayOptionsText}
              </Text>
            ) : null}
          </div>
        </div>
        {!!line36 ? <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" /> : null}
        <div className="ml-[26px] mr-[18px] mt-3 flex flex-wrap justify-between gap-5 md:mx-0">
          {!!emailAddressText ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {emailAddressText}
            </Text>
          ) : null}
          {!!userEmail ? (
            <Text as="p" className="text-[14px] font-normal">
              {userEmail}
            </Text>
          ) : null}
          {!!emailDescription ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {emailDescription}
            </Text>
          ) : null}
          {!!communicationPreferencesText ? (
            <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
              {communicationPreferencesText}
            </Text>
          ) : null}
        </div>
        <div className="mt-3.5">
          <div className="flex flex-col gap-3.5">
            {!!line37 ? <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" /> : null}
            <div className="mx-[26px] flex justify-center md:mx-0 md:flex-col">
              {!!userFullName ? (
                <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                  {userFullName}
                </Text>
              ) : null}
              <div className="flex flex-1 flex-wrap justify-between gap-5 px-[110px] md:self-stretch md:px-5">
                {!!userAddress ? (
                  <Text as="p" className="text-[14px] font-normal">
                    {userAddress}
                  </Text>
                ) : null}
                {!!addressDescription ? (
                  <Text as="p" className="mr-[196px] text-[14px] font-normal !text-black-900_7f md:mr-0">
                    {addressDescription}
                  </Text>
                ) : null}
              </div>
            </div>
            {!!line38 ? <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" /> : null}
          </div>
        </div>
        <div className="mx-[26px] mt-1.5 flex items-center justify-center md:mx-0 md:flex-col">
          {!!userPhoneNumber ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {userPhoneNumber}
            </Text>
          ) : null}
          <div className="flex flex-1 items-center justify-between gap-5 px-[90px] md:self-stretch md:px-5 sm:flex-col">
            {!!phoneNumberDescription ? (
              <Text as="p" className="text-[14px] font-normal">
                {phoneNumberDescription}
              </Text>
            ) : null}
            {!!additionalInfo ? (
              <Text
                as="p"
                className="mr-[172px] w-[56%] text-[14px] font-normal leading-4 !text-black-900_7f md:mr-0 sm:w-full"
              >
                {additionalInfo}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
