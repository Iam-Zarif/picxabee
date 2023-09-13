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
	const body = await request.json();
	const newUser = new User(body);

	try {
		await connect();
		await newUser.save();
		return new NextResponse('User has been created', { status: 201 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};

export const PATCH = async (request) => {

	const id = request.nextUrl.searchParams.get('id');
	const role = await request.json()

	try {
		await connect();
		await User.findByIdAndUpdate(id, role);

		return NextResponse.json({ message: 'user role updated' }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: 'updated failed' }, { status: 500 });
	}
};
