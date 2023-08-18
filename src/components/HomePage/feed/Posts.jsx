import getPosts from '@/utils/getPosts';
import React from 'react';
import SinglePost from './SinglePost';

const Posts = async () => {
	const posts = await getPosts();
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
