"use client";

import { ReactTable } from "../../components/ReactTable";
import {
  Separator,
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
} from "@/components/ui";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    name: "XXXXXX",
    type: "File folder",
    group3866: "Mixed",
    dateAdded: "06/09/2022 11:24AM",
    dateDownloaded: "26/11/2024 1:30PM",
    downloadCount: "143",
    dashiconsCategory: "img_dashicons_star_filled.svg",
    Kb: "123,120,654 KB",
  },
  {
    dashiconsCategory: "img_dashicons_star_filled.svg",
    name: "XX XXX XXXXX",
    type: "File folder",
    group3866: "Mixed",
    Kb: "0 KB",
    dateAdded: "12/09/2021 1:33 PM",
    dateDownloaded: "12/09/2021 1:33 PM",
    downloadCount: "0",
  },
  {
    dashiconsCategory: "img_dashicons_media_archive.svg",
    name: "XXXXXX",
    type: "Zip file",
    group3866: "Free",
    Kb: "350 KB",
    dateAdded: "07/09/2023 1:00 PM",
    dateDownloaded: "07/09/2023 1:30 PM",
    downloadCount: "2",
  },
  {
    dashiconsCategory: "img_dashicons_media_text.svg",
    name: "XXXXXXXXXXXX",
    type: "Word Document",
    group3866: "Free",
    Kb: "4,512 KB",
    dateAdded: "08/09/2024 7:20 PM",
    dateDownloaded: "18/09/2024 2:40 PM",
    downloadCount: "1",
  },
  {
    dashiconsCategory: "img_dashicons_media_text.svg",
    name: "XXX",
    type: "Word Document",
    group3866: "Free",
    Kb: "120 KB",
    dateAdded: "20/10/2024 10:15 PM",
    dateDownloaded: "20/10/2024 10:20 PM",
    downloadCount: "1",
  },
  {
    dashiconsCategory: "img_dashicons_pdf.svg",
    name: "XXXXX XXXXX",
    type: "PDF File",
    group3866: "Paid",
    Kb: "58,461 KB",
    dateAdded: "06/09/2023 11:19 AM",
    dateDownloaded: "16/09/2024 11:00 PM",
    downloadCount: "5",
  },
];

type TableRowType = {
  name: string;
  type: string;
  group3866: string;
  dateAdded: string;
  dateDownloaded: string;
  downloadCount: string;
  dashiconsCategory: string;
  Kb: string;
};

