'use client'
import Image from 'next/image';
import { BsBellFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import {  ImShare2 } from 'react-icons/im';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';


const TopBar = () => {
	const {user} = useAuth()
	// console.log(user)
	return (
		<>
			<div className="h-20  glass  px-28 flex justify-end lg:gap-96  items-center">
				{/* <div>
					<div className="group relative hidden h-full w-full items-center md:flex lg:w-64">
						<div className="absolute flex cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden">
							<svg
								fill="none"
								className="relative h-5 w-5"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div className="">
							<FaSearch className="text-white absolute z-50 top-3 left-3 " />
							<input
								type="text"
								className=" relative w-full placeholder-white rounded-2xl glass bg-slate-600  py-2 pl-10 pr-4 leading-normal text-white opacity-70 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
								placeholder="Search"
							/>
						</div>
					</div>
				</div> */}
				<div className="flex justify-end items-center gap-6">
					{/* <ImShare2
						size={25}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<BsFillPlusCircleFill
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<BsBellFill
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/> */}
					<Link href="/Profile">
						<Image
							src={user?.photoURL}
							width={40}
							height={40}
							alt="User Image"
							className="h-10 w-10 object-cover border rounded-full"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default TopBar;