'use client'

import UserLoading from "@/app/components/shared/UserLoading";
import { ICreation } from "@/interface";
import { useGetCreationsQuery } from "@/redux/features/creation/creationApi";

export default function ActiveUserPage() {
    const { data, isLoading } = useGetCreationsQuery("limit=100");
    let result: ICreation[] = [];
    if (data?.data) {
        result = data.data as ICreation[];
    }

    return (
        <div className=''>
            {isLoading ? (
                <UserLoading />
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {result.map((single) => (
                        <div key={single._id} className="rounded-xl p-6 shadow-lg text-center border border-white/50">
                            <div className="flex items-center justify-center pb-2">
                                <img
                                    src={single.createdBy.photoURL}
                                    className="w-[100px] rounded-full"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>{single.createdBy.displayName}</p>
                                <p>{single.createdBy.email}</p>
                                <p>{single.technology}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
