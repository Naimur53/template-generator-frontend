"use client";
import Banner from "@/Components/HomePageComponents/Banner";
import FrontEndExplain from "@/Components/HomePageComponents/FrontEndExplain";
import NavBar from "@/Components/Shared/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <FrontEndExplain></FrontEndExplain>
    </>
  );
}
