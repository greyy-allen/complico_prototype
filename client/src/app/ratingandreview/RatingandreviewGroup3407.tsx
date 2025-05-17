import UserReview from "../../components/UserReview";
import { Button, Text, Img, Heading, RatingBar, Separator } from "@/components/ui";
import React, { Suspense } from "react";

const data = [
  {
    userName: "Client 1",
    reviewText: "XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X  XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX",
    reviewDate: "01/01/2025",
  },
  {
    userName: "Client 1",
    reviewText: "XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X  XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX",
    reviewDate: "01/01/2025",
  },
  {
    userName: "Client 1",
    reviewText: "XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X  XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX",
    reviewDate: "01/01/2025",
  },
];

export default function RatingandreviewGroup3407() {
  return (
    <div className="flex-1 self-center md:self-stretch">
      <div className="flex flex-col items-start">
        <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
          <Heading size="heading5xl" as="h4" className="text-[24px] font-bold md:text-[22px]">
            Overview
          </Heading>
          <div className="flex w-[84%] flex-col items-start gap-1 self-center md:w-full">
            <Heading size="heading5xl" as="h5" className="text-[24px] font-bold md:text-[22px]">
              Review and Feedback
            </Heading>
            <Separator orientation="horizontal" className="h-[5px] w-[32%] bg-black-900" />
          </div>
        </div>
        <Heading size="heading5xl" as="h6" className="mt-2.5 text-[24px] font-bold md:text-[22px]">
          Join the conversation!
        </Heading>
        <div className="mt-2 flex items-center self-stretch md:flex-col">
          <div className="flex w-[12%] flex-col items-start gap-[568px] self-end md:w-full md:gap-[426px] sm:gap-[284px]">
            <div className="flex flex-col items-center justify-center rounded-[50px] border-[3px] border-solid border-black-900 bg-blue_gray-100 p-[18px]">
              <Img
                src="img_dashicons_businessperson_black_900.svg"
                width={60}
                height={60}
                alt="Dashicons Businessperson"
                className="h-[60px] w-[60px]"
              />
            </div>
            <div className="mx-1.5 flex flex-col items-center justify-center self-stretch rounded-[50px] border-[3px] border-solid border-black-900 bg-blue_gray-100 p-[18px] md:mx-0">
              <Img
                src="img_dashicons_businessperson_black_900.svg"
                width={60}
                height={60}
                alt="Dashicons Businessperson"
                className="h-[60px] w-[60px]"
              />
            </div>
          </div>
          <div className="mb-[38px] flex w-[64%] flex-col gap-[34px] md:w-full">
            <div className="ml-1 flex flex-col gap-[34px] md:ml-0">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserReview {...d} key={"group3747" + index} />
                ))}
              </Suspense>
            </div>
            <div>
              <div className="flex items-center justify-end sm:flex-col">
                <div className="flex w-[72%] justify-end rounded-[12px] bg-blue_gray-100 sm:w-full">
                  <div className="mb-1 w-full">
                    <div className="flex px-2.5">
                      <Heading as="p" className="self-end !font-inter text-[16px] font-semibold !text-orange-600">
                        Client 1
                      </Heading>
                    </div>
                    <div className="flex px-2.5">
                      <Text
                        size="text2xl"
                        as="p"
                        className="mb-1.5 w-[98%] !font-inter text-[16px] font-normal leading-[22px]"
                      >
                        XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX
                      </Text>
                    </div>
                    <div className="mx-2.5 flex items-start justify-between gap-5 md:mx-0">
                      <RatingBar value={1} isEditable={true} size={24} className="mb-1 flex gap-2.5" />
                      <Text
                        size="textlg"
                        as="p"
                        className="self-end !font-inter text-[12px] font-normal tracking-[0.48px] !text-black-900_8c"
                      >
                        01/01/2025
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="img_contrast.svg"
                  width={12}
                  height={14}
                  alt="Contrast"
                  className="relative ml-[-6px] h-[14px] self-end rounded-[1px] sm:ml-0 sm:w-full"
                />
              </div>
            </div>
            <div className="mx-3 flex items-center md:mx-0 sm:flex-col">
              <Img
                src="img_favorite.svg"
                width={12}
                height={14}
                alt="Favoriteicon"
                className="relative z-[3] h-[14px] self-end rounded-[1px] sm:w-full"
              />
              <div className="relative ml-[-6px] flex w-[74%] rounded-[12px] bg-blue_gray-100 sm:ml-0 sm:w-full">
                <div className="mb-1 w-full">
                  <div className="flex px-2.5">
                    <Heading as="p" className="self-end !font-inter text-[16px] font-semibold !text-orange-600">
                      Client 1
                    </Heading>
                  </div>
                  <div className="flex px-2.5">
                    <Text
                      size="text2xl"
                      as="p"
                      className="mb-1.5 w-[98%] !font-inter text-[16px] font-normal leading-[22px]"
                    >
                      XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX
                    </Text>
                  </div>
                  <div className="mx-2.5 flex items-start justify-center md:mx-0">
                    <div className="mb-1 flex flex-1">
                      <Img
                        src="img_dashicons_star_filled.svg"
                        width={20}
                        height={20}
                        alt="Dashicons Star Filled"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="img_dashicons_star_filled.svg"
                        width={20}
                        height={20}
                        alt="Dashicons Star Filled"
                        className="ml-2 h-[20px] w-[20px]"
                      />
                      <Img
                        src="img_dashicons_star_filled.svg"
                        width={20}
                        height={20}
                        alt="Dashicons Star Filled"
                        className="ml-2 h-[20px] w-[20px]"
                      />
                      <Img
                        src="img_dashicons_star_filled.svg"
                        width={20}
                        height={20}
                        alt="Dashicons Star Filled"
                        className="ml-2 h-[20px] w-[20px] self-end"
                      />
                      <Img
                        src="img_dashicons_star_filled.svg"
                        width={20}
                        height={20}
                        alt="Dashicons Star Filled"
                        className="ml-2.5 h-[20px] w-[20px] self-end"
                      />
                    </div>
                    <Text
                      size="textlg"
                      as="p"
                      className="self-end !font-inter text-[12px] font-normal tracking-[0.48px] !text-black-900_8c"
                    >
                      01/01/2025
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          size="lg"
          className="ml-1.5 mt-8 w-full min-w-[278px] max-w-[278px] rounded-[10px] border-[3px] border-solid border-black-900 px-[31px] md:ml-0 sm:px-5"
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}
