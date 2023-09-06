import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const PATCH = async (request) => {
	try {
		const userId = request.nextUrl.searchParams.get('userId');
		const postId = request.nextUrl.searchParams.get('postId');
		await connect();

		if (postId && userId) {
			const user = await User.findById(userId);

			if (!user) {
				return new NextResponse(
					JSON.stringify({ message: 'User not found' }, { status: 404 })
				);
			}

			const hasBookMarked = user.save_items.some(
				(item) => item.toString() === postId
			);

			if (hasBookMarked) {
				return new NextResponse(
					JSON.stringify({ message: 'Post already saved' }, { status: 200 })
				);
			} else {
				user.save_items.push(postId);
				await user.save(); // Save the user with the updated save_items array.
				return new NextResponse(
					JSON.stringify(
						{ message: 'Post saved successfully' },
						{ status: 200 }
					)
				);
			}
		} else {
			return new NextResponse(
				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
			);
		}
	} catch (error) {
		return new NextResponse(
			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
		);
	}
};
