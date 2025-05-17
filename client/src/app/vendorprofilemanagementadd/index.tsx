"use client";

import Header from "../../components/Header";
import VendorprofilemanagementaddGroup3314 from "./VendorprofilemanagementaddGroup3314";
import { Button, Img, Separator, Heading, Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import React from "react";
import { Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

import Autoplay from "embla-carousel-autoplay";
import { type UseEmblaCarouselType } from "embla-carousel-react";

export default function VendorProfileManagementAddPage() {
  const [api, setApi] = React.useState<UseEmblaCarouselType[1]>(undefined);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrentSlide(api.selectedScrollSnap());

    const updateCurrentSlide = () => setCurrentSlide(api.selectedScrollSnap());

    api.on("select", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  return (
    <div className="w-full bg-white-a700">
      <div className="mb-[30px] mt-2.5 flex flex-col gap-[34px]">
        <Header className="gap-1.5" />
        <div className="relative ml-[22px] mr-[30px] h-[1168px] md:mx-0">
          <div className="absolute bottom-0 right-0 top-0 my-auto ml-[88px] h-full flex-1 md:ml-0">
            <div className="flex md:flex-col">
              <Button
                size="6xl"
                shape="round"
                colorScheme="gray_100"
                className="w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:px-5"
              >
                Account
              </Button>
              <Button
                size="6xl"
                shape="round"
                colorScheme="gray_100"
                className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
              >
                Listing
              </Button>
              <Button
                size="6xl"
                shape="round"
                colorScheme="gray_100"
                className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
              >
                Library
              </Button>
              <Button
                size="6xl"
                shape="round"
                colorScheme="gray_100"
                className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-[34px] font-bold md:ml-0 md:px-5"
              >
                History
              </Button>
              <Button
                size="6xl"
                shape="round"
                colorScheme="gray_100"
                className="ml-1 w-full min-w-[150px] max-w-[150px] rounded-[5px] px-8 font-bold md:ml-0 md:px-5"
              >
                Statistics
              </Button>
            </div>
            <div className="relative mt-[-12px] rounded-[10px] bg-gray-100 py-5 shadow-sm">
              <VendorprofilemanagementaddGroup3314 />
            </div>
          </div>
          <Carousel
            opts={{
              loop: true,
              align: "start",
              slidesToScroll: 2,
              breakpoints: {
                "(max-width: 1050px)": { slidesToScroll: 1 },
                "(max-width: 550px)": { slidesToScroll: 1 },
              },
            }}
            setApi={setApi}
            plugins={[Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false })]}
            className="mx-auto w-full max-w-[1388px]"
          >
            <CarouselContent>
              {[...Array.from({ length: 6 })].map((_, index) => (
                <CarouselItem
                  key={index}
                  className="left-0 right-0 top-[13px] flex-1 basis-1/2 gap-[50px] md:basis-full"
                >
                  <Sidebar
                    width="102px !important"
                    className="!sticky top-0 flex h-screen flex-col self-center overflow-auto"
                  >
                    <Menu
                      menuItemStyles={{
                        button: {
                          padding: " ",
                          borderRadius: "10px",
                          margin: " ",
                          border: "1px solid transparent",
                          [`&:hover, &.ps-active`]: { borderColor: "#000000", backgroundColor: "#ffffff !important" },
                        },
                        label: { display: "none" },
                      }}
                      className="flex w-full flex-col items-center pb-[74px] pr-14 md:pb-5 md:pr-5"
                    >
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="h-px w-px" />
                      <div className="mb-[398px] h-px w-px" />
                    </Menu>
                  </Sidebar>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
