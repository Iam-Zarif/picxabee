import React from 'react';
import Image from 'next/image';

const SingleComment = ({ comment, id }) => {
	console.log(comment?._id)
	// console.log(id)
	const deleteComment = () =>{
		
	}
	return (
	
			<div className="flex gap-2 pb-2">
				<Image
					src={comment?.author?.profile_picture}
					width={50}
					height={50}
					alt="Picture of the author"
					className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
				/>
				<div className="flex items-center gap-3">
					<p className="font-bold">{comment?.author?.name}</p>

					<p className="font-normal">{comment?.comment}</p>
				</div>
			</div>
	
	);
};

export default SingleComment;
