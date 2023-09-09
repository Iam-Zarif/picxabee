"use client"
import useSWR from 'swr';
import {
  HiOutlineCreditCard
} from "react-icons/hi";
import useFetchData from '@/hooks/useFetchData';

const TotalPost = () => {

	    const { data: posts, error, isLoading } = useFetchData('/api/posts');


	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;

  return (
		<div className='flex-1 px-4 py-6 bg-blue bg-opacity-30 rounded-md flex items-center justify-start'>
			<div className="text-white font-semibold text-start space-y-4 pl-6">
				<p className="text-sm">Total Posts</p>
				<div className="flex items-center justify-between gap-x-3">
				
				<HiOutlineCreditCard className="text-3xl"/>
				<p className="text-3xl">{posts?.length}</p>
				</div>
			</div> 
		</div>
	);
}

export default TotalPost;