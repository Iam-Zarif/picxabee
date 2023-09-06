import React from 'react';
import Image from 'next/image';

const SingleComment = ({ comment, id }) => {
	console.log(comment?._id)
	// console.log(id)
	const deleteComment = () =>{
		
	}
	return (
	
			<div className="flex gap-2 pb-2 last:pb-4 items-center">
				<Image
					src={comment?.author?.profile_picture}
					width={40}
					height={40}
					alt="Picture of the author"
					className="rounded-full h-10 w-10 object-cover border p-1 ml-5"
				/>
				<div className="flex items-center gap-3">
					<p className="text-sm font-bold">{comment?.author?.name}</p>

					<p className="text-sm font-normal">{comment?.comment}</p>
				</div>
			</div>
	
	);
};

export default SingleComment;
