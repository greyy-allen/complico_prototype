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
    <header className="flex flex-wrap items-center justify-between w-full px-6 py-4 bg-white shadow-sm">
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/cimplico_logo.png"
          alt="Cimplico Logo"
          width={200}
          height={125}
        />
      </Link>

      {/* Center Navigation */}
      <nav className="flex items-center gap-4">
        <Link href="#">Features</Link>
        <Link href="#">Resources</Link>
        <Link href="#">Use&nbsp;cases</Link>
        <Link href="#">Pricing</Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Search icon */}
        <Button
          size="md"
          shape="circle"
          className="w-[75px] h-[36px] border border-black"
        >
          <Img src="img_dashicons_search.svg" width={20} height={20} alt="Search" />
        </Button>

      {!firstName ? (
        <>
        <Link href="#">
          <Text className="text-sm font-medium">Start&nbsp;Trial</Text>
        </Link>

        <Link href="/choose-role">
          <Text className="text-sm font-medium">Login</Text>
        </Link>

        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
          Book demo
        </Button>
        </>
      ) : (
        <>
        <Text className="text-sm font-medium">Welcome, {firstName}</Text>
        <Button
              className="text-sm px-3 py-1 border border-gray-500 rounded-md"
              onClick={handleLogout}
            >
              Log out
          </Button>
        </>
      )}
      </div>
    </header>
  );
}
