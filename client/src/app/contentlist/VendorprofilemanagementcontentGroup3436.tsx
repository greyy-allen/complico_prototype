"use client";

import React, { Suspense, useState } from "react";
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
  Heading,
} from "@/components/ui";

const data = Array.from({ length: 25 }, (_, index) => ({
  name: `Listing Name ${index + 1}`,
  image: "img_placeholder.svg",
}));

const dropDownOptions = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

export default function VendorProfileManagement() {
  const [searchBarValue1, setSearchBarValue1] = useState("");

  return (
    <div className="w-full min-h-screen px-10 py-6 bg-gray-50">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-2 mb-4">
        {["Account", "Listing", "Library", "History", "Statistics"].map((tab) => (
          <button
            key={tab}
            className="px-4 py-2 font-semibold rounded-t bg-gray-100 shadow-sm"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <div className="flex items-center gap-2">
          <Button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
            + Listing
          </Button>

          {/* View toggle buttons */}
          <div className="flex gap-1">
            <Button variant="outline">
              <Img src="/images/grid.svg" alt="Grid" width={20} height={20} />
            </Button>
            <Button variant="outline">
              <Img src="/images/list.svg" alt="List" width={20} height={20} />
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <InputGroup className="w-[250px]">
            <InputLeftElement>
              <Img
                src="img_dashicons_search.svg"
                alt="Search"
                className="w-4 h-4"
                width={16}
                height={16}
              />
            </InputLeftElement>
            <Input
              placeholder="Search"
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e.target.value)}
            />
          </InputGroup>

          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded p-4 bg-white shadow-sm flex flex-row items-center gap-4"
          >
            <div className="w-[60px] h-[60px] bg-gray-300 border flex items-center justify-center">
              <span className="text-xs text-gray-500">Image</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-medium text-sm">{item.name}</div>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Visibility" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
