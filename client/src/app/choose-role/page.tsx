'use client';

import { Button } from "@/components/ui";
import React from "react";

export default function ChooseRolePage() {
  const handleClick = (role: 'vendor' | 'user') => {
    console.log(`Selected role: ${role}`);
    // TODO: route or store selection
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-gray-800">Select your role</h1>
        <div className="flex gap-8">
          <Button
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-sm font-semibold w-40 text-center"
            onClick={() => handleClick('vendor')}
          >
            Vendor
          </Button>
          <Button
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-sm font-semibold w-40 text-center"
            onClick={() => handleClick('user')}
          >
            User
          </Button>
        </div>
      </div>
    </div>
  );
}
