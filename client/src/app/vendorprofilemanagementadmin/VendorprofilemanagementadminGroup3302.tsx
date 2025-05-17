import { Text, Separator, Heading, Img } from "@/components/ui";
import React from "react";

export default function VendorprofilemanagementadminGroup3302() {
  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-end">
        <div className="relative z-[5] mb-1.5 mr-[366px] flex rounded-[5px] bg-gray-100 p-6 shadow-xs md:mr-0 sm:p-5">
          <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
            Statistics
          </Heading>
        </div>
        <div className="relative ml-[18px] mt-[-80px] flex flex-col items-center self-stretch md:ml-0">
          <div className="relative z-[4] mb-[9px] ml-[99px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:w-full sm:p-5">
            <Heading size="heading4xl" as="h2" className="text-[20px] font-bold">
              History
            </Heading>
          </div>
          <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
            <div className="relative z-[3] mb-[7px] ml-[446px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
              <Heading size="heading4xl" as="h3" className="text-[20px] font-bold">
                Library
              </Heading>
            </div>
            <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
              <div className="relative z-[2] mb-2 ml-[132px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                <Heading size="heading4xl" as="h4" className="text-[20px] font-bold">
                  Vendor
                </Heading>
              </div>
              <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                <div className="relative z-[1] mb-[9px] ml-[289px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                  <Heading size="heading4xl" as="h5" className="text-[20px] font-bold">
                    Listing
                  </Heading>
                </div>
                <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                  <div className="flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
                    <Heading size="heading4xl" as="h6" className="text-[20px] font-bold">
                      Account
                    </Heading>
                  </div>
                  <div className="relative mt-[-12px] flex flex-col gap-4 self-stretch rounded-[10px] bg-gray-100 px-3.5 py-[22px] shadow-sm sm:py-5">
                    <div className="mt-2 rounded-[10px] bg-white-a700 py-1.5">
                      <div>
                        <div>
                          <div className="flex flex-col gap-2.5">
                            <div className="ml-[22px] mr-[18px] flex items-center justify-center md:mx-0">
                              <div className="flex flex-1 items-center gap-6">
                                <Img
                                  src="img_dashicons_desktop.svg"
                                  width={30}
                                  height={30}
                                  alt="Dashicons Desktop"
                                  className="h-[30px] w-[30px]"
                                />
                                <Heading size="headingxl" as="p" className="text-[14px] font-bold">
                                  Account Information
                                </Heading>
                              </div>
                              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                                Edit
                              </Text>
                            </div>
                            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                          </div>
                        </div>
                        <div className="ml-[26px] mr-[18px] mt-3 flex items-center justify-center md:mx-0 md:flex-col">
                          <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                            Display name
                          </Text>
                          <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
                            <Text as="p" className="ml-[122px] text-[14px] font-normal">
                              XX XXXX XXXXXXX
                            </Text>
                            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                              This is the name that is shown or displayed to others
                            </Text>
                            <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                              Display Options
                            </Text>
                          </div>
                        </div>
                        <div className="mt-3.5">
                          <div className="flex flex-col gap-3">
                            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                            <div className="ml-[26px] mr-[18px] flex flex-wrap justify-between gap-5 md:mx-0">
                              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                                Email address
                              </Text>
                              <Text as="p" className="text-[14px] font-normal">
                                XXXXXXXXXXXXXX@gmail.com
                              </Text>
                              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                                The email address you use to sign in to your Marketplace account
                              </Text>
                              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                                Communication Preferences
                              </Text>
                            </div>
                            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                          </div>
                        </div>
                        <div className="mx-[26px] mt-3 flex justify-center md:mx-0 md:flex-col">
                          <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                            XXXXXX XXXX
                          </Text>
                          <div className="flex flex-1 flex-wrap justify-between gap-5 px-[110px] md:self-stretch md:px-5">
                            <Text as="p" className="text-[14px] font-normal">
                              XXXX XXXXXX XX{" "}
                            </Text>
                            <Text as="p" className="mr-[196px] text-[14px] font-normal !text-black-900_7f md:mr-0">
                              XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXX
                            </Text>
                          </div>
                        </div>
                        <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" />
                        <div className="mx-[26px] mt-1.5 flex items-center justify-center md:mx-0 md:flex-col">
                          <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                            XX X X XXXXXXXX
                          </Text>
                          <div className="flex flex-1 items-center justify-between gap-5 px-[90px] md:self-stretch md:px-5 sm:flex-col">
                            <Text as="p" className="text-[14px] font-normal">
                              XX XXX XXX XXX
                            </Text>
                            <Text
                              as="p"
                              className="mr-[172px] w-[56%] text-[14px] font-normal leading-4 !text-black-900_7f md:mr-0 sm:w-full"
                            >
                              <>
                                XXXX XX XXXXXXXXXXXXX XX X XXXXXXXXXXXXXX XXX X XXX X<br />
                                XXXXXX XXXXXXXXXXXX
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 rounded-[10px] bg-white-a700 py-1.5">
                      <div className="ml-[22px] mr-[18px] flex items-center justify-center md:mx-0">
                        <div className="flex flex-1 items-center gap-6">
                          <Img
                            src="img_dashicons_admin_multisite.svg"
                            width={30}
                            height={30}
                            alt="Dashicons Admin Multisite"
                            className="h-[30px] w-[30px]"
                          />
                          <Heading size="headingxl" as="p" className="self-end text-[14px] font-bold">
                            Company Information
                          </Heading>
                        </div>
                        <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                          Edit
                        </Text>
                      </div>
                      <div>
                        <div className="flex flex-col gap-2.5">
                          <div className="ml-[26px] mr-[18px] mt-3.5 flex flex-col gap-7 md:mx-0">
                            <div className="flex flex-1 items-center justify-center self-stretch md:flex-col">
                              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                                Company name
                              </Text>
                              <div className="flex flex-1 items-center justify-end md:flex-col md:self-stretch">
                                <Text as="p" className="text-[14px] font-normal">
                                  XX XXXX XXXXXXX
                                </Text>
                                <div className="flex w-[80%] flex-wrap justify-between gap-5 md:w-full">
                                  <Text as="p" className="ml-[202px] text-[14px] font-normal !text-black-900_7f">
                                    This is the name of your company
                                  </Text>
                                  <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                                    XX XXXXX XX
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Separator orientation="horizontal" className="h-[2px] w-full bg-black-900_19" />
                            <div className="flex flex-1 items-center justify-center self-stretch md:flex-col">
                              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                                Company address
                              </Text>
                              <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
                                <Text as="p" className="text-[14px] font-normal">
                                  XXXXXXXXXXXXXX XXXXXX
                                </Text>
                                <div className="flex w-[74%] flex-wrap justify-between gap-5 md:w-full">
                                  <Text as="p" className="ml-[146px] text-[14px] font-normal !text-black-900_7f">
                                    The address of your company
                                  </Text>
                                  <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                                    XX XXXXX XX
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col gap-3.5">
                              <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                              <div className="mx-[26px] flex justify-center md:mx-0 md:flex-col">
                                <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                                  XXXXXX XXXX
                                </Text>
                                <div className="flex flex-1 flex-wrap justify-between gap-5 px-[110px] md:self-stretch md:px-5">
                                  <Text as="p" className="text-[14px] font-normal">
                                    XXXX XXXXXX XX{" "}
                                  </Text>
                                  <Text
                                    as="p"
                                    className="mr-[196px] text-[14px] font-normal !text-black-900_7f md:mr-0"
                                  >
                                    XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXX
                                  </Text>
                                </div>
                              </div>
                              <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                            </div>
                          </div>
                          <div className="mx-[26px] flex items-center justify-center md:mx-0 md:flex-col">
                            <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                              XX X X XXXXXXXX
                            </Text>
                            <div className="flex flex-1 items-center justify-between gap-5 px-[90px] md:self-stretch md:px-5 sm:flex-col">
                              <Text as="p" className="text-[14px] font-normal">
                                XX XXX XXX XXX
                              </Text>
                              <Text
                                as="p"
                                className="mr-[172px] w-[56%] text-[14px] font-normal leading-4 !text-black-900_7f md:mr-0 sm:w-full"
                              >
                                <>
                                  XXXX XX XXXXXXXXXXXXX XX X XXXXXXXXXXXXXX XXX X XXX X<br />
                                  XXXXXX XXXXXXXXXXXX
                                </>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
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
