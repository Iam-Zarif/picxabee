/* eslint-disable jsx-a11y/alt-text */
'use client';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Loading from './activities/loading';
import nishat from "../../../public/nishat.PNG"
import fatin from "../../../public/fatin.PNG"
import hridoy from "../../../public/rezwan.PNG"
import jahid from "../../../public/jahid.PNG"
import rezon from "../../../public/rezwan.PNG"
import tuhin from "../../../public/tuhin.PNG"



import Image from 'next/image';

const DashboardPage = () => {
	const [yesLoading, setYesLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setYesLoading(false);
    }, 2000); // Simulated 2-second delay
  }, []);
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: users } = useSWR('/api/users', fetcher, {
		refreshInterval: 1000,
	});
	console.log(users);


  const postFetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR('/api/posts', postFetcher, {
		refreshInterval: 1000,
	});

	 const feedbackFetcher = (...args) => fetch(...args).then((res) => res.json());
		const {
			data: feedbacks,
		} = useSWR('/api/posts', postFetcher, {
			refreshInterval: 1000,
		});
console.log(posts)
	return (
		// <div className="flex gap-5 w-10/12 ">
		<>
		
		{
			yesLoading ?<> <Loading/></>
			:
			<div className=''> 
			<div className='flex flex-col items-center w-1/2  ml-24	'>
			<p className='text-center text-3xl ml-12  name font-bold w-1/2 inline-block'>Welcome to picxabee</p>
			<hr className=' mx-auto w-1/2	  mt-2 shadow-md shadow-slate-800 pt-1 rounded-full'/>
			</div>
			<div className='flex justify-around  mb-20'>
				<div className="gap-x-6  mb-60  mr-20 pt-8 mt-20 z-0 flex justify-between">
			<div className=" px-16 py-5 shadow-slate-700 glass shadow-md rounded-lg flex justify-center items-center">
				<p className="font-bold font-sans text-xl">
					Total Users: {users?.length}
				</p>
			</div>
			<div className=" px-16 py-5 shadow-slate-700 glass shadow-md rounded-lg flex justify-center items-center">
				<p className="font-bold text-xl font-sans ">
					Total Posts: {posts?.length}
				</p>
			</div>
			
			<div className=" px-16 py-5 shadow-slate-700 glass shadow-md rounded-lg flex justify-center items-center">
				<p className="font-bold text-xl font-sans ">
					Total Feedback: {feedbacks?.length}
				</p>
			</div>

		</div>

		 <div className=''>
			<p className='text-center text-3xl font-semibold	'>Our admins</p>
			<hr className='w-1/5 mx-auto mt-2 shadow-md shadow-slate-800 pt-1 rounded-full'/>
			<div className='mt-10 flex flex-col gap-5'>
				
				
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-12 w-full rounded-2xl'>
<Image src={nishat} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Nishat Tasnim</p>
<p>Team Leader</p></div>

				</div>
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-4  rounded-2xl'>
<Image src={fatin} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Mostofa Fatin</p>
<p>jira Expert</p></div>

				</div>
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-4  rounded-2xl'>
<Image src={tuhin} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Tuhin Kanti Pal</p>
<p>Next Js expert</p></div>

				</div>
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-4  rounded-2xl'>
<Image src={rezon} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Rezon Faysal</p>
<p>Chat app expert</p></div>

				</div>
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-4  rounded-2xl'>
<Image src={jahid} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Jahid Hawladar</p>
<p>Git expert</p></div>

				</div>
				<div className='glass  bg-slate-700  flex gap-5 py-4 px-4  rounded-2xl'>
<Image src={hridoy} className='rounded-full  w-10 h-10'></Image>
<div className='text-white font-bold text-sm'><p>Hridoy Haque</p>
<p>Auth expert</p></div>

				</div>
			</div>
		</div> 
			</div>
			</div>
		}
		</>
	);
};

export default DashboardPage;
