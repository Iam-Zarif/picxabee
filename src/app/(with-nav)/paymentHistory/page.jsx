"use client";
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import useSWR from "swr";

const PaymentHistoryPage = () => {

    // const paymentHistory = [
    //     {
    //         id: 1,
    //         user: {
    //             photoUrl: 'https://i.ibb.co/L8bp3dL/cat5.png', 
    //             name: 'User 1',
    //             email: 'user1@example.com',
    //             phoneNumber: '123-456-7890',
    //         },
    //         amount: '$100.00',
    //         date: '2023-09-20',
    //     },
    //     {
    //         id: 2,
    //         user: {
    //             photoUrl: 'https://i.ibb.co/L8bp3dL/cat5.png', 
    //             name: 'User 2', 
    //             email: 'user2@example.com',
    //             phoneNumber: '987-654-3210',
    //         },
    //         amount: '$75.50',
    //         date: '2023-09-19',
    //     },

    // ];

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: paymentHistory } = useSWR("/api/payments", fetcher, {
        refreshInterval: 1000,
    });

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8 mt-20">
                <h1 className="text-2xl font-semibold mb-4">Donation History</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border ">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-2 px-4 border">User</th> {/* Combined header */}
                                <th className="py-2 px-4 border">Email</th>
                                <th className="py-2 px-4 border">Phone Number</th>
                                <th className="py-2 px-4 border">Amount</th>
                                <th className="py-2 px-4 border">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory?.map((payment) => (
                                <tr key={payment._id}>
                                    <td className="py-2 px-4 border flex items-center"> {/* Combined cell */}
                                        <div className="w-12 h-12 relative mr-2">
                                            <Image
                                                src={payment?.author?.profile_picture}
                                                alt={`User ${payment._id}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <span>{payment?.author?.name}</span> {/* Display user's name */}
                                    </td>
                                    <td className="py-2 px-4 border">{payment?.author?.email}</td>
                                    <td className="py-2 px-4 border">{payment?.number}</td>
                                    <td className="py-2 px-4 border">{payment?.amount}$</td>
                                    <td className="py-2 px-4 border">{payment?.updatedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PaymentHistoryPage;
