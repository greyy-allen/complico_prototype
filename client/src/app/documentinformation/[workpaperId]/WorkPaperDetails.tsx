import { Text, Heading, Separator } from "@/components/ui";
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";

import dotenv from "dotenv";

dotenv.config();
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || 3000;

type Workpaper = {
  workpaperId: string;
  name: string;
  description: string;
  region: string[];
  tags: string[];
  workpaperType: string[];
  entityType: string[];
};

export default function WorkPaperDetails() {
  const { workpaperId } = useParams();
  const [workpaper, setWorkpaper] = useState<Workpaper | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkpaper = async () => {
      try {
        const response = await fetch(NEXT_PUBLIC_API_URL + `/workpapers/${workpaperId}`)
        const result = await response.json();
        setWorkpaper(result);
      } catch (error) {
        console.error("Failed to fetch workpaper", error);
      } finally {
        setLoading(false);
      }
    };

    if (workpaperId) fetchWorkpaper();
  }, [workpaperId]);

  if (loading) return <div>Loading...</div>;
  if (!workpaper) return <div>No workpaper found.</div>;

  return (
    <div className="flex flex-1 flex-col items-start self-center md:self-stretch md:px-5">
      <div className="flex items-start self-stretch sm:flex-col">
        <div className="flex w-[18%] flex-col items-start gap-1 self-center sm:w-full">
          <Heading size="heading5xl" as="h4" className="text-[24px] font-bold md:text-[22px]">
            Overview
          </Heading>
          <Separator orientation="horizontal" className="h-[5px] w-[74%] bg-black-900" />
        </div>
        <Heading size="heading5xl" as="h5" className="text-[24px] font-bold md:text-[22px]">
          Review and Feedback
        </Heading>
      </div>
      <Heading size="heading5xl" as="h6" className="mt-1.5 text-[24px] font-bold md:text-[22px]">
        Description
      </Heading>
      <Text as="p" className="mt-3.5 w-full text-[14px] font-normal leading-4">
        {workpaper.description}
      </Text>
      <Heading size="heading5xl" as="h5" className="ml-1.5 mt-[58px] text-[24px] font-bold md:ml-0 md:text-[22px]">
        How to use
      </Heading>
      <Text as="p" className="ml-2.5 mt-3.5 w-full text-[14px] font-normal leading-4 md:ml-0">
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X XXXXXXXXXXXXXX X XXXXX X X XXX XXX XXX
        XX XXX X XXXXX XXX XXXXXXXXXXXXXXX XX XXXXXXX XXXXXXXXX X XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX XX XX XXXXXXX XXXXXXXXX X XX XXXXX
        XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X XXXXXXXXXXXXXX X XXXXX X X XXX XXX XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
        XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X XXXXXXXXXXXXXX X XXXXX X X XXX XXX XXX XX XXX X XXXXX XXX
        XXXXXXXXXXXXX XX XX XXXXXXX XXXXXXXXX X XX XXXXX XXXXXXXXXX XX X X XXXXXXXXXXX XXX XX X XXXXXXXXXXXXXX X XXXXX X
        X XXX XXX XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </Text>
    </div>
  );
}
