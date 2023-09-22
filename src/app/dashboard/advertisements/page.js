'use client';
import PendingAdCard from '@/components/Dashboard/advertisements/PendingAdCard';
import useSWR from 'swr';
import Loading from '../activities/loading';



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
	if (isLoading) return <div><Loading/> </div>;

	

	console.log(adPosts);

	return (
		<>
			{/* <div className="w-fit mx-auto mt-5 mb-10 ml-16 lg:ml-0">
				<p className="text-primary-color font-bold lg:text-3xl text-xl text-center  border-b-2 px-3">
					Pending advertisements
				</p>
			</div> */}
			<div className="flex flex-wrap lg:w-10/12 justify-end lg:justify-center lg:p-0 pr-5 lg:mx-auto">
				{adPosts.map((adPost, index) => (
					<div
						key={index}
						className="w-9/12 sm:w-1/2 md:w-1/3 lg:w-1/4 py-2 lg:px-2 mt-5"
					>
						<PendingAdCard adPost={adPost} />
					</div>
				))}
			</div>
		</>
	);
};

export default AdvertisementsPage;
