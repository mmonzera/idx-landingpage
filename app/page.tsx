import Link from "next/link";
import Navbar from "./component/navbar/Navbar";
import HeroSection from "./component/hero/Hero";
import Trustedpartners from "./component/trustedpartners/Trustedpartners";
import Benefitcard from "./component/benefitcard/Benefitcard";
import Blog from "./component/blog/Blog";
import Footer from "./component/Footer/Footer";
import Product from "./component/product/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Trustedpartners />
      <Benefitcard />
      <Product />
      <Blog />
      <Footer />
    </div>
  );
}
