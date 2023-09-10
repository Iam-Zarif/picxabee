"use client"
import UserRow from "@/components/Dashboard/Users/UserRow";
import DashboardPageComponent from "@/components/Dashboard/dashboardPageCpmponent/DashboardPageComponent";
import TotalUser from "@/components/Dashboard/dashboardPageCpmponent/TotalUser";
import TotalUserChart from "@/components/Dashboard/dashboardPageCpmponent/TotalUserChart";
import useAuth from "@/hooks/useAuth";
import useFetchData from "@/hooks/useFetchData";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
	// ---------------------------------------sorry to interrupt- from Zarifff---------------------------------------
	const { user } = useAuth();
	const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
	const router = useRouter();
	useEffect(() => {
		if (loggedInUser?.role === 'user') {
			router.push("/");
		}
	}, [loggedInUser?.role, router]);
	// ---------------------------------------sorry to interrupt- from Zarifff---------------------------------------

	return (
		<>
			{/* <div className="grid grid-cols-4 gap-10 m-10 text-center">

				<TotalUser />


				<div className="bg-blue bg-opacity-10 h-[150px] rounded-md flex items-center justify-center">
					<h3 className="text-2xl font-semibold">Total User: 29</h3>


				</div>
				<div className="bg-red bg-opacity-10 h-[150px] rounded-md flex items-center justify-center">
					<h3 className="text-2xl font-semibold">Total User: 55</h3>


				</div>
				<div className="bg-blue bg-opacity-30 h-[150px] rounded-md flex items-center justify-center">
					<h3 className="text-2xl font-semibold">Total User: 28</h3>

				</div>
			</div>

			<div className="grid grid-cols-5 gap-10 m-10">
				<div className="col-span-3">
					<TotalUserChart />
				</div>
				<div className="col-span-2"></div>
			</div> */}

			<DashboardPageComponent />
		</>
	);
};

export default DashboardPage;
