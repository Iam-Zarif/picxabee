// 'use client';
// import useSWR from 'swr';

// const DashboardPage = () => {
// 	const fetcher = (...args) => fetch(...args).then((res) => res.json());
// 	const { data: users } = useSWR('/api/users', fetcher, {
// 		refreshInterval: 1000,
// 	});
// 	console.log(users);


//   const postFetcher = (...args) => fetch(...args).then((res) => res.json());
// 	const {
// 		data: posts,
// 		error,
// 		isLoading,
// 	} = useSWR('/api/posts', postFetcher, {
// 		refreshInterval: 1000,
// 	});

// 	 const feedbackFetcher = (...args) => fetch(...args).then((res) => res.json());
// 		const {
// 			data: feedbacks,
// 		} = useSWR('/api/posts', postFetcher, {
// 			refreshInterval: 1000,
// 		});
// console.log(posts)
// 	return (
// 		// <div className="flex gap-5 w-10/12 ">
// 		<div className="w-10/12 mb-60 ml-auto mr-20 pt-8 mt-20 z-0 flex justify-between">
// 			<div className="w-80 h-64 glass shadow-xl rounded-lg flex justify-center items-center">
// 				<p className="font-bold font-sans text-3xl">
// 					Total Users: {users?.length}
// 				</p>
// 			</div>
// 			<div className="w-80 h-64 glass shadow-xl rounded-lg flex justify-center items-center">
// 				<p className="font-bold text-3xl font-sans ">
// 					Total Posts: {posts?.length}
// 				</p>
// 			</div>
// 			<div className="w-80 h-64 glass shadow-xl rounded-lg flex justify-center items-center">
// 				<p className="font-bold text-3xl font-sans ">
// 					Total Feedback: {feedbacks?.length}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default DashboardPage;
