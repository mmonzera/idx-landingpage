import React from "react";
import blog from "/app/assets/blog-1.png";
import Image from "next/image";
import Link from "next/link";
import Card from "@/app/component/blogcard/Card";

const Blog: React.FC = () => {
  return (
    <div className="bg-[#F9FCFF] w-100% flex flex-col items-center py-[24px] sm:py-[72px] px-[16px] sm:px-[160px] gap-[24px] sm:gap-[56px]">
      <h1 className="text-[#262626] px-[16px] font-regular text-[16px] sm:text-[44px] ">
        Insightful resource of our{" "}
        <span className="text-[#07619D] font-bold"> expertise </span>
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[24px]">
        <Card
          src={blog}
          publishedAt={"11-07-2024"}
          alt={"blog"}
          tag={"Tech"}
          title={"Data Science Fits into the Cloud Spend Equation"}
          url={"/"}
        />
        <Card
          src={blog}
          publishedAt={"18-07-2024"}
          alt={"blog"}
          tag={"Artificial Intelligent"}
          title={"How iDecision Assist You in Loan Management with AI"}
          url={"/"}
        />
        <Card
          src={blog}
          publishedAt={"11-07-2024"}
          alt={"blog"}
          tag={"Finance"}
          title={
            "The Impact of Inflation on Business Owners (And What to Do About It)"
          }
          url={"/"}
        />
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
