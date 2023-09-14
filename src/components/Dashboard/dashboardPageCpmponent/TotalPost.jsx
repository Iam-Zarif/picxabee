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
		<div className=' flex-1 lg:px-4 lg:py-6 py-5  bg-blue bg-opacity-30 rounded-md flex items-center justify-center lg:justify-start'>
			<div className="text-white font-semibold text-start space-y-4 pl-6">
				<p className="text-sm"><span className=''>Total Posts</span></p>
				<div className="flex items-center justify-between gap-x-3">
				
				<HiOutlineCreditCard className="text-3xl"/>
				<div className="text-3xl  "><p>{posts?.length}</p> </div>
				</div>
			</div> 
		</div>
	);
}

export default TotalPost;