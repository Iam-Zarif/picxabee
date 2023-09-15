'use client';
import Image from 'next/image';
import Loading from '../loading';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const FeedbackPage = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: feedbacks } = useSWR('/api/feedbacks', fetcher, {
		refreshInterval: 1000,
	});
	// console.log(feedbacks);

	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	const formatDate = (createdAt) => {
		const inputDate = new Date(createdAt);
		const options = { dateStyle: 'long', timeStyle: 'medium' };
		const formattedDateTime = inputDate.toLocaleString(undefined, options);
		return formattedDateTime;
	};

	return (
		<div className="w-8/12 mb-60 ml-auto mr-40 pt-8 mt-20 z-0">
			{isLoading ? (
				<>
					<div className="">
						<Loading />
					</div>
				</>
			) : (
				<>
					<div>
						{feedbacks?.map((feedback) => (
							<Disclosure key={feedback._id}>
								{({ open }) => (
									<>
										<Disclosure.Button
											className="flex w-full justify-between rounded-md bg-teal-100 bg-opacity-25 border border-gray ml-20 lg:ml-0
										px-4 py-2 text-left text-sm font-medium text-teal-900 hover:bg-teal-200 hover:bg-opacity-25 focus:outline-none focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-75"
										>
											<div className="flex items-center">
												<Image
													src={feedback?.author?.profile_picture}
													width={50}
													height={50}
													alt="Picture of the author"
													className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
												/>
												<div>
													<p className="font-semibold text-lg capitalize">
														{feedback?.author?.name}
													</p>
													<p className="font-light text-base">
														{formatDate(feedback?.createdAt)}
													</p>
												</div>
											</div>{' '}
											<ChevronUpIcon
												className={`${
													open ? 'rotate-180 transform' : ''
												} h-5 w-5 text-teal-500`}
											/>
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-teal-200 bg-opacity-25 rounded-md border-gray">
											<h1 className="px-5 py-3">{feedback?.feedback}</h1>{' '}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default FeedbackPage;
