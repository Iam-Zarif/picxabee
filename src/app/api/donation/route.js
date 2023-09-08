import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

// Get donation data

export const GET = async () => {
	try {
		await connect();
		const posts = await Post.find({ privacy: 'donation' });

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};



// const fetcher = (...args) => fetch(...args).then((res) => res.json());
	// const {
	// 	data: posts,
	// 	error,
	// 	isLoading,
	// } = useSWR('/api/donation', fetcher, {
	// 	refreshInterval: 1000,
	// });