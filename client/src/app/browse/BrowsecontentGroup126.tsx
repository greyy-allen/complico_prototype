import { Img, Heading } from "@/components/ui";
import React from "react";

export default function BrowsecontentGroup126() {
  return (
    <div className="flex w-full justify-center bg-gray-100 p-[38px] sm:p-5">
      <div className="flex w-[90%] items-center justify-center md:w-full md:flex-col">
        <div className="relative h-[300px] w-[66%] content-center rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100 bg-[url(/images/img_line_1.svg)] bg-cover bg-no-repeat md:h-auto md:w-full">
          <Img src="img_line_2.svg" width={916} height={292} alt="Line 2" className="m-auto h-[292px] flex-1" />
          <Heading
            size="heading7xl" 
            as="h1"
            className="absolute bottom-6 left-0 right-0 mx-auto w-max text-[32px] font-bold md:text-[30px] sm:text-[28px]"
          >
            Popular Docs
          </Heading>
        </div>
        <div className="flex w-[28%] justify-end md:w-full">
          <div className="flex w-[86%] flex-col gap-[22px] md:w-full">
            <div className="rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <div className="h-[78px] bg-[url(/images/img_line_3.svg)] bg-cover bg-no-repeat md:h-auto">
                <Img src="img_line_4.svg" width={342} height={78} alt="Line 4" className="h-[78px] w-full md:h-auto" />
              </div>
            </div>
            <div className="rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <div className="h-[78px] bg-[url(/images/img_line_3.svg)] bg-cover bg-no-repeat md:h-auto">
                <Img src="img_line_4.svg" width={342} height={78} alt="Line 6" className="h-[78px] w-full md:h-auto" />
              </div>
            </div>
            <div className="rounded-[10px] border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
              <div className="h-[78px] bg-[url(/images/img_line_3.svg)] bg-cover bg-no-repeat md:h-auto">
                <Img src="img_line_4.svg" width={342} height={78} alt="Line 8" className="h-[78px] w-full md:h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
