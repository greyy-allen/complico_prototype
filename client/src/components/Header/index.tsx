"use client";

import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  const router = useRouter()
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload.userId;

      fetch(`${NEXT_PUBLIC_API_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res)=> res.json())
      .then((data)=> {
        if (data.firstName) {
          setFirstName(data.firstName);
        }
      })
      .catch(()=> {
        console.warn("Failed to fetch user info");
      });
    } catch (e) {
      console.warn("Invalid token format");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setFirstName(null);
    router.push("/choose-role");
  };

  return (
    <header className={`flex flex-wrap items-center justify-between w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50 ${className}`}>
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/cimplico_logo.png"
          alt="Cimplico Logo"
          width={200}
          height={125}
          className="object-contain"
        />
      </Link>

      {/* Center Navigation */}
      <nav className="flex items-center gap-6">
        <Link href="#" className="font-medium text-gray-700 hover:font-bold transition-all no-underline">
          Features
        </Link>
        <Link href="#" className="font-medium text-gray-700 hover:font-bold transition-all no-underline">
          Resources
        </Link>
        <Link href="#" className="font-medium text-primary hover:font-bold transition-all no-underline">
          Use&nbsp;cases
        </Link>
        <Link href="#" className="font-medium text-gray-700 hover:font-bold transition-all no-underline">
          Pricing
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search icon */}
        <Button
          size="md"
          shape="circle"
          className="w-[42px] h-[42px] border border-gray-300 hover:border-primary text-gray-500 hover:text-primary transition-all rounded-full flex items-center justify-center shadow-sm"
        >
          <Img src="img_dashicons_search.svg" width={20} height={20} alt="Search" />
        </Button>

      {!firstName ? (
        <>
        <Link href="#" className="no-underline">
          <Text className="text-sm font-medium text-gray-700 hover:font-bold transition-all">
            Start&nbsp;Trial
          </Text>
        </Link>

        <Link href="/choose-role" className="no-underline">
          <Text className="text-sm font-medium text-gray-700 hover:font-bold transition-all">
            Login
          </Text>
        </Link>

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm transition-all">
          Book demo
        </Button>
        </>
      ) : (
        <>
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full border border-gray-100">
          <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium">
            {firstName.charAt(0)}
          </div>
          <Text className="text-sm font-medium text-gray-700">
            Welcome, {firstName}
          </Text>
        </div>
        <Button
              className="text-sm px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-full transition-all flex items-center gap-1"
              onClick={handleLogout}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Log out
          </Button>
        </>
      )}
      </div>
    </header>
  );
}