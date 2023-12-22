import React from "react";
type props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: props) => {
  return <div>{children}</div>;
};

export default DashboardLayout;
