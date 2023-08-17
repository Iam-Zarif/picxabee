import getPosts from '@/utils/getPosts';
import React from 'react';
import SinglePost from './SinglePost';

const Posts = async () => {
	const posts = await getPosts();
	console.log(posts);
	return (
		<>
			<div className='py-28'>
				{posts.map((post) => (
					<SinglePost key={post._id} post={post}></SinglePost>
				))}
			</div>
		</>
	);
};

export default Posts;
