"use client"
import useSWR from 'swr';

const TotalPost = () => {

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR('/api/posts', fetcher, {
		refreshInterval: 1000,
	});

	if (error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;

  return (
		<div className='h-[150px] bg-blue bg-opacity-10 rounded-md flex items-center justify-center'>
			<h3 className="text-2xl font-semibold">
				Total Posts: {posts?.length}
			</h3>
		</div>
	);
}

export default TotalPost