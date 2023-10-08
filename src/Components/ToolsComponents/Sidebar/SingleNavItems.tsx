import CustomLink from "@/Components/Shared/CustomLink";
import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {} & ISingleNavItem;

const SingleNavItems = ({ icon, title, to, subNav }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === `/tools${to}`;

  const isNestedOneActive = (subNav: ISingleNavItem[]) => {
    const routes = subNav.map((single) => `/tools${single.to}`);
    console.log({ routes, r: router.pathname });
    return routes.includes(router.pathname);
  };
  return (
    <div>
      {subNav?.length ? (
        <div onClick={() => setOpen((pre) => !pre)}>
          <div
            className={` sidebar-single-items-wrap  flex-wrap !gap-0 ${
              isNestedOneActive(subNav) ? "active" : ""
            }`}
          >
            {icon && <Image width={30} height={30} src={icon} alt={title} />}
            <span className="font- ml-[17px] text-lg">{title}</span>
            <div
              className={`singleMultiNavContentWrap  hidden ${open && "open"}`}
            >
              <div className={` min-h-[0px] ml-6`}>
                {subNav.map((single) => (
                  <button
                    key={single.title}
                    className="opacity-60 transition-all hover:opacity-100"
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
            className={`sidebar-single-items-wrap ${isActive ? "active" : ""}`}
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
