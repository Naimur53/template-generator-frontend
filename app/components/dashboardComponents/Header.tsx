import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../shared/Logo";
import DropdownUser from "./DropdownUser";

export default function Header({ sidebarOpen, setSidebarOpen }: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) {
    return (
        <header className="sticky header-wrap top-0 z-30 min-w-[200px] z-999 flex w-full bg-lightCyan  dark:bg-black   ">
            <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <button
                    aria-controls="sidebar"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSidebarOpen(!sidebarOpen);
                    }}
                    className="z-99999 block rounded-sm border border-stroke bg-light-cyan p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="flex items-center  gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}

                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Logo />
                </div>
                <div className="hidden lg:block"></div>
                <div className="flex items-center gap-3 2xsm:gap-7">
                    {/* <!-- User Area --> */}
                    <DropdownUser />
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
};
