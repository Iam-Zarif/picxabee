import React from 'react'
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
		<div>
			<p className="font-bold text-3xl font-sans ">
				Total Posts: {posts?.length}
			</p>
		</div>
	);
}

export default TotalPost