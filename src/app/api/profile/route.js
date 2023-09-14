import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

// Get UserPost data

export const GET = async (request) => {
	try {
		const userEmail = request.nextUrl.searchParams.get('userEmail');
		console.log(userEmail);

		await connect();
		const posts = await Post.find({ 'author.email': userEmail });
		// console.log(posts);

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.error(error.name, error.message);
		return new NextResponse(JSON.stringify({ error: error.message }), {
			status: 500,
		}); 
	}
};
