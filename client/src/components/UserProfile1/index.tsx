import { Text, Separator, Heading, Img } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  accountInformationText?: React.ReactNode;
  editText?: React.ReactNode;
  line31?: boolean;
  displayNameLabel?: React.ReactNode;
  displayNameValue?: React.ReactNode;
  displayNameDescription?: React.ReactNode;
  displayOptionsLabel?: React.ReactNode;
  line36?: boolean;
  emailAddressLabel?: React.ReactNode;
  emailAddressValue?: React.ReactNode;
  emailAddressDescription?: React.ReactNode;
  communicationPreferencesLabel?: React.ReactNode;
  line37?: boolean;
  userName?: React.ReactNode;
  userdetail1?: React.ReactNode;
  userdetail2?: React.ReactNode;
  line38?: boolean;
  additionalInfoLabel?: React.ReactNode;
  additionalInfoValue?: React.ReactNode;
  additionalInfoDescription?: React.ReactNode;
}

export default function UserProfile1({
  userImage,
  accountInformationText,
  editText,
  line31,
  displayNameLabel,
  displayNameValue,
  displayNameDescription,
  displayOptionsLabel,
  line36,
  emailAddressLabel,
  emailAddressValue,
  emailAddressDescription,
  communicationPreferencesLabel,
  line37,
  userName,
  userdetail1,
  userdetail2,
  line38,
  additionalInfoLabel,
  additionalInfoValue,
  additionalInfoDescription,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center self-stretch py-1.5 bg-white-a700 flex-1 rounded-[10px]`}
    >
      <div className="w-full">
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
        <div className="mt-2.5">
          <div className="flex flex-col gap-3">
            {!!line31 ? <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" /> : null}
            <div className="ml-[26px] mr-[18px] flex items-center justify-center md:mx-0 md:flex-col">
              {!!displayNameLabel ? (
                <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                  {displayNameLabel}
                </Text>
              ) : null}
              <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
                {!!displayNameValue ? (
                  <Text as="p" className="ml-[122px] text-[14px] font-normal">
                    {displayNameValue}
                  </Text>
                ) : null}
                {!!displayNameDescription ? (
                  <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                    {displayNameDescription}
                  </Text>
                ) : null}
                {!!displayOptionsLabel ? (
                  <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                    {displayOptionsLabel}
                  </Text>
                ) : null}
              </div>
            </div>
            {!!line36 ? <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" /> : null}
          </div>
        </div>
        <div className="ml-[26px] mr-[18px] mt-3 flex items-center justify-center md:mx-0 md:flex-col">
          {!!emailAddressLabel ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {emailAddressLabel}
            </Text>
          ) : null}
          <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
            {!!emailAddressValue ? (
              <Text as="p" className="ml-[116px] text-[14px] font-normal">
                {emailAddressValue}
              </Text>
            ) : null}
            {!!emailAddressDescription ? (
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                {emailAddressDescription}
              </Text>
            ) : null}
            {!!communicationPreferencesLabel ? (
              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                {communicationPreferencesLabel}
              </Text>
            ) : null}
          </div>
        </div>
        {!!line37 ? <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" /> : null}
        <div className="mx-[26px] mt-3 flex justify-center md:mx-0 md:flex-col">
          {!!userName ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {userName}
            </Text>
          ) : null}
          <div className="flex flex-1 flex-wrap justify-between gap-5 px-[110px] md:self-stretch md:px-5">
            {!!userdetail1 ? (
              <Text as="p" className="text-[14px] font-normal">
                {userdetail1}
              </Text>
            ) : null}
            {!!userdetail2 ? (
              <Text as="p" className="mr-[196px] text-[14px] font-normal !text-black-900_7f md:mr-0">
                {userdetail2}
              </Text>
            ) : null}
          </div>
        </div>
        {!!line38 ? <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" /> : null}
        <div className="mx-[26px] mt-1.5 flex items-center justify-center md:mx-0 md:flex-col">
          {!!additionalInfoLabel ? (
            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
              {additionalInfoLabel}
            </Text>
          ) : null}
          <div className="flex flex-1 items-center justify-between gap-5 px-[90px] md:self-stretch md:px-5 sm:flex-col">
            {!!additionalInfoValue ? (
              <Text as="p" className="text-[14px] font-normal">
                {additionalInfoValue}
              </Text>
            ) : null}
            {!!additionalInfoDescription ? (
              <Text
                as="p"
                className="mr-[172px] w-[56%] text-[14px] font-normal leading-4 !text-black-900_7f md:mr-0 sm:w-full"
              >
                {additionalInfoDescription}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
