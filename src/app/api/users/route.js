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
	try {
		const userId = request.nextUrl.searchParams.get('userId');
		const postId = request.nextUrl.searchParams.get('postId');
		await connect();

		let savePost;
		if (postId && userEmail) {
			// Check if the user has already liked the post
			const user = await User.findById(userId);

			if (!user) {
				return new NextResponse(
					JSON.stringify({ message: 'User not found' }, { status: 404 })
				);
			}
			const hasSaved = user.save_items.some((item) => item._id === postId);
			console.log(hasSaved);

			if (hasLiked) {
				
			} else {
				user.save_items.push(postId);
			}
		}
	} catch (error) {
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		);
	}
};
