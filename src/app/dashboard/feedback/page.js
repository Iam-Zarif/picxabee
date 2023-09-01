"use client"
import Image from 'next/image';
import React from 'react'
import useSWR from 'swr';

const FeedbackPage = () => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: feedbacks } = useSWR('/api/feedbacks', fetcher, {
		refreshInterval: 1000,
	});
	console.log(feedbacks);
	// const { createdAt } = feedbacks;
	// console.log(createdAt);

	// const inputDate = new Date(feedbacks?.createdAt);
	// const options = { dateStyle: 'long', timeStyle: 'medium' };
	// const formattedDateTime = inputDate.toLocaleString(undefined, options);

	// console.log(formattedDateTime);

	return (
		<div className="w-10/12 mb-60 ml-auto mr-20 pt-8 mt-20 z-0">
			<div>
				{feedbacks?.map((feedback) => (
					<div
						key={feedback._id}
						className="collapse collapse-arrow join-item border border-base-300"
					>
						<input type="radio" name="my-accordion-4" checked="checked" />
						<div className="collapse-title text-xl font-medium">
							<div className="flex items-center">
								<Image
									src={feedback?.author?.profile_picture}
									width={50}
									height={50}
									alt="Picture of the author"
									className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
								/>
								<div>
									<p className="font-semibold capitalize">
										{feedback?.author?.name}
									</p>
									{/* <p className="font-light">{formattedDateTime}</p> */}
								</div>
							</div>
						</div>
						<div className="collapse-content">
							<h1 className="px-5 py-3">{feedback?.feedback}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeedbackPage;
