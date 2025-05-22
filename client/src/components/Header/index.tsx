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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header 
      className={`
        flex flex-wrap items-center justify-between w-full px-6 bg-white shadow-md sticky top-0 z-50 
        transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'} ${className}
      `}
    >
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/cimplico_logo.png"
          alt="Cimplico Logo"
          width={scrolled ? 150 : 200}
          height={scrolled ? 94 : 125}
          className="object-contain transition-all duration-300"
        />
      </Link>

      {/* Center Navigation */}
      <nav className={`flex items-center gap-6 transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'}`}>
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
      <div className="flex items-center gap-3">
        {/* Search icon */}
        <Button
          size="md"
          shape="circle"
          className={`
            border border-gray-300 hover:border-primary text-gray-500 hover:text-primary 
            transition-all rounded-full flex items-center justify-center shadow-sm
            ${scrolled ? 'w-[36px] h-[36px]' : 'w-[42px] h-[42px]'}
          `}
        >
          <Img 
            src="img_dashicons_search.svg" 
            width={scrolled ? 16 : 20} 
            height={scrolled ? 16 : 20} 
            alt="Search" 
          />
        </Button>

      {!firstName ? (
        <>
        <Link href="#" className="no-underline">
          <Text className={`font-medium text-gray-700 hover:font-bold transition-all ${scrolled ? 'text-xs' : 'text-sm'}`}>
            Start&nbsp;Trial
          </Text>
        </Link>

        <Link href="/choose-role" className="no-underline">
          <Text className={`font-medium text-gray-700 hover:font-bold transition-all ${scrolled ? 'text-xs' : 'text-sm'}`}>
            Login
          </Text>
        </Link>

        <Button className={`
          bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-sm transition-all
          ${scrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'}
        `}>
          Book demo
        </Button>
        </>
      ) : (
        <>
        <div className={`
          flex items-center gap-2 bg-gray-50 rounded-full border border-gray-100 transition-all
          ${scrolled ? 'px-2.5 py-1.5' : 'px-3 py-2'}
        `}>
          <div className={`
            rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium transition-all
            ${scrolled ? 'w-6 h-6 text-xs' : 'w-7 h-7 text-sm'}
          `}>
            {firstName.charAt(0)}
          </div>
          <Text className={`font-medium text-gray-700 transition-all ${scrolled ? 'text-xs' : 'text-sm'}`}>
            {scrolled ? firstName : `Welcome, ${firstName}`}
          </Text>
        </div>
        <Button
          className={`
            border border-gray-300 hover:bg-gray-50 rounded-full transition-all flex items-center gap-1
            ${scrolled ? 'text-xs px-3 py-1.5' : 'text-sm px-4 py-2'}
          `}
          onClick={handleLogout}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={scrolled ? "14" : "16"}
            height={scrolled ? "14" : "16"}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          {scrolled ? "" : "Log out"}
        </Button>
        </>
      )}
      </div>
    </header>
  );
}