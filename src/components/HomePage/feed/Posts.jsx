import SinglePost from './SinglePost';
import usePosts from '@/Hooks/Posts';

const getData = async () => {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};



const Posts = async () => {
		const posts = await getData();
		console.log(posts);

	return (
		<>
			<div className='pb-28 pt-12'>
				{posts.map((post) => (
					<SinglePost key={post._id} post={post}></SinglePost>
				))}
			</div>
		</>
	);
};

export default Posts;
