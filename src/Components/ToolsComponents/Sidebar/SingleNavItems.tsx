import CustomLink from "@/Components/Shared/CustomLink";
import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import React from "react";

type Props = {} & ISingleNavItem;

const SingleNavItems = ({ icon, title, to, subNav }: Props) => {
  return (
    <div>
      {subNav?.length ? (
        <div>dfd</div>
      ) : (
        <CustomLink href={`/tools/${to}`} key={title}>
          <div className="sidebar-single-items-wrap">
            {icon && <Image width={30} height={30} src={icon} alt={title} />}
            <span className="font-semibold text-lg">{title}</span>
          </div>
        </CustomLink>
      )}
    </div>
  );
};

export default SingleNavItems;
