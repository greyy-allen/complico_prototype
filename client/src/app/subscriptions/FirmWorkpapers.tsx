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
    <main className="flex-1 flex flex-col gap-8 p-6 bg-gradient-to-br from-white to-gray-50">
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
        <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </span>
        <Heading
          size="heading7xl"
          as="h3"
          className="text-[32px] font-bold text-gray-800 md:text-[30px] sm:text-[28px]"
        >
          Workpaper Templates
        </Heading>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 border-t-4 border-indigo-600 border-solid rounded-full animate-spin mb-4"></div>
          <p className="text-indigo-600 font-medium">Loading workpapers...</p>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <p className="text-gray-600 text-xl font-medium mb-2">No workpapers found</p>
          <p className="text-gray-500 text-center max-w-md">
            This firm has not yet subscribed to any workpaper templates.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={
            <div className="col-span-full flex justify-center items-center py-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
                <p className="text-indigo-600 font-medium">Loading templates...</p>
              </div>
            </div>
          }>
            {data.map((workpaper) => (
              <Link
                key={workpaper.workpaperId}
                href={`/documentinformation/${workpaper.workpaperId}`}
                passHref
                className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl"
              >
                <ProductDetails
                  key={workpaper.workpaperId}
                  arrowLeftImage="img_arrow_left.svg"
                  productName={workpaper.name}
                  productDescription={
                    <>
                      {workpaper.description}
                      <br />
                      <span className="inline-flex items-center gap-1.5 mt-2 text-indigo-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                        <strong>Region:</strong>
                      </span>{" "}
                      <span className="text-gray-700">
                        {Array.isArray(workpaper.region) ? workpaper.region.join(", ") : "N/A"}
                      </span>
                      <br />
                      <span className="inline-flex items-center gap-1.5 mt-1 text-indigo-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <strong>Entity:</strong>
                      </span>{" "}
                      <span className="text-gray-700">
                        {Array.isArray(workpaper.entityType) ? workpaper.entityType.join(", ") : "N/A"}
                      </span>
                      <br />
                      <span className="inline-flex items-center gap-1.5 mt-1 text-indigo-600 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                          <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                        <strong>Tags:</strong>
                      </span>{" "}
                      <span className="text-gray-700">
                        {Array.isArray(workpaper.tags) ? workpaper.tags.join(", ") : "N/A"}
                      </span>
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
      <div className="mt-8 border-t border-gray-200 pt-8">
        <ExploreWorkpapers />
      </div>
    </main>
  );
}