import Link from "next/link";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  href: string;
  target?: string;
};
const CustomLink: React.FC<Props> = ({ children, href, target }) => {
  return (
    <Link href={href} passHref target={target}>
      {children}
    </Link>
  );
};

export default CustomLink;
