import { Heading, Text, Img } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  arrowLeftImage?: string;
  productName?: React.ReactNode;
  productDescription?: React.ReactNode;
  productRating?: React.ReactNode;
  productReviews?: React.ReactNode;
}

export default function ProductDetails2({
  arrowLeftImage,
  productName = "Product Name",
  productDescription = "&lt;&gt;XX XX  XXXXXXX  XXXXXXXXX X XX XXXXX XX&lt;br /&gt;XXXXXXXXX XX X X XXXXXXXXXXX XXX XX  X&lt;br /&gt;XXXXXXXXXXXXXX X XXXXX X X XXX XXX&lt;br /&gt;XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX&lt;/&gt;",
  productRating = "Rating",
  productReviews = "Reviews",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-[324px] p-3 border-black-900_4c border-[1.5px] border-solid bg-white-a700_4c`}
    >
      <div className="mb-2 flex w-full flex-col items-start">
        <div className="flex w-[24%] border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
          <div className="flex w-full flex-col items-center">
            {!!arrowLeftImage ? (
              <Img src={arrowLeftImage} width={74} height={74} alt="Arrow Left" className="h-[74px] w-[74px]" />
            ) : null}
          </div>
        </div>
        <Heading size="heading5xl" as="h5" className="mt-4 text-[24px] font-bold">
          {productName}
        </Heading>
        <Text as="p" className="mt-3 text-[14px] font-normal leading-4">
          {productDescription}
        </Text>
        <div className="mt-11 flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="text-[16px] font-bold">
            {productRating}
          </Heading>
          <Heading as="p" className="text-[16px] font-bold">
            {productReviews}
          </Heading>
        </div>
      </div>
    </div>
  );
}
