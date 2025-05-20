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
          <Button
            onClick={() => router.push("/create-content")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
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
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(searchBarValue1.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="border rounded p-4 bg-white shadow-sm flex flex-row items-center gap-4"
            >
              <div className="w-[60px] h-[60px] bg-gray-300 border flex items-center justify-center">
                <span className="text-xs text-gray-500">Image</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium text-sm">{item.name}</div>
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
                  <SelectTrigger className="w-[120px]">
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