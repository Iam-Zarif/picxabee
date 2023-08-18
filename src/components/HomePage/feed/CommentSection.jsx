"use client"
import React, { useState } from 'react';

const CommentSection = ({open}) => {
	const [comment, setComment] = useState('');

	const handleCommentChange = (event) => {
		setComment(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (comment.trim() !== '') {
			setComments([...comments, comment]);
			setComment('');
		}
	};

	return (
		<div className={`${ open ? " ": "hidden" }`}>
			<form onSubmit={handleSubmit}>
				<input
					value={comment}
					onChange={handleCommentChange}
					placeholder="Write a comment..."
					className="border-none focus:outline-none overflow-visible min-h-8 break-words text-gray-400"
				/>

				<button
					type="submit"
					className={`text-blue-500 font-normal ml-5 ${
						comment ? 'visible' : 'hidden'
					}`}
				>
					Post
				</button>
			</form>
		</div>
	);
};

export default CommentSection;
