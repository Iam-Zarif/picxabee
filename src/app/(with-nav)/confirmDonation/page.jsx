"use client"
import Navbar from '@/components/Navbar/Navbar';
import EditProfileModal from '@/components/OwnProfile/EditProfileModal';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
   
    const imageUrl = 'https://i.ibb.co/X2q6ckZ/confirm-donation.png';
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const onSubmit = async (data) => {
        
        const payments = {
            author: {
                profile_picture: user?.photoURL,
                email: user?.email,
                name: user?.displayName,
              },
            email: data?.email,
            address: data?.address,
            number: data?.number,
            amount: 50
        };
        try {
            const res = await fetch("api/payments", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payments),
            });
      
            if (res.ok) {
              
            } else {
              console.error("Error submitting feedback.");
      
            }
            setShowModal(false)
            toast.success("Payment Success");
            router.push('/paymentHistory');

          } catch (error) {
            console.error("An error occurred:", error);
            
          }
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
                    onClick={() => setShowModal(true)}
                >
                    Confirm Donation
                </button>

                {/* Modal */}
                <EditProfileModal isVisible={showModal} onClose={() => setShowModal(false)}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white p-2 rounded">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    {...register("email")}
                                    type="text"
                                    defaultValue={user?.email}
                                    name="email"
                                    readOnly
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Current Address</label>
                                <input
                                    {...register("address")}
                                    type="text"
                                    name="address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    {...register("number")}
                                    type="text"

                                    name="number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-primary-color rounded-md hover:bg-primary-color-dark focus:outline-none focus:ring"
                            >
                                Confirm Donation
                            </button>
                        </div>
                    </form>
                </EditProfileModal>
            </div>
        </>
    );
};

export default ConfirmationPage;
