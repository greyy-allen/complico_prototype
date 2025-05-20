"use client";

import { ChipView, Text, Heading } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 3000;

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
  const params = useParams();
  const workpaperId = params?.workpaperId as string;

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) return;

    try{
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log("Decoded payload:", payload);

      const userId = payload.userId;
      const firmId = payload.firmId;

      setSubscriberId(userId);
      setFirmId(firmId);
    } catch (e) {
      console.warn("Invalid token format", e);
    }
  }, [])

  const handleSubscribe = async (contentId: string) => {
    if (!firmId || !subscriberId) {
      alert("Missing firm or user info." + console.log(firmId) +
      console.log(subscriberId));
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

      const result = await response.json();
      console.log("Subscribed successfully: result");
      alert("Subscribed!");
      router.push(`/subscriptions/${firmId}`);
    } catch (error) {
      console.error("Subscribe error:", error);
      alert("Subscription failed");
    }
  }

  return (
    <div className="self-stretch bg-gray-100 p-6 sm:p-5">
      <div className="mx-2 flex flex-col gap-2.5 md:mx-0">
        <div className="mr-[30px] flex items-center justify-between gap-5 md:mr-0 md:flex-col">
          <div className="flex h-[300px] w-[52%] items-center justify-center rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_1_black_900.svg)] bg-cover bg-no-repeat md:h-auto md:w-full">
            <div className="flex h-[292px] w-full items-end justify-center bg-[url(/images/img_line_2_black_900.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
              <Heading
                size="heading7xl"
                as="h1"
                className="mt-[210px] text-[32px] font-bold md:text-[30px] sm:text-[28px]"
              >
                Photos of Doc
              </Heading>
            </div>
          </div>
          <div className="flex w-[42%] flex-col items-center gap-[18px] md:w-full">
            <div className="flex items-start self-stretch">
              <div className="flex w-[42%] self-end">
                <div className="flex w-full flex-col items-start gap-1">
                  <Heading size="heading7xl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
                    Product Name
                  </Heading>
                  <div className="flex items-center gap-[11px] self-stretch">
                    <div
                      data-index="0"
                      data-forhalf="★"
                      className="1440)] / 24) * 15px) - text-[calc(((100vw h-[24px] text-black-900"
                    >
                      ★
                    </div>
                    <Text size="text2xl" as="p" className="text-[16px] font-normal">
                      4.7 (145 ratings)
                    </Text>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSubscribe(workpaperId)}
                className="flex h-[44px] w-[44px] items-center justify-center rounded-[22px] border-[3px] border-solid border-black-900 bg-blue_gray-100 text-center cursor-pointer"
              >
                <Heading
                  size="heading7xl"
                  as="span" // use span so it's valid inside button
                  className="text-[32px] font-bold md:text-[30px] sm:text-[28px]"
                >
                  +
                </Heading>
              </button>

            </div>
            <Text
              size="text7xl"
              as="p"
              className="text-[32px] font-normal leading-[37px] md:text-[30px] sm:text-[28px]"
            >
              <>
                XXXX X XXXXXXXX XX XXXXXXXX XX X<br />
                XXX XXXXXXXXXXX
              </>
            </Text>
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
                      className="flex h-[30px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[14px] bg-black-900 px-3.5 text-[14px] font-bold text-black-900"
                    >
                      <span>{option.label}</span>
                    </div>
                  ) : (
                    <div
                      onClick={option.toggle}
                      className="flex h-[30px] cursor-pointer flex-row items-center rounded-[14px] bg-blue_gray-100 px-3.5 text-[14px] font-bold text-black-900"
                    >
                      <span>{option.label}</span>
                    </div>
                  )}
                </React.Fragment>
              )}
            </ChipView>
          </div>
        </div>
        <div className="mx-[300px] flex md:mx-0 md:flex-col">
          <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
          <div className="ml-1 h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100 md:ml-0" />
          <div className="ml-1 h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100 md:ml-0" />
          <div className="ml-1 h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100 md:ml-0" />
          <div className="ml-1 h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100 md:ml-0" />
        </div>
      </div>
    </div>
  );
}
