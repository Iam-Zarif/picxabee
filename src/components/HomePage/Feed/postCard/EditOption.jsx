'use client'
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function MyModal({ openModal, closeModal, isOpen }) {
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
									<ul className="text-center font-semibold space-y-2">
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300 text-red-500">
											Unfollow
										</li>
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300">
											Add to favorites
										</li>
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300">
											Copy link
										</li>
										<li className="bg-gray-100 rounded-sm hover:bg-slate-200 py-3 hover:scale-105 duration-300">
											Cancel
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
