// "use client"

import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import TopBar from '@/components/Dashboard/Topbar/Topbar';
import AdminRoute from '@/utils/AdminRoute';


import React from 'react';

const dashBoardLayout = ({ children }) => {
	return (
		<>
			<AdminRoute>
				<div className="grid lg:grid-cols-12  ">
					<div className="col-span-1 h-[100vh] hidden lg:block z-50">
						<Sidebar></Sidebar>
					</div>
					<div className="col-span-11  z-10 ">
						<TopBar></TopBar>

						{children}
					</div>

					{/* <div className="grid col-span-10">{children}</div> */}
				</div>
			</AdminRoute>
		</>
	);
};

export default dashBoardLayout;
