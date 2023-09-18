
	/* eslint-disable jsx-a11y/alt-text */
	'use client';
	import useSWR from 'swr';
	import React, { useState } from 'react';
	import Image from 'next/image';
	import Suggestions from '@/components/HomePage/RighSidebar/Suggestions';
	import Navbar from '@/components/Navbar/Navbar';
	import DonationCards from '@/components/HomePage/Donation/DonationCards';
	import Link from 'next/link';
	import { HiOutlineChatAlt2 } from 'react-icons/hi';
	import { ClipLoader } from 'react-spinners';
	import useAuth from '@/hooks/useAuth';
	import Calendar from 'react-calendar';
	const calendarStyles = {
		border: '1px solid #e2e8f0',
		
		borderRadius: '8px',
		padding: '20px',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
		backgroundColor: 'white',
		
	};
	
	// Custom CSS for the current date
	const currentDateStyles = {
		backgroundColor: '#36d7b7',
		color: 'white',
		borderRadius: '50%',
	};
	const SearchPage = ({ searchParams }) => {
		
		const [value, onChange] = useState(new Date());
		const [seeMore, setSeeMore] = useState(false);
		const { user } = useAuth();
		const SeeMoreData = () => {
			setSeeMore(true);
		};
		const fetcher = (...args) => fetch(...args).then((res) => res.json());
		const { data } = useSWR('/api/users', fetcher, {
			refreshInterval: 1000,
		});
		const searchText = searchParams.userSearch;
		// console.log(data?.length);
		const filteredResults = data?.filter((user) =>
			user.name.replace(/\s+/g, '').toLowerCase().includes(searchText)
		);

		// console.log(filteredResults);

		const [loadingData, setLoading] = useState(false);
		const handleFollow = async (id, followingEmail, followingName) => {
			const newFollowers = {
				email: user?.email,
				name: user?.displayName,
			};

			const newFollowing = {
				name: followingName,
				email: followingEmail,
			};

			setLoading(true);

			try {
				const res = await fetch(`/api/users/${id}`, {
					cache: 'no-cache',
					method: 'PUT',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({ newFollowers }),
				});

				if (!res.ok) {
					throw new Error('Failed to Fetch');
				}

				router.refresh();
			} catch (error) {
				console.log(error.message);
			} finally {
				setLoading(false);
			}

			try {
				const res = await fetch(`/api/users/${user?.email}`, {
					cache: 'no-cache',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({ newFollowing }),
				});
				if (res.ok) {
				}
			} catch (error) {
				console.log(error.message);
			}
		};

		const handleUnFollow = async (id) => {
			setLoading(true);

			try {
				const res = await fetch(`/api/users/${id}`, {
					cache: 'no-cache',
					method: 'DELETE',
					body: JSON.stringify({ email: user?.email }),
				});

				if (!res.ok) {
					throw new Error('Failed to Fetch');
				}

				router.refresh();
			} catch (error) {
				console.log(error.message);
			} finally {
				setLoading(false);
			}
		};
		const loadingButton = (
			<div>
				<ClipLoader color="#36d7b7" size={15} />
			</div>
		);


		return (
			<>
				<Navbar />
				{/* Open the modal using document.getElementById('ID').showModal() method */}


				{/* <Link href="https://www.facebook.com/profile.php?id=100008273834246">
					facebook
				</Link> */}
				{/* You can open the modal using document.getElementById('ID').showModal() method */}
	<dialog id="my_modal_3" className="modal">
	<div className="modal-box">
		<form method="dialog">
		{/* if there is a button in form, it will close the modal */}
		<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div style={calendarStyles} className=' '>
		<Calendar
  onChange={onChange}
  value={value}
  tileClassName={({ date, view }) =>
    view === 'month' && date.toDateString() === new Date().toDateString()
      ? 'currentDate' // Apply the CSS class to the current date
      : null
  }
/>
		</div>
	</div>
	</dialog>
				{/*  */}
		


				<div className="flex lg:flex-row flex-col pb-20  items-center lg:items-start content-center justify-center gap-10 mt-28">
					{filteredResults?.length === 0 ? (
						'No User Found'
					) : (
						<div className="flex lg:flex-row flex-col-reverse lg:items-start  lg:gap-20 md:px-10 items-center  content-center">
							<div className=" mx-auto">
								<p className="lg:hidden text-center mt-10">
									Donate for The poors
								</p>
								<div className="lg:w-[400px]">
									<DonationCards />
								</div>
							</div>
							<div className="flex flex-col gap-2 lg:px-0 px-8">
								<p className="mb-2 text-3xl font-semibold">People</p>

								{filteredResults
									?.slice(0, seeMore ? filteredResults.length : 8)
									.map((u, index) => (
										<div
											key={index}
											className="border lg:gap-10 hover:bg-light-gray dark:hover:bg-black border-gray justify-between rounded-xl flex items-center px-5 py-2 "
										>
											<Link href={`/userProfile/${u?._id}`}>
												<div className="flex gap-2 items-center">
													<Image
														src={u?.profile_picture}
														height={50}
														width={50}
														className="rounded-full lg:w-10 lg:h-10 h-8 w-8"
													></Image>
													<h2 className="lg:font-bold font-normal text-sm lg:text-base">
														{' '}
														{u?.name}
													</h2>
												</div>
											</Link>

											{/* <div className="flex gap-5">
				<button className="flex items-center border-1 gap-2 border-1 border  px-2 py-1 rounded-md text-primary-color  border-primary-color hover:bg-primary-color hover:text-white"><span className='text-sm lg:block hidden'>Follow</span> <AiOutlinePlusCircle size={22}/></button>
				</div> */}
											<Link href={'/messages'}>
												<button className=" flex items-center border-1 gap-2 border-1 border  px-2 py-1 rounded-md text-primary-color  border-primary-color hover:bg-primary-color hover:text-white">
													<span className="lg:block hidden">Message</span>{' '}
													<HiOutlineChatAlt2 size={22} />
												</button>
											</Link>

											{/*  */}
											{loadingData ? (
												<>{loadingButton}</>
											) : (
												<>
													{u?.followers?.some(
														(follower) => follower?.email === user?.email
													) ? (
														<button
															className="text-sm font-bold text-red"
															onClick={() => handleUnFollow(u?._id)}
														>
															UnFollow
														</button>
													) : (
														<button
															className="text-sm font-bold text-blue dark:text-teal-200"
															onClick={() =>
																handleFollow(u?._id, u?.email, u?.name)
															}
														>
															Follow
														</button>
													)}
												</>
											)}
										</div>
									))}
								{!seeMore && (
									<div className="mx-auto mt-5 items-center gap-5 flex">
										<hr className="w-20" />
										<button
											onClick={SeeMoreData}
											className="  text-primary-color dark:hover:text-primary-color hover:text-white hover:bg-primary-color dark:hover:bg-black bg-white  py-3 border-primary-color border dark:bg-primary-color dark:text-white shadow-primary-color font-semibold px-3 rounded-xl"
										>
											See more
										</button>
										<hr className="w-20" />
									</div>
								)}
		


							</div>
						</div>
					)}

					<div className="mt-2 lg:block hidden">
						<Suggestions />
					</div>
				</div>
			</>
		);
	};

	export default SearchPage;
