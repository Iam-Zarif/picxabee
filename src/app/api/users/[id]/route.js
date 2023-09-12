import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const PUT = async (request, { params }) => {
	const { id } = params;
	const { newFollowers } = await request.json();

	await connect();

	await User.findByIdAndUpdate(id, {
		$push: {
			followers: newFollowers,
		},
	});
	return NextResponse.json(
		{ message: 'Following Successfully' },
		{ status: 200 }
	);
};

export const DELETE = async (request, { params }) => {
	try {
		const { id } = params;
		const { email } = await request.json();

		await connect();
		const specificUser = await User.findById(id);

		if (!specificUser) {
			return NextResponse.json({ message: 'USER NOT Found' }, { status: 404 });
		}

		specificUser.followers = specificUser.followers.filter(
			(follower) => follower.email !== email
		);

		await specificUser.save();
		return NextResponse.json(
			{ message: 'Unfollow Successfully' },
			{ status: 404 }
		);
	} catch (error) {
		console.log(error.message);
	}
};
