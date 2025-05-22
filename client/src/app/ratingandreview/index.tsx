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
                    <div className="self-stretch bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-start gap-3">
                          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold text-gray-800 md:text-[22px]">
                            Overall Ratings
                          </Heading>
                          <div className="flex items-center gap-4 self-stretch bg-gray-50 p-3 rounded-lg">
                            <Heading
                              size="heading5xl"
                              as="h5"
                              className="self-center text-[28px] font-bold text-indigo-600 md:text-[22px]"
                            >
                              4.5
                            </Heading>
                            <RatingBar value={1} isEditable={true} size={26} className="flex gap-2.5 text-yellow-500" />
                          </div>
                        </div>
                        <div className="ml-1 flex w-[80%] flex-col gap-3 md:ml-0 md:w-full">
                          <Input
                            shape="round"
                            placeholder="5 stars"
                            className="rounded-lg border-2 border-indigo-200 bg-indigo-50 px-4 py-2.5 text-indigo-700 font-medium shadow-sm"
                          />
                          <Input
                            shape="round"
                            placeholder="4 stars"
                            className="rounded-lg border-2 border-blue-200 bg-blue-50 px-4 py-2.5 text-blue-700 font-medium shadow-sm"
                          />
                          <Input
                            shape="round"
                            placeholder="3 stars"
                            className="rounded-lg border-2 border-green-200 bg-green-50 px-4 py-2.5 text-green-700 font-medium shadow-sm"
                          />
                          <Input
                            shape="round"
                            placeholder="2 stars"
                            className="rounded-lg border-2 border-orange-200 bg-orange-50 px-4 py-2.5 text-orange-700 font-medium shadow-sm"
                          />
                          <Input
                            shape="round"
                            placeholder="1 stars"
                            className="rounded-lg border-2 border-red-200 bg-red-50 px-4 py-2.5 text-red-700 font-medium shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 w-full mt-6">
                      <Heading
                        size="heading5xl"
                        as="h5"
                        className="text-[24px] font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 md:text-[22px]"
                      >
                        Resources
                      </Heading>
                      <div className="flex flex-col space-y-4">
                        <Link href="#" className="flex items-center gap-3 group no-underline transition-all hover:translate-x-1">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </span>
                          <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:text-indigo-700">
                            Author
                          </Heading>
                        </Link>
                        
                        <Link href="#" className="flex items-center gap-3 group no-underline transition-all hover:translate-x-1">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <path d="M20.4 14.5L16 10 4 20"></path>
                            </svg>
                          </span>
                          <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:text-indigo-700">
                            Website
                          </Heading>
                        </Link>
                        
                        <Link href="#" className="flex items-center gap-3 group no-underline transition-all hover:translate-x-1">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                          </span>
                          <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:text-indigo-700">
                            Contact
                          </Heading>
                        </Link>
                        
                        <Link href="#" className="flex items-center gap-3 group no-underline transition-all hover:translate-x-1">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                          </span>
                          <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:text-indigo-700">
                            Terms of Service
                          </Heading>
                        </Link>
                        
                        <Link href="#" className="flex items-center gap-3 group no-underline transition-all hover:translate-x-1">
                          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </span>
                          <Heading as="p" className="text-[16px] font-bold text-indigo-500 group-hover:text-indigo-700">
                            Privacy Notice
                          </Heading>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-5 md:px-5">
                  <Heading size="heading7xl" as="h3" className="text-[32px] font-bold text-gray-800 pl-4 border-l-4 border-indigo-500 md:text-[30px] sm:text-[28px]">
                    Explore
                  </Heading>
                  <div className="mr-2.5 flex gap-[30px] self-stretch md:mr-0 md:flex-col">
                    <Suspense fallback={
                      <div className="w-full flex justify-center items-center py-8">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-12 h-12 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                          <p className="text-indigo-600 font-medium">Loading products...</p>
                        </div>
                      </div>
                    }>
                      {data.map((d, index) => (
                        <ProductDetails2 {...d} key={"group3190" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
                {/* <div className="flex flex-col items-center justify-center gap-[34px] self-stretch bg-gradient-to-br from-indigo-600 to-purple-700 px-14 py-[62px] rounded-t-xl shadow-lg md:p-5">
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
                    className="self-end text-center text-[32px] font-normal leading-[37px] !text-white-a700/90 max-w-3xl md:text-[30px] sm:text-[28px]"
                  >
                    <>
                      XXX XX X XXXXXXXXXXXX XX XXXXXXXXXXXXXX X X XXXXXXXXXXXXXXXXXXX XX
                      <br />
                      XXXXXXXXXXXXXXX X XXX X X XXXXXXXXXXXXXXXX
                    </>
                  </Text>
                  <Button
                    colorScheme="white_A700"
                    className="mb-2 w-full min-w-[288px] max-w-[288px] rounded-full px-8 py-3 font-semibold text-indigo-600 hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </Button>
                </div> */}
                <Footer className="w-[92%] md:w-full md:px-5" />
              </div>
            </div>
            <div className="absolute right-[40%] top-[16%] m-auto flex w-[12%] flex-col gap-[234px] md:gap-[175px] sm:gap-[117px]">
              <div className="h-[100px] rounded-[50px] border-2 border-solid border-indigo-300 bg-indigo-50 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md" />
              <div className="h-[100px] rounded-[50px] border-2 border-solid border-indigo-300 bg-indigo-50 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[3%] top-[38%] m-auto h-[100px] w-[6%] rounded-[50px] border-2 border-solid border-indigo-300 bg-indigo-50 shadow-sm transition-all hover:border-indigo-400 hover:shadow-md" />
    </div>
  );
}