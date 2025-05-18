'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Workpaper = {
  workpaperId: string;
  name: string;
  description: string;
  region: string[];
  tags: string[];
  workpaperType: string[];
  entityType: string[];
};

export default function WorkpaperDetailPage() {
  const { workpaperId } = useParams();
  const [workpaper, setWorkpaper] = useState<Workpaper | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkpaper = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/workpapers/${workpaperId}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setWorkpaper(data);
      } catch (err) {
        console.error("Failed to fetch workpaper", err);
      } finally {
        setLoading(false);
      }
    };

    if (workpaperId) fetchWorkpaper();
  }, [workpaperId]);

  if (loading) return <div>Loading...</div>;
  if (!workpaper) return <div>Workpaper not found.</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{workpaper.name}</h1>
      <p>{workpaper.description}</p>
      <p><strong>Region:</strong> {workpaper.region.join(", ")}</p>
      <p><strong>Entity:</strong> {workpaper.entityType.join(", ")}</p>
      <p><strong>Tags:</strong> {workpaper.tags.join(", ")}</p>
    </div>
  );
}
