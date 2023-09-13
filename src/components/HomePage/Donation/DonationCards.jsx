"use client";

import React, { useState } from "react";
import DonationCard from "./DonationCard";
import useFetchData from "@/hooks/useFetchData";

const DonationCards = () => {
	// const{ data } =useFetchData(`/api/donation`)
	// console.log(data)

	const { data } = useFetchData("/api/donation?currentStatus=approved");
	console.log(data)

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
