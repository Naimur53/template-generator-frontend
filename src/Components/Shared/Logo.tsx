import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center ">
        <Image width={55} height={200} src="/images/logo.svg" alt="logo" />
        <h2 className="text-3xl font-medium font-robot text-white">TemGen</h2>
      </div>
    </Link>
  );
};

export default Logo;
