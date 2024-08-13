"use client";
import React from "react";
import Carousel from "./Carousel";
import { useState } from "react";
import ProductCircle from "./ProductCircle";

export default function Product() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  console.log(controlledSwiper);
  return (
    <div className="bg-white pb-[12px] sm:pb-[36px]">
      <ProductCircle controlledSwiper={controlledSwiper} />
      <Carousel
        controlledSwiper={controlledSwiper}
        setControlledSwiper={setControlledSwiper}
      />
    </div>
  );
}
