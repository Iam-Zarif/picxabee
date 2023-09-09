'use client';
import React from 'react';
import useSWR from 'swr';


import { VscFeedback } from 'react-icons/hi';
const TotalFeedback = () => {
    const feedbackFetcher = (...args) => fetch(...args).then((res) => res.json());
		const { data: feedbacks } = useSWR('/api/feedbacks', feedbackFetcher, {
			refreshInterval: 1000,
		});
    return (
			<div>
				<div className="flex-1 px-4 py-6 bg-red bg-opacity-30 rounded-md flex items-center justify-start">
					<div className="text-white font-semibold text-start md:text-start space-y-4 pl-6">
						<p className="text-sm">Total Users</p>
						<div className="flex items-center justify-between gap-x-3">
							<VscFeedback className="text-3xl" />
							<p className="text-3xl">{feedbacks?.length}</p>
						</div>
					</div>
				</div>
			</div>
		);
};

export default TotalFeedback;