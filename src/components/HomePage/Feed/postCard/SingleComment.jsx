import React from 'react';
import Image from 'next/image';
import {RiDeleteBin2Line} from 'react-icons/ri';
const SingleComment = ({ comment, id }) => {
const postId = id;
const commentId = comment?._id;
	console.log(comment?._id)
	console.log(id)
	const handleDeleteComment = async (postId, commentId) => {
		// console.log(id);

		const confirmed = confirm('Are you sure?');

		if (confirmed) {
			try {
				const response = await fetch(
					`/api/posts/comments?postId=${postId}&commentId=${commentId}`,
					{
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				if (!response.ok) {
					const errorMessage = await response.text();
					throw new Error(errorMessage);
				}

				const data = await response.json();
				return data;
			} catch (error) {
				console.error('Error deleting comment:', error);
				throw error;
			}
		}
	};
		
	
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
			<button onClick={() => handleDeleteComment(postId, commentId)}>
				<RiDeleteBin2Line size={16} />
			</button>
		</div>
	);
};

export default SingleComment;
