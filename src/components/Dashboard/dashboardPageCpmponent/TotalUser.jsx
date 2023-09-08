"use client"

import useFetchData from '@/hooks/useFetchData';
import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';

const TotalUser = () => {

    const { data, error, isLoading } = useFetchData('/api/users')

    return (
        <div className='h-[150px] bg-red bg-opacity-30 rounded-md flex items-center justify-start'>
        <div className="text-white font-semibold text-start space-y-4 pl-6">
            <p className="text-sm">Total Users</p>
            <div className="flex items-center justify-between gap-x-3">
            
            <HiOutlineUsers className="text-3xl"/>
            <p className="text-3xl">{data?.length}</p>
            </div>
        </div> 
    </div>
    );
};

export default TotalUser;