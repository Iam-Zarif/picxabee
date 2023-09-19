"use client"
import useSWR from "swr";
import React from 'react';
import DonationCard from '@/components/HomePage/Donation/DonationCard';
import Navbar from "@/components/Navbar/Navbar";


const AllApprovedDonationPage = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: donationPosts } = useSWR("/api/donation", fetcher, {
        refreshInterval: 1000,
    });

    // Filter the donation posts based on criteria

    const approvedDonations = donationPosts && donationPosts?.filter(donationPost => donationPost.status === 'approved');
    return (
        <>

            <Navbar />
            <div className='my-container lg:mt-24'>

                <h3 className='text-2xl font-semibold rounded-md mb-5'>All Approved Donation</h3> <hr className='my-5' />

                <div className="grid grid-cols-3 gap-5">

                    <div className="p-4">
                        {

                            approvedDonations?.map((donation, index) => (
                                <DonationCard
                                    key={index}
                                    title={donation?.content}
                                    imageUrl={donation?.image}
                                    totalDonated={donation?.amount}
                                    userProfileImage={donation?.author?.profile_picture}
                                    username={donation?.author?.name}
                                />
                            ))

                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default AllApprovedDonationPage;