import { Heading, Text, Img } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
}

export default function Common({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start self-stretch gap-5 flex-1`}>
      <Heading size="heading7xl" as="h3" className="h-[-3px] text-[32px] font-bold sm:text-[27px]">
        Product Category 1
      </Heading>
      <div className="flex gap-[30px] self-stretch">
        <div className="flex w-[324px] border-[1.5px] border-solid border-black-900_4c bg-white-a700_4c p-3">
          <div className="mb-2 flex w-full flex-col items-start sm:w-full">
            <div className="flex border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <Img src="img_arrow_left.svg" width={74} height={74} alt="Arrow Left" className="h-[74px] w-[74px]" />
            </div>
            <div className="mt-4 flex flex-col items-start gap-3 self-stretch sm:gap-3">
              <Heading size="heading5xl" as="h5" className="text-[24px] font-bold sm:text-[20px]">
                Product Name
              </Heading>
              <Text as="p" className="text-[14px] font-normal leading-4">
                <>
                  XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
                  <br />
                  XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
                  XXXXXXXXXXXXXX X XXXXX X X XXX XXX
                  <br />
                  XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
                </>
              </Text>
            </div>
            <div className="ml-1 mt-11 flex flex-wrap justify-between gap-5 self-stretch sm:ml-0">
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Rating
              </Heading>
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Reviews
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex w-[324px] border-[1.5px] border-solid border-black-900_4c bg-white-a700_4c p-3">
          <div className="mb-2 flex w-full flex-col items-start sm:w-full">
            <div className="flex border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <Img
                src="img_arrow_left.svg"
                width={74}
                height={74}
                alt="Arrow Left"
                className="h-[74px] w-full sm:h-auto"
              />
            </div>
            <div className="mt-[21px] flex flex-col items-start gap-2 self-stretch sm:gap-2">
              <Heading size="heading5xl" as="h5" className="text-[24px] font-bold sm:text-[20px]">
                Product Name
              </Heading>
              <Text as="p" className="mb-[66px] text-[14px] font-normal leading-4">
                <>
                  XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
                  <br />
                  XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
                  XXXXXXXXXXXXXX X XXXXX X X XXX XXX
                  <br />
                  XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
                </>
              </Text>
            </div>
            <div className="relative mt-[-18px] flex flex-wrap justify-between gap-5 self-stretch">
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Rating
              </Heading>
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Reviews
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex w-[324px] border-[1.5px] border-solid border-black-900_4c bg-white-a700_4c p-3">
          <div className="mb-2 flex w-full flex-col items-start sm:w-full">
            <div className="flex flex-col border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <Img src="img_arrow_left.svg" width={74} height={74} alt="Arrow Left" className="h-[74px]" />
            </div>
            <div className="mt-4 flex flex-col items-start gap-3 self-stretch sm:gap-3">
              <Heading size="heading5xl" as="h5" className="text-[24px] font-bold sm:text-[20px]">
                Product Name
              </Heading>
              <Text as="p" className="text-[14px] font-normal leading-4">
                <>
                  XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
                  <br />
                  XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
                  XXXXXXXXXXXXXX X XXXXX X X XXX XXX
                  <br />
                  XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
                </>
              </Text>
            </div>
            <div className="mt-11 flex flex-wrap justify-between gap-5 self-stretch">
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Rating
              </Heading>
              <Heading as="p" className="text-[16px] font-bold sm:text-[13px]">
                Reviews
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
