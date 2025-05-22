"use client";

import { ChipView, Text, Heading } from "@/components/ui";
import React from "react";

export default function RatingandreviewPopular() {
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `CATEGORY` },
    { value: 2, label: `CATEGORY` },
    { value: 3, label: `CATEGORY` },
    { value: 4, label: `CATEGORY` },
    { value: 5, label: `CATEGORY` },
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState<number[]>([]);

  return (
    <div className="flex items-start bg-gradient-to-r from-gray-50 to-gray-100 p-8 shadow-sm md:flex-col sm:p-5">
      <div className="flex-1 self-center md:self-stretch">
        <div className="flex flex-col items-center gap-4">
          <div className="mr-8 self-stretch rounded-xl border-2 border-solid border-gray-700 bg-blue_gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden md:mr-0">
            <div className="h-[294px] bg-[url(/images/img_line_1_black_900.svg)] bg-cover bg-no-repeat md:h-auto">
              <div className="flex h-[292px] items-end justify-center bg-[url(/images/img_line_2_black_900.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
                <Heading
                  size="heading7xl"
                  as="h1"
                  className="mt-[210px] text-[32px] font-bold bg-white/80 px-4 py-2 rounded-lg shadow-sm backdrop-blur-sm md:text-[30px] sm:text-[28px]"
                >
                  Photos of Doc
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index} 
                className={`
                  h-[18px] w-[18px] rounded-lg border-2 border-solid cursor-pointer transition-all
                  ${index === 0 
                    ? "border-indigo-600 bg-indigo-100" 
                    : "border-gray-400 bg-gray-100 hover:border-indigo-400 hover:bg-indigo-50"
                  }
                `} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-[44%] justify-center px-[30px] md:w-full sm:px-5">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-wrap items-center gap-[35px] self-stretch">
            <Heading size="heading7xl" as="h2" className="text-[32px] font-bold text-gray-800 md:text-[30px] sm:text-[28px]">
              Product Name
            </Heading>
            <Heading
              size="heading7xl"
              as="h3"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-solid border-indigo-600 bg-indigo-100 text-center text-[32px] font-bold text-indigo-700 shadow-sm hover:shadow-md hover:bg-indigo-200 transition-all cursor-pointer md:text-[30px] sm:text-[28px]"
            >
              +
            </Heading>
          </div>
          <div className="flex items-center gap-[11px] self-stretch bg-white/70 px-3 py-1 rounded-full mt-2">
            <div
              data-index="0"
              data-forhalf="★"
              className="h-[24px] text-yellow-500 text-xl"
            >
              ★
            </div>
            <Text size="text2xl" as="p" className="text-[16px] font-medium text-gray-700">
              4.7 <span className="text-gray-500 text-sm">(145 ratings)</span>
            </Text>
          </div>
          <Text
            size="text7xl"
            as="p"
            className="mt-6 text-[32px] font-normal leading-[37px] text-gray-700 bg-white/70 p-4 rounded-lg border border-gray-200 shadow-sm md:text-[30px] sm:text-[28px]"
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
            className="mt-6 flex flex-wrap gap-x-7 gap-y-5 self-stretch"
          >
            {(option) => (
              <React.Fragment key={option.index}>
                {option.isSelected ? (
                  <div
                    onClick={option.toggle}
                    className="flex h-[30px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-full bg-indigo-600 text-white px-4 text-[14px] font-medium shadow-sm transition-all duration-200 hover:bg-indigo-700"
                  >
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <div
                    onClick={option.toggle}
                    className="flex h-[30px] cursor-pointer flex-row items-center rounded-full bg-gray-200 px-4 text-[14px] font-medium text-gray-700 transition-all duration-200 hover:bg-gray-300"
                  >
                    <span>{option.label}</span>
                  </div>
                )}
              </React.Fragment>
            )}
          </ChipView>
        </div>
      </div>
    </div>
  );
}