import React from "react";
import Image from "next/image";
import IDXOptus from "/app/assets/Logo IDXOptus.png";
import ISO from "/app/assets/Logo ISO.svg";
import Instagram from "/app/assets/Instagram Logo.png";
import Linkedin from "/app/assets/Linkedin Logo.png";
import Website from "/app/assets/Website Logo.png";
import Copyright from "/app/assets/Copyright.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-white px-[16px] sm:px-[160px] py-[36px]">
      <div className="gap-[40px] flex flex-col">
        <Image className="" src={IDXOptus} alt="Logo IDXO" />
        <div className="flex flex-col flex-wrap gap-5 sm:flex-row sm:gap-3 sm:justify-between">
          <div className="flex flex-col gap-[12px] w-[285px] leading-[40px]">
            <h1 className="font-semibold text-[#07619D] text-[32px]">
              Address
            </h1>
            <p className="font-normal text-[#05080a] ">
              Sahid Sudirman Center Lv. 23 Jl. Jenderal Sudirman No. 86 Jakarta
              10220
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h1 className="font-semibold text-[#07619D] text-[32px]">
              Telephone
            </h1>
            <p className="font-normal text-[#07619D] underline">
              +62 2139706740
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-semibold text-[#07619D] text-[32px]">
                Social Media
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex gap-[12px]">
                  <Image className="" src={Linkedin} alt="Logo Linkedin" />
                  <p className="font-normal text-[#07619D] text-[24px]">
                    id/x partners
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <Image className="" src={Instagram} alt="Logo Instagram" />
                  <p className="font-normal text-[#07619D] text-[24px]">
                    idxolyfe
                  </p>
                </div>
                <div className="flex gap-[12px]">
                  <Image className="" src={Website} alt="Logo Website" />
                  <p className="font-normal text-[#07619D] text-[24px]">
                    idxpartners.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="flex-shrink-0 w-[200px] h-[200px]"
            src={ISO}
            alt="Logo ISO"
          />
        </div>
        <div className="flex gap-[12px]">
          <Image
            className="h-[24px] w-[24px]"
            src={Copyright}
            alt="Logo Copyright"
          />
          <p className="text-[20px] font-semibold text-black">
            {" "}
            2024 PT IDX Optus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
