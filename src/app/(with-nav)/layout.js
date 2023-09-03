import Navbar from "@/components/Navbar/Navbar";




export default function NavLayout({children}) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Navbar></Navbar>
			<div className="py-28 mx-5 dark:text-white">{children}</div>
		</section>
	);
}