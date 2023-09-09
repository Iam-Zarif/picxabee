'use client';

import SinglePost from './SinglePost';
import useSWR from 'swr';
import PostCardLoader from '@/components/loader/PostCardLoader';
import FeedCardLoader from '@/components/loader/FeedCardLoader';
import useAuth from '@/hooks/useAuth';
import useFetchData from '@/hooks/useFetchData';

const PostCards = () => {
const { user } = useAuth();
console.log(user);

const { data } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
console.log(data)

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: posts,
		error,
		isLoading,
	} = useSWR('/api/posts', fetcher, {
		refreshInterval: 1000,
	});

	if (error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<div>
				<FeedCardLoader />
			</div>
		);

	// console.log(posts);




	return (
		<>




			<div className="pb-28 pt-12 mx-auto w-full">
				{posts &&
					posts
						?.reverse()
						.map((post) => (
							<SinglePost key={post._id} post={post}></SinglePost>
						))}
			</div>
		</>
	);
};

export default PostCards;
