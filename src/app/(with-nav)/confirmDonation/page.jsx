"use client"
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React from 'react';

const ConfirmationPage = () => {
  
    const imageUrl = 'https://i.ibb.co/X2q6ckZ/confirm-donation.png';

    const handleConfirmDonation = () => {
        console.log('Donation confirmed');
    };

    return (
        <>
            <Navbar />

            <div className="text-center mt-20">

                <Image
                    src={imageUrl}
                    alt="Confirmation"
                    width={400} 
                    height={300} 
                    className="max-w-md mx-auto mb-4"
                />

                {/* Heading */}
                <h1 className="text-2xl font-semibold mb-4">Confirm Your Donation</h1>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                    Thank you for your generous donation. Please add your additional information to confirm your donation.
                </p>

                {/* Confirm Donation Button */}
                <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md hover:bg-primary-color-dark focus:outline-none focus:ring"
                    onClick={handleConfirmDonation}
                >
                    Confirm Donation
                </button>
            </div>
        </>
    );
};

export default ConfirmationPage;
