"use client";

import { Button, Img, Heading, Text, Separator, Input } from "@/components/ui";
import React from "react";

export default function VendorprofilemanagementaddGroup3314() {
  return (
    <div className="mt-[310px] flex flex-col gap-6 px-3.5">
      <div className="rounded-[10px] bg-white-a700 py-2">
        <div className="mt-1.5">
          <div className="flex flex-col gap-3">
            <div className="ml-[22px] mr-[18px] flex justify-center md:mx-0">
              <div className="flex flex-1 items-center gap-6">
                <Img
                  src="img_gridicons_product.svg"
                  width={30}
                  height={30}
                  alt="Gridicons Product"
                  className="h-[30px] w-[30px]"
                />
                <Heading size="headingxl" as="h1" className="text-[14px] font-bold">
                  Product Information
                </Heading>
              </div>
              <Button size="md" shape="square" className="w-[30px]">
                <Img src="img_dashicons_remove.svg" width={26} height={26} />
              </Button>
            </div>
            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
            <div className="ml-[26px] mr-[18px] flex justify-center md:mx-0 md:flex-col">
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                Title
              </Text>
              <Text as="p" className="ml-[178px] text-[14px] font-normal md:ml-0">
                XX XXXX XXXXXXX
              </Text>
              <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
                <Text as="p" className="ml-[202px] text-[14px] font-normal !text-black-900_7f">
                  This is the name that is shown or displayed to others
                </Text>
                <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                  Display Options
                </Text>
              </div>
            </div>
            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
            <div className="ml-[26px] mr-[18px] flex justify-center md:mx-0 md:flex-col">
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                Type
              </Text>
              <div className="flex flex-1 flex-wrap justify-between gap-5 px-[140px] md:self-stretch md:px-5">
                <Text as="p" className="ml-[34px] text-[14px] font-normal md:ml-0">
                  XXXXXXXXXXXXXX@gmail.com
                </Text>
                <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                  This is the email address correspondence will be emailed to
                </Text>
              </div>
              <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                Communication Preferences
              </Text>
            </div>
            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
            <div className="mx-[26px] flex justify-center md:mx-0 md:flex-col">
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                Short description
              </Text>
              <div className="flex flex-1 flex-wrap justify-between gap-5 px-[98px] md:self-stretch md:px-5">
                <Text as="p" className="text-[14px] font-normal">
                  XXXX XXXXXX XX{" "}
                </Text>
                <Text as="p" className="mr-52 text-[14px] font-normal !text-black-900_7f md:mr-0">
                  XX XX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXX
                </Text>
              </div>
            </div>
            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
            <div className="ml-[26px] mr-[18px] flex justify-center md:mx-0 md:flex-col">
              <Text as="p" className="text-[14px] font-normal !text-black-900_7f">
                Detailed overview
              </Text>
              <div className="flex flex-1 flex-wrap justify-between gap-5 md:self-stretch">
                <Text as="p" className="ml-[102px] text-[14px] font-normal !text-black-900_7f">
                  Explain the purpose and key features of your product
                </Text>
                <Text as="p" className="text-[14px] font-normal !text-indigo-a100">
                  Options
                </Text>
              </div>
            </div>
            <Input
              size="5xl"
              shape="round"
              colorScheme="white_A700"
              placeholder={`XX XXX XXX XXX`}
              className="ml-6 mr-[18px] rounded-[10px] border-2 border-black-900_4c px-3 shadow-md md:mx-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-[10px] bg-white-a700 py-1.5">
        <div>
          <div className="flex flex-col gap-2.5">
            <div className="ml-[22px] mr-[18px] flex justify-center md:mx-0">
              <div className="flex flex-1 items-center gap-6">
                <Img
                  src="img_fluent_person_key_32_filled.svg"
                  width={30}
                  height={30}
                  alt="Fluent Person Key 32 Filled"
                  className="h-[30px] w-[30px]"
                />
                <Heading size="headingxl" as="h2" className="text-[14px] font-bold">
                  Author Information
                </Heading>
              </div>
              <Button size="md" shape="square" className="w-[30px]">
                <Img src="img_dashicons_remove.svg" width={26} height={26} />
              </Button>
            </div>
            <Separator orientation="horizontal" className="h-[2px] bg-black-900_19" />
          </div>
        </div>
        <div>
          <div>
            <div className="mx-[26px] flex items-center justify-center md:mx-0 md:flex-col">
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
      <div className="flex justify-center rounded-[10px] bg-white-a700 p-2.5">
        <div className="flex flex-1 items-center gap-6">
          <Img
            src="img_fluent_document.svg"
            width={30}
            height={30}
            alt="Fluent Document"
            className="h-[30px] w-[30px]"
          />
          <Heading size="headingxl" as="h3" className="text-[14px] font-bold">
            Additional Information
          </Heading>
        </div>
        <Button size="md" shape="square" className="w-[30px]">
          <Img src="img_dashicons_insert.svg" width={26} height={26} />
        </Button>
      </div>
      <div className="flex justify-center rounded-[10px] bg-white-a700 p-2.5">
        <div className="flex flex-1 items-center gap-[25px]">
          <Img src="img_tabler_license.svg" width={30} height={30} alt="Tabler License" className="h-[30px] w-[30px]" />
          <Heading size="headingxl" as="h4" className="text-[14px] font-bold">
            License Information
          </Heading>
        </div>
        <Button size="md" shape="square" className="w-[30px]">
          <Img src="img_dashicons_insert.svg" width={26} height={26} />
        </Button>
      </div>
    </div>
  );
}
