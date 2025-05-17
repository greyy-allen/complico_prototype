import Common from "../../components/Common";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingGroup52 from "./LandingGroup52";
import { Button, Text, Heading } from "@/components/ui";
import React, { Suspense } from "react";

export default function LandingPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="relative z-[1] flex flex-col items-center">
        <Header className="mx-auto mt-2.5 w-full max-w-[1400px] gap-5 md:px-5" />
      </div>
      <div className="overflow-x-scroll">
        <LandingGroup52 />
      </div>
      <div>
        <div className="mx-[60px] mt-[68px] flex items-start justify-between gap-5 md:mx-0 md:flex-col">
          <div className="flex w-full flex-col items-start md:px-5">
            <Heading size="heading5xl" as="h2" className="self-start text-[24.21px] font-bold md:text-[22px]">
              Filter Criteria
            </Heading>
            <Heading as="h3" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="h4" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="h5" className="mt-3 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading size="heading5xl" as="h6" className="mt-7 self-start text-[24.21px] font-bold md:text-[22px]">
              Filter Critera
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading size="heading5xl" as="h5" className="mt-[38px] self-start text-[24.21px] font-bold md:text-[22px]">
              Filter Critera
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-3 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-3 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-3 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
            <Heading as="p" className="mt-2.5 text-[16.95px] font-bold">
              Sub Filter Category
            </Heading>
          </div>
          <div className="ml-[55px] flex w-[84%] flex-col gap-[72px] self-center md:ml-0 md:w-full md:px-5">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((d, index) => (
                <Common key={"group3182" + index} />
              ))}
            </Suspense>
          </div>
        </div>
        <div className="mt-[76px] flex flex-col items-center justify-center gap-10 bg-deep_purple-a200 px-14 py-[62px] md:p-5">
          <div className="flex w-[96%] flex-col items-center gap-7 md:w-full">
            <Heading
              size="heading7xl"
              as="h2"
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
          </div>
          <Button
            colorScheme="white_A700"
            className="mb-2 w-full min-w-[288px] max-w-[288px] rounded-[10px] px-[34px] sm:px-5"
          >
            Get Started
          </Button>
        </div>
        <Footer className="mb-[54px] ml-[52px] mr-12 mt-8 md:mx-0" />
      </div>
    </div>
  );
}
