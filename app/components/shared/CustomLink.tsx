import Link from "next/link";
import { ReactNode } from "react";

type TCustomLink = {
    children: ReactNode;
    href: string;
    target?: string;
};

export default function CustomLink({ children, href, target }: TCustomLink) {
    return (
        <Link href={href} passHref target={target}>
            {children}
        </Link>
    );
};
