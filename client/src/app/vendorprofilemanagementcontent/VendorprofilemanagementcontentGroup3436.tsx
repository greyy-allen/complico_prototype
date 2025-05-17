"use client";

import VisibilityList from "../../components/VisibilityList";
import {
  Img,
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectItems,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Separator,
  Heading,
} from "@/components/ui";
import React, { Suspense } from "react";

const data = [
  {
    lineImage1: "img_line_48.svg",
    listingName1: "Listing Name ",
    lineImage2: "img_line_48.svg",
    listingName2: "Listing Name ",
    lineImage3: "img_line_48.svg",
    listingName3: "Listing Name ",
    lineImage4: "img_line_48.svg",
    listingName4: "Listing Name ",
    lineImage5: "img_line_48.svg",
    listingName5: "Listing Name ",
    lineImage6: "img_line_48.svg",
    listingName6: "Listing Name ",
    lineImage7: "img_line_48.svg",
    listingName7: "Listing Name ",
    lineImage8: "img_line_48.svg",
    listingName8: "Listing Name ",
    lineImage9: "img_line_48.svg",
    listingName9: "Listing Name ",
  },
  {
    lineImage1: "img_line_48.svg",
    listingName1: "Listing Name ",
    lineImage2: "img_line_48.svg",
    listingName2: "Listing Name ",
    lineImage3: "img_line_48.svg",
    listingName3: "Listing Name ",
    lineImage4: "img_line_48.svg",
    listingName4: "Listing Name ",
    lineImage5: "img_line_48.svg",
    listingName5: "Listing Name ",
    lineImage6: "img_line_48.svg",
    listingName6: "Listing Name ",
    lineImage7: "img_line_48.svg",
    listingName7: "Listing Name ",
    lineImage8: "img_line_48.svg",
    listingName8: "Listing Name ",
    lineImage9: "img_line_48.svg",
    listingName9: "Listing Name ",
  },
  {
    lineImage1: "img_line_48.svg",
    listingName1: "Listing Name ",
    lineImage2: "img_line_48.svg",
    listingName2: "Listing Name ",
    lineImage3: "img_line_48.svg",
    listingName3: "Listing Name ",
    lineImage4: "img_line_48.svg",
    listingName4: "Listing Name ",
    lineImage5: "img_line_48.svg",
    listingName5: "Listing Name ",
    lineImage6: "img_line_48.svg",
    listingName6: "Listing Name ",
    lineImage7: "img_line_48.svg",
    listingName7: "Listing Name ",
    lineImage8: "img_line_48.svg",
    listingName8: "Listing Name ",
    lineImage9: "img_line_48.svg",
    listingName9: "Listing Name ",
  },
  {
    lineImage1: "img_line_48.svg",
    listingName1: "Listing Name ",
    lineImage2: "img_line_48.svg",
    listingName2: "Listing Name ",
    lineImage3: "img_line_48.svg",
    listingName3: "Listing Name ",
    lineImage4: "img_line_48.svg",
    listingName4: "Listing Name ",
    lineImage5: "img_line_48.svg",
    listingName5: "Listing Name ",
    lineImage6: "img_line_48.svg",
    listingName6: "Listing Name ",
    lineImage7: "img_line_48.svg",
    listingName7: "Listing Name ",
    lineImage8: "img_line_48.svg",
    listingName8: "Listing Name ",
    lineImage9: "img_line_48.svg",
    listingName9: "Listing Name ",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function VendorprofilemanagementcontentGroup3436() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-center">
        <div className="relative z-[4] flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
          <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
            Statistics
          </Heading>
        </div>
        <div className="relative ml-[18px] mt-[-80px] flex flex-col items-start self-stretch md:ml-0">
          <div className="relative z-[3] ml-[464px] flex w-[18%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
            <Heading size="heading4xl" as="h2" className="self-end text-[20px] font-bold">
              History
            </Heading>
          </div>
          <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
            <div className="relative z-[2] ml-[154px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
              <Heading size="heading4xl" as="h3" className="self-end text-[20px] font-bold">
                Listing
              </Heading>
            </div>
            <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
              <div className="relative z-[1] ml-[310px] flex w-[14%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                <Heading size="heading4xl" as="h4" className="self-end text-[20px] font-bold">
                  Library
                </Heading>
              </div>
              <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                <div className="flex rounded-[5px] bg-gray-100 p-[26px] shadow-xs sm:p-5">
                  <Heading size="heading4xl" as="h5" className="text-[20px] font-bold">
                    Account
                  </Heading>
                </div>
                <div className="relative mt-[-12px] flex flex-col gap-2.5 self-stretch rounded-[10px] bg-gray-100 px-4 py-5 shadow-sm">
                  <div className="flex md:flex-col">
                    <div className="flex w-[40%] gap-9 md:w-full">
                      <div className="relative h-[44px] w-[30%] content-center rounded-[5px] border border-solid border-black-900_7f bg-white-a700 px-2.5 md:h-auto">
                        <div className="relative h-full w-[58%]">
                          <Separator
                            orientation="vertical"
                            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[44px] w-px bg-black-900_87 opacity-50"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max items-center gap-[22px]">
                            <Img
                              src="img_dashicons_screenoptions.svg"
                              width={30}
                              height={30}
                              alt="Dashicons Screenoptions"
                              className="h-[30px] w-[30px]"
                            />
                            <Img src="img_megaphone.svg" width={24} height={20} alt="Megaphone" className="h-[20px]" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-full flex-1 items-center justify-end gap-[11px]">
                          <Separator orientation="vertical" className="h-[44px] w-px bg-black-900_87 opacity-50" />
                          <Img src="img_vector.svg" width={26} height={24} alt="Vector" className="h-[24px] w-[26px]" />
                        </div>
                      </div>
                      <Button
                        size="xl"
                        shape="round"
                        colorScheme="deep_purple_A200"
                        rightIcon={
                          <Img
                            src="defaultNoData.png"
                            width={62}
                            height={26}
                            alt="Listing"
                            className="mt-1 w-[62px] text-[20px] font-bold text-white-a700"
                          >
                            Listing
                          </Img>
                        }
                        className="w-full min-w-[114px] max-w-[114px] gap-1.5 rounded-[5px] border border-solid border-black-900_7f px-[15px] text-[24px] font-bold md:text-[22px]"
                      >
                        +
                      </Button>
                    </div>
                    <div className="flex flex-1 justify-end gap-[17px] md:self-stretch sm:flex-col">
                      <InputGroup className="w-[48%] sm:w-full">
                        <InputLeftElement className="left-[13.2px]">
                          <Img
                            src="img_dashicons_search.svg"
                            width={32}
                            height={30}
                            alt="Dashicons-search"
                            className="h-[30px] w-[32px] object-contain"
                          />
                        </InputLeftElement>
                        <Input
                          size="xl"
                          shape="square"
                          colorScheme="white_A700"
                          value={searchBarValue1}
                          onChange={(e) => setSearchBarValue1(e.target.value)}
                          placeholder={`Search`}
                          className="gap-3.5 border border-black-900_7f pl-[60px] pr-3"
                        />
                      </InputGroup>
                      <Select name="Group 260">
                        <SelectTrigger
                          size="xl"
                          indicator={
                            <Img
                              src="img_dashiconsarrowdown.svg"
                              width={30}
                              height={30}
                              alt="Dashicons-arrow-down"
                              className="h-[30px] w-[30px]"
                            />
                          }
                          className="w-[20%] gap-3.5 rounded-[10px] border border-solid border-black-900_7f px-3 font-bold sm:w-full"
                        >
                          <SelectValue placeholder={`Filter`} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItems
                            options={dropDownOptions}
                            labelIcon={
                              <Img
                                src="img_dashicons_screenoptions.svg"
                                width={30}
                                height={30}
                                alt="Dashicons-editor-justify"
                                className="h-[30px] w-[30px]"
                              />
                            }
                          />
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="rounded-[10px] bg-white-a700 p-5">
                    <div className="mt-1.5 flex gap-[50px] md:flex-col">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <VisibilityList {...d} key={"group4011" + index} />
                        ))}
                      </Suspense>
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
