'use client'

import useFirebaseAuthObserver from "@/hooks/useFirebaseAuthObserver";
import { ConfigProvider } from "antd";

export default function AuthObserverLayout({ children }: { children: React.ReactNode }) {
    useFirebaseAuthObserver()
    return (
        <div className=''>
            <ConfigProvider
                theme={{
                    components: {
                        Select: {
                            selectorBg: "bg-[#FF0000]",
                            optionSelectedColor: "text-[#fff]",
                            optionSelectedBg: "bg-[#FF0000]"
                            /* here is your component tokens */
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </div>
    );
};
