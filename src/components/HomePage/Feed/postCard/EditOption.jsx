'use client';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import EditPost from './EditPost';

const MyModal = ({ id, closeModal, isOpen, post }) => {
	const [editPost, setEditPost] = useState(false);
	const router = useRouter()

	const removePost = async (id) => {

		const confirmed = confirm('Are you sure?');

		if (confirmed) {

			fetch(`/api/recycle?id=${id}`, {
				method: 'POST'
			})
				.then(res => res.json())
				.then(async () => {

					const res = await fetch(`/api/posts?id=${id}`, {
						method: 'DELETE',
					});

					if (res.ok) {
						router.refresh();
					}
				})
		}
	};
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={closeModal}
					onClick={() => setEditPost(false)}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black">
									{!editPost && (
										<ul className="text-center font-semibold space-y-3 ">
											<li
												onClick={() => setEditPost(!editPost)}
												className="bg-[#f1f5f9] dark:bg-gray rounded-sm hover:bg-slate-200 py-2 hover:scale-105 duration-300 hover:text-primary-color"
											>
												Edit Post
											</li>
											{/* <li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-2 hover:scale-105 duration-300 text-red-500">
												Unfollow
											</li>
											<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-2 hover:scale-105 duration-300">
												Add to favorites
											</li>

											<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-2 hover:scale-105 duration-300 pb-3">
												Copy link
											</li> */}
											<li className="bg-[#f1f5f9] dark:bg-gray rounded-sm hover:bg-slate py-2 hover:scale-105 duration-300 hover:text-red">
												<Link
													className=""
													onClick={() => removePost(id)}
													href={`/`}
												>
													Delete
												</Link>
											</li>
										</ul>
									)}
									{editPost && (
										<EditPost
											post={post}
											closeModal={closeModal}
											setEditPost={setEditPost}
										></EditPost>
									)}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
export default MyModal;