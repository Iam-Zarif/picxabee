'use client';
import useSWR from 'swr';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';

const Bookmark = () => {
	const { user } = useAuth();
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR(`/api/users/bookmarks?userEmail=${user?.email}`, fetcher, {
		refreshInterval: 1000,
	});
	// console.log(posts);
	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	return (
		<div className="lg:w-1/2 mx-auto mt-8">
			<div>
				<h1 className="text-primary-color font-bold text-3xl text-center">
					Bookmarked by {user?.displayName}
				</h1>
				<hr className="w-[70%] h-5 text-primary-color pb-10 font-bold mx-auto " />
			</div>
			{/* <div>
				{posts &&
					posts?.map((post) => (
						<SinglePost key={post._id} post={post}></SinglePost>
					))}
			</div> */}
			<div>
				{Array.isArray(posts) && posts.length > 0 ? (
					posts.map((post) => (
						<SinglePost key={post._id} post={post}></SinglePost>
					))
				) : (
					<p>No posts available.</p>
				)}
			</div>
		</div>
	);
};

export default Bookmark;
