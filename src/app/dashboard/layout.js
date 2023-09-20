import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import TopBar from '@/components/Dashboard/Topbar/Topbar';
import PrivateRoute from '@/utils/PrivateRoute';


import React from 'react';

const dashBoardLayout = ({ children }) => {
	return (
		<>
			<PrivateRoute>
				<div className="grid lg:grid-cols-12  ">
					<div className="col-span-1 lg:h-[100vh]  z-50">
						<Sidebar></Sidebar>
					</div>
					<div className="col-span-11  z-10 ">
						<TopBar></TopBar>

						{children}
					</div>

					{/* <div className="grid col-span-10">{children}</div> */}
				</div>
			</PrivateRoute>
		</>
	);
};

export default dashBoardLayout;
