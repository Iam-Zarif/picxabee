//hridoy vaiya/////

import React from 'react';
import PendingDonationCard from './PendingDonationCard';

const pendingDonationPage = () => {
    const pendingDonations = [
        {
          title: 'Donation 1',
          imageUrl: 'https://i.ibb.co/NZY39DY/donations1.png', 
        },
        {
          title: 'Donation 2',
          imageUrl: 'https://i.ibb.co/bdR7z6Q/donations2.png',
        },
        {
          title: 'Donation 3',
          imageUrl: 'https://i.ibb.co/HPCZ68K/donations5.png',
        },
        {
          title: 'Donation 4',
          imageUrl: 'https://i.ibb.co/s5dgjpL/conationss4.png',
        },
        {
          title: 'Donation 5',
          imageUrl: 'https://i.ibb.co/jZvy2tb/donations6.png',
        },
        {
          title: 'Donation 6',
          imageUrl: 'https://i.ibb.co/Ptw34Gy/dontss6.png',
        },
      ];

    return (
        <div className="flex flex-wrap">
        {pendingDonations.map((donation, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <PendingDonationCard
              title={donation.title}
              imageUrl={donation.imageUrl}
            />
          </div>
        ))}
      </div>
    );
};

export default pendingDonationPage;