import React from 'react';

const SingleComment = ({ comment }) => {
	console.log(comment);
	return (
		<div className='flex gap-2'>
			<p className='font-bold'>{comment.userId}</p>
			<p>{comment.comment}</p>
		</div>
	);
};

export default SingleComment;
