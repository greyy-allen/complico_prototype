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
          <Heading size="heading5xl" as="h4" className="text-[24px] font-bold text-gray-800 md:text-[22px]">
            Overview
          </Heading>
          <div className="flex w-[84%] flex-col items-start gap-1 self-center md:w-full">
            <Heading size="heading5xl" as="h5" className="text-[24px] font-bold text-indigo-700 md:text-[22px]">
              Review and Feedback
            </Heading>
            <Separator orientation="horizontal" className="h-[5px] w-[32%] bg-indigo-600 rounded-full" />
          </div>
        </div>
        <Heading size="heading5xl" as="h6" className="mt-2.5 text-[24px] font-bold text-gray-800 md:text-[22px]">
          Join the conversation!
        </Heading>
        <div className="mt-2 flex items-center self-stretch md:flex-col">
          <div className="flex w-[12%] flex-col items-start gap-[568px] self-end md:w-full md:gap-[426px] sm:gap-[284px]">
            <div className="flex flex-col items-center justify-center rounded-[50px] border-2 border-solid border-indigo-300 bg-indigo-50 p-[18px] shadow-sm transition-all hover:shadow-md">
              <Img
                src="img_dashicons_businessperson_black_900.svg"
                width={60}
                height={60}
                alt="Dashicons Businessperson"
                className="h-[60px] w-[60px] text-indigo-600"
              />
            </div>
            <div className="mx-1.5 flex flex-col items-center justify-center self-stretch rounded-[50px] border-2 border-solid border-indigo-300 bg-indigo-50 p-[18px] shadow-sm transition-all hover:shadow-md md:mx-0">
              <Img
                src="img_dashicons_businessperson_black_900.svg"
                width={60}
                height={60}
                alt="Dashicons Businessperson"
                className="h-[60px] w-[60px] text-indigo-600"
              />
            </div>
          </div>
          <div className="mb-[38px] flex w-[64%] flex-col gap-[34px] md:w-full">
            <div className="ml-1 flex flex-col gap-[34px] md:ml-0">
              <Suspense fallback={
                <div className="flex flex-col items-center py-6">
                  <div className="w-10 h-10 border-t-4 border-indigo-600 border-solid rounded-full animate-spin mb-2"></div>
                  <p className="text-indigo-600 font-medium text-sm">Loading reviews...</p>
                </div>
              }>
                {data.map((d, index) => (
                  <UserReview {...d} key={"group3747" + index} />
                ))}
              </Suspense>
            </div>
            <div>
              <div className="flex items-center justify-end sm:flex-col">
                <div className="flex w-[72%] justify-end rounded-xl bg-white border border-gray-200 shadow-sm sm:w-full">
                  <div className="mb-1 w-full p-2">
                    <div className="flex px-2.5">
                      <Heading as="p" className="self-end !font-inter text-[16px] font-semibold text-indigo-600">
                        Client 1
                      </Heading>
                    </div>
                    <div className="flex px-2.5">
                      <Text
                        size="text2xl"
                        as="p"
                        className="mb-1.5 w-[98%] !font-inter text-[16px] font-normal leading-[22px] text-gray-700"
                      >
                        XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX
                      </Text>
                    </div>
                    <div className="mx-2.5 flex items-start justify-between gap-5 md:mx-0">
                      <RatingBar value={1} isEditable={true} size={24} className="mb-1 flex gap-2.5 text-yellow-500" />
                      <Text
                        size="textlg"
                        as="p"
                        className="self-end !font-inter text-[12px] font-normal tracking-[0.48px] text-gray-500"
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
                  className="relative ml-[-6px] h-[14px] self-end rounded-[1px] text-indigo-500 sm:ml-0 sm:w-full"
                />
              </div>
            </div>
            <div className="mx-3 flex items-center md:mx-0 sm:flex-col">
              <Img
                src="img_favorite.svg"
                width={12}
                height={14}
                alt="Favoriteicon"
                className="relative z-[3] h-[14px] self-end rounded-[1px] text-indigo-500 sm:w-full"
              />
              <div className="relative ml-[-6px] flex w-[74%] rounded-xl bg-white border border-gray-200 shadow-sm sm:ml-0 sm:w-full">
                <div className="mb-1 w-full p-2">
                  <div className="flex px-2.5">
                    <Heading as="p" className="self-end !font-inter text-[16px] font-semibold text-indigo-600">
                      Client 1
                    </Heading>
                  </div>
                  <div className="flex px-2.5">
                    <Text
                      size="text2xl"
                      as="p"
                      className="mb-1.5 w-[98%] !font-inter text-[16px] font-normal leading-[22px] text-gray-700"
                    >
                      XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX
                    </Text>
                  </div>
                  <div className="mx-2.5 flex items-start justify-center md:mx-0">
                    <div className="mb-1 flex flex-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Img
                          key={star}
                          src="img_dashicons_star_filled.svg"
                          width={20}
                          height={20}
                          alt="Star Rating"
                          className={`${star > 1 ? "ml-2" : ""} h-[20px] w-[20px] text-yellow-500`}
                        />
                      ))}
                    </div>
                    <Text
                      size="textlg"
                      as="p"
                      className="self-end !font-inter text-[12px] font-normal tracking-[0.48px] text-gray-500"
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
          className="ml-1.5 mt-8 w-full min-w-[278px] max-w-[278px] rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all md:ml-0"
        >
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}