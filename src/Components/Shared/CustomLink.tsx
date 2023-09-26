import Link from "next/link";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  href: string;
};
const CustomLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  );
};

export default CustomLink;
