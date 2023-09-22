import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';

export default function AllReactions({
	reactions,
	closeAllReactionsModal,
	openAllReactionsModal,
	isReactionListOpen,
}) {
	return (
		<>
			<Transition appear show={isReactionListOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeAllReactionsModal}
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
						<div className="fixed inset-0 bg-black bg-opacity-25" />
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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-primary-color dark:text-black text-center"
									>
										Reactions By
									</Dialog.Title>
									<div className="mt-2">
										<div>
											{reactions?.map((reaction, i) => (
												<div key={i}>
													<p className="pt-2 px-3 lg:px-0">
														<span className="text-base font-bold break-keep pr-2">
															<Link
																href={`/userProfile/${reaction?.author?.email}`}
															>
																{reaction?.author?.name}
															</Link>
														</span>

														{/* <span className="text-sm  text-black-bg-secondary dark:text-white">
															{comment?.comment}
														</span> */}
													</p>
												</div>
											))}
										</div>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeAllReactionsModal}
										></button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
