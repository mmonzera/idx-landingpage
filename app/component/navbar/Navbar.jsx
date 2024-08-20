import Image from "next/image";
import styles from "./styles.module.css";
import Logo from "/app/assets/Logo iDecision - Colorized.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute inset-0 flex items-center z-[1000] h-[84px] top-[25px]">
      <nav className={styles.nav}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={173} height={43} />{" "}
        </Link>
        <Link href="/inquiry">
          <button className={styles.inquiryButton}>Inquiry</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
