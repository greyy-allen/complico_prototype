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
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Create New Content</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>

          {/* Regions */}
          <div>
            <label className="block text-sm font-medium mb-1">Regions</label>
            <div className="flex flex-wrap gap-3">
              {REGION_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={region.includes(item)}
                    onChange={() => setRegion(toggleValue(region, item))}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Workpaper Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Workpaper Types</label>
            <div className="flex flex-wrap gap-3">
              {WORKPAPER_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={workpaperType.includes(item)}
                    onChange={() => setWorkpaperType(toggleValue(workpaperType, item))}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Entity Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Entity Types</label>
            <div className="flex flex-wrap gap-3">
              {ENTITY_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={entityType.includes(item)}
                    onChange={() => setEntityType(toggleValue(entityType, item))}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <div className="flex flex-wrap gap-3">
              {TAG_OPTIONS.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={tags.includes(item)}
                    onChange={() => setTags(toggleValue(tags, item))}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700"
          >
            Create Content
          </button>
        </form>
      </div>
    </div>
  );
}
