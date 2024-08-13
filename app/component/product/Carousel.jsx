"use client";
import Image from "next/image";
import dlpIcon from "/app/assets/DLP-icon.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.scss";

// import required modules
import { Controller, Navigation } from "swiper/modules";
import { clsx } from "clsx";

const Carousel = (props) => {
  const { controlledSwiper, setControlledSwiper } = props;
  return (
    <div
      className={clsx(
        styles["custom-swiper"],
        "px-[16px] sm:px-[160px] items-center flex-auto bg-white"
      )}
    >
      <Swiper
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={(swiper) => {
          setControlledSwiper(swiper);
        }}
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>
          <div
            className=" flex-col md:flex-row flex border-[#16A34A] rounded-[16px] border-[2px] px-[32px] py-[16px]
          sm:p-[36px] bg-white shadow-[0px_2px_9.5px_0px_rgba(187,247,208,0.50)] gap-[8px] sm:gap-[24px]"
          >
            <Image
              src={dlpIcon}
              alt="dlpIcon"
              className="w-[15%] h-[15%] sm:w-[15%] sm:h-[30%]"
            />
            <div className="p-[4px] justify-between">
              <h1 className="text-[#16A34A] text-[16px] sm:text-[36px] font-semibold mb-3">
                Collection Management
              </h1>
              <p className="text-black text-[12px] sm:text-[24px]">
                {" "}
                Smart delinquent account queuing and prioritization with
                flexible & dynamic collection strategies: best time to call, who
                to contact first, which channel to use-powered by our AI
                decision engine.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex-col md:flex-row flex border-[#16A34A] rounded-[16px] border-[2px] px-[32px] py-[16px] sm:p-[36px] bg-white shadow-[0px_2px_9.5px_0px_rgba(187,247,208,0.50)] gap-[8px] sm:gap-[24px]">
            <Image
              src={dlpIcon}
              alt="dlpIcon"
              className="w-[15%] h-[15%] sm:w-[15%] sm:h-[30%]"
            />
            <div className="p-[4px] justify-between">
              <h1 className="text-[#16A34A] text-[16px] sm:text-[36px] font-semibold mb-3">
                Loan Management
              </h1>
              <p className="text-black text-[12px] sm:text-[24px]">
                {" "}
                Smart delinquent account queuing and prioritization with
                flexible & dynamic collection strategies: best time to call, who
                to contact first, which channel to use-powered by our AI
                decision engine.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
        <SwiperSlide>Slide 13</SwiperSlide>
        <SwiperSlide>Slide 14</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
