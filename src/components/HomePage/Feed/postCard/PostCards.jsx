'use client';
import useSWR from 'swr';
import SinglePost from './SinglePost';
import FeedCardLoader from '@/components/loader/FeedCardLoader';
import useLoggedInUser from '@/hooks/useLoggedInUser';

const PostCards = () => {

	

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
