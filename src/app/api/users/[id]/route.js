import User from '@/models/User';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const PUT = async (request, { params }) => {
	const { id } = params;
	console.log(id);
	const { newFollowers } = await request.json();
	console.log(newFollowers);

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
		// console.log(id, email);

		await connect();

		const specificUser = await User.findById(id);
		// console.log(specificUser);

		if (!specificUser) {
			return NextResponse.json({ message: 'USER NOT Found' }, { status: 404 });
		}

		specificUser.followers = specificUser.followers.filter(
			(follower) => follower.email !== email
		);

		await specificUser.save();
		return NextResponse.json(
			{ message: 'UnFollow Successfully' },
			{ status: 404 }
		);
	} catch (error) {
		console.log(error.message);
	}
};

// export const DELETE = async (request, { params }) => {
//   try {
//     const { id } = params;
//     const { email } = await request.json();

//     if (!id || !email) {
//       return NextResponse.json({ message: "Missing ID or  Email" }, { status: 400 });
//     }

//     await connect();

//     const user = await User.findById(id);

//     if (!user) {
//       return NextResponse.json({ message: "Post not found" }, { status: 404 });
//     }

//     const followIndex = User.followers.findIndex((follow) => follow.email === email);
//     if (followIndex === -1) {
//       return NextResponse.json({ message: "Comment not found" }, { status: 404 });
//     }

//     User.followers.splice(followIndex, 1);
//     await User.save();

//     return NextResponse.json({ message: "UnFollow" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// };
