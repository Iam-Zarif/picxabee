'use client';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';

export default function MyModal({ id, openModal, closeModal, isOpen }) {
	const router = useRouter();
	console.log(id);

	const removePost = async (id) => {
		console.log(id);

		const confirmed = confirm('Are you sure?');

		if (confirmed) {
			const res = await fetch(
				`https://feed-silk.vercel.app/api/posts?id=${id}`,
				{
					method: 'DELETE',
				}
			);

			if (res.ok) {
				router.refresh();
			}
		}
	};
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
									<ul className="text-center font-semibold space-y-5">
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300 text-red-500">
											Unfollow
										</li>
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300">
											Add to favorites
										</li>

										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300 pb-3">
											Copy link
										</li>
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300">
											<Link
												className=""
												onClick={() => removePost(id)}
												href={`/`}
											>
												Delete
											</Link>
										</li>
									</ul>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
