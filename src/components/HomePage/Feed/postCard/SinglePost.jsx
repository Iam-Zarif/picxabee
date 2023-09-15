'use client';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkCheck, BsThreeDots } from 'react-icons/bs';
import { MdOutlinePublic } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import CommentSection from './CommentSection';
import EditOption from './EditOption';
import SingleComment from './SingleComment';
import useAuth from '@/hooks/useAuth';

const SinglePost = ({ post }) => {
	const [expanded, setExpanded] = useState(false);

	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth();
	const { _id: id } = post;

	const isReacted = post.reactions.some((reaction) => {
		return reaction?.author?.email === user?.email;
	});

	const isButtonDisabled = post?.author?.email !== user?.email;

	// console.log(isReacted);

	const date1 = new Date(post?.createdAt);
	const options = { timeStyle: 'short', dateStyle: 'medium' };
	const formattedDateTime = date1.toLocaleString(undefined, options);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}

	const handleReaction = () => {
		const NewReaction = {
			id,
			author: {
				email: user?.email,
				name: user?.displayName,
				profile_picture: user?.photoURL,
			},
			reaction: 1,
		};
		// console.log(NewReaction);

		fetch('/api/posts', {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(NewReaction),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};

	const handleBookmark = () => {
		fetch(`/api/users/bookmarks?userEmail=${user?.email}&postId=${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				if (data.message == 'Post bookmarked successfully') {
					toast.success(data.message);
				} else {
					toast.error(data.message);
				}

				console.log('Received data:', data);
			})
			.catch((error) => {
				console.warning('Fetch error:', error);
			});
	};

	const wordLimit = 100;
	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	const renderContent = () => {
		const words = post?.content.split(' ');

		if (expanded || words.length <= wordLimit) {
			return (
				<div>
					<h1 className="py-3">
						{post?.content}
						{words.length > wordLimit && (
							<button className="text-xs text-gray" onClick={toggleExpand}>
								...Show Less
							</button>
						)}
					</h1>
				</div>
			);
		} else {
			const shortenedContent = words.slice(0, wordLimit).join(' ');
			return (
				<div>
					<h1 className="py-3">
						{shortenedContent}
						<button className="text-xs text-gray" onClick={toggleExpand}>
							...Show More
						</button>
					</h1>
				</div>
			);
		}
	};

	return (
		<div
			data-aos="fade-up"
			// border-2  border-gray border-opacity-20 rounded-md mb-3 p-5 dark:bg-black
			className="w-96 lg:w-full border-2 mx-auto border-gray border-opacity-20 rounded-md mb-3 p-5 dark:bg-black"
		>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center">
					<Image
						src={post?.author?.profile_picture}
						width={50}
						height={50}
						alt="Picture of the author"
						className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
					/>
					<div>
						<div className="flex gap-2">
							<p className="font-bold capitalize">{post?.author?.name}</p>
							<div className="text-gray mt-1">
								{post?.privacy === 'public' ? (
									<MdOutlinePublic />
								) : post?.privacy === 'private' ? (
									<RiGitRepositoryPrivateLine />
								) : (
									<BiDonateHeart />
								)}
							</div>
						</div>
						<p className="font-normal text-sm ">{formattedDateTime}</p>
					</div>
				</div>
				<div>
					{isButtonDisabled ? (
						<button disabled>
							<BsThreeDots
								size={28}
								className="text-gray-400 cursor-not-allowed"
							/>
						</button>
					) : (
						<button onClick={openModal}>
							<BsThreeDots
								size={28}
								className="hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
							/>
						</button>
					)}
				</div>
				<EditOption
					id={id}
					post={post}
					closeModal={closeModal}
					openModal={openModal}
					isOpen={isOpen}
				></EditOption>
			</div>
			{/* {post?.content && <h1 className="py-3">{post?.content}</h1>} */}
			{post?.content && renderContent()}

			{post?.image && (
				<Image
					src={post?.image}
					width={600}
					height={500}
					alt="Posted Image"
					className="object-contain border-none w-full h-[500px] py-3 rounded-md" //object-contain
				/>
			)}
			<div className="bg-gray bg-opacity-10 mt-7 py-2 mb-5 mx-auto rounded-md">
				<div className="flex justify-around">
					<div className="flex gap-1">
						{isReacted ? (
							<AiFillHeart
								onClick={handleReaction}
								size={28}
								className="hover:scale-110 duration-300 hover:cursor-pointer text-red"
							/>
						) : (
							<AiOutlineHeart
								onClick={handleReaction}
								size={28}
								className="hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
							/>
						)}
						<p className="font-semibold text-lg">
							{post?.reactions && post?.reactions.length}
						</p>
					</div>
					<div className="flex gap-1">
						<AiOutlineComment
							onClick={() => setOpen(!open)}
							size={28}
							className="hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
						/>
						<p className="font-semibold text-lg">
							{post?.comments && post?.comments.length}
						</p>
					</div>

					<BsBookmarkCheck
						onClick={handleBookmark}
						size={26}
						className="hover:scale-110 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
				</div>
			</div>

			<div>
				{post?.comments?.reverse().map((comment, i) => (
					<SingleComment
						key={i}
						comment={comment}
						id={post._id}
						post={post}
					></SingleComment>
				))}
			</div>
			<div className="">
				<CommentSection id={post._id} open={open}></CommentSection>
			</div>
		</div>
	);
};

export default SinglePost;
