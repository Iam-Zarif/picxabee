import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
	try {
		const { id } = params;

		// console.log(id);
		await connect();
		const posts = await Post.findOne({ _id: id });

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};


// // Update Post
// export const PUT = async (request, { params })=> {
// 	try {
// 		const { id } = params;
// 		console.log(id)
// 		const  { newContent: content } = await request.json();
// 		console.log(content);
// 		await connect();
// 		await Post.findByIdAndUpdate(id, { content });
// 		return NextResponse.json({ message: 'Post updated' }, { status: 200 });
// 	} catch (error) {
// 		console.log(error.name, error.message);
// 		return NextResponse.json({ error: error.message });
// 	}
// }
