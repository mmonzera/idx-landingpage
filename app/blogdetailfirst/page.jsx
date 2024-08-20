import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Image from "next/image";
import IconArrowLeft from "/app/assets/icon-arrowLeft.svg";
import blogDetailPicture from "/app/assets/blogDetailPicture.png";

const Page = () => {
  return (
    <div className="bg-white ">
      <div className="px-[16px] sm:px-[80px] md:px-[160px] p-4 pt-[40px] sm:pt-[80px] md:pt-[160px]">
        <div className="flex justify-between items-center">
          <h1 className="text-[16px] font-semibold text-blue-500">
            Blog / Technology
          </h1>
          <button className="flex items-center justify-between gap-3 p-3">
            <Image
              src={IconArrowLeft}
              alt="Icon Arrow Left"
              className="w-[20px] h-[20px]"
            />
            <h2 className="text-[16px] text-blue-500">Back to List</h2>
          </button>
        </div>
        <div className="gap-[36px]">
          <div className="gap-4">
            <div className="px-3 py-2 bg-blue-200 rounded-[8px]">
              <h1 className="text-blue-500 text-[24px] font-semibold">
                17 - 07 - 2024
              </h1>
            </div>
            <h1 className="text-[48px] font-semibold text-blue-900">
              {" "}
              Data Science Fits into the Cloud Spend Equation
            </h1>
            <h3 className="text-[18px]">by Amanda R</h3>
          </div>
          <Image
            src={blogDetailPicture}
            alt="blog detail Picture"
            objectFit="cover"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="rounded-[4px] bg-cover"
          />
        </div>
        <p>
          {" "}
          Last year, one of our users—Yuval Shwager, the head of product
          at Mixtiles—came to us with a question: “We want to offer buy now, pay
          later (BNPL) options, but how do we know they won’t add checkout
          friction or cannibalize our card volume?” BNPL methods, which allow
          customers to finance purchases and pay them back in fixed
          installments, were little-known less than a decade ago. Today they
          account for more than $300 billion in transactions worldwide. However,
          they tend to be priced at a premium, so Shwager wanted to know whether
          the financial benefits would offset the added costs. Getting all the
          data required to make strategic payment decisions like this one is
          hard. It involves understanding checkout click-through rates, payment
          conversion rates, and the frequency of refunds and disputes. All these
          factors play a part in determining the overall revenue and conversion
          impact, and it’s more information than most businesses can collect and
          analyze on their own. That’s where we can help. Last year, Stripe
          processed more than $1 trillion in annual volume, which was about 1%
          of global GDP. This puts us in a unique position to run powerful
          experiments—all with the goal of providing insights that help our
          users grow their business.  With that in mind, we created an
          experiment to help Mixtiles and other Stripe businesses assess when
          and how to offer BNPLs. We ran A/B tests on more than 150,000 global
          payment sessions where a single BNPL (either Affirm, Afterpay, or
          Klarna) and at least one other payment method were eligible to be
          displayed to a customer. In half of the checkout sessions, customers
          saw the BNPL displayed in the available payment method section and in
          the other half, they did not.  We applied these tests to B2C companies
          across all industries eligible for BNPLs. Altogether, we found that
          businesses generated new sales, increased revenue, and boosted
          conversion rates by offering BNPLs. You can read more about our
          results below.
        </p>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Page;
