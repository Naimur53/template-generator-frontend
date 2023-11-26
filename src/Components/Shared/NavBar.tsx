import useFirebase from "@/Hooks/useFirebase";
import { useAppSelector } from "@/redux/app/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const { signOut } = useFirebase();
  return (
    <>
      <div className="fixed z-50 top-0 left-0 right-0 max-h-[65px] bar-background py-2 px-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex gap-2 items-center ">
            <Image width={55} height={200} src="/images/logo.svg" alt="logo" />
            <h2 className="text-3xl font-medium font-robot text-white">
              TemGen
            </h2>
          </div>
        </Link>
        {/* <div className="flex flex-col items-end gap-1">
          <div className="w-[25px] bg-white h-[3px]"></div>
          <div className="w-[15px] bg-white h-[3px]"></div>
        </div> */}
        {user?._id ? (
          <button className="relative group ">
            <Image
              className="w-10 h-10 rounded-full"
              width={100}
              height={100}
              src={user.photoURL || "/images/default_profile.png"}
              alt="user"
            />
            <div className="absolute bg-[#080821] backdrop-blur-sm  px-2 py-4 shadow-lg rounded-lg group-hover:opacity-100 group-hover:visible invisible transition-all opacity-0  right-0  w-[200px] mt-3">
              <div>
                <p className="font-bold text-xl">{user.displayName}</p>
              </div>
              <div>
                <button
                  onClick={signOut}
                  className="px-4 py-2 bg-error-primary rounded mt-3"
                >
                  Logout
                </button>
              </div>
            </div>
          </button>
        ) : (
          <div>
            <Link href="/login">
              <button className="px-4 border border-cyan-500 font-bold py-1 rounded text-cyan-500">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
