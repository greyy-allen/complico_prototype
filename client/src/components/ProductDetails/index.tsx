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

export default function ProductDetails({
  arrowLeftImage,
  productName,
  productDescription,
  productRating,
  productReviews,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full p-3 border-black-900_4c border-[1.5px] border-solid bg-white-a700_4c`}
    >
      <div className="flex border-[1.5px] border-solid border-black-900 bg-blue_gray-100">
        {!!arrowLeftImage ? (
          <Img src={arrowLeftImage} width={74} height={74} alt="Arrow Left" className="h-[74px] w-[74px]" />
        ) : null}
      </div>
      <div className="mt-4 flex flex-col items-start gap-3 self-stretch">
        {!!productName ? (
          <Heading size="heading5xl" as="h5" className="text-[24px] font-bold">
            {productName}
          </Heading>
        ) : null}
        {!!productDescription ? (
          <Text as="p" className="text-[14px] font-normal leading-4">
            {productDescription}
          </Text>
        ) : null}
      </div>
      <div className="mb-2 ml-1 mt-11 flex flex-wrap justify-between gap-5 self-stretch">
        {!!productRating ? (
          <Heading as="p" className="text-[16px] font-bold">
            {productRating}
          </Heading>
        ) : null}
        {!!productReviews ? (
          <Heading as="p" className="text-[16px] font-bold">
            {productReviews}
          </Heading>
        ) : null}
      </div>
    </div>
  );
}
