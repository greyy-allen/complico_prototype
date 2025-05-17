import { Button, Text, Heading } from "@/components/ui";
import React from "react";

export default function BrowsecontentGroup1739() {
  return (
    <div className="mt-[74px]">
      <div className="flex flex-col items-center justify-center gap-[34px] bg-deep_purple-a200 px-14 py-[62px] md:p-5">
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
        <Button
          colorScheme="white_A700"
          className="mb-2 w-full min-w-[288px] max-w-[288px] rounded-[10px] px-[34px] sm:px-5"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
