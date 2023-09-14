'use client';
import React from 'react';
import useSWR from 'swr';
import { VscFeedback } from 'react-icons/vsc';


const TotalFeedback = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data,
		error,
		isLoading,
	} = useSWR('/api/feedbacks', fetcher, {
		refreshInterval: 1000,
	});

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;

	// console.log(data);

	return (
		<div className="flex-1 px-4 py-6 bg-red bg-opacity-30 rounded-md flex items-center justify-center lg:justify-start">
			<div className="text-white font-semibold text-start md:text-start space-y-4 pl-6">
				<div className='flex flex-col lg:items-start items-center space-y-4'>
				<p className="text-sm">Total Feedbacks</p>
				<div className="flex items-center gap-x-3">
					<VscFeedback className=" text-3xl" />
					<p className="text-3xl">{data?.length}</p>
				</div>
				</div>
			</div>
		</div>
	);
};

export default TotalFeedback;
