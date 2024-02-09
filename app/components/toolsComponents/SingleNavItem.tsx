'use client'

import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SingleNavItem({ icon, title, to, subNav }: ISingleNavItem) {
    const pathname = usePathname();
    const isNestedOneActive = (subNav: ISingleNavItem[]) => {
        const routes = subNav.map((single) => `/tools${single.to}`);
        return routes.includes(pathname);
    };
    const [open, setOpen] = useState(isNestedOneActive(subNav || []));
    const isActive = (url?: string) => pathname === `/tools${url}`;

    return (
        <div>
            {subNav?.length ? (
                <div>
                    <div
                        onClick={() => {
                            setOpen(true);
                        }}
                        className={` sidebar-single-items-wrap select-none  flex-wrap !gap-0 ${isNestedOneActive(subNav) ? "active" : ""
                            }`}
                    >
                        <div
                            className="flex items-center cursor-pointer w-full"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen((pre) => !pre);
                            }}
                        >
                            {icon && <Image width={30} height={30} src={icon} alt={title} />}
                            <span className="font- ml-[17px] text-lg whitespace-nowrap">
                                {title}
                            </span>
                            <div className="w-full flex justify-end">
                                <div className="ml-auto">
                                    <Image
                                        src={"/icons/down.svg"}
                                        width={15}
                                        height={10}
                                        alt="down"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={`singleMultiNavContentWrap  hidden ${open && "open"}`}
                        >
                            <div className={` min-h-[0px] ml-6`}>
                                {subNav.map((single) => (
                                    <button
                                        key={single.title}
                                        className={`opacity-60 transition-all hover:opacity-100 ${isActive(single.to) ? "!text-white   !opacity-100" : ""
                                            }`}
                                    >
                                        <Link scroll={true} href={`/tools/${single.to}`}>
                                            {single.title}
                                        </Link>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Link scroll={true} href={`/tools/${to}`} key={title}>
                    <div
                        className={`sidebar-single-items-wrap ${isActive(to) ? "active" : ""
                            }`}
                    >
                        {icon && <Image width={30} height={30} src={icon} alt={title} />}
                        <span className="font-semibold text-lg">{title}</span>
                    </div>
                </Link>
            )}
        </div>
    );
};
