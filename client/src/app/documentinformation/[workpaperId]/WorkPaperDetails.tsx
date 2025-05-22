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

  if (loading) return (
    <div className="text-center py-20">
      <div className="inline-block w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-indigo-600 font-medium">Loading workpaper details...</p>
    </div>
  );
  
  if (!workpaper) return (
    <div className="text-center py-20 bg-gray-50 rounded-xl shadow-sm max-w-3xl mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <p className="text-xl font-semibold text-gray-700">No workpaper found.</p>
      <p className="text-gray-500 mt-2">The requested workpaper could not be found or may have been removed.</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 min-h-[600px]">
      {/* Tabs */}
      <div className="flex gap-10 border-b pb-2 text-lg font-semibold mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`relative pb-2 transition-colors duration-200 ${
            activeTab === "overview"
              ? "text-indigo-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-indigo-600 after:rounded-t-md"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`relative pb-2 transition-colors duration-200 ${
            activeTab === "reviews"
              ? "text-indigo-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-indigo-600 after:rounded-t-md"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Review and Feedback
        </button>
      </div>

      <div className="min-h-[400px] min-w-[1000px] transition-opacity duration-300 ease-in-out">
        {activeTab === "overview" && (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <Heading as="h2" className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </span>
              Description
            </Heading>
            <Text as="p" className="text-base leading-7 text-gray-700 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
              {workpaper.description}
            </Text>

            <Heading as="h2" className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              How to use
            </Heading>
            <Text as="p" className="text-base leading-7 text-gray-700 p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem sint voluptatibus in cumque...
            </Text>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <Heading as="h2" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                Join the conversation!
              </Heading>
              <button
                onClick={() => setShowReviewInput(!showReviewInput)}
                className={`${
                  showReviewInput 
                    ? "bg-gray-200 hover:bg-gray-300 text-gray-700" 
                    : "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white"
                } px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition-all duration-200 flex items-center gap-2`}
              >
                {showReviewInput ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Cancel
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add Review
                  </>
                )}
              </button>
            </div>

            {showReviewInput && (
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto mb-10 border border-gray-200">
                <Heading as="h3" className="text-xl font-bold mb-4 text-gray-800">Write your review</Heading>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1–5)</label>
                  <div className="flex gap-2 items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-xl transition-all ${
                          star <= newReview.rating 
                            ? "bg-yellow-100 text-yellow-500 border-2 border-yellow-400" 
                            : "bg-gray-100 text-gray-400 border-2 border-gray-200"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {newReview.rating} star{newReview.rating !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your comments</label>
                  <textarea
                    rows={3}
                    placeholder="Share your experience with this workpaper..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all"
                  />
                </div>

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
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13"></path>
                      <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                    </svg>
                    Submit Review
                  </button>
                </div>
              </div>
            )}

            {reviews.length === 0 && (
              <div className="text-center py-10 bg-gray-50 rounded-xl my-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-gray-400">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <p className="text-gray-500 text-lg">No reviews yet.</p>
                <p className="text-gray-400 text-sm mt-2">Be the first to share your experience!</p>
              </div>
            )}

            {Array.isArray(reviews) && reviews.map((review) => (
              <div
                key={review.reviewId}
                className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto mb-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 flex items-center justify-center text-xl font-bold text-indigo-500">
                    {review.User.firstName.charAt(0)}{review.User.lastName.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg text-gray-800">
                      {review.User.firstName} {review.User.lastName}
                    </p>
                    <div className="flex gap-1 text-yellow-500 text-lg my-2">
                      {"⭐".repeat(review.rating)}
                      <span className="text-gray-300 text-sm ml-2">
                        {new Date(review.createdAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-200">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}