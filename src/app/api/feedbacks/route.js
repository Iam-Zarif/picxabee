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

export const POST = async (req) => {
	try{
		const {feedbackUser}  =await req.json();
	console.log("the Users",feedbackUser)
	return new NextResponse(JSON.stringify(feedbackUser), { status: 200 });
	}
	catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
}