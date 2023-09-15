import React from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const UserRowSm = ({ user, index }) => {
	const router = useRouter();

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// This is done by zarif, it can be updated by the author

	// This is done by zarif, it can be updated by the author

	const date1 = new Date(user.createdAt);
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDateTime = date1.toLocaleString(undefined, options);

	const handlerUserStatusAdmin = (user) => {
		fetch(`/api/users?id=${user._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ role: 'admin' }),
		})
			.then((res) => res.json())
			.then(() => {
				toast.success('updated user role');
				router.refresh();
			});
	};

	const handlerUserStatusUser = (user) => {
		fetch(`/api/users?id=${user._id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ role: 'user' }),
		})
			.then((res) => res.json())
			.then(() => {
				toast.success('updated user role');
				router.refresh();
			});
	};

	return (
		<>
			<tr className="text-sm text-left ">
				<th>{index + 1}</th>
				<td className="text-sm w-6/12">{user.name}</td>
				<td className="text-sm w-6/12">
					<button
						onClick={openModal}
						className="px-5 py-3 bg-primary-color rounded-md"
					>
						details
					</button>
					<Transition appear show={false} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-10"
							open={isOpen}
							onClose={closeModal}
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
								<div className="fixed inset-1 bg-black bg-opacity-25" />
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
										<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900"
											>
												{user?.name}
											</Dialog.Title>
											<div className="mt-2">
												<p>User Email: {user?.email}</p>
												<p>Joined: {formattedDateTime}</p>

												<h1 className="capitalize">User Role: {user?.role}</h1>
												<h1>
													<details className="dropdown">
														<summary className="cursor-pointer capitalize">
															{user?.role}
														</summary>
														<ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-400 rounded-md cursor-pointer">
															<li onClick={() => handlerUserStatusAdmin(user)}>
																Admin
															</li>
															<li onClick={() => handlerUserStatusUser(user)}>
																User
															</li>
														</ul>
													</details>
												</h1>
											</div>

											<div className="mt-4">
												<button
													type="button"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}
												>
													Close
												</button>
											</div>
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</td>
			</tr>
		</>
	);
};

export default UserRowSm;
