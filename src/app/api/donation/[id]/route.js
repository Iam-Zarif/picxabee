
// import Donation from '@/models/Donation';
// import connect from '@/utils/db';
// import { NextResponse } from 'next/server';

// // Update Donation Status
// export const PUT = async (request, { params }) => {
// 	const { id } = params;
// 	const {  DonatePostStatus } = await request.json();

// 	await connect();

// 	await Donation.findByIdAndUpdate(id, {
// 		$push: {
// 			status: DonatePostStatus,
// 		},
// 	});
// 	return NextResponse.json(
// 		{ message: 'status updated successfully' },
// 		{ status: 200 }
// 	);
// };