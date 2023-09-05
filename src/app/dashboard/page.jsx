
const DashboardPage = () => {
	
	return (
		<>
		<div className="grid grid-cols-4 gap-10 mx-20 my-20 text-center">
			<div className="h-[150px] bg-red bg-opacity-10">
				<h3>Total User: 220k</h3>
			</div>

			
			<div className="bg-blue bg-opacity-10 h-[150px]">
			<h3>Total Post: 220k</h3>

			</div>
			<div className="bg-red bg-opacity-10 h-[150px]">
			<h3>Total Feedback: 22</h3>

			</div>
			<div className="border h-[150px]"></div>
		</div>

		<div className="grid grid-cols-5 gap-10 mx-20">
			<div className="col-span-3 border h-[350px]"></div>
			<div className="border  col-span-2 h-[350px]"></div>
		</div>
		</>
	);
};

export default DashboardPage;
