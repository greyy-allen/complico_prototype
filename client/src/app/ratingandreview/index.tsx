"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails2 from "../../components/ProductDetails2";
import RatingandreviewGroup3407 from "./RatingandreviewGroup3407";
import RatingandreviewPopular from "./RatingandreviewPopular";
import { Button, Text, Heading, Input, RatingBar } from "@/components/ui";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
];

export default function RatingandReviewPage() {
  return (
    <div className="relative w-full content-center md:h-auto">
      <div className="flex h-full flex-1 flex-col items-center bg-white-a700 py-2.5">
        <Header className="relative z-[4] mx-auto w-full max-w-[1400px] gap-5 md:px-5" />
        <div className="mb-[22px] flex flex-col gap-10 self-stretch">
          <RatingandreviewPopular />
          <div className="relative h-[2122px] content-center md:h-auto">
            <div className="h-full flex-1">
              <div className="flex flex-col items-center gap-[30px]">
                <div className="flex w-[94%] items-start justify-center md:w-full md:flex-col md:px-5">
                  <RatingandreviewGroup3407 />
                  <div className="mt-9 flex w-[30%] flex-col items-start md:w-full">
                    <div className="self-stretch">
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-col items-start gap-1">
                          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold md:text-[22px]">
                            Overall Ratings
                          </Heading>
                          <div className="flex items-start gap-[13px] self-stretch">
                            <Heading
                              size="heading5xl"
                              as="h5"
                              className="self-center text-[24px] font-bold md:text-[22px]"
                            >
                              4.5
                            </Heading>
                            <RatingBar value={1} isEditable={true} size={26} className="flex gap-2.5" />
                          </div>
                        </div>
                        <div className="ml-1 flex w-[80%] flex-col gap-3 md:ml-0 md:w-full">
                          <Input
                            shape="round"
                            placeholder={`5 stars`}
                            className="rounded-[10px] border-[3px] border-black-900 px-3.5"
                          />
                          <Input
                            shape="round"
                            placeholder={`4 stars`}
                            className="rounded-[10px] border-[3px] border-black-900 px-3.5"
                          />
                          <Input
                            shape="round"
                            placeholder={`3 stars`}
                            className="rounded-[10px] border-[3px] border-black-900 px-3.5"
                          />
                          <Input
                            shape="round"
                            placeholder={`2 stars`}
                            className="rounded-[10px] border-[3px] border-black-900 px-3.5"
                          />
                          <Input
                            shape="round"
                            placeholder={`1 stars`}
                            className="rounded-[10px] border-[3px] border-black-900 px-3.5"
                          />
                        </div>
                      </div>
                    </div>
                    <Heading
                      size="heading5xl"
                      as="h5"
                      className="ml-1 mt-[60px] text-[24px] font-bold md:ml-0 md:text-[22px]"
                    >
                      Resources
                    </Heading>
                    <Heading as="p" className="ml-2.5 mt-4 text-[16px] font-bold !text-indigo-a100 md:ml-0">
                      Author
                    </Heading>
                    <Heading as="p" className="ml-2.5 mt-4 text-[16px] font-bold !text-indigo-a100 md:ml-0">
                      Website
                    </Heading>
                    <Heading as="p" className="ml-2.5 mt-4 text-[16px] font-bold !text-indigo-a100 md:ml-0">
                      Contact
                    </Heading>
                    <Link href="#" className="ml-2.5 mt-4 md:ml-0">
                      <Heading as="p" className="text-[16px] font-bold !text-indigo-a100">
                        Terms of Service
                      </Heading>
                    </Link>
                    <Heading as="p" className="ml-2.5 mt-4 text-[16px] font-bold !text-indigo-a100 md:ml-0">
                      Privacy Notice
                    </Heading>
                  </div>
                </div>
                <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-5 md:px-5">
                  <Heading size="heading7xl" as="h3" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
                    Explore
                  </Heading>
                  <div className="mr-2.5 flex gap-[30px] self-stretch md:mr-0 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <ProductDetails2 {...d} key={"group3190" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[34px] self-stretch bg-deep_purple-a200 px-14 py-[62px] md:p-5">
                  <Heading
                    size="heading7xl"
                    as="h3"
                    className="text-[32px] font-bold !text-white-a700 md:text-[30px] sm:text-[28px]"
                  >
                    Call to Action Message
                  </Heading>
                  <Text
                    size="text7xl"
                    as="p"
                    className="self-end text-center text-[32px] font-normal leading-[37px] !text-white-a700 md:text-[30px] sm:text-[28px]"
                  >
                    <>
                      XXX XX X XXXXXXXXXXXX XX XXXXXXXXXXXXXX X X XXXXXXXXXXXXXXXXXXX XX
                      <br />
                      XXXXXXXXXXXXXXX X XXX X X XXXXXXXXXXXXXXXX
                    </>
                  </Text>
                  <Button
                    colorScheme="white_A700"
                    className="mb-2 w-full min-w-[288px] max-w-[288px] rounded-[10px] px-[34px] sm:px-5"
                  >
                    Get Started
                  </Button>
                </div>
                <Footer className="w-[92%] md:w-full md:px-5" />
              </div>
            </div>
            <div className="absolute right-[40%] top-[16%] m-auto flex w-[12%] flex-col gap-[234px] md:gap-[175px] sm:gap-[117px]">
              <div className="h-[100px] rounded-[50px] border-[3px] border-solid border-black-900" />
              <div className="h-[100px] rounded-[50px] border-[3px] border-solid border-black-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[3%] top-[38%] m-auto h-[100px] w-[6%] rounded-[50px] border-[3px] border-solid border-black-900 object-contain" />
    </div>
  );
}
