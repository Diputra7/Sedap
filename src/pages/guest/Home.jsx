import React from "react";
import HeroSection from "../components/HeroSection";
import Info from "../components/Info";
import Product from "../../components/guest/Product";
import Testi from "../../components/guest/Testi";
import About from "../../components/guest/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Info />
      <About />
      <Product />
      <Testi />
    </div>
  );
}
