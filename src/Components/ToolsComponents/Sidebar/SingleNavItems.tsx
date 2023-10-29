import CustomLink from "@/Components/Shared/CustomLink";
import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {} & ISingleNavItem;

const SingleNavItems = ({ icon, title, to, subNav }: Props) => {
  const router = useRouter();
  const isNestedOneActive = (subNav: ISingleNavItem[]) => {
    const routes = subNav.map((single) => `/tools${single.to}`);
    return routes.includes(router.pathname);
  };
  const [open, setOpen] = useState(isNestedOneActive(subNav || []));
  const isActive = (url?: string) => router.pathname === `/tools${url}`;

  return (
    <div>
      {subNav?.length ? (
        <div>
          <div
            className={` sidebar-single-items-wrap  flex-wrap !gap-0 ${
              isNestedOneActive(subNav) ? "active" : ""
            }`}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((pre) => !pre);
              }}
            >
              {icon && <Image width={30} height={30} src={icon} alt={title} />}
              <span className="font- ml-[17px] text-lg">{title}</span>
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`singleMultiNavContentWrap  hidden ${open && "open"}`}
            >
              <div className={` min-h-[0px] ml-6`}>
                {subNav.map((single) => (
                  <button
                    key={single.title}
                    className={`opacity-60 transition-all hover:opacity-100 ${
                      isActive(single.to) ? "!text-white   !opacity-100" : ""
                    }`}
                  >
                    <CustomLink href={`/tools/${single.to}`}>
                      {single.title}
                    </CustomLink>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CustomLink href={`/tools/${to}`} key={title}>
          <div
            className={`sidebar-single-items-wrap ${
              isActive(to) ? "active" : ""
            }`}
          >
            {icon && <Image width={30} height={30} src={icon} alt={title} />}
            <span className="font-semibold text-lg">{title}</span>
          </div>
        </CustomLink>
      )}
    </div>
  );
};

export default SingleNavItems;
