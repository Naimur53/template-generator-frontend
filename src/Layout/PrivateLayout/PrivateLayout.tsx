import { useAppSelector } from "@/redux/app/store";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PrivateLayout: React.FC<Props> = ({ children }) => {
  const { user, loading, error } = useAppSelector((state) => state.user);
  const router = useRouter();
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (!loading && !user?._id) {
    router.push("/login");
    return null;
  }

  return <div>{children}</div>;
};

export default PrivateLayout;
