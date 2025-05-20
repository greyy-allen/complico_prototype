'use client';

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import ProductDetails1 from "../../../components/ProductDetails1";
import ExploreWorkpapers from "../../../components/ExploreWorkpapers";
import DocumentinformationGroup3343 from "./../DocumentinformationGroup3343";
import DocumentinformationPopular from "./DocumentinformationPopular";
import WorkPaperDetails from "./workpaperdetails";
import { Button, Text, Heading } from "@/components/ui";
import Link from "next/link";
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";

export default function DocumentInformationPage() {
  return (
    <div className="w-full bg-white-a700">
      <div className="mb-9 mt-2.5 flex flex-col items-center">
        <Header className="relative z-[3] mx-auto w-full max-w-[1400px] gap-5 md:px-5" />
        <div className="flex flex-col items-center gap-[34px] self-stretch">
          <DocumentinformationPopular />
          <div className="ml-[38px] mr-[84px] flex items-start self-stretch md:mx-0 md:flex-col">
              <WorkPaperDetails />
            <DocumentinformationGroup3343 />
          </div>   
          <div>
            <ExploreWorkpapers></ExploreWorkpapers>
          </div>
          <Footer className="mx-[50px] self-stretch md:mx-0" />
        </div>
      </div>
    </div>
  );
}
