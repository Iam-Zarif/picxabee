'use client';
import useSWR from 'swr';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import PostCardLoader from '@/components/loader/PostCardLoader';
import Navbar from '@/components/Navbar/Navbar';

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
	if (error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div>
				<PostCardLoader />
			</div>
		);

	return (
		<>
		<Navbar/>
		<div className="lg:w-1/2 mx-auto mt-8">
			<div className="w-fit mx-auto">
				<p className="text-primary-color font-bold text-4xl text-center  border-b-2 px-3">
					Bookmarked by {user?.displayName}
				</p>
				{/* <hr className="w-fit text-primary-color h-1" /> */}
			</div>
			<div>
				{Array.isArray(posts) && posts.length < 0 ? (
					posts.map((post) => (
						<SinglePost key={post._id} post={post}></SinglePost>
					))
				) : (
					<div
						className="min-h-[calc(100vh-300px)] flex items-center justify-center text-red text-3xl w-full"
						style={{
							minHeight: 'calc(100vh - 300px)',
						}}
					>
						<p className="">No posts available.</p>
					</div>
				)}
			</div>
		</div>
		</>
	);
};

export default Bookmark;
