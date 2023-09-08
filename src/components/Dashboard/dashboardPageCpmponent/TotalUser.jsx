"use client"

import useFetchData from '@/hooks/useFetchData';
import React from 'react';

const TotalUser = () => {

    const { data, error, isLoading } = useFetchData('/api/users')

    return (
        <div className="h-[150px] bg-blue-400 bg-opacity-10 rounded-md flex items-center justify-center">
            <h3 className="text-2xl font-semibold">Total User: {data?.length}</h3>
        </div>
    );
};

export default TotalUser;