"use client";

import { ReactTable } from "../../components/ReactTable";
import {
  Img,
  Text,
  Heading,
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectItems,
  Input,
  InputLeftElement,
  InputGroup,
  Separator,
} from "@/components/ui";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  {
    vendorName: "XXXXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XX XXX XXXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XXXXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XXXXXXXXXXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XXXXX XXXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XX XXXX XXXX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
  {
    vendorName: "XXXXXX XX",
    companyName: "XXXXXXXXXXXXXXXXXXXXXXX",
    note: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    dateSubmitted: "XX/XX/XXXX XX:XX XX",
  },
];

type Table1RowType = {
  vendorName: string;
  companyName: string;
  note: string;
  dateSubmitted: string;
};

export default function VendorprofilemanagementvendorGroup3401() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("vendorName", {
        cell: (info) => (
          <Text as="p" className="pl-4 text-[14px] font-normal">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-[18px] pl-4 text-left text-[14px] font-bold">
            Vendor Name
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      table1ColumnHelper.accessor("companyName", {
        cell: (info) => (
          <Text as="p" className="text-[14px] font-normal">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-4 text-left text-[14px] font-bold">
            Company Name
          </Heading>
        ),
        meta: { width: "292px" },
      }),
      table1ColumnHelper.accessor("note", {
        cell: (info) => (
          <Text as="p" className="text-[14px] font-normal">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-[18px] text-left text-[14px] font-bold">
            Note
          </Heading>
        ),
        meta: { width: "390px" },
      }),
      table1ColumnHelper.accessor("dateSubmitted", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <Text as="p" className="self-end text-[14px] font-normal">
              {info.getValue<string>()}
            </Text>
            <div className="mr-3.5 flex items-center gap-4">
              <Img src="img_lucide.svg" width={30} height={30} alt="Lucide" className="h-[30px] w-[30px]" />
              <Img src="img_mdi_tick.svg" width={30} height={30} alt="Mdi Tick" className="h-[30px] w-[30px]" />
              <Img
                src="img_arrow_right_black_900.svg"
                width={24}
                height={24}
                alt="Arrow Right"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-4 text-left text-[14px] font-bold">
            Date Submitted
          </Heading>
        ),
        meta: { width: "348px" },
      }),
    ];
  }, []);

  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-end">
        <div className="relative z-[5] mb-2 mr-[356px] flex rounded-[5px] bg-gray-100 p-6 shadow-xs md:mr-0 sm:p-5">
          <Heading size="heading4xl" as="h1" className="text-[20px] font-bold">
            Statistics
          </Heading>
        </div>
        <div className="relative ml-[18px] mt-[-80px] flex flex-col items-center self-stretch md:ml-0">
          <div className="relative z-[4] mb-[9px] ml-[115px] flex w-[12%] flex-row items-center justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:w-full sm:p-5">
            <Heading size="heading4xl" as="h2" className="text-[20px] font-bold">
              History
            </Heading>
          </div>
          <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
            <div className="relative z-[3] mb-2 ml-[452px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
              <Heading size="heading4xl" as="h3" className="text-[20px] font-bold">
                Library
              </Heading>
            </div>
            <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
              <div className="relative z-[2] mb-2 ml-[134px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
                <Heading size="heading4xl" as="h4" className="text-[20px] font-bold">
                  Vendor
                </Heading>
              </div>
              <div className="relative mt-[-80px] flex flex-col items-start self-stretch">
                <div className="relative z-[1] mb-[17px] ml-[293px] flex w-[12%] justify-center rounded-[5px] bg-gray-100 p-6 shadow-xs md:ml-0 md:w-full sm:p-5">
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
                  <div className="relative mt-[-12px] flex flex-col gap-2 self-stretch rounded-[10px] bg-gray-100 px-3.5 py-4 shadow-sm">
                    <div className="flex items-start md:flex-col">
                      <div className="relative h-[50px] w-[12%] content-center self-center md:h-auto md:w-full">
                        <div className="absolute left-0 right-0 top-0.5 mx-auto flex flex-1 flex-col items-start rounded-[5px] border border-solid border-black-900_7f bg-white-a700 px-[50px] md:px-5">
                          <Separator orientation="vertical" className="h-[44px] w-px bg-black-900_87 opacity-50" />
                        </div>
                        <div className="mx-2 flex h-full flex-1 items-start justify-end gap-[9px] md:mx-0">
                          <Separator orientation="vertical" className="h-[44px] w-px bg-black-900_87 opacity-50" />
                          <Img
                            src="img_dashicons_button.svg"
                            width={30}
                            height={50}
                            alt="Dashicons Button"
                            className="h-[50px] self-center"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 mx-3 my-auto flex h-max flex-1 items-center gap-[21px] md:mx-0">
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
                      <div className="flex flex-1 justify-end gap-[22px] md:self-stretch sm:flex-col">
                        <InputGroup className="w-[32%] sm:w-full">
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
                            value={searchBarValue2}
                            onChange={(e) => setSearchBarValue2(e.target.value)}
                            placeholder={`Search`}
                            className="gap-3.5 border border-black-900_7f pl-[60px] pr-3"
                          />
                        </InputGroup>
                        <Select name="Group 244">
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
                            className="w-[14%] gap-3.5 rounded-[10px] border border-solid border-black-900_7f px-3 font-bold sm:w-full"
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
                    <div className="mb-3 rounded-[10px] bg-white-a700 py-2">
                      <ReactTable
                        size="xs"
                        bodyProps={{ className: "" }}
                        cellProps={{ className: "border-black-900_19 border-b-2 border-solid" }}
                        className="mt-1 md:block md:overflow-x-auto md:whitespace-nowrap"
                        columns={table1Columns}
                        data={table1Data}
                      />
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
