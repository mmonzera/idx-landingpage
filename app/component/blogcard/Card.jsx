import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ src, alt, publishedAt, title, tag, url }) => {
  return (
    <Link
      href={url}
      className="flex flex-col gap-[16px] p-[16px] shadow-md rounded-[12px] bg-white"
    >
      <Image
        height={209}
        objectFit="cover"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        className="rounded-[4px] bg-cover"
        src={src}
        alt={alt}
      />
      <div>
        <span className="flex text-[16px] text-[#0779C2] bg-[#E1F1FD] p-[8px] rounded-[4px] w-fit ">
          <p>{publishedAt}</p>
        </span>
      </div>
      <h1 className="font-regular text-[24px]">{title}</h1>
      <p className="font-semibold text-[#07619D]">{tag}</p>
    </Link>
  );
};

export default Card;
