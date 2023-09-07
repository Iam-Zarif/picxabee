'use client';
import SinglePost from './SinglePost';
import useSWR from 'swr';


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
	if (isLoading) return <div>loading...</div>;

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
