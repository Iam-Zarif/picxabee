import React from 'react';
import DonationCard from './DonationCard';

const DonationCards = () => {

  const donations = [
    {
      title: 'Project A',
      imageUrl: 'https://i.ibb.co/z81C6nJ/donate1.png',
      price: 10,
    },
    {
      title: 'Project B',
      imageUrl: 'https://i.ibb.co/FqSRmnw/donatess.png',
      price: 20,
    },
    // Add more donation items as needed
  ];
  return (

    <div className="p-4">
      {

        donations.map((donation, index) => (
          <DonationCard
            key={index}
            title={donation.title}
            imageUrl={donation.imageUrl}
            price={donation.price}
          />
        ))

      }
    </div>

  );
};

export default DonationCards;