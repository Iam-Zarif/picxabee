'use client';
import PendingAdCard from '@/components/Dashboard/advertisements/PendingAdCard';
import useSWR from 'swr';



const AdvertisementsPage = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: adPosts,
		error,
		isLoading,
	} = useSWR('/api/ad', fetcher, {
		refreshInterval: 1000,
	});

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;

	

	console.log(adPosts);

	return (
		<div className="flex flex-wrap">
			{adPosts.map((adPost, index) => (
				<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mt-5">
					<PendingAdCard
						adPost={adPost}
						// title={donationPost?.content}
						// imageUrl={donationPost?.image}
						// userProfileImage={donationPost?.author?.profile_picture}
						// username={donationPost?.author?.name}
					/>
				</div>
			))}
		</div>
	);
};

export default AdvertisementsPage;
