'use client'

import { useAppSelector } from "@/redux/app/store";
import { useRouter } from "next/navigation";

export default function PrivetLayout({ children }: { children: React.ReactNode }) {
    const { user, loading, error } = useAppSelector((state) => state.user);
    const router = useRouter();

    if (loading) {
        return <div className="h-screen flex justify-center items-center"></div>;
    }
    if (!loading && !user?._id) {
        router.push("/login");
        return null;
    }

    return <div>{children}</div>;
};
