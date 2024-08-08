import React from "react";
import blog from "/app/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <div className="bg-[#F9FCFF] w-100% flex flex-col items-center py-[72px] px-[16px] sm:px-[160px] gap-[56px]">
      <h1 className="text-[#262626] px-[16px] font-regular text-[36px] sm:text-[44px] ">
        Insightful resource of our{" "}
        <span className="text-[#07619D] font-bold"> expertise </span>
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[24px]">
        <div className="flex flex-col gap-[16px] p-[16px] shadow-md rounded-[12px] bg-white">
          <Image
            height={209}
            objectFit="cover"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="rounded-[4px] bg-cover"
            src={blog}
            alt="blog"
          />
          <div>
            <span className="flex text-[16px] text-[#0779C2] bg-[#E1F1FD] p-[8px] rounded-[4px] w-fit ">
              <p>11 - 07 - 2024</p>
            </span>
          </div>
          <h1 className="font-regular text-[24px]">
            Data Science Fits into the Cloud Spend Equation
          </h1>
          <p className="font-semibold text-[#07619D]">Tech</p>
        </div>
        <div className="flex flex-col gap-[16px] p-[16px] shadow-md rounded-[12px] bg-white">
          <Image
            height={209}
            objectFit="cover"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="rounded-[4px] bg-cover"
            src={blog}
            alt="blog"
          />
          <div>
            <span className="flex text-[16px] text-[#0779C2] bg-[#E1F1FD] p-[8px] rounded-[4px] w-fit ">
              <p>11 - 07 - 2024</p>
            </span>
          </div>
          <h1 className="font-regular text-[24px]">
            How iDecision Assist You in Loan Management with AI
          </h1>
          <p className="font-semibold text-[#07619D]">Artificial Inteligence</p>
        </div>
        <div className="flex flex-col gap-[16px] p-[16px] shadow-md rounded-[12px]  bg-white">
          <Image
            height={209}
            objectFit="cover"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="rounded-[4px] bg-cover"
            src={blog}
            alt="blog"
          />
          <div>
            <span className="flex text-[16px] text-[#0779C2] bg-[#E1F1FD] p-[8px] rounded-[4px] w-fit ">
              <p>11 - 07 - 2024</p>
            </span>
          </div>
          <h1 className="font-regular text-[24px]">
            The Impact of Inflation on Business Owners
          </h1>
          <p className="font-semibold text-[#07619D]">Finance</p>
        </div>
      </div>
      <Link href="/blog">
        <button className="rounded-md border border-[#1EA2EC] text-[#1EA2EC] p-[12px] hover:bg-[#1EA2EC] hover:text-white">
          See More Article
        </button>
      </Link>
    </div>
  );
};

export default Blog;