export default function UsercontentmanagementlibraryGroup3371() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-[18px] px-3.5 py-2 hover:bg-indigo-50 transition-colors">
            <Img
              src={info.row.original.dashiconsCategory as unknown as string}
              width={30}
              height={30}
              alt="Dashicons Category"
              className="h-[30px] w-[30px] text-indigo-600"
            />
            <Text as="p" className="text-[14px] font-medium text-gray-800">
              {info.getValue<string>()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Heading
            size="headingxl"
            as="h5"
            className="px-[34px] pb-[18px] pt-1 text-left text-[14px] font-bold text-indigo-700 sm:px-5"
          >
            Name
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => (
          <Text as="p" className="text-[14px] font-medium text-gray-700 py-2">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="h6" className="pb-4 pt-1.5 text-left text-[14px] font-bold text-indigo-700">
            Type
          </Heading>
        ),
        meta: { width: "180px" },
      }),
      tableColumnHelper.accessor("group3866", {
        cell: (info) => (
          <div className="flex flex-1 flex-wrap items-end justify-between gap-5 py-2">
            <Text as="p" className="mt-3 text-[14px] font-medium">
              <span className={`px-2 py-1 rounded-full text-white ${info.getValue<string>() === 'Paid' ? 'bg-indigo-600' : info.getValue<string>() === 'Free' ? 'bg-green-600' : 'bg-gray-600'}`}>
                {info.getValue<string>()}
              </span>
            </Text>
            <Text as="p" className="mr-[98px] text-[14px] font-medium text-gray-700">
              {info.row.original.Kb as unknown as string}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 flex-wrap items-start justify-between gap-5 py-1">
            <Heading size="headingxl" as="p" className="mb-3 text-[14px] font-bold text-indigo-700">
              Fee
            </Heading>
            <Heading size="headingxl" as="p" className="mr-[132px] text-[14px] font-bold text-indigo-700">
              Size
            </Heading>
          </div>
        ),
        meta: { width: "324px" },
      }),
      tableColumnHelper.accessor("dateAdded", {
        cell: (info) => (
          <Text as="p" className="text-[14px] font-medium text-gray-700 py-2">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-[18px] pt-1 text-left text-[14px] font-bold text-indigo-700">
            Date Added
          </Heading>
        ),
        meta: { width: "210px" },
      }),
      tableColumnHelper.accessor("dateDownloaded", {
        cell: (info) => (
          <Text as="p" className="text-[14px] font-medium text-gray-700 py-2">
            {info.getValue<string>()}
          </Text>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-[18px] pt-1 text-left text-[14px] font-bold text-indigo-700">
            Date Downloaded
          </Heading>
        ),
        meta: { width: "184px" },
      }),
      tableColumnHelper.accessor("downloadCount", {
        cell: (info) => (
          <div className="mr-5 flex items-start justify-center self-end py-2">
            <Text as="p" className="text-[14px] font-medium text-gray-700">
              {info.getValue<string>()}
            </Text>
            <Img
              src="img_line_44.svg"
              width={2}
              height={8}
              alt="Line 44"
              className="relative z-[1] ml-16 h-[8px] self-end text-indigo-400"
            />
            <div className="flex flex-1 flex-col items-center self-center">
              <Img
                src="img_dashicons_arrow_down_alt.svg"
                width={18}
                height={18}
                alt="Dashicons Arrow Down Alt"
                className="h-[18px] w-[18px] text-indigo-600"
              />
              <div className="relative mt-[-4px] flex flex-col items-end justify-center self-stretch">
                <Img src="img_line_46.svg" width={2} height={8} alt="Line 46" className="h-[8px] text-indigo-400" />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Heading size="headingxl" as="p" className="pb-2.5 text-left text-[14px] font-bold leading-4 text-indigo-700">
            <>
              Download <br />
              Count
            </>
          </Heading>
        ),
        meta: { width: "130px" },
      }),
    ];
  }, []);

  return (
    <div className="flex-1 self-center">
      <div className="flex flex-col items-start">
        {/* Tab navigation container - left aligned and smaller */}
        <div className="flex w-full justify-start mb-4 overflow-x-auto">
          <div className="flex space-x-2">
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h4" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                Account
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-indigo-600 p-3 shadow-md border border-indigo-700 cursor-pointer">
              <Heading size="heading4xl" as="h3" className="text-[16px] font-bold text-white flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </span>
                Library
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h2" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18.4 9l-5.1 5.1-2.8-2.8L7 14.8"></path>
                  </svg>
                </span>
                History
              </Heading>
            </div>
            
            <div className="flex rounded-md bg-white p-3 shadow-md border border-gray-200 hover:border-indigo-300 transition-colors cursor-pointer">
              <Heading size="heading4xl" as="h1" className="text-[16px] font-bold text-gray-800 flex items-center gap-1.5">
                <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20v-6M6 20V10M18 20V4"></path>
                  </svg>
                </span>
                Statistics
              </Heading>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="w-full relative mt-2 flex flex-col gap-2 self-stretch rounded-xl bg-white p-5 shadow-md border border-gray-200">
          <div className="flex items-start md:flex-col">
            <div className="relative h-[50px] w-[12%] content-center self-center md:h-auto md:w-full">
              <div className="absolute left-0 right-0 top-0.5 mx-auto flex flex-1 flex-col items-start rounded-lg border border-solid border-gray-300 bg-white px-[50px] md:px-5">
                <Separator orientation="vertical" className="h-[44px] w-px bg-gray-300" />
              </div>
              <div className="mx-2 flex h-full flex-1 items-start justify-end gap-[9px] md:mx-0">
                <Separator orientation="vertical" className="h-[44px] w-px bg-gray-300" />
                <Img
                  src="img_dashicons_button.svg"
                  width={30}
                  height={50}
                  alt="Dashicons Button"
                  className="h-[50px] self-center text-indigo-600"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 mx-3 my-auto flex h-max flex-1 items-center gap-[21px] md:mx-0">
                <Img
                  src="img_dashicons_screenoptions.svg"
                  width={30}
                  height={30}
                  alt="Dashicons Screenoptions"
                  className="h-[30px] w-[30px] text-indigo-600"
                />
                <Img src="img_megaphone.svg" width={24} height={20} alt="Megaphone" className="h-[20px] text-indigo-600" />
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
                    className="h-[30px] w-[32px] object-contain text-indigo-600"
                  />
                </InputLeftElement>
                <Input
                  size="xl"
                  shape="square"
                  colorScheme="white_A700"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  placeholder="Search"
                  className="gap-3.5 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 pl-[60px] pr-3"
                />
              </InputGroup>
              <Select name="Group 24">
                <SelectTrigger
                  size="xl"
                  indicator={
                    <Img
                      src="img_dashiconsarrowdown.svg"
                      width={30}
                      height={30}
                      alt="Dashicons-arrow-down"
                      className="h-[30px] w-[30px] text-indigo-600"
                    />
                  }
                  className="w-[14%] gap-3.5 rounded-lg border border-solid border-gray-300 bg-white shadow-sm hover:border-indigo-300 px-3 font-bold text-gray-700 sm:w-full"
                >
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="rounded-lg border border-gray-200 shadow-lg">
                  <SelectItems
                    options={dropDownOptions}
                    labelIcon={
                      <Img
                        src="img_dashicons_screenoptions.svg"
                        width={30}
                        height={30}
                        alt="Dashicons-editor-justify"
                        className="h-[30px] w-[30px] text-indigo-600"
                      />
                    }
                  />
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-1.5 flex flex-col gap-[66px] rounded-xl bg-white py-2 shadow-inner border border-gray-100 sm:gap-[33px]">
            <ReactTable
              size="sm"
              bodyProps={{ className: "hover:bg-gray-50" }}
              cellProps={{ className: "border-gray-200 border-b border-solid" }}
              className="md:block md:overflow-x-auto md:whitespace-nowrap"
              columns={tableColumns}
              data={tableData}
            />
            <div className="mb-[18px] flex flex-col gap-12">
              <Separator orientation="horizontal" className="h-[2px] bg-gray-200" />
              <Separator orientation="horizontal" className="h-[2px] bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}