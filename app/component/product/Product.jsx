"use client";
import React from "react";
import Carousel from "./Carousel";
import { useState } from "react";
import ProductCircle from "./ProductCircle";

export default function Product() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  console.log(controlledSwiper);
  return (
    <div className="bg-white pb-[12px] sm:pb-[36px] ">
      <h1 className="font-normal text-black text-[16px] sm:text-[44px] leading-loose tracking-tight text-center px-[16px] items-center sm:px-[300px] py-[24px]">
        Unlock{" "}
        <span className="text-[#07619D] font-semibold">
          unparalleled advantages{" "}
        </span>{" "}
        for your business with our product
      </h1>
      <div className="flex flex-col-reverse sm:flex-col pt-3">
        <ProductCircle controlledSwiper={controlledSwiper} />
        <Carousel
          controlledSwiper={controlledSwiper}
          setControlledSwiper={setControlledSwiper}
        />
      </div>
    </div>
  );
}
