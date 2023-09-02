<<<<<<< HEAD

import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';
import TopBar from '@/components/Dashboard/Topbar/Topbar';
=======
import Sidebar from '@/components/Dashboard/sidebar/Sidebar';
import TopBar from '@/components/Dashboard/topbar/Topbar';
>>>>>>> 42b05337efbee1e48180e09f796026944e6bf6c1
import React from 'react';

const dashBoardLayout = ({ children }) => {
	return (
		<>
			<div className="layout min-h-screen  grid lg:grid-cols-12 ">
				<div className="grid col-span-1  mr-12 z-50">
					<Sidebar></Sidebar>
				</div>
				<div className="grid col-span-11  z-10 ">
					<TopBar></TopBar>
<<<<<<< HEAD

=======
>>>>>>> 42b05337efbee1e48180e09f796026944e6bf6c1
					{children}
				</div>

				{/* <div className="grid col-span-10">{children}</div> */}
			</div>
		</>
	);
};

export default dashBoardLayout;
