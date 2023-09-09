'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  AiOutlineComment } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';

const EditPost = ({ post, closeModal, setEditPost }) => {
	const { register, handleSubmit } = useForm();
	const { _id: id } = post;

	const onSubmit = (data) => {
		console.log(data.content);
		const newContent = {
			id,
			content: data.content,
		};
		console.log(newContent);

		fetch(`/api/posts`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newContent),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}

				return res.json();
			})
			.then((data) => {
				closeModal();
				setEditPost(false);
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};

	const date1 = new Date(post?.createdAt);
	const options = { timeStyle: 'short', dateStyle: 'medium' };
	const formattedDateTime = date1.toLocaleString(undefined, options);
	return (
		<div
			data-aos="fade-up"
			className="lg:px-0 border-[1px] border-gray rounded-md mb-3 p-5 dark:bg-black dark:text-white  dark:border-white"
		>
			<div className="w-full flex items-center justify-between p-2">
				<div className="flex items-center">
					<Image
						src={post?.author?.profile_picture}
						width={50}
						height={50}
						alt="Picture of the author"
						className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
					/>
					<div>
						<p className="font-bold capitalize">{post?.author?.name}</p>
						<p className="font-normal text-sm ">{formattedDateTime}</p>
					</div>
				</div>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{post?.content && (
					<textarea
						{...register('content')}
						defaultValue={post?.content}
						label="content"
						className="w-full min-h-96 px-5 py-3 border-none hover:border-none focus:outline-none"
					/>
				)}
				<div className="flex justify-end m-5">
					<button
						type="submit"
						className="cursor-pointer btn
                       rounded-md hover:bg-primary-color hover:text-white border-2 border-primary-color hover:border-white font-semibold capitalize    dark:border-white dark:hover:bg-black"
					>
						Post
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditPost;