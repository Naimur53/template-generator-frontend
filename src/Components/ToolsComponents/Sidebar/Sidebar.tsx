import CustomLink from "@/Components/Shared/CustomLink";
import { ISingleNavItem } from "@/interface";
import Image from "next/image";
import React from "react";
import SingleNavItems from "./SingleNavItems";
type Props = {};

const Sidebar = ({}: Props) => {
  const navItemsFrontEnd: ISingleNavItem[] = [
    { icon: "/icons/react.png", title: "React", to: "/reactTem" },
    {
      icon: "/icons/react-redux.png",
      title: "React Redux",
      subNav: [
        { title: "Api slice Folder creator", to: "/reactReduxFolderCreator" },
        { title: "Create Template", to: "/reactReduxTemplateCreator" },
      ],
    },
    { icon: "/icons/next.png", title: "Next js", to: "/next" },
    {
      icon: "/icons/nextRedux.png",
      title: "Next Redux",
      subNav: [
        { title: "Api slice Folder creator", to: "/nextReduxFolderCreator" },
        { title: "Create Template", to: "/nextReduxTemplateCreator" },
      ],
    },
  ];
  const navItemsBackend: ISingleNavItem[] = [
    { icon: "/icons/mongodb.png", title: "Mongoose", to: "/mongoose" },
    { icon: "/icons/prisma.png", title: "Postgres", to: "/postgres" },
  ];
  return (
    <div className="h-[calc(100vh-65px)] fixed left-0 bottom-0 w-[320px] bg-primary">
      <div className="p-[30px]">
        <h2 className="sidebar-heading">Front End Generator</h2>
        <div className="sidebar-container">
          {navItemsFrontEnd.map((single) => (
            <SingleNavItems key={single.title} {...single}></SingleNavItems>
          ))}
          <h2 className="sidebar-heading mt-[30px]">Backend Generator</h2>
          {navItemsBackend.map((single) => (
            <CustomLink href={`/tools/${single.to}`} key={single.title}>
              <div className="sidebar-single-items-wrap">
                {single.icon && (
                  <Image
                    width={30}
                    height={30}
                    src={single.icon}
                    alt={single.title}
                  />
                )}
                <span className="font-semibold text-lg">{single.title}</span>
              </div>
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
