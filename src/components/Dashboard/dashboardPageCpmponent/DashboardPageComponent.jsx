import React from 'react';
import TotalUser from './TotalUser';
import TotalUserChart from './TotalUserChart';
import TotalPost from './TotalPost';
import TotalPostChart from './TotalPostChart';

const DashboardPageComponent = () => {
    return (
        <>
            {/*<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 m-10 text-center my-container"> */}
        <div className="flex items-center md:items-center md:flex-row flex-col justify-between md:space-y-0 space-y-8 mx-6 py-10 gap-x-5">
                <TotalUser />

                <TotalPost />


                <TotalPost />

                <TotalUser />

               


               {/* <div className="bg-red bg-opacity-10 h-[150px] rounded-md flex items-center justify-center">
                    <h3 className="text-2xl font-semibold">Total User: 55</h3>
                </div>

                <div className="bg-blue bg-opacity-30 h-[150px] rounded-md flex items-center justify-center">
                    <h3 className="text-2xl font-semibold">Total User: 28</h3>
                </div>*/}

            </div>

           {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-x-10 m-10">
                <div className="col-span-1 md:col-span-3 w-full">
                    <TotalUserChart />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <TotalPostChart />
                </div>
            </div>*/}
             <div className="flex flex-col xl:flex-row items-center justify-center mx-6">
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