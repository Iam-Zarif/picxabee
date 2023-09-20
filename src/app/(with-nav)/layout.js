import PrivateRoute from "@/utils/PrivateRoute";

export default function NavLayout({ children }) {

	return (
		<section className="">
			{/* Include shared UI here e.g. a header or sidebar */}
			{/* <Navbar></Navbar> */}

			<PrivateRoute>
				<div className="px-2  lg:px-10 dark:text-white">{children}</div>
			</PrivateRoute>

		</section>
	);
}