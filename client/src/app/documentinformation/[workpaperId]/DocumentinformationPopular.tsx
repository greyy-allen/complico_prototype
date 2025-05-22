"use client";

import { ChipView, Text, Heading } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

type Workpaper = {
  workpaperId: string;
  name: string;
  description: string;
  region: string[];
  tags: string[];
  workpaperType: string[];
  entityType: string[];
};

export default function DocumentinformationPopular() {
  const router = useRouter();
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `CATEGORY` },
    { value: 2, label: `CATEGORY` },
    { value: 3, label: `CATEGORY` },
    { value: 4, label: `CATEGORY` },
    { value: 5, label: `CATEGORY` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState<number[]>([]);
  const [subscriberId, setSubscriberId] = useState<string | null>(null);
  const [firmId, setFirmId] = useState<string | null>(null);
  const [workpaper, setWorkpaper] = useState<Workpaper | null>(null);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const params = useParams();
  const workpaperId = params?.workpaperId as string;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setSubscriberId(payload.userId);
      setFirmId(payload.firmId);
    } catch (e) {
      console.warn("Invalid token format", e);
    }
  }, []);

  useEffect(() => {
    if (!firmId || !workpaperId) return;

    const checkSubscription = async () => {
      try {
        const res = await fetch(`${NEXT_PUBLIC_API_URL}/subscriptions/check/${firmId}/${workpaperId}`);
        const data = await res.json();
        console.log("Subscription check result:", data);
        setIsSubscribed(data.subscribed === true);
      } catch (err) {
        console.error("Error checking subscription:", err);
      }
    };

    checkSubscription();
  }, [firmId, workpaperId]);

  useEffect(() => {
    const fetchWorkpaper = async () => {
      if (!workpaperId) return;
      try {
        const res = await fetch(`${NEXT_PUBLIC_API_URL}/workpapers/${workpaperId}`);
        const data = await res.json();
        setWorkpaper(data);
      } catch (err) {
        console.error("Failed to fetch workpaper:", err);
      }
    };

    fetchWorkpaper();
  }, [workpaperId]);

  const handleSubscribe = async (contentId: string) => {
    if (!firmId || !subscriberId) {
      alert("Missing firm or user info.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${NEXT_PUBLIC_API_URL}/subscriptions/${firmId}/${subscriberId}/${contentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      await response.json();
      alert("Subscribed!");
      setIsSubscribed(true);
      router.push(`/subscriptions/${firmId}`);
    } catch (error) {
      console.error("Subscribe error:", error);
      alert("Subscription failed");
    }
  };

  return (
    <div className="self-stretch bg-gray-100 p-6 sm:p-5">
      <div className="mx-2 flex flex-col gap-2.5 md:mx-0">
        <div className="mr-[30px] flex items-center justify-between gap-5 md:mr-0 md:flex-col">
          {/* Left Side - Document Image */}
          <div className="flex h-[300px] w-[52%] items-center justify-center rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_1_black_900.svg)] bg-cover bg-no-repeat shadow-md transition-shadow duration-300 hover:shadow-lg md:h-auto md:w-full">
            <div className="flex h-[292px] w-full items-end justify-center bg-[url(/images/img_line_2_black_900.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
              <Heading
                size="heading7xl"
                as="h1"
                className="mt-[210px] text-[32px] font-bold bg-white/80 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm md:text-[30px] sm:text-[28px]"
              >
                Photos of Doc
              </Heading>
            </div>
          </div>
          
          {/* Right Side - Document Info */}
          <div className="flex w-[42%] flex-col items-center gap-[18px] md:w-full">
            {/* Title and Subscribe Button */}
            <div className="flex items-start self-stretch">
              <div className="flex w-[42%] self-end">
                <div className="flex w-full flex-col items-start gap-1">
                  <Heading size="heading7xl" as="h2" className="text-[32px] font-bold text-gray-800 md:text-[30px] sm:text-[28px]">
                    {workpaper?.name || 
                      <div className="animate-pulse bg-gray-200 h-10 w-48 rounded"></div>}
                  </Heading>
                  <div className="flex items-center gap-[11px] self-stretch bg-white/70 px-3 py-1 rounded-full">
                    <div className="h-[24px] text-yellow-500">★</div>
                    <Text size="text2xl" as="p" className="text-[16px] font-medium text-gray-700">
                      4.7 <span className="text-gray-500 text-sm">(145 ratings)</span>
                    </Text>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSubscribe(workpaperId)}
                className={`
                  flex h-[44px] w-[auto] px-4 items-center justify-center rounded-[22px] 
                  border-[3px] border-solid transition-all duration-300
                  ${isSubscribed 
                    ? "border-green-600 bg-green-100 text-green-700" 
                    : "border-indigo-600 bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                  } text-center cursor-pointer shadow-sm
                `}
              >
                <span className="text-[32px] font-bold flex items-center md:text-[30px] sm:text-[28px]">
                  {isSubscribed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  ) : "+"}
                </span>
              </button>
            </div>
            
            {/* Description */}
            <Text
              size="text7xl"
              as="p"
              className="text-[32px] font-normal leading-[37px] text-gray-700 bg-white/70 p-4 rounded-lg border border-gray-200 shadow-sm md:text-[30px] sm:text-[28px]"
            >
              <>
                XXXX X XXXXXXXX XX XXXXXXXX XX X<br />
                XXX XXXXXXXXXXX
              </>
            </Text>
            
            {/* Category Chips */}
            <ChipView
              options={chipOptions}
              setOptions={setChipOptions}
              values={selectedChipOptions}
              setValues={setSelectedChipOptions}
              className="flex flex-wrap gap-x-7 gap-y-5 self-stretch"
            >
              {(option) => (
                <React.Fragment key={option.index}>
                  {option.isSelected ? (
                    <div
                      onClick={option.toggle}
                      className="flex h-[30px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[14px] bg-indigo-600 text-white px-3.5 text-[14px] font-bold shadow-sm transition-all duration-200 hover:bg-indigo-700"
                    >
                      <span>{option.label}</span>
                    </div>
                  ) : (
                    <div
                      onClick={option.toggle}
                      className="flex h-[30px] cursor-pointer flex-row items-center rounded-[14px] bg-gray-200 px-3.5 text-[14px] font-medium text-gray-700 transition-all duration-200 hover:bg-gray-300"
                    >
                      <span>{option.label}</span>
                    </div>
                  )}
                </React.Fragment>
              )}
            </ChipView>
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="mx-[300px] flex md:mx-0 md:justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`
                h-[18px] w-[18px] rounded-lg border-[3px] border-solid cursor-pointer transition-all
                ${i === 0 
                  ? "border-indigo-600 bg-indigo-200" 
                  : "border-gray-400 bg-gray-100 hover:border-indigo-400"
                } 
                ${i > 0 ? "ml-1 md:ml-0 md:mx-1" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}