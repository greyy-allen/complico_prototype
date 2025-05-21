"use client";

import { Text, Heading } from "@/components/ui";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

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
  reviewId: number;
  rating: number;
  comment: string;
  createdAt: string;
  userId: string;
  workpaperId: string;
  User: {
    firstName: string;
    lastName: string;
    email: string;
    userId: string;
  };
};

export default function WorkPaperDetails() {
  const { workpaperId } = useParams();
  const [workpaper, setWorkpaper] = useState<Workpaper | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "reviews">("overview");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewInput, setShowReviewInput] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });

  // For optional UI logic, not used in the POST body
  const [subscriberId, setSubscriberId] = useState<string | null>(null);
  const [firmId, setFirmId] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!workpaperId) return;
      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/reviews/${workpaperId}`);
        const result = await response.json();

        // Defensive check: make sure result is an array
        if (Array.isArray(result)) {
          setReviews(result);
        } else {
          console.warn("Unexpected response format for reviews:", result);
          setReviews([]);
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
        setReviews([]); // fallback to empty
      }
    };

    fetchReviews();
  }, [workpaperId]);


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

  useEffect(() => {
    const fetchReviews = async () => {
      if (!workpaperId) return;

      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/reviews/${workpaperId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (Array.isArray(result)) {
          setReviews(result);
        } else {
          console.warn("Unexpected response format for reviews:", result);
          setReviews([]);
        }
      } catch (error) {
        console.error("Failed to fetch reviews", error);
        setReviews([]);
      }
    };

    fetchReviews();
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
            <Heading as="h2" className="text-2xl font-bold mb-2">Description</Heading>
            <Text as="p" className="text-base leading-6 text-gray-700 mb-6">
              {workpaper.description}
            </Text>

            <Heading as="h2" className="text-2xl font-bold mb-2">How to use</Heading>
            <Text as="p" className="text-base leading-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem sint voluptatibus in cumque...
            </Text>
          </>
        )}

        {activeTab === "reviews" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <Heading as="h2" className="text-2xl font-bold">Join the conversation!</Heading>
              <button
                onClick={() => setShowReviewInput(!showReviewInput)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                {showReviewInput ? "Cancel" : "+ Add Review"}
              </button>
            </div>

            {showReviewInput && (
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner max-w-2xl mx-auto mb-6">
                <label className="block text-sm font-medium mb-1">Rating (1–5)</label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                  className="w-full border px-3 py-2 rounded-md mb-4"
                />

                <label className="block text-sm font-medium mb-1">Comment</label>
                <textarea
                  rows={3}
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full border px-3 py-2 rounded-md mb-4"
                />

                <div className="flex justify-end">
                  <button
                    onClick={async () => {
                      try {
                        const token = localStorage.getItem("token");
                        console.log("Submitting review:", {
                          token,
                          workpaperId,
                          rating: newReview.rating,
                          comment: newReview.comment,
                        });
                        const res = await fetch(`${NEXT_PUBLIC_API_URL}/reviews`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({
                            workpaperId,
                            rating: newReview.rating,
                            comment: newReview.comment,
                          }),
                        });

                        if (!res.ok) throw new Error("Failed to submit review");

                        setNewReview({ rating: 5, comment: "" });
                        setShowReviewInput(false);

                        const refreshed = await fetch(`${NEXT_PUBLIC_API_URL}/reviews/${workpaperId}`, {
                          headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                          },
                        });
                        setReviews(await refreshed.json());
                      } catch (err) {
                        console.error(err);
                        alert("Failed to submit review");
                      }
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            )}

            {reviews.length === 0 && (
              <div className="text-gray-500 text-sm text-center">No reviews yet.</div>
            )}

            {Array.isArray(reviews) && reviews.map((review) => (
              <div
                key={review.reviewId}
                className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto mb-6 flex flex-col gap-4"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src="/avatars/default.png"
                    alt={`${review.User.firstName} ${review.User.lastName}`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">
                      {review.User.firstName} {review.User.lastName}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {"⭐".repeat(review.rating)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
