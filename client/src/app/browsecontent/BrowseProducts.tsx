import ProductDetails from "../../components/ProductDetails";
import { Heading } from "@/components/ui";
import React, { Suspense } from "react";

const data = [
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
  {
    arrowLeftImage: "img_arrow_left.svg",
    productName: "Product Name",
    productDescription: (
      <>
        XX XX XXXXXXX XXXXXXXXX X XX XXXXX XX
        <br />
        XXXXXXXXX XX X X XXXXXXXXXXX XXX XX X<br />
        XXXXXXXXXXXXXX X XXXXX X X XXX XXX
        <br />
        XXX XX XXX X XXXXX XXX XXXXXXXXXXXXX
      </>
    ),
    productRating: "Rating",
    productReviews: "Reviews",
  },
];

export default function BrowseProducts() {
  return (
    <div className="flex w-[78%] flex-col items-start gap-5 self-center md:w-full md:px-5">
      <Heading size="heading7xl" as="h3" className="text-[32px] font-bold md:text-[30px] sm:text-[28px]">
        Product Category{" "}
      </Heading>
      <div className="grid grid-cols-3 gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<div>Loading feed...</div>}>
          {data.map((d, index) => (
            <ProductDetails {...d} key={"group3169" + index} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
