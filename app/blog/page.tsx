import Image from "next/image";
import React from "react";
import backgroundBlog from "/app/assets/blog/background-blog.svg";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer/Footer";
import BlogIcon from "/app/assets/blog/blogIcon.svg";
import BlogPicture from "/app/assets/blog/blogPicture.png";
import styles from "./blog.module.css";
import clsx from "clsx";
import Card from "../component/blogcard/Card";

export default function Page() {
  return (
    <div>
      <section
        className={clsx(
          styles.heroContainer,
          "w-full h-full bg-cover pt-[144px] pb-[24px] px-[16px] sm:p-[144px_80px_24px_80px] lg:p-[144px_160px_24px_160px]"
        )}
        style={{
          backgroundImage: `url(${backgroundBlog.src})`,
        }}
      >
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col gap-[12px] justify-between md:flex-row sm:items-center items-start">
            <h1 className="text-[20px] sm:text-[36px]">
              Our Ideas and Insight about{" "}
              <span className="text-[#0779C2] font-semibold">
                Financial Technology
              </span>
            </h1>
            <div className="bg-white flex px-[16px] py-[8px] rounded-[12px] items-center gap-[12px] border-2 border-[#0779C2] flex-shrink-0 ">
              <Image src={BlogIcon} alt="blog Icon" />
              <h2 className="text-blue-500 text-[12px] sm:text-[16px]">BLOG</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] sm:gap-[51px] items-center ">
            <div className="bg-white p-[12px] lg:p-[24px] flex flex-col gap-[12px]  lg:gap-[24px] lg:flex-row rounded-[12px] shadow-md ">
              <Image
                src={BlogPicture}
                alt="blog Picture"
                height={312}
                objectFit="cover"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="rounded-[4px] bg-cover"
              />
              <div className="flex flex-col justify-between gap-[12px]">
                <div className="flex justify-between items-center self-stretch">
                  <div className="bg-[#F0F8FF] px-[8px] py-[4px] sm:px-[12px] sm:py-[8px] rounded-[8px]">
                    <h1 className="text-[#07619D] text-[14px] sm:text-[18px] font-semibold ">
                      Technology
                    </h1>
                  </div>
                  <h2 className=" text-[12px] sm:text-[16px]">24-02-2024</h2>
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-[16px] sm:text-[24px] font-medium">
                    Data Science Fits into the Cloud Spend Equation
                  </h1>
                  <h2 className=" text-[12px] sm:text-[16px] leading-[44px] ">
                    Last year, one of our users—Yuval Shwager, the head of
                    product at Mixtiles—came to us with a question: “We want to
                    offer buy now, pay later (BNPL) options, but how do we know
                    they won’t add checkout friction or cannibalize our card
                    volume?”
                  </h2>
                </div>
                <div>
                  <button className="text-[#0779C2] text-[16px]">
                    {" "}
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-[24px] justify-between">
              <Card
                src={BlogPicture}
                publishedAt={"11-07-2024"}
                alt={"blog"}
                tag={"Tech"}
                title={"Data Science Fits into the Cloud Spend Equation"}
                url={"/"}
              />
              <Card
                src={BlogPicture}
                publishedAt={"11-07-2024"}
                alt={"blog"}
                tag={"Tech"}
                title={"Hata Science Fits into the Cloud Spend Equation"}
                url={"/"}
              />
              <Card
                src={BlogPicture}
                publishedAt={"11-07-2024"}
                alt={"blog"}
                tag={"Tech"}
                title={"Data Science Fits into the Cloud Spend Equation"}
                url={"/"}
              />
            </div>
            <button className="rounded-md border border-[#1EA2EC] text-[#1EA2EC] p-[12px] hover:bg-[#1EA2EC] hover:text-white w-[182px]">
              See More Article
            </button>
          </div>
        </div>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}
