"use client"
import React, { useState } from 'react';
import SingleComment from './SingleComment';
import { BsThreeDots } from 'react-icons/bs';
import { PiShareFat } from 'react-icons/pi';
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from 'react-icons/ai';
import { BsSave } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import CommentSection from './CommentSection';


const SinglePost = ({ post }) => {
const [react, setReact] = useState(false)
const [open, setOpen] = useState(false);
	const { _id, author, comments, reactedBy } = post;
	console.log(post);
	return (
		<div
			data-aos="fade-up"
			className="w-full lg:w-4/12 mx-auto px-8 lg:px-0 border-2 rounded-md mb-3"
		>
			<div className="w-full flex items-center justify-between  p-2">
				<div className="flex items-center">
					<Image
						src={author.photo}
						width={50}
						height={50}
						alt="Picture of the author"
						className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
					/>
					<p className="capitalize">{author?.username}</p>
				</div>
				<BsThreeDots
					size={28}
					className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
				/>
			</div>
			<Image
				src={author.photo}
				width={535}
				height={300}
				alt="Picture of the author"
				className="object-cover border"
			/>
			<div className="flex justify-between px-5 py-3">
				<div className="flex gap-3">
					{react ? (
						<AiOutlineHeart
							onClick={() => setReact(!react)}
							size={28}
							className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
						/>
					) : (
						<AiFillHeart
							onClick={() => setReact(!react)}
							size={28}
							className="hover:scale-125 duration-300 hover:text-red-400 hover:cursor-pointer text-red-500"
						/>
					)}

					<AiOutlineComment
						onClick={() => setOpen(!open)}
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<PiShareFat
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
				</div>
				<BsSave
					size={26}
					className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
				/>
			</div>
			<div className="px-5 pb-5 ">
				<div>
					<p>
						Liked by{' '}
						{reactedBy.length > 1 ? (
							<>
								<Link className="font-bold" href={`/user/${reactedBy[0]}`}>
									{reactedBy[0]}
								</Link>{' '}
								and
								<span className="font-bold"> others</span>
							</>
						) : (
							<Link href={`/user/${reactedBy[0]}`}>{reactedBy[0]}</Link>
						)}
					</p>
				</div>
				<h1 className="min-h-64">{post.post}</h1>
				{/* <p className="text-neutral-400 text-base">Add a comment...</p> */}
				<CommentSection open={open}></CommentSection>

				<div>
					{comments.map((comment, i) => (
						<SingleComment key={i} comment={comment}></SingleComment>
					))}
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
