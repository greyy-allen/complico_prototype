'use client';

import React, { useEffect, useState, Suspense } from "react";
import ProductDetails from "../../components/ProductDetails";
import ExploreWorkpapers from "../../components/ExploreWorkpapers";
import { Heading } from "@/components/ui";
import { useParams } from "next/navigation";
import Link from "next/link";

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

export default function FirmWorkpapers() {
  const { firmId } = useParams();
  const [data, setData] = useState<Workpaper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkpapers = async () => {
      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/subscriptions/${firmId}`);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Failed to fetch workpapers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkpapers();
  }, []);

  return (
    <main className="flex-1 flex flex-col gap-5">
      <Heading
        size="heading7xl"
        as="h3"
        className="text-[32px] font-bold md:text-[30px] sm:text-[28px]"
      >
        Workpaper Templates
      </Heading>

      {loading ? (
        <div>Loading...</div>
      ) : data.length === 0 ? (
        <div className="text-gray-600 text-lg">
          Firm has not yet subscribed to any workpaper.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((workpaper) => (
              <Link
                key={workpaper.workpaperId}
                href={`/documentinformation/${workpaper.workpaperId}`}
                passHref
              >
                <ProductDetails
                  key={workpaper.workpaperId}
                  arrowLeftImage="img_arrow_left.svg"
                  productName={workpaper.name}
                  productDescription={
                    <>
                      {workpaper.description}
                      <br />
                      <strong>Region:</strong>{" "}
                      {Array.isArray(workpaper.region) ? workpaper.region.join(", ") : "N/A"}
                      <br />
                      <strong>Entity:</strong>{" "}
                      {Array.isArray(workpaper.entityType) ? workpaper.entityType.join(", ") : "N/A"}
                      <br />
                      <strong>Tags:</strong>{" "}
                      {Array.isArray(workpaper.tags) ? workpaper.tags.join(", ") : "N/A"}
                    </>
                  }
                  productRating="N/A"
                  productReviews="N/A"
                />
              </Link>
            ))}
          </Suspense>
        </div>
      )}

      {/* Always render this, regardless of loading or subscription status */}
      <ExploreWorkpapers />
    </main>
  );
}
