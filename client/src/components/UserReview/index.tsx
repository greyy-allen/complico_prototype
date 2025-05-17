import { Text, Img, Heading } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  favoriteIcon?: string;
  userName?: React.ReactNode;
  reviewText?: React.ReactNode;
  starrating1?: string;
  starrating2?: string;
  starrating3?: string;
  starrating4?: string;
  starrating5?: string;
  reviewDate?: React.ReactNode;
}

export default function UserReview({
  favoriteIcon,
  userName = "Client 1",
  reviewText = "XX X XXX XXXXXXXXXXXXX XX XXXXXXXXXXX XXX X X  XXXXXXXXX XXXX XXXX X X X XXXXX XXXXXXXX XXXX XXX",
  starrating1,
  starrating2,
  starrating3,
  starrating4,
  starrating5,
  reviewDate = "01/01/2025",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center self-stretch flex-1`}>
      {!!favoriteIcon ? (
        <Img
          src={favoriteIcon}
          width={12}
          height={14}
          alt="Favorite"
          className="relative z-[1] h-[14px] self-end rounded-[1px]"
        />
      ) : null}
      <div className="relative ml-[-6px] flex w-[72%] rounded-[12px] bg-blue_gray-100">
        <div className="mb-1 w-full sm:w-full">
          <div className="flex px-2.5">
            <Heading as="p" className="self-end !font-inter text-[16px] font-semibold !text-orange-600 sm:text-[13px]">
              {userName}
            </Heading>
          </div>
          <div className="flex px-2.5">
            <Text
              size="text2xl"
              as="p"
              className="mb-1.5 w-[98%] !font-inter text-[16px] font-normal leading-[22px] sm:w-[98%] sm:text-[13px]"
            >
              {reviewText}
            </Text>
          </div>
          <div className="mx-2.5 flex items-start justify-center sm:mx-0">
            <div className="mb-1 flex flex-1">
              {!!starrating1 ? (
                <Img
                  src={starrating1}
                  width={20}
                  height={20}
                  alt="Dashicons Star Filled"
                  className="h-[20px] w-[20px]"
                />
              ) : null}
              {!!starrating2 ? (
                <Img
                  src={starrating2}
                  width={20}
                  height={20}
                  alt="Dashicons Star Filled"
                  className="ml-2 h-[20px] w-[20px]"
                />
              ) : null}
              {!!starrating3 ? (
                <Img
                  src={starrating3}
                  width={20}
                  height={20}
                  alt="Dashicons Star Filled"
                  className="ml-2 h-[20px] w-[20px]"
                />
              ) : null}
              {!!starrating4 ? (
                <Img
                  src={starrating4}
                  width={20}
                  height={20}
                  alt="Dashicons Star Filled"
                  className="ml-2 h-[20px] w-[20px] self-end"
                />
              ) : null}
              {!!starrating5 ? (
                <Img
                  src={starrating5}
                  width={20}
                  height={20}
                  alt="Dashicons Star Filled"
                  className="ml-2.5 h-[20px] w-[20px] self-end"
                />
              ) : null}
            </div>
            <Text
              size="textlg"
              as="p"
              className="self-end !font-inter text-[12px] font-normal tracking-[0.48px] !text-black-900_8c"
            >
              {reviewDate}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
