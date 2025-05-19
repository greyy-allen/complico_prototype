'use client';

import React, { useEffect, useState, Suspense, useRef } from "react";
import ProductDetails from "../ProductDetails";
import { Heading } from "@/components/ui";
import Link from "next/link";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;


type Workpaper = {
  workpaperId: string;
  name: string;
  description: string;
  region: string[];
  tags: string[];
  workpaperType: string[];
  entityType: string[];
};

export default function ExploreWorkpapers() {
  const [data, setData] = useState<Workpaper[]>([]);
  const [loading, setLoading] = useState(true);

  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 4;

  useEffect(() => {
    const fetchWorkpapers = async () => {
      try {
        const response = await fetch(NEXT_PUBLIC_API_URL + "/workpapers");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch workpapers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkpapers();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    } else if (direction === 'right') {
      setStartIndex((prev) =>
        prev + visibleCount < data.length ? prev + 1 : prev
      );
    }
  };
  const visibleData = data.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="flex w-[78%] flex-col items-start gap-5 self-center md:w-full md:px-5">
      <div className="flex justify-between w-full">
        <Heading
          size="heading7xl"
          as="h3"
          className="text-[32px] font-bold md:text-[30px] sm:text-[28px]"
        >
          Explore
        </Heading>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-black px-3 py-1 hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-black px-3 py-1 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[30px] self-stretch md:grid-cols-3 sm:grid-cols-2">
        <Suspense fallback={<div>Loading feed...</div>}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            visibleData.map((workpaper) => (
              <Link
                key={workpaper.workpaperId}
                href={`/choose-role`}
                passHref
              >
                <ProductDetails
                  arrowLeftImage="img_arrow_left.svg"
                  productName={workpaper.name}
                  productDescription={
                    <>
                      {workpaper.description}
                      <br />
                      <strong>Region:</strong> {workpaper.region.join(", ")}
                      <br />
                      <strong>Entity:</strong> {workpaper.entityType.join(", ")}
                      <br />
                      <strong>Tags:</strong> {workpaper.tags.join(", ")}
                    </>
                  }
                  productRating="N/A"
                  productReviews="N/A"
                />
              </Link>
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
}