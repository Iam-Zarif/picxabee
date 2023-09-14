"use client"

import React from 'react';
import DonationCard from './DonationCard';
import useSWR from 'swr';

const DonationCards = () => {  
	const router = useRouter();
  // const{ data } =useFetchData(`/api/donation`)
  // console.log(data)

  const { data } = useFetchData("/api/donation?currentStatus=approved");
  console.log(data);

  const donations = [
    {
      title: "Project A",
      imageUrl: "https://i.ibb.co/z81C6nJ/donate1.png",
      price: 10,
    },
    {
      title: "Project B",
      imageUrl: "https://i.ibb.co/FqSRmnw/donatess.png",
      price: 20,
    },
    // Add more donation items as needed
  ];
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="p-4">
        {donations.map((donation, index) => (
          <DonationCard
            key={index}
            title={donation.title}
            imageUrl={donation.imageUrl}
            price={donation.price}
          />
        ))}
      </div>
      <button
        className="btn
                    rounded-md hover:bg-primary-color hover:text-white border-gray font-semibold lg:ml-5 capitalize dark:border-white dark:hover:bg-black"
					onClick={()=> router.push("/AllDonations")}
      >
        See more
      </button>
    </div>
  );
};

export default DonationCards;