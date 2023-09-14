'use client';
import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import useSWR from 'swr';

const TotalPostChart = () => {
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

	// console.log(posts);
	let postCountByDate = {};

	posts.forEach((post) => {
		const createdAt = new Date(post.createdAt);
		const dateKey = createdAt.toISOString().split('T')[0];

		if (postCountByDate[dateKey]) {
			postCountByDate[dateKey]++;
		} else {
			postCountByDate[dateKey] = 1;
		}
	});

	const postCountArray = Object.entries(postCountByDate).map(
		([date, post]) => ({
			date,
			post,
		})
	);

	// const postCountArray = [
	// 	{ date: '02/10/23', count: 50 },
	// 	{ date: '08/10/23', count: 0 },
	// 	{ date: '15/10/23', count: 20 },
	// 	{ date: '23/10/23', count: 75 },
	// 	{ date: '30/10/23', count: 100 },
	// ];

	// console.log(postCountArray);

	return (
		<ResponsiveContainer width="100%" maxHeight={300} height={250} className="ml-8 lg:ml-0">
			<LineChart
				width={500}
				height={300}
				data={postCountArray}
				margin={{
					top: 30,
					right: 30,
					left: 20,
					bottom: 0,
				}}
				className="bg-red bg-opacity-5 rounded-md"
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="post"
					stroke="#8884d8"
					fill="#8884d8"
					fillOpacity={0.3}
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default TotalPostChart;
