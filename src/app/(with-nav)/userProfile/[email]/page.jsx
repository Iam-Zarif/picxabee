'use client';
import SinglePost from '@/components/HomePage/Feed/postCard/SinglePost';
import Navbar from '@/components/Navbar/Navbar';
import useFetchData from '@/hooks/useFetchData';
import Image from 'next/image';
import React, { useState } from 'react';
import {
	FaFacebookSquare,
	FaGraduationCap,
	FaInstagramSquare,
	FaLinkedin,
	FaSchool,
} from 'react-icons/fa';
import { HiMiniNoSymbol, HiMiniPencilSquare } from 'react-icons/hi2';
import useSWR from 'swr';
import styles from '../userprofile.module.css';
import useAuth from '@/hooks/useAuth';
import EditProfileModal from '@/components/OwnProfile/EditProfileModal';
import { useForm } from 'react-hook-form';

const UserProfile = ({ params }) => {
	const { register, handleSubmit } = useForm();
	const { user } = useAuth();
	console.log(user);
	const email = params.email.replace('%40', '@');

	const { data } = useFetchData(`/api/userProfile/${email}`);

	console.log(data);

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const {
		data: ownPosts,
		error,
		isLoading,
	} = useSWR(`/api/profile?userEmail=${data?.singleUser?.email}`, fetcher);

	console.log('amar profile', data?.singleUser);

	const id = data?.singleUser?._id;

	console.log('Own id', id);

	const [showModal, setShowModal] = useState(false);

	// const onSubmit = (userData) => {
	// 	console.log('user data', userData);
	// 	const newProfileInfo = {

	// 		name: userData?.name,
	// 		bio: userData?.bio,

	// 	};
	// 	console.log('new data', newProfileInfo);

	// 	fetch(`/api/loggedInUser?id=${id}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(newProfileInfo),
	// 	})
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error('Network response was not ok');
	// 			}
	// 		})
	// 		.then((data) => {
	// 			console.log('Received data:', data);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Fetch error:', error);
	// 		});
	// };

	const onSubmit = (userData) => {
		const newProfileInfo = {
			name: userData?.name,
			bio: userData?.bio,
			information: {
				school: '',
				college: '',
				university: '',
				location: '',
				gender: '',
			},
		};

		fetch(`/api/loggedInUser?id=${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newProfileInfo),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				// Parse and return the JSON response
				return res.json();
			})
			.then((data) => {
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};

	return (
		<>
			<Navbar />

			<div className="my-container mt-20">
				<div className={`${styles.imageContainer} relative `}>
					<Image
						src="https://i.ibb.co/BKfFLsv/cost-bg.jpg"
						layout="fill"
						objectFit="cover"
						className={`rounded-md `}
						alt="cover photo"
					/>

					{user?.email !== email ? (
						<></>
					) : (
						<div className="absolute right-5 bottom-5">
							<HiMiniPencilSquare size={30} className="text-white" />
						</div>
					)}
				</div>

				<div>
					<div className="flex justify-between">
						<div className="flex">
							<div className=" mx-10 overflow-hidden -mt-16 z-40">
								<div className={`${styles.profilePic} bg-white rounded-md`}>
									<Image
										src={data?.singleUser?.profile_picture}
										layout="fill"
										objectFit="cover"
										alt="Profile Pic"
										className="h-40 w-40 rounded"
									/>

									{user?.email !== email ? (
										<></>
									) : (
										<div className="absolute bottom-1 right-1">
											<HiMiniPencilSquare size={20} className="text-white" />
										</div>
									)}
								</div>
							</div>

							<div className="text-left mt-3 w-2/4 opacity-80">
								<h3 className="text-2xl font-semibold">
									{data?.singleUser?.name}
								</h3>
								<h6 className="text-sm ">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Magni, error!
								</h6>
							</div>
						</div>

						<div className="flex items-center gap-3 mx-10">
							{/* <fafac */}
							<FaFacebookSquare size={30} className="text-[#0e8cf1]" />
							<FaInstagramSquare size={30} className="text-red opacity-50" />
							<FaLinkedin size={30} className="text-[#0a66c2] " />
						</div>
					</div>
				</div>

				<hr className="border my-10 opacity-20" />

				<div className="grid grid-cols-9 gap-5 mx-20">
					<div className="col-span-4 bg-primary-color bg-opacity-10 h-[300px] rounded-md p-5">
						<div className="flex justify-between">
							<h5 className="text-xl uppercase font-semibold mb-5">
								information
							</h5>

							{user?.email !== email ? (
								<></>
							) : (
								<div className="mt-3">
									<button onClick={() => setShowModal(true)}>
										{' '}
										<HiMiniPencilSquare size={20} />
									</button>
								</div>
							)}
						</div>

						<div>
							<p>
								<span className="font-semibold">Email:</span>{' '}
								{data?.singleUser?.email}
							</p>
							<p>
								<span className="font-semibold">Followers:</span>{' '}
								{data?.singleUser?.followers?.length}
							</p>
							<p>
								<span className="font-semibold">Following:</span>{' '}
								{data?.singleUser?.following?.length}
							</p>
						</div>

						<div className="mt-6">
							<p className="font-bold mb-1">Personal Information</p>
							<div className="flex gap-2 items-center">
								<FaGraduationCap size={20} />
								<p>
									Studies at{' '}
									<span className="font-semibold opacity-80">
										Govt. Bangabandhu College
									</span>
								</p>
							</div>
							<div className="flex gap-2 item-center">
								<FaSchool size={20} />
								<p>
									Went to{' '}
									<span className="font-semibold opacity-80">
										Alim Uddin High School
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="col-span-5">
						{ownPosts?.length < 1 ? (
							<h1 className="text-3xl opacity-80 flex justify-center items-center">
								<HiMiniNoSymbol /> Post is not Avaiable{' '}
							</h1>
						) : (
							ownPosts &&
							ownPosts?.map((post) => (
								<SinglePost key={post._id} post={post}></SinglePost>
							))
						)}
					</div>
				</div>
			</div>

			<EditProfileModal
				isVisible={showModal}
				onClose={() => setShowModal(false)}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="bg-white p-2 rounded">
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Username
							</label>
							<input
								{...register('name')}
								type="text"
								name="name"
								// defaultValue={loggedInUser?.name}

								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								Bio
							</label>
							<textarea
								{...register('bio')}
								name="bio"
								// defaultValue={loggedInUser?.bio}
								rows={3}
								className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								College Name
							</label>
							<input
								{...register('college')}
								type="text"
								name="college"
								// defaultValue={loggedInUser?.information?.college}

								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								School Name
							</label>
							<input
								{...register('school')}
								type="text"
								name="school"
								// defaultValue={loggedInUser?.information?.school}

								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-color"
							/>
						</div>
						<button
							type="submit"
							className="px-4 py-2 text-white bg-primary-color rounded-md hover:bg-primary-color-dark focus:outline-none focus:ring"
						>
							Save Changes
						</button>
					</div>
				</form>
			</EditProfileModal>
		</>
	);
};

export default UserProfile;
