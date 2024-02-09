'use client'

import useFirebase from "@/hooks/useFirebase";
import { useAppSelector } from "@/redux/app/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub, signOut } =
        useFirebase();

    const { loading, user } = useAppSelector((state) => state.user);
    const router = useRouter();
    console.log(user);
    useEffect(() => {
        if (user?.uid) {
            router.push("/tools");
        }
    }, [user, router]);
    if (user?.uid) {
        return (
            <div className="text-center text-lg flex justify-center items-center h-screen">
                {/* <h1>Successfully Logged In</h1> */}
            </div>
        );
    }
    return (
        <div className="relative container mx-auto py-20 bg-gradient-to-br z-40 px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl commonBox shadow-xl">
                    <div className="p-6 sm:px-12 sm:pt-8 sm:pb-16">
                        <div className="space-y-4">
                            <Link href={"/"}>
                                <Image
                                    height={20}
                                    width={20}
                                    src="/images/logo.svg"
                                    loading="lazy"
                                    className="w-20"
                                    alt="temgen logo"
                                />
                            </Link>
                            <h2 className="mb-8 text-2xl text-cyan-500 font-bold">
                                Sign in to unlock the <br /> Full potential of your coding.
                            </h2>
                        </div>
                        <div className="mt-16 grid space-y-4">
                            <button
                                onClick={signInWithGoogle}
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
   hover:border-cyan-500  "
                            >
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img
                                        src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                                        className="absolute left-0 w-5"
                                        alt="google logo"
                                    />
                                    <span className="block w-max font-semibold tracking-wide text-gray-200 text-sm transition duration-300 group-hover:text-cyan-500  sm:text-base">
                                        Continue with Google
                                    </span>
                                </div>
                            </button>
                            <button
                                onClick={signInWithGithub}
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
   hover:border-cyan-500  "
                            >
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="absolute left-0 w-5 text-gray-200"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    <span className="block w-max font-semibold tracking-wide text-gray-200 text-sm transition duration-300 group-hover:text-cyan-500  sm:text-base">
                                        Continue with Github
                                    </span>
                                </div>
                            </button>
                            <button
                                onClick={signInWithFacebook}
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                 hover:border-cyan-500 "
                            >
                                <div className="relative flex items-center space-x-4 justify-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                                        className="absolute left-0 w-5"
                                        alt="Facebook logo"
                                    />
                                    <span className="block w-max font-semibold tracking-wide text-gray-200 text-sm transition duration-300 group-hover:text-cyan-500  sm:text-base">
                                        Continue with Facebook
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div className="mt-10 space-y-4 text-gray-200 text-center sm:-mb-8">
                            <p className="text-sm">
                                By proceeding, you agree to our{" "}
                                <a href="#" className="underline">
                                    Terms of Use
                                </a>{" "}
                                and confirm you have read our{" "}
                                <a href="#" className="underline">
                                    Privacy and Cookie Statement
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
