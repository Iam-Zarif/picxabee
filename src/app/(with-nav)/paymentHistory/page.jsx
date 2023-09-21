import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';

const PaymentHistoryPage = () => {
   
    const paymentHistory = [
        {
            id: 1,
            user: {
                photoUrl: 'https://i.ibb.co/L8bp3dL/cat5.png', 
                name: 'User 1',
                email: 'user1@example.com',
                phoneNumber: '123-456-7890',
            },
            amount: '$100.00',
            date: '2023-09-20',
        },
        {
            id: 2,
            user: {
                photoUrl: 'https://i.ibb.co/L8bp3dL/cat5.png', 
                name: 'User 2', 
                email: 'user2@example.com',
                phoneNumber: '987-654-3210',
            },
            amount: '$75.50',
            date: '2023-09-19',
        },
        
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-8 mt-20">
                <h1 className="text-2xl font-semibold mb-4">Donation History</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
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
                            {paymentHistory.map((payment) => (
                                <tr key={payment.id}>
                                    <td className="py-2 px-4 border flex items-center"> {/* Combined cell */}
                                        <div className="w-12 h-12 relative mr-2">
                                            <Image
                                                src={payment.user.photoUrl}
                                                alt={`User ${payment.id}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
                                        <span>{payment.user.name}</span> {/* Display user's name */}
                                    </td>
                                    <td className="py-2 px-4 border">{payment.user.email}</td>
                                    <td className="py-2 px-4 border">{payment.user.phoneNumber}</td>
                                    <td className="py-2 px-4 border">{payment.amount}</td>
                                    <td className="py-2 px-4 border">{payment.date}</td>
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
