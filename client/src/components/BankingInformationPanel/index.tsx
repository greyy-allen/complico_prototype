import { Button, Img, Heading } from "@/components/ui";
import React from "react";

interface Props {
  className?: string;
  bankIcon?: string;
  bankingInformationText?: React.ReactNode;
}

export default function BankingInformationPanel({
  bankIcon = "img_dashicons_bank.svg",
  bankingInformationText = "Banking Information",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center self-stretch p-2.5 bg-white-a700 flex-1 rounded-[10px]`}
    >
      <div className="flex flex-1 items-center gap-6">
        <Img src={bankIcon} width={30} height={30} alt="Dashicons Bank" className="h-[30px] w-[30px]" />
        <Heading size="headingxl" as="p" className="self-end text-[14px] font-bold">
          {bankingInformationText}
        </Heading>
      </div>
      <Button size="md" shape="square" className="w-[30px]">
        <Img src="img_dashicons_insert.svg" width={26} height={26} />
      </Button>
    </div>
  );
}
