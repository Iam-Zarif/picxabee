import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import socialmedia from './socialmedia.json';
import useSWR from 'swr';
import Image from 'next/image';

const Ad = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: adPosts,
		error,
		isLoading,
	} = useSWR('/api/ad/adApproved', fetcher, {
		refreshInterval: 1000, // Adjust the refresh interval as needed
	});

	const [randomAdIndex,  setRandomAdIndex] = useState(0);

	// Function to change the random ad index
	const changeRandomAd = () => {
		if (adPosts && adPosts.length > 0) {
			const newIndex = Math.floor(Math.random() * adPosts.length);
			setRandomAdIndex(newIndex);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(changeRandomAd, 10000); 
		return () => clearInterval(intervalId);
	}, [adPosts]);

	return (
		<div className="max-w-[300px] h-52">
			{adPosts && adPosts.length > 0 ? (
				<Image
					src={adPosts[randomAdIndex]?.image}
					alt="Advertise Image"
					// layout="fill"
					height={20}
					width={24}
					className="lg:w-[300px] h-52  rounded-md bg-black"
				/>
			) : (
				<div>
					<Lottie animationData={socialmedia} />
				</div>
			)}
		</div>
	);
};

export default Ad;

{
	/* <Image
				src={adPosts?.[randomAdIndex]?.image}
				alt=""
				layout="fill"
				objectFit="cover"
			/> */
}
{
	/* <div>
        <Lottie animationData={socialmedia}></Lottie>
      </div> */
}
