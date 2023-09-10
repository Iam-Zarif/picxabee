import React from 'react';
import Image from 'next/image';

const PendingDonationCard = ({ title, imageUrl }) => {
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
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="flex justify-between">
            <button className="text-white hover:text-primary-color hover:bg-white bg-primary-color  py-3 shadow-sm hover:shadow-primary-color font-semibold px-3 rounded-xl">
              Approve
            </button>
            <button className="btn-primary text-white px-4 py-2 rounded-full">
              Deny
            </button>
          </div>
        </div>
      </div>
    );
};

export default PendingDonationCard;