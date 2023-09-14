"use client"

import React from 'react';
import PendingDonationCard from './PendingDonationCard';
import useSWR from 'swr';

const PendingDonationPage = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: donationPosts, error, isLoading } = useSWR('/api/donation', fetcher, {
    refreshInterval: 1000,
  });

  // Checking if there's an error or if the data is still loading
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // Filter the donation posts based on criteria
  // const pendingDonationPosts = donationPosts.filter((post) => post?.privacy === 'Donation');

  console.log(donationPosts)

  return (
    <div className="flex flex-wrap">
      {donationPosts.map((donationPost, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mt-5">
          <PendingDonationCard
            donationPost={donationPost}
            title={donationPost?.content}
            imageUrl={donationPost?.image}
            userProfileImage={donationPost?.author?.profile_picture}
            username={donationPost?.author?.name}

          />
        </div>
      ))}
    </div>
  );
};

export default PendingDonationPage;