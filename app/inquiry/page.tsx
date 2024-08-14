import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/navbar/Navbar";
import InputForm from "../component/inputForm/InputForm";
import clsx from "clsx";
import styles from "./inquiry.module.css";
import backgroundInquiry from "/app/assets/inquiry/backgroundInquiry.svg";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section
        className={clsx(
          styles.heroContainer,
          "w-full h-full bg-cover pt-[144px] pb-[24px] px-[16px] sm:p-[144px_80px_24px_80px] lg:p-[144px_160px_24px_160px] grid grid-cols-1 sm:grid-cols-2"
        )}
        style={{
          backgroundImage: `url(${backgroundInquiry.src})`,
        }}
      >
        <div className="gap-[30px] sm:gap-[36px]">
          <h1 className="text-[24px] md:text-[32px] lg:text-[64px] text-[#0779C2] n">
            Lets Talk
          </h1>
          <h2 className="text-[16px] md:text-[24px] ">
            {" "}
            Talk to our team today to
          </h2>
          <ul>
            <li className="text-[16px] md:text-[24px]">
              Understand how our product may fulfill your needs
            </li>
            <li className="text-[16px] md:text-[24px]">
              Discover the capabilities and get answers to your questions
            </li>
            <li className="text-[16px] md:text-[24px]">
              Get a customized quote for your business
            </li>
          </ul>
        </div>
        <InputForm />
        <div></div>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
};

export default page;
