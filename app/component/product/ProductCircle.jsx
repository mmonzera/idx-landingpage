"use client";
import React from "react";
import Image from "next/image";
import ProductCircleIcon from "/app/assets/product-circle-bg.svg";
import Button from "./Button";

const ProductCircle = (props) => {
  const { controlledSwiper } = props;
  return (
    <div className="bg-white w-100% flex flex-col items-center px-[160px] py-[60px] gap-[48px]">
      <h1 className="font-normal text-black text-[36px] leading-loose tracking-tight text-center">
        Unlock{" "}
        <span className="text-[#07619D] font-semibold">
          unparalleled advantages{" "}
        </span>{" "}
        for your business with our product
      </h1>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Image
            className="w-[550px] h-[550px]"
            src={ProductCircleIcon}
            alt="ProductCircle"
          />
          <div className="absolute left-[14%] top-[10%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-green-800 border-[#4ADE80]  hover:bg-[#DCFCE7]"
              onClick={() => {
                controlledSwiper.slideTo(0, 500);
              }}
            >
              Customer Onboarding
            </Button>
          </div>
          <div className="absolute right-[14%] top-[10%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-green-800 border-[#4ADE80]  hover:bg-[#DCFCE7]"
              onClick={() => {
                controlledSwiper.slideTo(1, 500);
              }}
            >
              Loan Management
            </Button>
          </div>
          <div className="absolute left-[50%] top-[-3%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-green-800 border-[#4ADE80] hover:bg-[#DCFCE7]"
              onClick={() => {
                controlledSwiper.slideTo(0, 500);
              }}
            >
              Collection Management
            </Button>
          </div>
          <div className="absolute right-[3%] top-[32%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-green-800 border-[#4ADE80]"
            >
              Loan Origination
            </Button>
          </div>
          <div className="absolute left-[3%] top-[32%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-green-800 border-[#4ADE80]"
            >
              Supply Chain
            </Button>
          </div>
          <div className="absolute left-[14%] bottom-[10%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-[#D97706] border-[#FBBF24]"
            >
              Regulatory Reporting
            </Button>
          </div>
          <div className="absolute right-[14%] bottom-[10%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-[#D97706] border-[#FBBF24]"
            >
              Transaction Fraud
            </Button>
          </div>
          <div className="absolute left-[50%] bottom-[-3%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-[#D97706] border-[#FBBF24]"
            >
              Anti Money Laundry
            </Button>
          </div>
          <div className="absolute right-[3%] bottom-[32%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-[#D97706] border-[#FBBF24]"
            >
              Application Fraud
            </Button>
          </div>
          <div className="absolute left-[3%] bottom-[32%] flex w-0 justify-center">
            <Button
              variant="rounded"
              className="text-[#D97706] border-[#FBBF24]"
            >
              KYC & CDD
            </Button>
          </div>
          <div className="absolute left-[50%] top-[20%] flex w-0 justify-center">
            <Button variant="square">Decision Engine</Button>
          </div>
          <div className="absolute left-[50%] bottom-[20%] flex w-0 justify-center">
            <Button variant="square">Machine Learning</Button>
          </div>
          <div className="absolute left-[20%] top-[45%] flex w-0 justify-center">
            <Button variant="square">Workflow Engine</Button>
          </div>
          <div className="absolute right-[20%] top-[45%] flex w-0 justify-center">
            <Button variant="square">Integration Platform</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[24px]">
        <div className="flex gap-[21px]">
          <div className="h-[33px] w-[33px] bg-[#4ADE80]"></div>
          <h2 className="text-[#525252] font-semibold text-[20px] items-center">
            Digital Lending Product
          </h2>
        </div>
        <div className="flex gap-[21px]">
          <div className="h-[33px] w-[33px] bg-[#FBBF24]"></div>
          <h2 className="text-[#525252] font-semibold text-[20px] items-center">
            Financial Crime Management
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCircle;
