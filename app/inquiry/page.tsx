import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/navbar/Navbar";
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
          "w-full h-full bg-cover pt-[144px] pb-[24px] px-[16px] sm:p-[144px_80px_24px_80px] lg:p-[144px_160px_24px_160px]"
        )}
        style={{
          backgroundImage: `url(${backgroundInquiry.src})`,
        }}
      ></section>
      <Navbar />
      <Footer />
    </div>
  );
};

export default page;
