import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {

	try {
		const userEmail = request.nextUrl.searchParams.get('userEmail');
		await connect();
		const user = await User.findOne({ email: userEmail });
		return new NextResponse(JSON.stringify(user), { status: 200 });
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};