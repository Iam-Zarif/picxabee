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
	// const { user } = useAuth();
	// const { data: loggedInUser } = useFetchData(`/api/loggedInUser?userEmail=${user?.email}`);
	// const router = useRouter();
	// useEffect(() => {
	// 	if (loggedInUser?.role === 'user') {
	// 		router.push("/");
	// 	}
	// }, [loggedInUser?.role, router]);
	// ---------------------------------------sorry to interrupt- from Zarifff---------------------------------------

	return (
		<>
			<DashboardPageComponent />
		</>
	);
};

export default DashboardPage;
