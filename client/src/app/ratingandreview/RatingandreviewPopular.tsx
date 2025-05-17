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
    <div className="flex items-start bg-gray-100 p-6 md:flex-col sm:p-5">
      <div className="flex-1 self-center md:self-stretch">
        <div className="flex flex-col items-center gap-2.5">
          <div className="mr-8 self-stretch rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100 md:mr-0">
            <div className="h-[294px] bg-[url(/images/img_line_1_black_900.svg)] bg-cover bg-no-repeat md:h-auto">
              <div className="flex h-[292px] items-end justify-center bg-[url(/images/img_line_2_black_900.svg)] bg-cover bg-no-repeat p-[22px] md:h-auto sm:p-5">
                <Heading
                  size="heading7xl"
                  as="h1"
                  className="mt-[210px] text-[32px] font-bold md:text-[30px] sm:text-[28px]"
                >
                  Photos of Doc
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
            <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
            <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
            <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
            <div className="h-[18px] w-[18px] rounded-lg border-[3px] border-solid border-black-900 bg-blue_gray-100" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-[44%] justify-center px-[30px] md:w-full sm:px-5">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-wrap items-center gap-[35px] self-stretch">
            <Heading size="heading7xl" as="h2" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
              Product Name
            </Heading>
            <Heading
              size="heading7xl"
              as="h3"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-[22px] border-[3px] border-solid border-black-900 bg-blue_gray-100 text-center text-[32px] font-bold md:text-[30px] sm:text-[28px]"
            >
              +
            </Heading>
          </div>
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
          <Text
            size="text7xl"
            as="p"
            className="mt-4 text-[32px] font-normal leading-[37px] md:text-[30px] sm:text-[28px]"
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
            className="mt-5 flex flex-wrap gap-x-7 gap-y-5 self-stretch"
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
    </div>
  );
}
