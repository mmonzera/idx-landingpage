import Image from "next/image";
import styles from "./styles.module.css";
import firstTitleIcon from "/app/assets/icon-TrendingUp.svg";
import laptop from "/app/assets/Laptop.png";
import backgroundLaptop from "/app/assets/backgroundLaptop.svg";
import HeroBackground from "/app/assets/background-heroSection.png";
import clsx from "clsx";

const HeroSection: React.FC = () => {
  return (
    <section
      className={clsx(
        styles.heroContainer,
        "w-full h-full bg-cover py-[160px] px-[16px] md:p-[144px_160px_24px_160px]"
      )}
      style={{
        backgroundImage: `url(${HeroBackground.src})`,
      }}
    >
      <div className={styles.heroContent}>
        <center className="flex flex-col items-center gap-6 p-4 md:px-16 self-stretch">
          <div className={styles.heroFirstTitle}>
            <Image src={firstTitleIcon} alt="firstTitleIcon" />
            <p> AI-Powered & Fintech Solution</p>
          </div>
          <h1 className={clsx(styles.heroTitle, "font-normal")}>
            Proven AI-powered with{" "}
            <span className="text-[#07619D] font-bold">API & Cloud-ready</span>{" "}
            solution
          </h1>
          <p className="text-[#525252]">
            AI solution for financial institutions:{" "}
            <span className="font-semibold">
              Market-leading APIs, Low-Code development, flexible
              cloud/on-prem/hybrid deployment{" "}
            </span>
          </p>
          <button className={styles.heroButton}>Try Our Product</button>
          <div className="relative">
            <div className="absolute left-[-20px] top-[-20px] right-[-20px] bottom-[-20px] z-10 h-[622px] w-[1260px]">
              <Image
                className={styles.backgroundLaptop}
                src={backgroundLaptop}
                alt="backgroundLaptop"
              />
            </div>
            <div className="px-[16px] md:pr-10 md:pl-10">
              <Image className={styles.laptop} src={laptop} alt="laptop" />
            </div>
          </div>
        </center>
      </div>
    </section>
  );
};

export default HeroSection;
