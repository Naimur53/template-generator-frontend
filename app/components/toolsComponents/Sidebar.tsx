import { navItemsBackend, navItemsFrontEnd } from "@/utils/sideBarInfo";
import SingleNavItem from "./SingleNavItem";

export default function Sidebar() {
    return (
        <div className="h-[calc(100vh-65px)] fixed left-0 bottom-0 w-[320px] bar-background overflow-y-auto">
            <div className="p-[30px]">
                <h2 className="sidebar-heading">Front End Generator</h2>
                <div className="sidebar-container">
                    {navItemsFrontEnd.map((single) => (
                        <SingleNavItem key={single.title} {...single} />
                    ))}
                    <h2 className="sidebar-heading mt-[30px]">Backend Generator</h2>
                    {navItemsBackend.map((single) => (
                        <SingleNavItem key={single.title} {...single} />
                    ))}
                </div>
            </div>
        </div>
    );
};
