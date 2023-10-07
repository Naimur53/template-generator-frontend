import useFirebase from "@/Hooks/useFirebase";
import { useAppSelector } from "@/redux/app/store";
import Image from "next/image";
import React from "react";

const NavBar: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const { signOut } = useFirebase();
  return (
    <div className=" pb-[65px]">
      <div className="fixed top-0 left-0 right-0 bg-primary py-2 pr-3 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image width={55} height={200} src="/logo.png" alt="logo" />
          <h2 className="text-3xl font-medium font-robot text-white">TemGen</h2>
        </div>
        {/* <div className="flex flex-col items-end gap-1">
          <div className="w-[25px] bg-white h-[3px]"></div>
          <div className="w-[15px] bg-white h-[3px]"></div>
        </div> */}
        {user?._id ? (
          <button className="relative group">
            <Image
              className="w-10 rounded-full"
              width={100}
              height={100}
              src={user.photoURL as string}
              alt="user"
            />
            <div className="absolute bg-secondary px-2 py-4 shadow-lg rounded-lg group-hover:opacity-100 group-hover:visible invisible transition-all opacity-0  right-0  w-[200px] mt-3">
              <div>
                <button
                  onClick={signOut}
                  className="px-2 py-2 bg-error-primary rounded-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          </button>
        ) : (
          <div>
            <button>Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
