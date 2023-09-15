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
		<div className="grid grid-cols-12 lg:mb-3 mb-2">
			<div className="col-span-1">
				<Image
					src={comment?.author?.profile_picture}
					width={40}
					height={40}
					alt="Picture of the author"
					className="rounded-full h-8 w-8 lg:h-10 lg:w-10 object-cover border"
				/>
			</div>
			<div className="col-span-10">
				<p className="pt-2 px-3 lg:px-0">
					<span className="text-base font-bold break-keep pr-2">
						{comment?.author?.name}
					</span>
					<span className="text-sm  text-black-bg-secondary dark:text-white">
						{comment?.comment}
					</span>
				</p>
			</div>
			<div className="col-span-1">
				<button
					disabled={DeleteActive}
					onClick={() => handleDeleteComment(postId, commentId)}
				>
					<RiDeleteBin2Line
						className={`text-gray hover:text-red ml-3  mt-4`}
						size={18}
					/>
				</button>
			</div>
		</div>
	);
};

export default SingleComment;
