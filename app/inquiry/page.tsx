import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/navbar/Navbar";
import InputForm from "../component/inputForm/InputForm";
import clsx from "clsx";
import styles from "./inquiry.module.css";
import backgroundInquiry from "/app/assets/inquiry/backgroundInquiry.svg";
import Image from "next/image";
import logobankall from "/app/assets/Bank Logo/logobankall.png";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <div>
      <section
        className={clsx(
          styles.heroContainer,
          "w-full h-full bg-cover pt-[144px] pb-[24px] px-[16px] sm:p-[144px_80px_24px_80px] lg:p-[144px_160px_24px_160px] grid grid-cols-1 sm:grid-cols-2 gap-5"
        )}
        style={{
          backgroundImage: `url(${backgroundInquiry.src})`,
        }}
      >
        <div className="gap-[30px] sm:gap-[36px] grid grid-col-1 justify-between p-4">
          <h1 className="text-[60px] text-[#0779C2] font-semibold">
            Lets Talk
          </h1>
          <h2 className="text-[20px] text-[#0E446C] ">
            {" "}
            Talk to our team today to
          </h2>
          <ul className="grid grid-cols-1 gap-3">
            <li className="text-[20px] text-[#0E446C]">
              - Understand how our product may fulfill your needs
            </li>
            <li className="text-[20px] text-[#0E446C]">
              - Discover the capabilities and get answers to your questions
            </li>
            <li className="text-[20px] text-[#0E446C]">
              - Get a customized quote for your business
            </li>
          </ul>
          <p className="text-black font-semibold text-[16px]"> Trusted by</p>
          <Image src={logobankall} alt="logobankall" />
        </div>
        <div className="p-5">
          <InputForm />
        </div>
      </section>
      <Navbar />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default page;
