"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ENUMs based on your Content model
const REGION_OPTIONS = ["australia", "newZealand", "unitedKingdom", "republicOfIreland"];
const WORKPAPER_OPTIONS = ["compliance", "itr", "bas", "taxPlanning", "fbt", "gst", "corporationTax", "payroll"];
const ENTITY_OPTIONS = ["company", "individual", "partnership", "trust"];
const TAG_OPTIONS = ["strategy", "endOfYear", "reporting", "compliance", "ai"];

export default function CreateContentPage() {
  const [isClient, setIsClient] = useState(false);
  const [firmId, setFirmId] = useState<string | null>(null);
  const [createdBy, setCreatedBy] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState<string[]>([]);
  const [workpaperType, setWorkpaperType] = useState<string[]>([]);
  const [entityType, setEntityType] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // prevent hydration mismatch

    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setFirmId(payload.firmId);
      setCreatedBy(payload.userId);
    } catch (e) {
      console.warn("Invalid token format", e);
    }
  }, []);

  if (!isClient) return null;

  const toggleValue = (arr: string[], value: string) =>
    arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  if (!token || !firmId || !createdBy) return alert("Missing required context.");

  try {
    const payload = {
      name,
      description,
      region,
      workpaperType,
      entityType,
      tags,
      firmId,
      createdBy,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to create content");
    }

    alert("Content created successfully!");
    router.push("/contentlist");
  } catch (err: any) {
    console.error("Content creation error:", err);
    alert("Error: " + err.message);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-8 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-indigo-800 flex items-center">
          <span className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </span>
          Create New Content
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter a descriptive title for your content"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              placeholder="Provide a detailed description of your content"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Regions */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-3">Regions</label>
            <div className="flex flex-wrap gap-3">
              {REGION_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100 transition-all cursor-pointer">
                  <input
                    type="checkbox"
                    checked={region.includes(item)}
                    onChange={() => setRegion(toggleValue(region, item))}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="capitalize">{item.replace(/([A-Z])/g, ' $1').trim()}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Workpaper Type */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-3">Workpaper Types</label>
            <div className="flex flex-wrap gap-3">
              {WORKPAPER_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100 transition-all cursor-pointer">
                  <input
                    type="checkbox"
                    checked={workpaperType.includes(item)}
                    onChange={() => setWorkpaperType(toggleValue(workpaperType, item))}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="capitalize">{item.replace(/([A-Z])/g, ' $1').trim()}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Entity Type */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-3">Entity Types</label>
            <div className="flex flex-wrap gap-3">
              {ENTITY_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100 transition-all cursor-pointer">
                  <input
                    type="checkbox"
                    checked={entityType.includes(item)}
                    onChange={() => setEntityType(toggleValue(entityType, item))}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="capitalize">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-3">Tags</label>
            <div className="flex flex-wrap gap-3">
              {TAG_OPTIONS.map((item) => (
                <label key={item} className={`flex items-center gap-2 text-sm px-3 py-2 rounded-full transition-all cursor-pointer ${
                  tags.includes(item) 
                    ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}>
                  <input
                    type="checkbox"
                    checked={tags.includes(item)}
                    onChange={() => setTags(toggleValue(tags, item))}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="capitalize">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-indigo-800 transition-all"
          >
            Create Content
          </button>
        </form>
      </div>
    </div>
  );
}