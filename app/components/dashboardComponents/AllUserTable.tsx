'use client'

import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { GetRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';

type InputRef = GetRef<typeof Input>;

interface DataType {
    key: string;
    photoURL: string;
    displayName: string;
    email: string;
    isBlocked: boolean;
    uid: string;
}

type TProps = {
    tableData: {
        data: DataType[]
    }
}

type DataIndex = keyof DataType;

export default function AllUserTable({ tableData }: TProps) {
    console.log(tableData?.data);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleBlock = () => {
        console.log("uid")
    }

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text?.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Avatar',
            dataIndex: 'photoURL',
            key: 'photoURL',
            width: '15%',
            render: photoURL => <div className='flex items-center justify-center'>
                <img className='rounded-full w-10' alt={"avatar"} src={photoURL} />
            </div>
        }, {
            title: 'Name',
            dataIndex: 'displayName',
            key: 'displayName',
            width: '25%',
            ...getColumnSearchProps('displayName'),
            sorter: (a, b) => a.displayName.length - b.displayName.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '25%',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => {
                if (!a.email || !b.email) return 0;
                return a.email.localeCompare(b.email);
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            width: '25%',
            dataIndex: 'isBlocked',
            key: 'isBlocked',
            render: isBlocked => <div className='flex items-center justify-center'>
                {isBlocked || <button onClick={() => handleBlock()}>Block </button>}
            </div>
        },
    ];

    return <Table columns={columns} dataSource={tableData?.data} />;
};
