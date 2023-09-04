'use client';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';

const EditPost = ({post}) => {
		const [editPost, setEditPost] = useState(false);

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
					{/* <BsThreeDots
						size={28}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/> */}
				
			</div>
			{post?.content && <h1 className="px-5 py-3">{post?.content}</h1>}
			{/* <h1 className="min-h-64 px-5 py-3">{post?.content}</h1> */}
			{post?.image && (
				<Image
					src={post?.image}
					width={600}
					height={500}
					alt="Posted Image"
					className="object-contain border-none w-full h-[500px]" //object-contain
				/>
			)}
			<div className="flex justify-end px-5 py-3 ">
				<div className="flex gap-3">
					{/* <BsSave
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/> */}
					<AiOutlineComment
						onClick={() => setOpen(!open)}
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
			</div>

		</div>
	);
};

export default EditPost;
