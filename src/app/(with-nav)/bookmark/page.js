'use client';
import useSWR from 'swr';
import useAuth from '@/hooks/useAuth';
import React from 'react';
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';

const Bookmark = () => {
	const { user } = useAuth();
	console.log(user?.email);
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR(`/api/users/bookmarks?userEmail=${user?.email}`, fetcher, {
		refreshInterval: 1000,
	});
	console.log(posts);
	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	return (
		<div className='lg:w-1/2 mx-auto'>
            <div>
                <h1 text-primary>Bookmarked by {user?.name}</h1>
               < hr/>

            </div>
			<div>
				{posts &&
					posts.map((post) => (
						<SinglePost key={post._id} post={post}></SinglePost>
					))}
			</div>
		</div>
	);
};

export default Bookmark;
