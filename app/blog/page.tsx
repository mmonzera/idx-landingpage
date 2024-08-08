import Image from "next/image";
import React from "react";
import backgroundBlog from "/app/assets/blog/background-blog.svg";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer/Footer";
import BlogIcon from "/app/assets/blog/blogIcon.svg";
import BlogPicture from "/app/assets/blog/blogPicture.png";

export default function Page() {
  return (
    <div className="gap-[20px]">
      <div
        className="bg-cover bg-top w-screen h-screen"
        style={{
          backgroundImage: `url(${backgroundBlog.src})`,
          width: "100%",
          height: "100%",
          padding: "144px 160px 24px 160px",
        }}
      >
        <Navbar />
        <div className="flex justify-between">
          <h1 className="text-[36px]">
            Our ideas about{" "}
            <span className="text-blue-600">Financial Technologies</span>
          </h1>
          <div className="bg-white border-[#0779c2] border-[2px] rounded-[12px] items-center px-[24px] py-[8px] flex gap-2 text-[16px]">
            <Image src={BlogIcon} alt="blog Icon" />
            <p className="text-blue">BLOG</p>
          </div>
        </div>
        <div className="flex p-[24px] gap-[24px] bg-white">
          <div className="gap-4">
            <div className="flex justify-between">
              <h1 className="text-[18px] font-semibold bg-blue-300 text-blue-800 px-[12px] py-[8px]">
                Technology
              </h1>
              <h2 className="font-normal text-black text-[16px]">
                {" "}
                24-01-2024{" "}
              </h2>
            </div>
            <div className="text-black text-[24px]">
              Data Science Fits into the Cloud Spend Equation
            </div>
            <div className="text-black text-[16px]">
              Last year, one of our users—Yuval Shwager, the head of product
              at Mixtiles—came to us with a question: “We want to offer buy now,
              pay later (BNPL) options, but how do we know they won’t add
              checkout friction or cannibalize our card volume?”
            </div>
            <button className="text-blue-600 underline "> Read More</button>
          </div>
          <div className="">
            <Image src={BlogPicture} alt="blog Picture" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
