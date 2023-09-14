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
			<div className="flex  flex-col gap-5 lg:flex-row px-20 mt-5 lg:mt-10 lg:px-0 ">
				<div className="w-2/3 mx-auto lg:w-full">
					<TotalUser />
				</div>
				<div className="w-2/3 mx-auto  lg:w-full">
					<TotalPost />
				</div>

				<div className="w-2/3 mx-auto  lg:w-full">
					<TotalFeedback />
				</div>
			</div>

        
        {/* <TotalUser /> */}

        {/* <div className="bg-red bg-opacity-10 h-[150px] rounded-md flex items-center justify-center">
                    <h3 className="text-2xl font-semibold">Total User: 55</h3>
                </div>

                <div className="bg-blue bg-opacity-30 h-[150px] rounded-md flex items-center justify-center">
                    <h3 className="text-2xl font-semibold">Total User: 28</h3>
                </div>*/}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-x-10 m-10">
                <div className="col-span-1 md:col-span-3   lg:w-full">
                    <TotalUserChart />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <TotalPostChart />
                </div>
            </div>
			{/* <div className="flex flex-col xl:flex-row gap-5 items-center justify-center mx-6">
			<div className="flex flex-col xl:flex-row gap-5 items-center justify-center mx-6">
				<div className="basis-full xl:basis-1/2">
					<TotalUserChart />
				</div>
				<div className="basis-full xl:basis-1/2">
					<TotalPostChart />
				</div>
			</div>
			</div> */}
		</>
	);
};

export default DashboardPageComponent;
