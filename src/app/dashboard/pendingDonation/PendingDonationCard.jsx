"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const PendingDonationCard = ({ title, imageUrl, userProfileImage, username, donationPost }) => {
  const router = useRouter()

  const handleApproveClick = (donationPost) => {
    fetch(`/api/donation?id=${donationPost._id}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ status: 'approved' })
		})
			.then((res) => res.json())
			.then(() => {
				toast.success('updated post status')
				router.refresh()
			});

}

const handleDenyClick = (donationPost) => {
  fetch(`/api/donation?id=${donationPost._id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: 'denied' })
  })
    .then((res) => res.json())
    .then(() => {
      toast.success('post status updated')
      router.refresh()
    });
}
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out">
      <div className="relative h-40">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <Image
              height={10}
              width={10}
              src={userProfileImage}
              alt="User Profile"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <h2 className="text-xl font-semibold">{username}</h2>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex justify-between">
          <button
            onClick={() => handleApproveClick(donationPost)}
            className="text-white hover:text-primary-color hover:bg-white bg-primary-color py-3 shadow-sm hover:shadow-primary-color font-semibold px-3 rounded-xl">
            Approve
          </button>
          <button
         onClick={() => {
          handleDenyClick(donationPost)
         }}
            className="text-red dark:hover:text-red hover:text-white hover:bg-red dark:hover:bg-black bg-white py-3 border-red border dark:bg-red dark:text-white shadow-primary-color font-semibold px-3 rounded-xl">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingDonationCard;