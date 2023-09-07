import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

// export const PATCH = async (request) => {
// 	try {
// 		const userId = request.nextUrl.searchParams.get('userId');
// 		const postId = request.nextUrl.searchParams.get('postId');
// 		await connect();

// 		if (postId && userId) {
// 			const user = await User.findById(userId);

// 			if (!user) {
// 				return new NextResponse(
// 					JSON.stringify({ message: 'User not found' }, { status: 404 })
// 				);
// 			}

// 			// Check if postId is already in bookmarks
// 			const isAlreadyBookmarked = user.bookmarks.includes(postId);
// 			console.log(isAlreadyBookmarked);
// 			if (isAlreadyBookmarked) {
// 				return new NextResponse(
// 					JSON.stringify({ message: 'Post already saved' }, { status: 200 })
// 				);
// 			} else {
// 				// Push postId into bookmarks
// 				user.bookmarks.push(postId);

// 				// Save the user with the updated bookmarks array
// 				await user.save();

// 				return new NextResponse(
// 					JSON.stringify(
// 						{ message: 'Post saved successfully' },
// 						{ status: 200 }
// 					)
// 				);
// 			}
// 		} else {
// 			return new NextResponse(
// 				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
// 			);
// 		}
// 	} catch (error) {
// 				console.log(error.name, error.message);
// 				return NextResponse.json({ error: error.message });
// 	}
// };

// export const PUT = async (request) => {
// 	try {
// 		const bookmark = await request.json();
// 		const { userId, postId } = bookmark;
// 		await connect();

// 		if (postId && userId) {
// 			const user = await User.findById(userId);

// 			if (!user) {
// 				return new NextResponse(
// 					JSON.stringify({ message: 'User not found' }, { status: 404 })
// 				);
// 			}

// 			// Check if postId is already in bookmarks
// 			const isAlreadyBookmarked = user.save_items.includes(postId);

// 			if (isAlreadyBookmarked) {
// 				return new NextResponse(
// 					JSON.stringify({ message: 'Post already saved' }, { status: 200 })
// 				);
// 			} else {
// 				// Push postId into bookmarks
// 				user.save_items.push(postId);

// 				// Save the user with the updated bookmarks array
// 				await user.save();

// 				return new NextResponse(
// 					JSON.stringify(
// 						{ message: 'Post saved successfully' },
// 						{ status: 200 }
// 					)
// 				);
// 			}
// 		} else {
// 			return new NextResponse(
// 				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
// 			);
// 		}
// 	} catch (error) {
// 		return new NextResponse(
// 			JSON.stringify({ message: 'Internal server error' }, { status: 500 })
// 		);
// 	}
// };

export const PATCH = async (request) => {
	try {
		const userId = request.nextUrl.searchParams.get('userId');
		const postId = request.nextUrl.searchParams.get('postId');
		console.log(postId)

		if (!userId || !postId) {
			return new NextResponse(
				JSON.stringify({ message: 'Invalid request' }, { status: 400 })
			);
		}

		await connect();
		const user = await User.findById(userId);
		console.log(user);
		if (!user) {
			return new NextResponse(
				JSON.stringify({ message: 'User not found' }, { status: 404 })
			);
		}

		// Check if postId is already in bookmarks

// const hasLiked = post.reactions.some(
// 	(reaction) => reaction.author.email === userEmail
// );
// console.log(hasLiked);

		// const isAlreadyBookmarked = user.bookmarks?.some((bookmark)=> bookmark === postId);
		user.bookmarks.push(postId);
		console.log(user.bookmarks)
		const isAlreadyBookmarked = user.bookmarks?.includes(postId);

		console.log(isAlreadyBookmarked);

		if (isAlreadyBookmarked) {
			return new NextResponse(
				JSON.stringify({ message: 'Post already saved' }, { status: 200 })
			);
		} else {
			// Push postId into bookmarks
			user.bookmarks.push(postId);

			// Save the user with the updated bookmarks array
			await user.save();

			return new NextResponse(
				JSON.stringify({ message: 'Post saved successfully' }, { status: 200 })
			);
		}
	} catch (error) {
				console.log(error.name, error.message);
				return NextResponse.json({ error: error.message });
	}
};
