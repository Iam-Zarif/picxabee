"use client";

import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/navigation";
import DonationCard from "./DonationCard";

const DonationCards = () => {  
	const router = useRouter();
  // const{ data } =useFetchData(`/api/donation`)
  // console.log(data)

  const { data } = useFetchData("/api/donation?currentStatus=approved");
  console.log(data);

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
		<div className="">
			{donations.map((donation, index) => (
				<DonationCard
					key={index}
					title={donation.title}
					imageUrl={donation.imageUrl}
					price={donation.price}
				/>
			))}
		</div>
	);
};

export default DonationCards;
