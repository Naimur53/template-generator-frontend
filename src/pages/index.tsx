"use client";
import BackendBanner from "@/Components/HomePageComponents/BackendBanner";
import Banner from "@/Components/HomePageComponents/Banner";
import FrontEndExplain from "@/Components/HomePageComponents/FrontEndExplain";
import ReduxExplain from "@/Components/HomePageComponents/ReduxExplain";
import StepOfBackend from "@/Components/HomePageComponents/StepOfBackend";
import Testimonials from "@/Components/HomePageComponents/Testimonials";
import WhyTemgen from "@/Components/HomePageComponents/WhyTemgen";
import NavBar from "@/Components/Shared/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="relative z-20">
      <NavBar></NavBar>
      <Banner></Banner>
      <FrontEndExplain></FrontEndExplain>
      <ReduxExplain></ReduxExplain>
      <BackendBanner></BackendBanner>
      <StepOfBackend></StepOfBackend>
      <WhyTemgen></WhyTemgen>
      <Testimonials></Testimonials>
    </div>
  );
}
