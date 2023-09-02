'use client';
import SinglePost from './SinglePost';
import useSWR from 'swr';
// async function getData() {
// 	const res = await fetch('https://feed-silk.vercel.app/api/posts', {
// 		cache: 'no-store',
// 	});
// 	if (!res.ok) {
// 		throw new Error('Failed to fetch data');
// 	}
// 	return res.json();
// }

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

	// const posts = await getData();
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
