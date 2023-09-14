"use client"

import useFetchData from '@/hooks/useFetchData';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#D9E8F5', '#7CC494', '#F23838', '#A7C5C5', '#D9A0A0', '#A7C5C5'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function TotalUserChart() {

    const { data: users } = useFetchData('/api/uservisualization')

    const data = [
        {
            name: 'Day 7',
            uv: users?.length > 6 ? (users && users[users.length - 7].count) : 0
        },
        {
            name: 'Day 6',
            uv: users?.length > 5 ? (users && users[users.length - 6].count) : 0
        },
        {
            name: 'Day 5',
            uv: users?.length > 4 ? (users && users[users.length - 5].count) : 0
        },
        {
            name: 'Day 4',
            uv: users?.length > 3 ? (users && users[users.length - 4].count) : 0
        },
        {
            name: 'Day 3',
            uv: users?.length > 2 ? (users && users[users.length - 3].count) : 0
        },
        {
            name: 'Day 2',
            uv: users?.length > 1 ? (users && users[users.length - 2].count) : 0
        },
        {
            name: 'Today',
            uv: users?.length > 0 ? (users && users[users.length - 1].count) : 0
        },
    ];

    return (
        <ResponsiveContainer width="100%" maxHeight={300} height={250} className="ml-8 lg:ml-0">
            <BarChart
            width={700}
            height={300}
            data={data}
            margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}
            className='bg-black bg-opacity-5 rounded-md barChart'
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    );
}
