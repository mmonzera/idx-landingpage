"use client";
import React from "react";
import Image from "next/image";
import arrowUp from "/app/assets/icon-TrendingUp.svg";
import cardIcon from "/app/assets/card-1-icon.svg";
import backgroundCard from "/app/assets/background-layerBlur.svg";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./Carousel";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = [];

const Benefitcard = () => {
  return (
    <div className="overflow-hidden items-center px-[16px] md:px-[160px] py-[36px] relative bg-white">
      <div className="flex flex-col p-[16px] sm:p-[32px] justify-center items-start gap-[8px] sm:gap-[20px] border-[2px] border-[#1EA2EC] rounded-[16px] bg-[#ffffff] shadow-[0px_4px_12px_0px_#E1F1FD] z-10 relative">
        <div className="px-[16px] py-[8px] flex gap-[12px] border-[2px] border-[#1EA2EC] rounded-[12px] z-10">
          <Image src={arrowUp} alt="arrowup" />
          <h3 className="font-semibold text-[12px] sm:text-[16px] text-[#1EA2EC]">
            Discover 9 exceptional benefit of our product
          </h3>
        </div>
        <div className="w-full">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>

      <div className="absolute transform rotate-[12deg] top-[-32px] left-[-50px] right-[2px] bottom-[-48px] w-full">
        <Image src={backgroundCard} alt="backgroundCard" />
      </div>
    </div>
  );
};

export default Benefitcard;
