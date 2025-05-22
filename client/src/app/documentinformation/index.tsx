import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetails1 from "../../components/ProductDetails1";
import DocumentinformationGroup3343 from "./DocumentinformationGroup3343";
import DocumentinformationPopular from "./[workpaperId]/DocumentinformationPopular";
import { Button, Text, Heading } from "@/components/ui";
import Link from "next/link";
import React, { Suspense } from "react";

const data = [
  {
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

export default function DocumentInformationPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-9 mt-2.5 flex flex-col items-center">
        <Header className="relative z-[3] mx-auto w-full max-w-[1400px] gap-5 md:px-5" />
        <div className="flex flex-col items-center gap-[34px] self-stretch">
          <DocumentinformationPopular />
          <div className="ml-[38px] mr-[84px] flex items-start self-stretch md:mx-0 md:flex-col">
            <DocumentinformationGroup3343 />
          </div>
          <Link href="#" className="ml-12 self-start md:ml-0 md:text-[22px] group no-underline">
            <Heading size="heading5xl" as="h5" className="text-[24px] font-bold text-indigo-600 flex items-center gap-2 group-hover:text-indigo-700 transition-colors">
              <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </span>
              Learn More
            </Heading>
          </Link>
          <div className="ml-[31px] mr-3 flex flex-col items-start self-stretch md:mx-0">
            <Text
              as="p"
              className="relative z-[2] h-[78px] w-[60%] text-[14px] font-normal leading-5 text-gray-700 bg-white-a700 p-4 rounded-lg shadow-sm border border-gray-100 md:w-full md:px-5"
            >
              XX XX XXXXXXX XXXXXXXXX X XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X XXXXXXXXXXXXXX X XXXXX X X XXX
              XXX XXX XX XXX X XXXXX XXX XXXXXXXXXXXXXXX XX XXXXXXX XXXXXXXXX X XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX
              XXX XX X XXXXXXXXXXXXXX X XXXXX X X XXX XXX XX
            </Text>
            <div className="relative mx-auto mt-[-28px] flex w-full max-w-[1400px] flex-col items-start gap-5 md:px-5">
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
                    <ProductDetails1 {...d} key={"group3127" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[34px] self-stretch bg-gradient-to-br from-indigo-600 to-purple-700 px-14 py-[62px] rounded-t-xl shadow-lg md:p-5">
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
          </div>
          <Footer className="mx-[50px] self-stretch md:mx-0" />
        </div>
      </div>
    </div>
  );
}