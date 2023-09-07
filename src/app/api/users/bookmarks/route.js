import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';


export const PATCH = async (request) => {
	try {
		const userEmail = request.nextUrl.searchParams.get('userEmail');
		const postId = request.nextUrl.searchParams.get('postId');

		if (!userEmail || !postId) {
			return new NextResponse(
				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
			);
		}

		await connect();
		const user = await User.findOne({ email: userEmail });
		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: 'User not found' }, { status: 404 })
			);
		}

		const isAlreadyBookmarked = user.bookmarks.includes(postId);

		console.log(isAlreadyBookmarked);

		if (isAlreadyBookmarked) {
			return new NextResponse(
				JSON.stringify({ message: 'Post already saved' }, { status: 200 })
			);
		} else {
			user.bookmarks.push(postId);
			await user.save();

			return new NextResponse(
				JSON.stringify(
					{ message: 'Post bookmarked successfully' },
					{ status: 200 }
				)
			);
		}
	} catch (error) {
		console.log(error.name, error.message);
		return NextResponse.json({ error: error.message });
	}
};
