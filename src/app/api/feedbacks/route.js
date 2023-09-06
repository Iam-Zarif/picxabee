
import Feedback from '@/models/Feedback';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		await connect();
		const feedbacks = await Feedback.find();

		return new NextResponse(JSON.stringify(feedbacks), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};
// Zarif 


// 
export const POST = async (req) => {
	try {
		await connect();
		const  feedback  = await req.json();
		
		await Feedback.create(feedback);
		return NextResponse.json({
			msg:"Feedback sent successfully",success: true,
		})
		// return new NextResponse(JSON.stringify({ message: 'Feedback Uploaded' }), {
		// 	status: 200,
		// });
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};

