'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  AiOutlineComment } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';

const EditPost = ({ post, closeModal }) => {
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
		<div data-aos="fade-up" className="lg:px-0 border-2 rounded-md mb-3">
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
			{/* {post?.content && <h1 className="px-5 py-3">{post?.content}</h1>} */}
			<form onSubmit={handleSubmit(onSubmit)}>
				{post?.content && (
					<textarea
						{...register('content')}
						defaultValue={post?.content}
						label="content"
						className="w-full min-h-96 px-5 py-3"
					/>
				)}
				<div className="flex justify-end m-5">
					<button
						type="submit"
						className="btn-primary px-4 py-2 cursor-pointer"
					>
						Post
					</button>
				</div>
			</form>
			{post?.image && (
				<Image
					src={post?.image}
					width={600}
					height={500}
					alt="Posted Image"
					className="object-contain border-none w-full h-[500px]" //object-contain
				/>
			)}
			{/* <div className="flex justify-end px-5 py-3 ">
				<div className="flex gap-3">
					<AiOutlineComment
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<PiShareFat
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<p className="font-semibold text-lg">
						{post?.reactions && post?.reactions.length}
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default EditPost;
