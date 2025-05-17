import BankingInformationPanel from "../../components/BankingInformationPanel";
import { Text, Separator, Button, Img, Heading } from "@/components/ui";
import React, { Suspense } from "react";

const data = [
  { bankIcon: "img_dashicons_bank.svg", bankingInformationText: "Banking Information" },
  { bankIcon: "img_dashicons_awards.svg", bankingInformationText: "Certification Information" },
  { bankIcon: "img_dashicons_welcome_write_blog.svg", bankingInformationText: "Additional Information" },
];

export default function VendorregistrationGroup3288() {
  return (
    <div className="flex-1 self-center px-[18px]">
      <div className="mb-[30px]">
        <div className="flex flex-row justify-start gap-4 sm:flex-col">
          <div className="flex w-[24%] justify-center gap-2 sm:w-full">
            <div className="flex w-full justify-center gap-4 rounded-[5px] bg-gray-100 py-6 pl-4 pr-6 shadow-xs sm:p-5">
              <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
                Form
              </Heading>
            </div>
            <div className="flex w-full justify-center gap-4 rounded-[5px] bg-gray-100 p-6 shadow-xs sm:p-5">
              <Heading size="heading4xl" as="h2" className="self-end text-[20px] font-bold">
                History
              </Heading>
            </div>
          </div>
          <div className="ml-[-9px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs sm:w-full sm:p-5">
            <Heading size="heading4xl" as="h3" className="text-[20px] font-bold">
              Chat
            </Heading>
          </div>
        </div>
        <div className="ml-3.5 mt-2 rounded-[10px] bg-white-a700 py-1.5 md:ml-0">
          <div>
            <div className="ml-[22px] mr-[18px] flex justify-center md:mx-0">
              <div className="flex flex-1 items-center gap-6">
                <Img
                  src="img_dashicons_store.svg"
                  width={30}
                  height={30}
                  alt="Dashicons Store"
                  className="h-[30px] w-[30px]"
                />
                <Heading size="headingxl" as="h4" className="text-[14px] font-bold">
                  Vendor Information
                </Heading>
              </div>
              <Button size="md" shape="square" className="w-[30px]">
                <Img src="img_dashicons_remove.svg" width={26} height={26} />
              </Button>
            </div>
            <div className="mt-2">
              <div className="flex flex-col gap-3">
                <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                <div className="ml-[26px] mr-[18px] flex items-center justify-center md:mx-0 md:flex-col">
                  <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                    Trading Name
                  </Text>
                  <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
                    <Text as="p" className="ml-[118px] text-[14px] font-normal">
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
                <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
              </div>
            </div>
            <div className="ml-[26px] mr-[18px] mt-3 flex flex-wrap justify-between gap-5 md:mx-0">
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                Email address
              </Text>
              <Text as="p" className="text-[14px] font-normal">
                XXXXXXXXXXXXXX@gmail.com
              </Text>
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                This is the email address correspondence will be emailed to
              </Text>
              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                Communication Preferences
              </Text>
            </div>
            <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" />
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
        <div className="ml-3.5 mt-6 flex flex-col gap-6 rounded-[10px] bg-gray-100 shadow-sm md:ml-0">
          <div className="flex flex-col gap-2.5 rounded-[10px] bg-white-a700 py-1.5">
            <div className="ml-[22px] mr-[18px] flex justify-center md:mx-0">
              <div className="flex flex-1 items-center gap-6">
                <Img
                  src="img_dashicons_admin_multisite.svg"
                  width={30}
                  height={30}
                  alt="Dashicons Admin Multisite"
                  className="h-[30px] w-[30px]"
                />
                <Heading size="headingxl" as="h5" className="self-end text-[14px] font-bold">
                  Company Information
                </Heading>
              </div>
              <Button size="md" shape="square" className="w-[30px]">
                <Img src="img_dashicons_remove.svg" width={26} height={26} />
              </Button>
            </div>
            <div>
              <div>
                <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                <div className="mx-[26px] mt-3 flex items-center justify-center md:mx-0 md:flex-col">
                  <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                    Company name
                  </Text>
                  <div className="flex flex-1 flex-wrap gap-[203px] pl-[108px] pr-14 md:gap-5 md:self-stretch md:px-5">
                    <Text as="p" className="text-[14px] font-normal">
                      XX XXXX XXXXXXX
                    </Text>
                    <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                      This is the name of your company
                    </Text>
                  </div>
                </div>
                <Separator orientation="horizontal" className="mt-3.5 h-[2px] bg-black-900_19" />
                <div className="mx-[26px] mt-3 flex items-center justify-center md:mx-0 md:flex-col">
                  <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                    Company address
                  </Text>
                  <div className="flex flex-1 flex-wrap gap-[145px] pl-[92px] pr-14 md:gap-5 md:self-stretch md:px-5">
                    <Text as="p" className="text-[14px] font-normal">
                      XXXXXXXXXXXXXX XXXXXX
                    </Text>
                    <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                      The address of your company
                    </Text>
                  </div>
                </div>
                <div className="mt-3.5">
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
                        <Text as="p" className="mr-[196px] text-[14px] font-normal !text-black-900_7f md:mr-0">
                          XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXX
                        </Text>
                      </div>
                    </div>
                    <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
                  </div>
                </div>
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
          </div>
          <div className="flex flex-col gap-6">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <BankingInformationPanel {...d} key={"group3957" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
