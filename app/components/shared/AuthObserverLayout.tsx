'use client'

import useFirebaseAuthObserver from "@/hooks/useFirebaseAuthObserver";

export default function AuthObserverLayout({ children }: { children: React.ReactNode }) {
    useFirebaseAuthObserver()
    return (
        <div className=''>
            {children}
        </div>
    );
};
