'use client';
import React from 'react';
import TotalUser from './TotalUser';
import TotalUserChart from './TotalUserChart';
import TotalPost from './TotalPost';
import TotalPostChart from './TotalPostChart';
import TotalFeedback from './TotalFeedback';

const DashboardPageComponent = () => {
	return (
		<>
			<div className="flex items-center md:items-center md:flex-row flex-col justify-between md:space-y-0 space-y-8 mx-6 py-10 gap-x-5 cards-container">
				<div className="card-box">
					<TotalUser />
				</div>
				<div className="card-box">
					<TotalPost />
				</div>

				<div className="card-box">
					<TotalFeedback />
				</div>
			</div>

			<div className="flex flex-col xl:flex-row gap-5 items-center justify-center mx-6">
				<div className="basis-full xl:basis-1/2">
					<TotalUserChart />
				</div>
				<div className="basis-full xl:basis-1/2">
					<TotalPostChart />
				</div>
			</div>
		</>
	);
};

export default DashboardPageComponent;
