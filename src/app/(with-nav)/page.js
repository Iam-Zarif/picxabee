"use client"
import DonationCards from "@/components/HomePage/Donation/DonationCards";
import Feed from "@/components/HomePage/Feed/Feed";
import RightSideBar from "@/components/HomePage/RighSidebar/RightSideBar";
import LeftSideBar from "@/components/HomePage/leftSidebar/LeftSideBar";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);
	return (
		<>
		{isLoading ? <section className=" text-center"><Loading className=""/></section> : <>
		<Navbar/>
		<div className="my-container xl:py-24 py-20 grid lg:grid-cols-4 lg:gap-5">
			{/* <div className="hidden lg:block"> */}
			{/* <LeftSideBar /> */}
			{/* </div> */}

			<div className="hidden lg:block">
				<DonationCards />
			</div>
			<div className="col-span-2">
				<Feed />
			</div>

			<div className="hidden lg:block">
				<RightSideBar />
			</div>
		</div>
		</>}
		</>
	);
}
