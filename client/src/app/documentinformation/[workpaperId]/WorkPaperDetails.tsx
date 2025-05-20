"use client";

import { Text, Heading } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

type Workpaper = {
  workpaperId: string;
  name: string;
  description: string;
  region: string[];
  tags: string[];
  workpaperType: string[];
  entityType: string[];
};

type Review = {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
};

const dummyReviews: Review[] = [
  {
    name: "John Smith",
    avatar: "/avatars/user1.jpg",
    rating: 5,
    comment: "Awesome Product, would 100% recommend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "01/01/2025",
  },
  {
    name: "Michael Lee",
    avatar: "/avatars/user2.jpg",
    rating: 4,
    comment: "So far so good. Vivamus aliquet nunc at dictum luctus.",
    date: "01/01/2025",
  },
];

export default function WorkPaperDetails() {
  const { workpaperId } = useParams();
  const [workpaper, setWorkpaper] = useState<Workpaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "reviews">("overview");

  useEffect(() => {
    const fetchWorkpaper = async () => {
      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/workpapers/${workpaperId}`);
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

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!workpaper) return <div className="text-center py-10">No workpaper found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 min-h-[600px]">
      {/* Tabs */}
      <div className="flex gap-10 border-b pb-2 text-lg font-semibold">
        <button
          onClick={() => setActiveTab("overview")}
          className={`relative pb-2 transition-colors duration-200 ${
            activeTab === "overview"
              ? "text-black after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-black"
              : "text-gray-500"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`relative pb-2 transition-colors duration-200 ${
            activeTab === "reviews"
              ? "text-black after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-black"
              : "text-gray-500"
          }`}
        >
          Review and Feedback
        </button>
      </div>

      <div className="min-h-[400px] min-w-[1000px] mt-6 transition-opacity duration-300 ease-in-out">
        {activeTab === "overview" && (
          <>
            <Heading as="h2" className="text-2xl font-bold mb-2">
              Description
            </Heading>
            <Text as="p" className="text-base leading-6 text-gray-700 mb-6">
              {workpaper.description}
            </Text>

            <Heading as="h2" className="text-2xl font-bold mb-2">
              How to use
            </Heading>
            <Text as="p" className="text-base leading-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem sint voluptatibus in cumque...
            </Text>
          </>
        )}

        {activeTab === "reviews" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => alert("Open Add Review Modal")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                + Add Review
              </button>
            </div>

            {dummyReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mb-6 flex flex-col gap-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{review.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {"⭐".repeat(review.rating)}
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
