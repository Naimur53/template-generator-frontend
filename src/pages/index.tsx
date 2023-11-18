"use client";
import NavBar from "@/Components/Shared/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container px-16">
        <div className="mt-20 grid grid-cols-2 gap-5">
          <div>
            <h1 className="text-7xl font-robot leading-[90px] font-bold ">
              Template Generator
              <br />
              My Coding Partner
            </h1>
            <p className="text-xl mt-3">
              Generate boiler code for your React, Next js site with just a few
              click. Also you can able to create full Node js Api server with
              just project name and adding your data schema
            </p>
            <Link href="/tools">
              <button className="mt-10 px-5 py-2 font-bold text-xl rounded home-banner-button">
                Let&lsquo;s Generate
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-[200px]">
            {/* <img src="/images/homeBannerImg.svg" className="w-full" alt="" /> */}
            <Image
              width={500}
              height={500}
              src="/gif/banner.gif"
              className="w-full -mt-60 rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
