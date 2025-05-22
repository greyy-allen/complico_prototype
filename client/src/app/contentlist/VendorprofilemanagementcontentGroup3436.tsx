"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

const dropDownOptions = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

export default function VendorProfileManagement() {
  const [searchBarValue1, setSearchBarValue1] = useState("");
  const [firmId, setFirmId] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded payload:", payload);

      setFirmId(payload.firmId);
    } catch (e) {
      console.warn("Invalid token format", e);
    }
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      if (!firmId) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contents/${firmId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch content", error);
      }
    };

    fetchContent();
  }, [firmId]);

  return (
    <div className="w-full min-h-screen px-10 py-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 pb-2 mb-6">
        {["Account", "Listing", "Library", "History", "Statistics"].map((tab, index) => (
          <button
            key={tab}
            className={`px-6 py-3 font-semibold rounded-t-lg transition-all ${
              index === 1 
                ? "bg-indigo-600 text-white shadow-md" 
                : "bg-white hover:bg-gray-50 text-gray-600 border-t border-l border-r border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Controls Row */}
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/create-content")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all"
          >
            + Listing
          </Button>

          {/* View toggle buttons */}
          <div className="flex gap-1 ml-2 p-1 bg-gray-100 rounded-lg">
            <Button variant="outline" className="bg-white shadow-sm border-0 rounded-md p-2">
              <Img src="/images/grid.svg" alt="Grid" width={20} height={20} />
            </Button>
            <Button variant="outline" className="bg-transparent border-0 rounded-md p-2">
              <Img src="/images/list.svg" alt="List" width={20} height={20} />
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-3 flex-wrap">
          <InputGroup className="w-[280px]">
            <InputLeftElement>
              <Img
                src="img_dashicons_search.svg"
                alt="Search"
                className="w-4 h-4 text-gray-400"
                width={16}
                height={16}
              />
            </InputLeftElement>
            <Input
              placeholder="Search listings..."
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e.target.value)}
              className="pl-9 border-gray-300 bg-white rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </InputGroup>

          <Select>
            <SelectTrigger className="w-[150px] border-gray-300 bg-white rounded-lg shadow-sm hover:border-gray-400 transition-all">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItems options={dropDownOptions} />
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Summary (new section) */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Total Listings</div>
          <div className="text-2xl font-bold">{data.length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Open Listings</div>
          <div className="text-2xl font-bold">{data.filter(item => item.workpaper).length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Closed Listings</div>
          <div className="text-2xl font-bold">{data.filter(item => !item.workpaper).length}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Last Updated</div>
          <div className="text-2xl font-bold">{new Date().toLocaleDateString()}</div>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-5 gap-6">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchBarValue1.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all flex flex-row items-center gap-4 group"
            >
              <div className="w-[60px] h-[60px] bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-500">Image</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">{item.name}</div>
                <Select
                  defaultValue={item.workpaper ? "open" : "close"}
                  onValueChange={async (value) => {
                    const isCurrentlyOpen = !!item.workpaper;

                    if (value === "open" && !isCurrentlyOpen) {
                      const confirmed = window.confirm("Are you sure you want to make this content Open? This will create a workpaper.");
                      if (!confirmed) return;

                      const token = localStorage.getItem("token");

                      try {
                        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workpapers`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({ contentId: item.contentId }),
                        });

                        if (!res.ok) throw new Error("Failed to create workpaper");

                        // Optionally reload data or optimistically update UI
                        alert("Workpaper created successfully!");
                        window.location.reload(); // or refetch()
                      } catch (err) {
                        console.error(err);
                        alert("Failed to create workpaper.");
                      }
                    }

                    if (value === "close" && isCurrentlyOpen) {
                      const confirmed = window.confirm("Are you sure you want to make this content Close? This will delete the associated workpaper.");
                      if (!confirmed) return;

                      const token = localStorage.getItem("token");

                      try {
                        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workpapers/${item.contentId}`, {
                          method: "DELETE",
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        });

                        if (!res.ok) throw new Error("Failed to delete workpaper");

                        alert("Workpaper deleted successfully!");
                        window.location.reload(); // or refetch()
                      } catch (err) {
                        console.error(err);
                        alert("Failed to delete workpaper.");
                      }
                    }
                  }}
                >
                  <SelectTrigger className={`w-[120px] text-sm ${
                    item.workpaper 
                      ? "bg-green-50 text-green-700 border-green-200" 
                      : "bg-gray-50 text-gray-700 border-gray-200"
                    } rounded-full transition-all hover:border-indigo-300`}>
                    <SelectValue placeholder={item.workpaper ? "Open" : "Close"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="close">Close</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}