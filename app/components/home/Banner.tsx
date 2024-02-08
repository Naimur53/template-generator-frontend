import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <div className="container px-2 lg:px-16  section-padding">
            <div className=" flex justify-center gap-5">
                <div className="text-center xl:w-[90%]">
                    <h1 className=" banner-heading">
                        Getting started on a new project should not be a hassle anymore
                    </h1>
                    <p className="text-xl mb-5 mt-10 w-full lg:w-[60%] font-sedmibold mx-auto text-secondary">
                        Temgen generates boilerplate code for your React and Next.js site
                        with just a few clicks, or a complete Node.js server by following a
                        few simple steps
                    </p>
                    <Link href="/tools">
                        <button className="mt-10 px-5 py-2 font-bold text-xl rounded-lg home-banner-button">
                            Let&lsquo;s Generate
                        </button>
                    </Link>
                </div>
                <div className="hidden justify-center items-center mt-[200px]">
                    {/* <img src="/images/homeBannerImg.svg" className="w-full" alt="" /> */}
                    <Image
                        width={500}
                        height={500}
                        src="/gif/banner.gif"
                        className="w-full -mt-60 rounded-full"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
