"use client"
import Link from "next/link"
import React from 'react';
import DonationCard from './DonationCard';
import useSWR from 'swr';

const DonationCards = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: donationPosts, error, isLoading } = useSWR('/api/donation', fetcher, {
    refreshInterval: 1000,
  });

  // Checking if there's an error or if the data is still loading
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // Filter the donation posts based on criteria

  const approvedDonations = donationPosts && donationPosts?.filter(donationPost => donationPost.status === 'approved');
  const displayDonation = approvedDonations.slice(0, 2);

  console.log(displayDonation)
  return (
    <>
      <div className="">
        {

          displayDonation.map((donation, index) => (
            <DonationCard
              key={index}
              donation={donation}
              title={donation?.content}
              imageUrl={donation?.image}
              totalDonated={donation?.amount}
              userProfileImage={donation?.author?.profile_picture}
              username={donation?.author?.name}

            />
          ))

        }
      </div>
      <Link href="/allApprovedDonation">   <button
        className="btn rounded-md hover:bg-primary-color hover:text-white border-gray font-semibold lg:ml-5 capitalize dark:border-white dark:hover:bg-black"
      >
        See more
      </button></Link>
    </>


  );
};

export default DonationCards;    