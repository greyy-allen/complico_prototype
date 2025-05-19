'use client';

import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import React from "react";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const NEXT_PUBLIC_CUSTOMER_ID = process.env.NEXT_PUBLIC_CUSTOMER_ID;
const NEXT_PUBLIC_CUSTOMER_FIRMID = process.env.NEXT_PUBLIC_CUSTOMER_FIRMID;

export default function ChooseRole() {
  const router = useRouter();

  const handleClick = async (role: 'vendor' | 'user') => {
    if (role === 'user') {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/auth/mock-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId: NEXT_PUBLIC_CUSTOMER_ID})
      })

      const data = await res.json();

      if (!res.ok) {
        alert("Login failed: " + data.error);
        return;
      }

      localStorage.setItem("token", data.token);
      
      const firmId = NEXT_PUBLIC_CUSTOMER_FIRMID
      router.push(`/subscriptions/${firmId}`);
    } else {
      console.log("Selected role: vendor");
      // Route somewhere else
    }
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
