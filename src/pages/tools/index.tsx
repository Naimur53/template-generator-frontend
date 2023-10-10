import FileExplorer from "@/Components/FileExpoler/FileExpoler";
import CustomLink from "@/Components/Shared/CustomLink";
import ToolLayout from "@/Layout/ToolsLayout/ToolLayout";
import { IFileStructure } from "@/interface/common";
import { useAppSelector } from "@/redux/app/store";
import { navItemsBackend, navItemsFrontEnd } from "@/utils/sideBarInfo";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useSelector } from "react-redux";

interface IToolsProps {}

const Tools: React.FunctionComponent<IToolsProps> = (props) => {
  const allNavItems = [...navItemsFrontEnd, ...navItemsBackend];
  const name = useAppSelector((state) => state.user.user?.displayName);
  return (
    <ToolLayout>
      <div className="flex mb-4  flex-col pt-2 gap-2 justify-center items-center">
        <h1 className="text-4xl font-robot">
          Welcome <span className="text-cyan-400 font-bold">{name}</span>
        </h1>
        <p className="text-xl">What are you going to build today?</p>
      </div>
      <div className=" grid grid-cols-3 items-center  gap-4 ">
        {allNavItems.map(({ title, to, icon, subNav }) => (
          <Link
            href={`/tools/${to || (subNav?.length && subNav[0].to)}`}
            className="flex justify-center commonBox"
            key={title}
          >
            <div className="flex justify-center items-center pt-4 flex-col">
              {icon && (
                <Image
                  width={50}
                  height={50}
                  quality={100}
                  src={icon}
                  alt={title}
                />
              )}
              <span className="font-semibold text-centers mt-5 inline-block text-3xl font-robots">
                {title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ToolLayout>
  );
};
export default Tools;
