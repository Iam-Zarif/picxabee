import React from 'react';
import Image from 'next/image';
import { RiDeleteBin2Line } from 'react-icons/ri';
import useAuth from '@/hooks/useAuth';
const SingleComment = ({ comment, id }) => {
	const { user } = useAuth();
	const postId = id;
	const commentId = comment?._id;
	// console.log(comment?._id)
	// console.log(id)
	const DeleteActive = comment?.author?.email !== user?.email;
	// console.log(DeleteActive);

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
		<div className="flex py-2 last:pb-4 justify-between">
			<div className="flex  gap-2 last:pb-4 items-center">
				<Image
					src={comment?.author?.profile_picture}
					width={40}
					height={40}
					alt="Picture of the author"
					className="rounded-full h-10 w-10 object-cover border p-1"
				/>
				<p className="text-sm font-bold break-keep">{comment?.author?.name}</p>
				<h1 className="text-normal break-all text-gray-400">{comment?.comment}</h1>
			</div>

			<button
				disabled={DeleteActive}
				onClick={() => handleDeleteComment(postId, commentId)}
			>
				<RiDeleteBin2Line className={`text-gray hover:text-red`} size={18} />
			</button>
		</div>
	);
};

export default SingleComment;
