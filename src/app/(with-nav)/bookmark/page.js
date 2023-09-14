'use client';
import useSWR from 'swr';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import PostCardLoader from '@/components/loader/PostCardLoader';
import BookmarkCard from '@/components/bookmarkPage/BookmarkCard';
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
		<div className="lg:w-1/2 mx-auto lg:mt-28 mt-20">
			<div className="w-fit mx-auto mb-10">
				<p className="text-primary-color font-bold lg:text-4xl text-xl text-center  border-b-2 px-3">
					Bookmarked by {user?.displayName}
				</p>
			</div>
			<div>
				{Array.isArray(posts) && posts.length > 0 ? (
					posts.map((post) => (
						<BookmarkCard key={post._id} post={post} />
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
