import Image from "next/image";
import React from "react";
import LogoBca from "/app/assets/Bank Logo/Bank logo-2.png";
import LogoBni from "/app/assets/Bank Logo/Bank logo-1.png";
import LogoBtn from "/app/assets/Bank Logo/Bank logo-3.png";
import LogoCtbc from "/app/assets/Bank Logo/Bank logo-4.png";
import LogoBri from "/app/assets/Bank Logo/Bank logo.png";

const Trustedpartners: React.FC = () => {
  return (
    <div className="px-[16px] md:px-[160px] py-[48px] gap-[24px] bg-white">
      <p>Trusted by our partners</p>
      <div className="items-center self-stretch justify-between gap-[48px] grid-cols-3 md:grid-cols-5 grid">
        <Image src={LogoBca} alt="logoBca" />
        <Image src={LogoBni} alt="logoBni" />
        <Image src={LogoBtn} alt="logoBtn" />
        <Image src={LogoCtbc} alt="logoCtbc" />
        <Image src={LogoBri} alt="logoBri" />
      </div>
    </div>
  );
};

export default Trustedpartners;
