'use client'

import AllUserTable from "@/app/components/dashboardComponents/AllUserTable";
import ManageAllUserTable from "@/app/components/dashboardComponents/ManageAllUserTable";
import ManageAllUserTableSingleRow from "@/app/components/dashboardComponents/ManageAllUserTableSingleRow";
import ErrorComponent from "@/app/components/shared/ErrorComponent";
import { useDebounce } from "@/hooks/useDebounce";
import { IUser } from "@/interface/common";
import { useGetUsersQuery } from "@/redux/features/user/userApi";
import { Form, Input, Pagination, Spin } from "antd";
import { useMemo, useState } from "react";

export default function ManageUserPage() {

    const defaultValue = { value: "", label: "" };

    const [role, setRole] = useState(defaultValue);
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const debouncedSearch = useDebounce(search, 500); // 500ms debounce delay

    const queryString = useMemo(() => {
        const info = {
            role: role.value.length ? role.value : undefined,
            page,
            searchTerm: debouncedSearch.length ? debouncedSearch : undefined,
        };
        const queryString = Object.keys(info).reduce((pre, key: string) => {
            const value = info[key as keyof typeof info];
            if (value) {
                return pre + `${Boolean(pre.length) ? "&" : ""}${key}=${value}`;
            }
            return pre;
        }, "");
        return queryString;
    }, [role, debouncedSearch, page]);

    const { data, isError, isLoading, isFetching, isSuccess, error } =
        useGetUsersQuery(queryString);

    let content = null;

    if (isLoading || isFetching) {
        content = <div className='flex items-center justify-center h-[50dvh]'>
            <Spin size="large" />
        </div>;
    } else if (isError) {
        console.log(error);
        content = <ErrorComponent />;
    } else if (isSuccess && data.data.length) {
        const info = data.data as IUser[];

        content = (
            <div>
                <ManageAllUserTable>
                    {info.map((single) => (
                        <ManageAllUserTableSingleRow
                            {...single}
                            key={single._id}
                        ></ManageAllUserTableSingleRow>
                    ))}
                </ManageAllUserTable>
                <div className="flex justify-center mt-4">
                    <Pagination
                        pageSize={data.meta.limit}
                        total={data.data.length < data.meta.limit ? 1 : data.meta.total}
                        current={data.meta.page}
                        onChange={(value) => {
                            setPage(value);
                        }}
                    ></Pagination>
                </div>
            </div>
        );
    } else {
        content = <ErrorComponent error="Data not found!" />;
    }
    //   const roleOption = Object.values(UserRole).map(optionCreator);

    const handleRoleChange = (el: string) => {
        setRole({ value: el, label: el });
    };
    //   console.log({ roleOption });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className=''>
            <h2 className="text-xl text-center font-bold mb-5">Manage users</h2>
            <div className="mt-5 mb-10">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-5 justify-between">
                    <div className="flex gap-4">
                        <div className="w-[150px] ">
                            {/* <Form submitHandler={() => {}}>
                       <FormSelectField
                        name="role"
                        handleChange={handleRoleChange}
                        placeholder="Filter By Role"
                        options={roleOption}
                        value={role.value}
                      ></FormSelectField>
                    </Form> */}
                        </div>
                        <Input
                            className="max-w-[300px] w-full inline-block"
                            type="search"
                            name="search"
                            onChange={handleSearchChange}
                            placeholder="Search by name or email"
                            value={search}
                        />
                    </div>
                    <div>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white leading-0 rounded"
                            onClick={() => {
                                setRole(defaultValue);
                                setSearch("");
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            {/* {content} */}

            <AllUserTable tableData={data} />
        </div>
    );
};
