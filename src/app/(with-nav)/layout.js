import Navbar from "@/components/Navbar/Navbar";




export default function NavLayout({children}) {
	
	return (
		<section className="">
			{/* Include shared UI here e.g. a header or sidebar */}
			{/* <Navbar></Navbar> */}
			<div className="px-2   dark:text-white">{children}</div>
			
		</section>
	);
}