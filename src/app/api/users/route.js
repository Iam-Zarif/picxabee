import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		await connect();
		const users = await User.find();
		return new NextResponse(JSON.stringify(users), { status: 200 });
	} catch (err) {
		return new NextResponse('User Fetch Problems', { status: 500 });
	}
};

export const POST = async (request) => {

	try {
		const body = await request.json();
		const newUser = new User(body);

		// console.log(body);
		// console.log(newUser);
		await connect();
		await newUser.save();
		return new NextResponse(
			{ message: 'User saved in database' },
			{ status: 201 }
		);
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};

export const PATCH = async (request) => {
	const id = request.nextUrl.searchParams.get('id');
	const role = await request.json();

	try {
		await connect();
		await User.findByIdAndUpdate(id, role);

		return NextResponse.json({ message: 'user role updated' }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'updated failed' }, { status: 500 });
	}
};
