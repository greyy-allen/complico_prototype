'use client';

import React, { useEffect, useState, Suspense } from "react";
import ProductDetails from "../../components/ProductDetails";
import { Heading } from "@/components/ui";

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

export default function BrowseProducts() {
  const [data, setData] = useState<Workpaper[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="flex w-[78%] flex-col items-start gap-5 self-center md:w-full md:px-5">
      <Heading size="heading7xl" as="h3" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
        Workpaper Templates
      </Heading>
      <div className="grid grid-cols-3 gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map((workpaper, index) => (
              <ProductDetails
                key={workpaper.workpaperId}
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
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
}